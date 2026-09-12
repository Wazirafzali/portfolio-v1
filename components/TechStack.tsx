import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
} from "react-icons/si";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Git",
    icon: SiGit,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to build
            <span className="block text-zinc-500">
              modern digital products.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A modern stack focused on performance, maintainability,
            responsiveness, and great user experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                key={technology.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <Icon className="text-4xl text-zinc-400 transition duration-300 group-hover:text-cyan-400" />

                <p className="mt-5 font-semibold text-zinc-200">
                  {technology.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}