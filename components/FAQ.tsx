const faqs = [
  {
    question: "What types of projects do you accept?",
    answer:
      "We work on web development, Android applications, iOS applications, and professional video editing projects. We can also handle projects that require more than one of these services.",
  },
  {
    question: "Who will manage my project?",
    answer:
      "Wazir Afzali manages client communication, planning, coordination, and delivery as the team lead. The specialist responsible for your service handles the technical work.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the project scope, required features, complexity, timeline, and service type. After reviewing your requirements, we provide a clear project estimate before work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the size and complexity of the project. Small projects may take one or two weeks, while larger web or mobile applications can take several weeks or longer.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. Our workflow is designed for remote collaboration, so we can communicate, manage progress, review deliverables, and complete projects online.",
  },
  {
    question: "Can I request changes during the project?",
    answer:
      "Yes. Changes can be discussed during the project. If a requested change goes beyond the agreed project scope, we will explain any effect on the timeline or cost before continuing.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Support depends on the project agreement. We can include post-delivery assistance, bug fixes, maintenance, updates, or ongoing development when required.",
  },
  {
    question: "How do I start?",
    answer:
      "Use the project inquiry form, select the service you need, provide your budget and timeline, and describe your project. We will review the request and contact you about the next steps.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-zinc-900/30 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 font-medium text-cyan-400">
              FAQ
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Before we
              <span className="block text-zinc-500">
                start your project.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-400">
              Here are answers to some of the most common questions
              clients may have before working with our team.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
            >
              Start a Project
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-zinc-950 p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-white">
                  <span>
                    {faq.question}
                  </span>

                  <span className="text-xl text-cyan-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                  {faq.answer}
                </p>

                <span className="sr-only">
                  
                </span>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}