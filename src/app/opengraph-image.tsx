import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const alt = `${company.name}: custom signs, apparel, and promotional products`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#161512",
          color: "#faf8f3",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: "-2px",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          HisWay
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            letterSpacing: "14px",
            textTransform: "uppercase",
            color: "#e05910",
          }}
        >
          Press or Print
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 30,
            color: "#aaa59a",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Custom signs, apparel, and promotional products that get your business seen.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1200,
            height: 16,
            backgroundColor: "#e05910",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
