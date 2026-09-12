import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              {profile.name}
              <span className="text-cyan-400"> & Team</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
              A specialized digital team providing web development,
              Android development, iOS development, and professional
              video editing services.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Services
            </p>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>Web Development</p>
              <p>Android Development</p>
              <p>iOS Development</p>
              <p>Video Editing</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
             Discuss Your Project
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>
              )}

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {profile.name} & Team. All rights reserved.
          </p>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}