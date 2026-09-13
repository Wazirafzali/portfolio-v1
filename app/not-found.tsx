import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          404 Error
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          The page you&apos;re looking for may have been moved,
          removed, or the address may be incorrect.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-zinc-950 transition hover:bg-cyan-300"
          >
            Back to Home
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}