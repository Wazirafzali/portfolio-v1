export type Project = {
  slug: string;
  number: string;
  title: string;
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

    shortDescription:
      "A modern full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, dynamic case studies, and a real contact API.",

    description:
      "A production-ready developer portfolio designed and developed from scratch using Next.js, TypeScript, Tailwind CSS, reusable React components, dynamic routes, SEO metadata, GitHub, Vercel, and a server-side contact form.",

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
      "The goal was to build a professional portfolio from scratch while keeping the architecture clean, responsive, maintainable, and ready for future projects.",

    solution:
      "I built the website with reusable React components, responsive Tailwind layouts, dynamic project routes, server-side email handling, Git version control, GitHub integration, and production deployment on Vercel.",

    result:
      "The result is a responsive live portfolio with real production deployment, GitHub source control, reusable project case studies, SEO foundations, and a working contact system.",

    coverImage: "/projects/portfolio-cover.png",

    githubUrl:
      "https://github.com/Wazirafzali/portfolio-v1",

    liveUrl:
      "https://portfolio-v1-five-kappa.vercel.app",
  },

  {
    slug: "modern-business-website",
    number: "02",

    title: "Modern Business Website",

    shortDescription:
      "A responsive business website concept focused on performance, usability, and customer conversion.",

    description:
      "A modern website concept designed for businesses that need a professional online presence and clear calls to action.",

    type: "CONCEPT",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
    ],

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

    shortDescription:
      "A financial dashboard concept for visualizing trading performance, portfolio statistics, and market data.",

    description:
      "A dashboard concept designed to organize financial and trading information into an understandable interface.",

    type: "CONCEPT",

    technologies: [
      "Next.js",
      "TypeScript",
      "Charts",
      "API",
    ],

    challenge:
      "Financial applications often contain large quantities of complex information.",

    solution:
      "The interface organizes information into statistics, portfolio sections, performance areas, and visual components.",

    result:
      "The design provides a foundation for a future full trading analytics application.",

    coverImage: "",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}