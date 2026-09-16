import type { Metadata } from "next";

import CaseStudy from "@/components/CaseStudy";


import { notFound } from "next/navigation";

import {
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },

    openGraph: {
      title: `${project.title} | AppFolor`,
      description: project.shortDescription,
      type: "article",
      url: `/projects/${project.slug}`,

      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              alt: project.title,
            },
          ]
        : [{ url: "/opengraph-image", alt: "AppFolor Digital Development Studio" }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
