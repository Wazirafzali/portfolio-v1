import { profile } from "@/data/profile";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

           {profile.availability}
          </div>

          <p className="mb-4 font-medium text-cyan-400">
           {profile.role}
          </p>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            I turn ideas into
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              modern web products.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            I build responsive, fast, and user-friendly websites and web
            applications using Next.js, React, TypeScript, Tailwind CSS, and
            modern AI tools.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

          {profile.resumeUrl && (
  <a
    href={profile.resumeUrl}
    download
    className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
  >
    Download CV ↓
  </a>
)}

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-zinc-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">
                3
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Featured Projects
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                8+
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Technologies
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                24/7
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Learning
              </p>
            </div>
          </div>
        </div>

        {/* Right developer card */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/70 p-8 shadow-2xl backdrop-blur-xl">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-zinc-600">
                  developer.tsx
                </span>
              </div>

              {/* Avatar */}
              <div className="mt-10 flex justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-6xl font-black text-cyan-400">
                {profile.initials}
                </div>
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold">
                  Web Developer
                </h2>

                <p className="mt-2 text-zinc-500">
                  Next.js • React • TypeScript • AI
                </p>
              </div>

              {/* Code */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-zinc-500">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </p>

                <p className="pl-5 text-zinc-400">
                  skills:{" "}
                  <span className="text-green-300">
                    &quot;modern web&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5 text-zinc-400">
                  passion:{" "}
                  <span className="text-green-300">
                    &quot;building&quot;
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