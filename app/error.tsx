"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Something went wrong
        </p>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          We couldn&apos;t load this page.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          An unexpected error occurred. You can try loading the page
          again or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-zinc-950 transition hover:bg-cyan-300"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}