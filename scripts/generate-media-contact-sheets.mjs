import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, mkdirSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { tmpdir } from "node:os";

const projectRoot = process.cwd();
const sourceDir = resolve(projectRoot, "Branding/images/intake/originals");
const outputDir = resolve(projectRoot, "docs/media-contact-sheets");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff"]);

const imagesPerSheet = 12;
const columns = 3;
const thumbWidth = 320;
const thumbHeight = 240;
const labelHeight = 92;
const sheetPrefix = "media-contact-sheet";
const fontCandidates = [
  "/System/Library/Fonts/Supplemental/Arial.ttf",
  "/System/Library/Fonts/SFNS.ttf",
  "/Library/Fonts/Arial.ttf",
];

function run(command, args) {
  execFileSync(command, args, { stdio: "pipe" });
}

function ensureMagick() {
  try {
    run("magick", ["-version"]);
  } catch {
    throw new Error("ImageMagick `magick` is required to generate contact sheets.");
  }
}

function pickFont() {
  return fontCandidates.find((candidate) => existsSync(candidate));
}

function getSourceFiles() {
  return readdirSync(sourceDir)
    .filter((name) => supportedExtensions.has(name.slice(name.lastIndexOf(".")).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => resolve(sourceDir, name));
}

function wrapFilenameLabel(filename, preferredLineLength = 22, maxLines = 3) {
  const tokens =
    filename.match(/[^_\-\s]+(?:[_\-\s]+)?/g) ?? [filename];
  const lines = [];
  let currentLine = "";

  for (const token of tokens) {
    const nextLine = `${currentLine}${token}`;
    if (
      currentLine &&
      nextLine.trimEnd().length > preferredLineLength &&
      lines.length < maxLines - 1
    ) {
      lines.push(currentLine.trimEnd());
      currentLine = token;
      continue;
    }
    currentLine = nextLine;
  }

  if (currentLine) {
    lines.push(currentLine.trimEnd());
  }

  if (lines.length <= maxLines) {
    return lines.join("\n");
  }

  const visibleLines = lines.slice(0, maxLines - 1);
  visibleLines.push(lines.slice(maxLines - 1).join(""));
  return visibleLines.join("\n");
}

function createTile({ sourcePath, tilePath, fontPath }) {
  const filenameLabel = wrapFilenameLabel(basename(sourcePath));
  const args = [
    sourcePath,
    "-auto-orient",
    "-thumbnail",
    `${thumbWidth}x${thumbHeight}>`,
    "-gravity",
    "center",
    "-background",
    "#111111",
    "-extent",
    `${thumbWidth}x${thumbHeight}`,
    "(",
    "-size",
    `${thumbWidth}x${labelHeight}`,
    "xc:#111111",
    "-fill",
    "#ffffff",
  ];

  if (fontPath) {
    args.push("-font", fontPath);
  }

  args.push(
    "-pointsize",
    "14",
    "-gravity",
    "center",
    `caption:${filenameLabel}`,
    ")",
    "-append",
    tilePath,
  );

  run("magick", args);
}

function createSheet({ tilePaths, sheetPath, fontPath, title }) {
  const rows = Math.ceil(tilePaths.length / columns);
  const args = ["montage", ...tilePaths, "-background", "#0b0b0b", "-geometry", "+18+18"];

  if (fontPath) {
    args.push("-font", fontPath);
  }

  args.push("-fill", "#ffffff", "-pointsize", "24", "-title", title, "-tile", `${columns}x${rows}`, sheetPath);
  run("magick", args);
}

function generateSheets() {
  ensureMagick();
  mkdirSync(outputDir, { recursive: true });

  const fontPath = pickFont();
  const files = getSourceFiles();

  if (files.length === 0) {
    throw new Error(`No supported images found in ${sourceDir}`);
  }

  const tempDir = mkdtempSync(join(tmpdir(), "hisway-media-sheets-"));
  const generatedSheets = [];

  try {
    for (let start = 0; start < files.length; start += imagesPerSheet) {
      const batch = files.slice(start, start + imagesPerSheet);
      const tilePaths = batch.map((sourcePath, index) => {
        const tilePath = join(tempDir, `tile-${start + index + 1}.png`);
        createTile({ sourcePath, tilePath, fontPath });
        return tilePath;
      });

      const sheetIndex = String(Math.floor(start / imagesPerSheet) + 1).padStart(2, "0");
      const rangeStart = start + 1;
      const rangeEnd = start + batch.length;
      const sheetPath = join(outputDir, `${sheetPrefix}-${sheetIndex}.jpg`);
      const title = `HisWay media intake contact sheet ${sheetIndex} (${rangeStart}-${rangeEnd})`;

      createSheet({ tilePaths, sheetPath, fontPath, title });
      generatedSheets.push(sheetPath);
    }
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }

  return generatedSheets;
}

const generatedSheets = generateSheets();

for (const sheet of generatedSheets) {
  console.log(sheet);
}
