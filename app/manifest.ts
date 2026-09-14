import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AppFolor",

    short_name: "AppFolor",

    description:
      "Web development, Android development, iOS development, and professional video editing services.",

    start_url: "/",

    display: "standalone",

    background_color: "#09090b",

    theme_color: "#22d3ee",

    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}