export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-cyan-400" />

        <p className="mt-6 font-medium text-zinc-400">
          Loading...
        </p>
      </div>
    </main>
  );
}