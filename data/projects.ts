export type Project = {
  slug: string;
  number: string;
  title: string;
  category: "Web" | "Android" | "iOS" | "Android & iOS" | "Video";
  shortDescription: string;
  description: string;
  type: "REAL PROJECT" | "CONCEPT PROJECT";
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
    slug: "meadlearna",
    number: "07",
    title: "Meadlearna",
    category: "Android & iOS",
    shortDescription: "Meadlearna — an application built for both Android and iOS.",
    description: "Meadlearna is a real AppFolor mobile application project built for Android and iOS. One product, with versions for both platforms.",
    type: "REAL PROJECT",
    technologies: ["Android", "iOS"],
    challenge: "The project called for an application for both Android and iOS.",
    solution: "Meadlearna was developed for both mobile platforms as one project.",
    result: "An application built for Android and iOS. Store links and product screenshots are not included in this portfolio entry yet.",
  },
  {
    slug: "developer-portfolio",
    number: "01",
    title: "AppFolor Studio Website",
    category: "Web",
    shortDescription:
      "A focused digital home for AppFolor, bringing services, project explorations, and secure inquiries into one experience.",
    description:
      "A studio website that brings AppFolor’s services and project explorations together, with responsive layouts, clear navigation, and a secure path to start a project.",
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
      "The goal was to build a professional studio website while keeping the architecture clean, responsive, maintainable, and ready for future expansion.",
    solution:
      "The website was built with reusable React components, responsive layouts, dynamic project routes, server-side email handling, Git version control, and Vercel deployment.",
    result:
      "The result is a live production studio website with reusable case studies, SEO foundations, GitHub integration, and a working contact system.",
    coverImage: "",
    githubUrl: "",
      liveUrl: "https://appfolor.vercel.app",
  },

  {
    slug: "modern-business-website",
    number: "02",
    title: "Modern Business Website",
    category: "Web",
    shortDescription:
      "A business website concept exploring service presentation, clear navigation, and inquiry flows.",
    description:
      "A modern business website concept designed for companies that need a professional online presence and clear calls to action.",
    type: "CONCEPT PROJECT",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    challenge:
      "This exploration considers how a business could explain its services and guide visitors toward an inquiry.",
    solution:
      "The proposed approach groups services into clear sections and gives visitors a direct path to make an inquiry.",
    result:
      "A visual direction for discussion. Implementation, usability testing, and performance measurement would be separate project steps.",
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
      "The proposed interface groups summary figures, portfolio information, and charts. The illustration uses sample data.",
    result:
      "A dashboard layout exploration. Live data integrations and trading functionality are not part of this concept.",
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
      "An Android interface concept exploring navigation, service discovery, and everyday business tasks.",
    type: "CONCEPT PROJECT",
    technologies: ["Android", "Kotlin", "API", "Firebase"],
    challenge:
      "The challenge was to organize business features into a simple mobile experience.",
    solution:
      "The proposed approach separates service discovery and customer actions into focused screens. Backend connections would be defined during development.",
    result:
      "An illustrative mobile direction for further design and validation. No released Android application is presented here.",
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
      "The proposed flow separates service selection, booking, and account tasks to explore a simpler customer journey.",
    result:
      "An iOS experience concept for discussion. Development, device testing, and App Store release would be separate stages.",
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
      "A visual direction for short-form video, exploring pacing, captions, and a consistent campaign style.",
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
      "The proposed editing approach combines an opening hook, concise cuts, captions, and sound design tailored to the intended platform.",
    result:
      "A storyboard-style visual and proposed editing approach. The illustration is not a playable video or a completed client campaign.",
    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}