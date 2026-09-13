import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://portfolio-v1-five-kappa.vercel.app"
  ),
  
  manifest: "/manifest.webmanifest",

  title: {
    default:
      "Wazir Afzali & Team | Web, Android, iOS & Video Editing",
    template: "%s | Wazir Afzali & Team",
  },

  description:
    "Wazir Afzali & Team provides professional web development, Android development, iOS development, and video editing services for businesses, startups, and online clients.",

  keywords: [
    "Wazir Afzali",
    "Web Development",
    "Android Development",
    "iOS Development",
    "Video Editing",
    "Next.js Developer",
    "Mobile App Development",
    "Freelance Development Team",
    "Remote Development Team",
  ],

  authors: [
    {
      name: "Wazir Afzali & Team",
    },
  ],

  creator: "Wazir Afzali",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title:
      "Wazir Afzali & Team | Digital Development Team",
    description:
      "A specialized team for web development, Android, iOS, and professional video editing.",
    siteName: "Wazir Afzali & Team",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wazir Afzali & Team",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Wazir Afzali & Team | Digital Development Team",
    description:
      "Web development, Android, iOS, and professional video editing services.",
    images: ["/opengraph-image"],
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