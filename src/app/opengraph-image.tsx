import { ImageResponse } from "next/og";
import { siteConfig, profile } from "@/data/site";

export const alt = siteConfig.title;
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
          background: "#0a0d13",
          color: "#e8ecf2",
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf", letterSpacing: 4 }}>PORTFOLIO</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 38, marginTop: 28, color: "#98a2b3" }}>{profile.headline}</div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#98a2b3" }}>{profile.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
