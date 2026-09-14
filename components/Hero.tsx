import Image from "next/image";

import { profile } from "@/data/profile";
import { teamInfo } from "@/data/team";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            {teamInfo.availability}
          </div>

          <p className="mb-4 font-medium text-cyan-400">
            AppFolor — Digital Development Team
          </p>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Web, mobile & video solutions

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              built to help your business grow.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Work with one coordinated team for web development,
            Android apps, iOS apps, cross-platform mobile projects,
            and professional video editing — with clear
            communication and focused delivery.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-8 bg-cyan-400/50" />

            <p className="text-sm text-zinc-500">
              Led by{" "}
              <span className="font-semibold text-zinc-300">
                {profile.name}
              </span>
              , Web Developer & Team Lead
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "Web Development",
              "Android Development",
              "iOS Development",
              "Android & iOS",
              "Video Editing",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              Start Your Project
            </a>

            <a
              href="#projects"
              className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              View Our Work
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-zinc-400 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:mt-14 sm:grid-cols-4 sm:gap-6">
            <div>
              <p className="text-3xl font-bold">
                4
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Specialists
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                5
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Service Options
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">
                1
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Team Lead
              </p>
            </div>

            <div>
              <p className="text-xl font-bold sm:text-2xl">
                Remote
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Collaboration
              </p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-zinc-600">
                  appfolor.tsx
                </span>
              </div>

              <div className="mt-8 text-center">
                <p className="text-3xl font-black tracking-tight">
                  App
                  <span className="text-cyan-400">
                    Folor
                  </span>
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Digital Development Team
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-400/30">
                  <Image
                    src="/profile.jpg"
                    alt={`${profile.name}, AppFolor team lead`}
                    fill
                    priority
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-7 text-center">
                <h2 className="text-xl font-bold">
                  {profile.name}
                </h2>

                <p className="mt-2 text-cyan-400">
                  Web Developer & Team Lead
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Web",
                  "Android",
                  "iOS",
                  "Video",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-blue-300">
                    appFolor
                  </span>{" "}
                  ={" "}
                  <span className="text-yellow-300">
                    {"{"}
                  </span>
                </p>

                <p className="pl-5 text-zinc-400">
                  specialists:{" "}
                  <span className="text-green-300">
                    4
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  services:{" "}
                  <span className="text-green-300">
                    5
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  status:{" "}
                  <span className="text-green-300">
                    &quot;available&quot;
                  </span>
                </p>

                <p className="text-yellow-300">
                  {"}"};
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}