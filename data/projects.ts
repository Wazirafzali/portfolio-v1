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
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-saas-dashboard",
    number: "01",
    title: "AI SaaS Dashboard",
    shortDescription:
      "A modern AI-powered dashboard with analytics, responsive layouts, and a clean SaaS interface.",

    description:
      "A concept SaaS dashboard designed for an AI platform. The interface focuses on usability, analytics, account management, and a modern responsive experience.",

    type: "AI PRODUCT",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],

    challenge:
      "The challenge was to organize a large amount of information without making the interface feel complicated or overwhelming.",

    solution:
      "I designed a modular dashboard structure using reusable React components, responsive grids, clear visual hierarchy, and a consistent design system.",

    result:
      "The result is a clean dashboard concept that works across desktop and mobile layouts and can be extended into a real SaaS application.",

    githubUrl: "",
    liveUrl: "",
  },

  {
    slug: "modern-business-website",
    number: "02",
    title: "Modern Business Website",

    shortDescription:
      "A responsive business website focused on modern design, performance, and customer conversion.",

    description:
      "A modern multi-section website concept created for businesses that need a professional online presence and clear calls to action.",

    type: "BUSINESS",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
    ],

    challenge:
      "The website needed to communicate the company's services quickly while remaining visually professional and easy to navigate.",

    solution:
      "I created a clear content structure, responsive sections, strong calls to action, and reusable components for services and business information.",

    result:
      "The result is a fast and responsive business website structure that can easily be customized for different companies.",

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
      "A dashboard designed to present financial and trading information in a structured and understandable interface.",

    type: "FINTECH",

    technologies: [
      "Next.js",
      "TypeScript",
      "Charts",
      "API",
    ],

    challenge:
      "Financial dashboards often contain large amounts of data, which can quickly become difficult to understand.",

    solution:
      "I organized the interface into clear statistics, portfolio sections, performance areas, and visual data components.",

    result:
      "The resulting interface provides a foundation for a full trading analytics application with future API and chart integrations.",

    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}