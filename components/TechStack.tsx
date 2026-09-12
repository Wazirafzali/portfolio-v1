import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiAndroid,
  SiKotlin,
  SiSwift,
  SiFirebase,
} from "react-icons/si";

import { Film } from "lucide-react";

const webTechnologies = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
];

const mobileTechnologies = [
  { name: "Android", icon: SiAndroid },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Swift", icon: SiSwift },
  { name: "Firebase", icon: SiFirebase },
];

const editingTechnologies = [
  { name: "Video Editing", icon: Film },
];

type Technology = {
  name: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
};

function TechnologyGrid({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {technologies.map((technology) => {
        const Icon = technology.icon;

        return (
          <div
            key={technology.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
          >
            <Icon className="h-8 w-8 text-zinc-400 transition group-hover:text-cyan-400" />

            <p className="mt-4 font-semibold text-zinc-200">
              {technology.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Our Tools
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies used
            <span className="block text-zinc-500">
              across our team.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Each specialist works with the tools and technologies required
            for their own area of expertise.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold">
            Web Development
          </h3>

          <TechnologyGrid
            technologies={webTechnologies}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold">
            Mobile Development
          </h3>

          <TechnologyGrid
            technologies={mobileTechnologies}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold">
            Video Editing
          </h3>

          <TechnologyGrid
            technologies={editingTechnologies}
          />
        </div>
      </div>
    </section>
  );
}