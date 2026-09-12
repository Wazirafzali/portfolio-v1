import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-xl text-center">

        <p className="text-8xl font-black text-cyan-400">
          404
        </p>

        <h1 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-5 text-lg text-zinc-400">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
        >
          Back Home
        </Link>

      </div>
    </main>
  );
}