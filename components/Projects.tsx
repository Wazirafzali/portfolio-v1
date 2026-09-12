import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Selected Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I&apos;ve
            <span className="block text-zinc-500">
              designed and built.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Real projects and selected concepts showing my development
            process, technologies, and approach to solving problems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="w-4/5 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl">
                      <div className="flex gap-2 border-b border-white/10 p-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>

                      <div className="space-y-3 p-4">
                        <div className="h-5 w-1/2 rounded bg-white/10" />

                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 rounded bg-white/5" />
                          <div className="h-12 rounded bg-white/5" />
                          <div className="h-12 rounded bg-white/5" />
                        </div>

                        <div className="h-20 rounded bg-white/5" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-400">
                    {project.number}
                  </span>

                 <span
  className={`rounded-full border px-3 py-1 text-xs ${
    project.type === "REAL PROJECT"
      ? "border-green-400/20 bg-green-400/10 text-green-400"
      : "border-white/10 bg-white/5 text-zinc-400"
  }`}
>
  {project.type}
</span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-zinc-400">
                  {project.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies
                    .slice(0, 4)
                    .map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 flex items-center justify-between rounded-xl border border-white/10 px-5 py-3.5 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View Case Study

                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}