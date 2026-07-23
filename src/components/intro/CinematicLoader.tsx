"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "./CinematicLoader.module.css";

const SESSION_KEY = "hiswayIntroPlayed";

/**
 * Absolute fallback that unmounts the overlay no matter what happens to the
 * CSS animation (backgrounded tab, animationend not firing, etc.). The
 * natural path is the "overlayOut" animationend listener below; this is the
 * guarantee that the intro can never trap a visitor on screen.
 */
const HARD_SAFETY_MS = 5000;

type IntroMode = "full" | "reduced" | "none";

function readMode(): IntroMode {
  if (typeof document === "undefined") return "none";
  const value = document.documentElement.dataset.hwIntro;
  return value === "full" || value === "reduced" ? value : "none";
}

function prefersReducedMotion(): boolean {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * Cinematic loading intro, played once per browser-tab session ahead of the
 * real homepage hero. Visual/motion reference: Claude Design project
 * "HisWay Premium Loading Screen".
 *
 * Visibility is gated by the `data-hw-intro` attribute on <html>, set
 * synchronously before paint by the beforeInteractive script in
 * `src/app/layout.tsx` (see `hwIntroInitScript`). Both overlay variants
 * default to `display:none` in CSS, so if that script never runs the intro
 * simply never appears -- it can't half-render or get stuck open.
 */
export function CinematicLoader() {
  const [hidden, setHidden] = useState(false);
  const [instance, setInstance] = useState(0);
  const fullRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mode = readMode();
    if (mode === "none") {
      // Both overlay variants are already `display:none` by CSS default
      // (no data-hw-intro match) -- nothing rendered, nothing to clean up.
      return;
    }

    const node = mode === "full" ? fullRef.current : reducedRef.current;

    function onAnimationEnd(event: AnimationEvent) {
      if (event.target === node && event.animationName === "overlayOut") {
        setHidden(true);
      }
    }

    node?.addEventListener("animationend", onAnimationEnd);
    const hardTimeout = window.setTimeout(() => setHidden(true), HARD_SAFETY_MS);

    return () => {
      node?.removeEventListener("animationend", onAnimationEnd);
      window.clearTimeout(hardTimeout);
    };
  }, [instance]);

  function replay() {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage unavailable (private mode, etc.) -- replay still works for this load.
    }
    document.documentElement.dataset.hwIntro = prefersReducedMotion() ? "reduced" : "full";
    setHidden(false);
    setInstance((n) => n + 1);
  }

  return (
    <>
      {!hidden && (
        <div key={instance} aria-hidden="true">
          <div ref={fullRef} className={styles.overlayFull}>
            <div className={styles.vignette} />
            <div className={styles.dust}>
              <span className={cn(styles.dustSpeck, styles.dust1)} />
              <span className={cn(styles.dustSpeck, styles.dust2)} />
              <span className={cn(styles.dustSpeck, styles.dust3)} />
              <span className={cn(styles.dustSpeck, styles.dust4)} />
              <span className={cn(styles.dustSpeck, styles.dust5)} />
              <span className={cn(styles.dustSpeck, styles.dust6)} />
            </div>

            <div className={styles.logoWrap}>
              <div className={cn(styles.mask, styles.ghost)} />
              <div className={cn(styles.mask, styles.trace)} />
              <div className={cn(styles.mask, styles.glow)} />
              <div className={cn(styles.mask, styles.core)} />
              <div className={styles.scan}>
                <div style={{ position: "absolute", left: "26%", top: "60%" }}>
                  <span className={cn(styles.spark, styles.d1)} />
                  <span className={cn(styles.particle, styles.p1)} />
                  <span className={cn(styles.particle, styles.p2)} />
                </div>
                <div style={{ position: "absolute", left: "52%", top: "46%" }}>
                  <span className={cn(styles.spark, styles.d2)} />
                  <span className={cn(styles.particle, styles.p3)} />
                  <span className={cn(styles.particle, styles.p4)} />
                </div>
                <div style={{ position: "absolute", left: "78%", top: "64%" }}>
                  <span className={cn(styles.spark, styles.d3)} />
                  <span className={cn(styles.particle, styles.p5)} />
                  <span className={cn(styles.particle, styles.p6)} />
                </div>
              </div>
            </div>
            <p className={cn(styles.caption, styles.captionAnimated)}>Designed. Built. Installed.</p>
          </div>

          <div ref={reducedRef} className={styles.overlayReduced}>
            <div className={styles.vignette} />
            <div className={styles.logoWrap}>
              <div className={cn(styles.mask, styles.glowStatic)} />
              <div className={cn(styles.mask, styles.coreStatic)} />
            </div>
            <p className={styles.caption}>Designed. Built. Installed.</p>
          </div>
        </div>
      )}

      {process.env.NODE_ENV !== "production" && (
        <button type="button" onClick={replay} className={styles.replayButton}>
          ↻ Replay intro
        </button>
      )}
    </>
  );
}
