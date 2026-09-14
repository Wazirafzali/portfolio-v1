import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
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

    openGraph: {
      title: `${project.title} | AppFolor`,
      description: project.shortDescription,
      type: "article",

      images: project.coverImage
        ? [
            {
              url: project.coverImage,
              alt: project.title,
            },
          ]
        : undefined,
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

  const isLiveProject =
    project.type === "LIVE PROJECT" ||
    project.type === "REAL PROJECT";

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Top Navigation */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition hover:text-cyan-400"
          >
            App
             <span className="text-cyan-400">
            Folor
          </span>
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-medium text-zinc-400 transition hover:text-cyan-400"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                {project.category}
              </span>

              <span
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  isLiveProject
                    ? "border-green-400/20 bg-green-400/10 text-green-400"
                    : "border-white/10 bg-white/5 text-zinc-400"
                }`}
              >
                {project.type}
              </span>

              <span className="text-sm text-zinc-600">
                Project {project.number}
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
              {project.description}
            </p>

            {/* Project Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-bold text-zinc-950 transition hover:bg-cyan-300"
                >
                  View Live Project ↗
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View GitHub ↗
                </a>
              )}

              <Link
                href="/#contact"
                className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Start a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {project.coverImage && (
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <Image
                src={project.coverImage}
                alt={`${project.title} project preview`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="border-t border-white/10 bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 font-medium text-cyan-400">
                Project Overview
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About this project
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-400">
                {project.shortDescription}
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
                  <p className="text-sm text-zinc-500">
                    Category
                  </p>

                  <p className="mt-2 font-semibold">
                    {project.category}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
                  <p className="text-sm text-zinc-500">
                    Project Type
                  </p>

                  <p className="mt-2 font-semibold">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Challenge */}
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-400/10 text-sm font-bold text-red-400">
                01
              </div>

              <p className="mt-7 text-sm font-medium text-red-400">
                Challenge
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                The problem
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.challenge}
              </p>
            </article>

            {/* Solution */}
            <article className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-400">
                02
              </div>

              <p className="mt-7 text-sm font-medium text-cyan-400">
                Solution
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                What we built
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.solution}
              </p>
            </article>

            {/* Result */}
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-sm font-bold text-green-400">
                03
              </div>

              <p className="mt-7 text-sm font-medium text-green-400">
                Result
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                The outcome
              </h2>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.result}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-white/10 bg-zinc-900/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-4 font-medium text-cyan-400">
                Technology
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tools used for
                <span className="block text-zinc-500">
                  this project.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-zinc-900 to-blue-500/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="font-medium text-cyan-400">
                Have a similar idea?
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s turn your project
                <span className="block text-zinc-400">
                  into something real.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Tell us what you want to build. We&apos;ll review
                your requirements, identify the right specialist,
                and discuss the next steps with you.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-bold text-zinc-950 transition hover:bg-cyan-300"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/#projects"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} AppFolor
          </p>

          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}