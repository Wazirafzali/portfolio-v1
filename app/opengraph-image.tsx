import { ImageResponse } from "next/og";



export const alt =
  "Wazir Afzali & Team - Web, Android, iOS and Video Editing";

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
          padding: "80px",
          background:
            "linear-gradient(135deg, #09090b 0%, #111827 60%, #083344 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 30,
          }}
        >
          DIGITAL DEVELOPMENT TEAM
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Wazir Afzali
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#22d3ee",
          }}
        >
          & Team
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 35,
            color: "#a1a1aa",
          }}
        >
          Web Development · Android · iOS · Video Editing
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}