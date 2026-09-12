import {
  Code2,
  Smartphone,
  Apple,
  Film,
  Crown,
} from "lucide-react";

import { teamMembers } from "@/data/team";

const icons = [
  Code2,
  Smartphone,
  Apple,
  Film,
];

export default function Team() {
  return (
    <section
      id="team"
      className="border-t border-white/10 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Our Team
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Specialized people.
            <span className="block text-zinc-500">
              One coordinated team.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every project is handled by the specialist responsible for that
            field, while communication, planning, and delivery are coordinated
            through the team lead.
          </p>
        </div>

        {/* Team cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => {
            const Icon = icons[index];

            const isTeamLead = index === 0;

            return (
              <article
                key={member.role}
                className={`relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  isTeamLead
                    ? "border-cyan-400/30 bg-cyan-400/[0.05]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* Team lead badge */}
                {isTeamLead && (
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    <Crown className="h-3.5 w-3.5" />
                    Team Lead
                  </div>
                )}

                {/* Avatar */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                    isTeamLead
                      ? "border-cyan-400/30 bg-cyan-400/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      isTeamLead
                        ? "text-cyan-400"
                        : "text-zinc-300"
                    }`}
                  >
                    {member.initials}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-7 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-400" />

                  <p className="text-sm font-medium text-cyan-400">
                    {member.specialty}
                  </p>
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-500">
                  {member.role}
                </p>

                <p className="mt-5 leading-7 text-zinc-400">
                  {member.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Team process */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-900/40 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-medium text-cyan-400">
                One point of contact
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                You communicate with one team lead.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                I handle client communication, project planning, coordination,
                and delivery. The specialist responsible for each service
                focuses on the technical work in their own field.
              </p>
            </div>

            <a
              href="#contact"
              className="w-fit rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}