import { ImageResponse } from "next/og";

export const alt =
  "Wazir Afzali - Full-Stack Web Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#09090b",
          color: "white",
          padding: "80px",
        }}
      >
        {/* Small title */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#22d3ee",
            marginBottom: 30,
          }}
        >
          FULL-STACK WEB DEVELOPER
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          Wazir Afzali
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            marginTop: 35,
            maxWidth: 900,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#a1a1aa",
          }}
        >
          Building modern web products with Next.js,
          React, TypeScript and AI.
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 65,
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#22d3ee",
            }}
          />

          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#d4d4d8",
            }}
          >
            Developer Portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}