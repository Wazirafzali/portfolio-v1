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
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-transparent p-6 sm:p-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-5 h-7 flex-1 rounded-lg bg-white/5" />
              </div>

              <div className="grid min-h-[400px] grid-cols-4 gap-5 p-6">
                <div className="rounded-xl bg-white/5" />

                <div className="col-span-3 space-y-5">
                  <div className="h-10 w-1/2 rounded-lg bg-white/10" />

                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-xl bg-white/5" />
                    <div className="h-24 rounded-xl bg-white/5" />
                    <div className="h-24 rounded-xl bg-white/5" />
                  </div>

                  <div className="h-52 rounded-xl bg-white/5" />
                </div>
              </div>
            </div>
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