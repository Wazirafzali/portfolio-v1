import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  metadataBase: new URL(
  "https://portfolio-v1-five-kappa.vercel.app"
),

  title: {
   default: "Wazir Afzali | Full-Stack Developer",
    template: "%s | Wazir Afzali",
  },

  description:
    "Full-Stack Developer building modern, fast, responsive web applications with Next.js, React, TypeScript and AI.",

  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer",
    "AI Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Wazir Afzali",
    },
  ],

  creator: "Wazir Afzali",

  openGraph: {
    title: "Developer Portfolio",
    description:
      "Modern web applications built with Next.js, React, TypeScript and AI.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio",
    description:
      "Modern web applications built with Next.js, React, TypeScript and AI.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}