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
    "A modern business website concept designed for companies that need a clean online presence, clear service presentation, and strong calls to action.",

  type: "CONCEPT PROJECT",

  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "SEO",
  ],

  challenge:
    "The challenge was to create a business website that communicates services quickly without overwhelming the visitor.",

  solution:
    "I used a clear page structure, responsive layouts, reusable components, service sections, testimonials, and strong calls to action.",

  result:
    "The result is a flexible business website concept that can be adapted for agencies, consultants, local businesses, or service companies.",

  coverImage: "/projects/business-cover.png",

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
    "A dashboard concept designed to present trading and portfolio information in a clear and structured interface.",

  type: "CONCEPT PROJECT",

  technologies: [
    "Next.js",
    "TypeScript",
    "Charts",
    "API",
  ],

  challenge:
    "Trading applications often contain too much information, making them difficult to understand quickly.",

  solution:
    "I organized the dashboard into performance cards, account statistics, chart areas, recent activity, and market overview sections.",

  result:
    "The result is a scalable interface concept that can later connect to live trading APIs and real financial data.",

  coverImage: "/projects/trading-cover.png",

  githubUrl: "",
  liveUrl: "",
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}