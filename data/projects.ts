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
    title: "Medlearna",
    category: "Android & iOS",
    shortDescription: "Medical learning for Android and iOS, bringing courses, revision and study tools into one mobile experience.",
    description: "Medlearna is an AppFolor medical education application for Android and iOS. Its interface brings video courses, flashcards, multiple-choice exams and medical study resources together in a focused learning experience.",
    type: "REAL PROJECT",
    technologies: ["Android", "iOS"],
    challenge: "Bring a broad medical learning brief into a clear mobile experience: course discovery, revision, exam practice and individual course access. The brief also calls for Dari, Pashto and English support.",
    solution: "The interface separates learning sections from account and access controls. The home screen provides entry points for saved lessons, continuing study, subscriptions, course purchases and offline videos. Learning sections group courses, flashcards, exams, guidelines and calculators.",
    result: "The supplied app screens show the home dashboard and learning sections in a consistent dark interface. These screenshots document the interface; store availability, payment processing, offline protection and clinical content validation are not demonstrated by this case study.",
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
