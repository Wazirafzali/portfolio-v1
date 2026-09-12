import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-v1-five-kappa.vercel.app"
  ),

  title: {
    default: "Wazir Afzali | Full-Stack Web Developer",
    template: "%s | Wazir Afzali",
  },

  description:
    "Full-Stack Web Developer building modern, responsive and high-performance web applications with Next.js, React, TypeScript and AI.",

  keywords: [
    "Wazir Afzali",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Wazir Afzali",
    },
  ],

  creator: "Wazir Afzali",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",

    title: "Wazir Afzali | Full-Stack Web Developer",

    description:
      "Modern web applications built with Next.js, React, TypeScript and AI.",

    siteName: "Wazir Afzali Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Wazir Afzali | Full-Stack Web Developer",

    description:
      "Modern web applications built with Next.js, React, TypeScript and AI.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
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