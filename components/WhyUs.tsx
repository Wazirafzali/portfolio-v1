import {
  Users,
  MessageSquare,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Specialists, Not Generalists",
    description:
      "Each service is handled by the team member who specializes in that field: web, Android, iOS, or video editing.",
  },
  {
    icon: MessageSquare,
    title: "One Point of Contact",
    description:
      "You communicate with one project contact instead of coordinating separately with multiple people.",
  },
  {
    icon: Layers3,
    title: "Multi-Service Capability",
    description:
      "A project can include multiple services, such as a website, mobile app, and promotional video, handled within one team.",
  },
  {
    icon: CheckCircle2,
    title: "Clear Scope & Delivery",
    description:
      "We confirm requirements, timeline, price, and expected deliverables before development starts.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-medium text-cyan-400">
              Why Work With Us
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The flexibility of a team.
              <span className="block text-zinc-500">
                The simplicity of one contact.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Instead of finding separate freelancers for every part of your
              project, you can work with one coordinated team while each
              specialist stays focused on their own expertise.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-white/10 bg-zinc-950 p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}