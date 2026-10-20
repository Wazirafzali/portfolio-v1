import localFont from "next/font/local";
import type {
  Metadata,
  Viewport,
} from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import "./studio.css";
import "./studio-refinement.css";
import "./theme.css";
import "./sculpted.css";
import "./editorial.css";
import ThemeToggle from "@/components/ThemeToggle";

const displayFont = localFont({ src: "./fonts/manrope.ttf", variable: "--font-display", display: "swap", weight: "200 800" });
const bodyFont = localFont({ src: "./fonts/dm-sans.ttf", variable: "--font-body", display: "swap", weight: "100 1000" });

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
      "AppFolor | Web, Mobile & Desktop",
    template:
      "%s | AppFolor",
  },

  description:
    "AppFolor builds websites, Android and iOS apps, and desktop tools for businesses, teams, and creators. Explore our work and discuss your project.",

  keywords: [
    "AppFolor",
    "Web Development",
    "Android Development",
    "iOS Development",
    "Mobile App Development",
    "Desktop App Development",
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
      "Web development, Android, iOS, and desktop application development.",

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
      "Web development, Android, iOS, and desktop application development.",

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
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
        <ThemeToggle />

        {process.env.APPFOLOR_HOST !== "cloudflare" && <Analytics />}

        {process.env.APPFOLOR_HOST !== "cloudflare" && <SpeedInsights />}
      </body>
    </html>
  );
}
