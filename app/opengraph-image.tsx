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
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 30,
          }}
        >
          FULL-STACK WEB DEVELOPER
        </div>

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Wazir Afzali
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 34,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          Building modern web products with Next.js,
          React, TypeScript and AI.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontSize: 24,
            color: "#22d3ee",
          }}
        >
          wazirafzali • developer portfolio
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}