import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "#666",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {siteConfig.location}
          </p>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#f5f5f5",
              letterSpacing: "0.04em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            {siteConfig.displayName}
          </h1>
          <p
            style={{
              fontSize: 24,
              color: "#999",
              maxWidth: 600,
              textAlign: "center",
              margin: 0,
            }}
          >
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
