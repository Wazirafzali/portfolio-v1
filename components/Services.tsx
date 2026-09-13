import {
  Code2,
  Smartphone,
  Apple,
  Film,
  Layers3,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern websites, landing pages, business platforms, dashboards, and custom web applications designed around your business requirements.",
    icon: Code2,
    features: [
      "Business Websites",
      "Web Applications",
      "Landing Pages",
      "Dashboards",
    ],
  },

  {
    title: "Android Development",
    description:
      "Professional Android applications designed for performance, usability, business workflows, and integration with modern backend services.",
    icon: Smartphone,
    features: [
      "Android Apps",
      "Business Applications",
      "API Integration",
      "App Maintenance",
    ],
  },

  {
    title: "iOS Development",
    description:
      "Professional iPhone and iPad applications focused on clean interfaces, reliable performance, and a polished user experience.",
    icon: Apple,
    features: [
      "iPhone Apps",
      "iPad Apps",
      "API Integration",
      "App Maintenance",
    ],
  },

  {
    title: "Android & iOS Development",
    description:
      "Need the same mobile application for both Android and iOS? Our Android and iOS specialists can work together as one coordinated mobile project.",
    icon: Layers3,
    features: [
      "Android + iOS",
      "Shared Project Planning",
      "Coordinated Development",
      "Unified Delivery",
    ],
  },

  {
    title: "Video Editing",
    description:
      "Professional video editing for creators, businesses, advertisements, short-form content, promotional campaigns, and social media.",
    icon: Film,
    features: [
      "Short-Form Videos",
      "Social Media Content",
      "Advertisements",
      "Business Videos",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Our Services
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Specialized services.
            <span className="block text-zinc-500">
              One coordinated team.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Choose one service or combine multiple services.
            If your project requires both Android and iOS,
            both mobile specialists can work together while
            the project stays coordinated through one team lead.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-3xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Request this service
                  <span>→</span>
                </a>
              </article>
            );
          })}
        </div>

        {/* Combined Mobile Project */}
        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-medium text-cyan-400">
                Need both Android and iOS?
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                One mobile project. Two specialists.
              </h3>

              <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
                You do not need to manage two separate developers.
                Our Android and iOS specialists work on their respective
                platforms while project communication, scope, progress,
                and delivery are coordinated through one team lead.
              </p>
            </div>

            <a
              href="#contact"
              className="w-fit rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Start a Mobile Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}