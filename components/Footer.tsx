import Link from "next/link";

import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              App
              <span className="text-cyan-400">
                Folor
              </span>
            </Link>

            <p className="mt-2 text-sm font-medium text-zinc-400">
              Digital Development Team
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">
              Web development, Android development,
              iOS development, combined mobile projects,
              and professional video editing for businesses,
              startups, and online clients.
            </p>

            <p className="mt-4 text-sm text-zinc-600">
              Led by Wazir Afzali
            </p>

            <a
              href="/#contact"
              className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Start a Project
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Services
            </p>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p>Web Development</p>
              <p>Android Development</p>
              <p>iOS Development</p>
              <p>Android & iOS</p>
              <p>Video Editing</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Links
            </p>

            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <Link
                href="/privacy"
                className="text-zinc-500 transition hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-zinc-500 transition hover:text-cyan-400"
              >
                Terms of Service
              </Link>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition hover:text-cyan-400"
              >
                GitHub ↗
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>
              )}

              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-500 transition hover:text-cyan-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} AppFolor. All rights reserved.
          </p>

          <Link
            href="/"
            className="transition hover:text-cyan-400"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}