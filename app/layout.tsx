import type {
  Metadata,
  Viewport,
} from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-v1-five-kappa.vercel.app"
  ),

  manifest: "/manifest.webmanifest",

  title: {
    default:
      "AppFolor | Web, Android, iOS & Video Editing",
    template:
      "%s | AppFolor",
  },

  description:
    "AppFolor is a specialized digital team providing web development, Android development, iOS development, cross-platform mobile project coordination, and professional video editing services.",

  keywords: [
    "AppFolor",
    "Web Development",
    "Android Development",
    "iOS Development",
    "Mobile App Development",
    "Video Editing",
    "Next.js Developer",
    "Development Team",
    "Freelance Development Team",
    "Remote Development Team",
  ],

  authors: [
    {
      name: "AppFolor",
    },
    {
      name: "Wazir Afzali",
    },
  ],

  creator: "AppFolor",

  publisher: "AppFolor",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",

    title:
      "AppFolor | Digital Development Team",

    description:
      "Web development, Android, iOS, mobile applications, and professional video editing services.",

    siteName: "AppFolor",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AppFolor Digital Development Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AppFolor | Digital Development Team",

    description:
      "Web development, Android, iOS, mobile application, and professional video editing services.",

    images: [
      "/opengraph-image",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}