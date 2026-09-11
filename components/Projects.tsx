const projects = [
  {
    number: "01",
    title: "AI SaaS Dashboard",
    description:
      "A modern AI-powered dashboard with analytics, user management, responsive layouts, and a clean SaaS interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    type: "AI PRODUCT",
    gradient: "from-cyan-500/30 via-blue-500/20 to-transparent",
  },
  {
    number: "02",
    title: "Modern Business Website",
    description:
      "A fast and responsive business website designed to convert visitors into customers with a modern user experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO"],
    type: "BUSINESS",
    gradient: "from-purple-500/30 via-fuchsia-500/20 to-transparent",
  },
  {
    number: "03",
    title: "Trading Analytics Dashboard",
    description:
      "A professional financial dashboard for visualizing trading performance, portfolio statistics, and market insights.",
    technologies: ["TypeScript", "Next.js", "Charts", "API"],
    type: "FINTECH",
    gradient: "from-emerald-500/30 via-green-500/20 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 font-medium text-cyan-400">
              Selected Projects
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects built to
              <span className="block text-zinc-500">
                solve real problems.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              A selection of web applications and digital products built using
              modern technologies, clean design, and scalable architecture.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Start a project →
          </a>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="grid lg:grid-cols-2">

                {/* Project preview */}
                <div
                  className={`relative min-h-[340px] overflow-hidden bg-gradient-to-br ${project.gradient} p-8 sm:p-12`}
                >
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative flex h-full min-h-[270px] items-center justify-center">

                    {/* Fake browser */}
                    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-[1.03]">

                      {/* Browser top */}
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                        <div className="ml-4 h-6 flex-1 rounded-md bg-white/5" />
                      </div>

                      {/* Dashboard */}
                      <div className="grid grid-cols-4 gap-3 p-5">
                        <div className="col-span-1 min-h-44 rounded-xl bg-white/5" />

                        <div className="col-span-3 space-y-3">
                          <div className="h-8 w-1/2 rounded-lg bg-white/10" />

                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-16 rounded-xl bg-white/5" />
                            <div className="h-16 rounded-xl bg-white/5" />
                            <div className="h-16 rounded-xl bg-white/5" />
                          </div>

                          <div className="flex h-28 items-end gap-2 rounded-xl bg-white/5 p-4">
                            <div className="h-8 w-full rounded-t bg-cyan-400/30" />
                            <div className="h-16 w-full rounded-t bg-cyan-400/50" />
                            <div className="h-12 w-full rounded-t bg-cyan-400/40" />
                            <div className="h-20 w-full rounded-t bg-cyan-400/60" />
                            <div className="h-14 w-full rounded-t bg-cyan-400/40" />
                            <div className="h-24 w-full rounded-t bg-cyan-400/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-widest text-cyan-400">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider text-zinc-400">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      type="button"
                      className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
                    >
                      Live Demo ↗
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                      GitHub ↗
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}