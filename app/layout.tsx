import type {
  Metadata,
  Viewport,
} from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import "./studio.css";

export const metadata: Metadata = {
    metadataBase: new URL(
    "https://appfolor.vercel.app"
   ),  
      verification: {
  google: "04Pp2bfp8V8DHD63yVutWGU3ykkiW_23mhmqQX5zBAQ",
},  
  

  manifest: "/manifest.webmanifest",

  title: {
    default:
      "AppFolor | Web, Android, iOS & Video Editing",
    template:
      "%s | AppFolor",
  },

  description:
    "AppFolor is a specialized digital team providing web development, Android development, iOS development, coordinated Android and iOS development, and professional video editing services.",

  keywords: [
    "AppFolor",
    "Web Development",
    "Android Development",
    "iOS Development",
    "Mobile App Development",
    "Video Editing",
    "Next.js Developer",
    "Development Team",
    "Digital Development Studio",
    "Remote Development Team",
  ],

  authors: [
    {
      name: "AppFolor",
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
      "AppFolor | Digital Development Studio",

    description:
      "Web development, Android, iOS, mobile applications, and professional video editing services.",

    siteName: "AppFolor",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AppFolor Digital Development Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "AppFolor | Digital Development Studio",

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
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
