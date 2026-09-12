const steps = [
  {
    number: "01",
    title: "Project Request",
    description:
      "You send us your project requirements, preferred service, budget, timeline, and any important details.",
  },
  {
    number: "02",
    title: "Review & Planning",
    description:
      "As team lead, I review the request, clarify requirements, and coordinate with the specialist responsible for the project.",
  },
  {
    number: "03",
    title: "Scope & Agreement",
    description:
      "We confirm the project scope, features, timeline, price, milestones, and delivery expectations before work begins.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "The project is handled by the specialist in that field while I coordinate communication, progress, and quality.",
  },
  {
    number: "05",
    title: "Testing & Review",
    description:
      "We test the work, review the final result, fix important issues, and make sure the agreed requirements are met.",
  },
  {
    number: "06",
    title: "Delivery & Support",
    description:
      "The completed project is delivered with the agreed files, access, or deployment, followed by any included support.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-white/10 bg-zinc-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            How We Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            A clear process from
            <span className="block text-zinc-500">
              idea to delivery.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            You communicate through one team lead while the right specialist
            handles the technical work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}