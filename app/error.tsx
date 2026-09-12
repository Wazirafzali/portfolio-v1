"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">

        <h1 className="text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-zinc-400">
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950"
        >
          Try Again
        </button>

      </div>
    </main>
  );
}