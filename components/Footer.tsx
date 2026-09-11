export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              Dev<span className="text-cyan-400">Portfolio</span>
            </a>

            <p className="mt-2 text-sm text-zinc-500">
              Building modern web experiences.
            </p>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/YOUR-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:your@email.com"
              className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} DevPortfolio. All rights reserved.
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