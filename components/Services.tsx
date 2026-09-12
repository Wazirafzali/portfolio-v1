import {
  Code2,
  Smartphone,
  Apple,
  Film,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern websites, business platforms, dashboards, landing pages, e-commerce solutions, and custom web applications.",
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
      "Professional Android applications designed for performance, usability, and real business requirements.",
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
      "Reliable and polished iPhone and iPad applications built around a clean user experience.",
    icon: Apple,
    features: [
      "iPhone Apps",
      "iPad Apps",
      "API Integration",
      "App Maintenance",
    ],
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing for creators, businesses, advertisements, short-form content, and social media.",
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
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 font-medium text-cyan-400">
            Our Services
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            One team.
            <span className="block text-zinc-500">
              Four specialized services.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Each project is assigned to the right specialist in our team,
            while project communication and delivery are coordinated through
            one clear process.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                  <Icon className="h-7 w-7 text-cyan-400" />
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
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
      </div>
    </section>
  );
}