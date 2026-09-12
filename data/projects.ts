export type Project = {
  slug: string;
  number: string;
  title: string;
  category: "Web" | "Android" | "iOS" | "Video";
  shortDescription: string;
  description: string;
  type: string;
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  coverImage?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "developer-portfolio",
    number: "01",
    title: "Developer Portfolio",
    category: "Web",
    shortDescription:
      "A modern full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, dynamic case studies, and a real contact API.",
    description:
      "A production-ready developer portfolio designed and developed using Next.js, TypeScript, Tailwind CSS, reusable React components, dynamic routes, SEO metadata, GitHub, Vercel, and a server-side contact form.",
    type: "REAL PROJECT",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Resend",
      "Git",
      "GitHub",
    ],
    challenge:
      "The goal was to build a professional portfolio while keeping the architecture clean, responsive, maintainable, and ready for future expansion.",
    solution:
      "The website was built with reusable React components, responsive layouts, dynamic project routes, server-side email handling, Git version control, and Vercel deployment.",
    result:
      "The result is a live production portfolio with reusable case studies, SEO foundations, GitHub integration, and a working contact system.",
    coverImage: "/projects/portfolio-cover.png",
    githubUrl: "https://github.com/Wazirafzali/portfolio-v1",
    liveUrl: "https://portfolio-v1-five-kappa.vercel.app",
  },

  {
    slug: "modern-business-website",
    number: "02",
    title: "Modern Business Website",
    category: "Web",
    shortDescription:
      "A responsive business website concept focused on performance, usability, and customer conversion.",
    description:
      "A modern business website concept designed for companies that need a professional online presence and clear calls to action.",
    type: "CONCEPT PROJECT",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    challenge:
      "The website needed to communicate services clearly while remaining visually professional and easy to navigate.",
    solution:
      "The interface uses clear sections, responsive layouts, strong calls to action, and reusable components.",
    result:
      "The result provides a strong foundation for a real business website that can later be customized for a client.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },

  {
    slug: "trading-analytics-dashboard",
    number: "03",
    title: "Trading Analytics Dashboard",
    category: "Web",
    shortDescription:
      "A financial dashboard concept for visualizing trading performance, portfolio statistics, and market data.",
    description:
      "A dashboard concept designed to organize financial and trading information into a clear interface.",
    type: "CONCEPT PROJECT",
    technologies: ["Next.js", "TypeScript", "Charts", "API"],
    challenge:
      "Financial applications often contain large amounts of information that can become difficult to understand.",
    solution:
      "The interface organizes information into statistics, portfolio sections, performance areas, and visual components.",
    result:
      "The design provides a foundation for a future trading analytics application.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },

  {
    slug: "android-business-app",
    number: "04",
    title: "Android Business App",
    category: "Android",
    shortDescription:
      "A mobile application concept designed for business operations and customer interaction.",
    description:
      "A concept Android application focused on clean navigation, business workflows, and API-ready architecture.",
    type: "CONCEPT PROJECT",
    technologies: ["Android", "Kotlin", "API", "Firebase"],
    challenge:
      "The challenge was to organize business features into a simple mobile experience.",
    solution:
      "The app concept uses clear navigation, modular screens, reusable components, and API-ready data flows.",
    result:
      "A scalable foundation for a real Android business application.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },

  {
    slug: "ios-service-app",
    number: "05",
    title: "iOS Service App",
    category: "iOS",
    shortDescription:
      "An iOS application concept for service booking, account management, and customer communication.",
    description:
      "A clean iPhone application concept designed around fast service access and a polished user experience.",
    type: "CONCEPT PROJECT",
    technologies: ["iOS", "Swift", "API", "Firebase"],
    challenge:
      "The product needed a simple mobile flow while supporting multiple customer actions.",
    solution:
      "The interface separates booking, profile, notifications, and service management into focused screens.",
    result:
      "A professional iOS app structure ready for full product development.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },

  {
    slug: "social-video-editing",
    number: "06",
    title: "Social Media Video Editing",
    category: "Video",
    shortDescription:
      "A short-form video editing concept for social media campaigns, ads, and creator content.",
    description:
      "A video editing project concept focused on fast pacing, clean cuts, subtitles, transitions, and platform-ready exports.",
    type: "CONCEPT PROJECT",
    technologies: [
      "Premiere Pro",
      "After Effects",
      "CapCut",
      "Motion Graphics",
    ],
    challenge:
      "Short-form content must capture attention quickly while keeping the message clear.",
    solution:
      "The editing workflow combines strong hooks, clean cuts, captions, sound design, and platform-specific formatting.",
    result:
      "A repeatable video production workflow for creators, brands, and advertising campaigns.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}