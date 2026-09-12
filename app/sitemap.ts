import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${profile.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: profile.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...projectPages,
  ];
}