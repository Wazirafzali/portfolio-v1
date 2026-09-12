import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

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

    openGraph: {
      title: `${project.title} | Developer Portfolio`,
      description: project.shortDescription,

      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,

      images: project.coverImage
        ? [project.coverImage]
        : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Top navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="font-bold transition hover:text-cyan-400"
          >
            ← Back Home
          </Link>

          <span className="text-sm text-zinc-500">
            Case Study
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-bold tracking-widest text-cyan-400">
                PROJECT {project.number}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
                {project.type}
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project visual */}
<section className="py-20">
  <div className="mx-auto max-w-6xl px-6">
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-4 sm:p-8">
      {project.coverImage ? (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          <Image
            src={project.coverImage}
            alt={`${project.title} project screenshot`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1152px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center rounded-2xl border border-white/10 bg-zinc-900">
          <p className="text-zinc-500">
            Project preview coming soon
          </p>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Case study */}
      <section className="pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="font-semibold text-cyan-400">
                01 / Challenge
              </p>

              <h2 className="mt-5 text-2xl font-bold">
                The Problem
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="font-semibold text-cyan-400">
                02 / Solution
              </p>

              <h2 className="mt-5 text-2xl font-bold">
                My Approach
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.solution}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <p className="font-semibold text-cyan-400">
                03 / Result
              </p>

              <h2 className="mt-5 text-2xl font-bold">
                The Outcome
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.result}
              </p>
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-12 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-7 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
                >
                  Live Demo ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View GitHub ↗
                </a>
              )}
            </div>
          )}

          <div className="mt-20 border-t border-white/10 pt-10">
            <Link
              href="/#projects"
              className="font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              ← View all projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}