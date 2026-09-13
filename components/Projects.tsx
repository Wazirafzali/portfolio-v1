"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

const categories = [
  "All",
  "Web",
  "Android",
  "iOS",
  "Video",
] as const;

type Category = (typeof categories)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Our Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Projects across
            <span className="block text-zinc-500">
              our core specialties.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore web, Android, iOS, and video
            projects handled by the specialist
            responsible for each field.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-cyan-400 text-zinc-950"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-400/40 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5">
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="w-4/5 overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
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

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-cyan-400">
                    {project.number}
                  </span>

                  <div className="flex gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      {project.category}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs ${
                        project.type === "LIVE PROJECT"
                          ? "border-green-400/20 bg-green-400/10 text-green-400"
                          : "border-white/10 bg-white/5 text-zinc-500"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
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
                  className="mt-8 flex items-center justify-between rounded-xl border border-white/10 px-5 py-3.5 font-semibold transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
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