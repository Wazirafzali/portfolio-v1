import { ImageResponse } from "next/og";

export const alt =
  "AppFolor - Digital Development Team";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType =
  "image/png";

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
          padding: "80px",
          background:
            "linear-gradient(135deg, #09090b 0%, #111827 60%, #083344 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#22d3ee",
            marginBottom: 30,
            letterSpacing: "4px",
          }}
        >
          DIGITAL DEVELOPMENT TEAM
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 90,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          App
          <span
            style={{
              color: "#22d3ee",
            }}
          >
            Folor
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 31,
            marginTop: 40,
            color: "#a1a1aa",
          }}
        >
          Web Development · Android · iOS · Video Editing
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 21,
            marginTop: 35,
            color: "#71717a",
          }}
        >
          Led by Wazir Afzali
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}