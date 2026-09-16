import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the AppFolor website and submitting project inquiries.", alternates: { canonical: "/terms" }, openGraph: { title: "Terms of Service | AppFolor", description: "Terms for using the AppFolor website and submitting project inquiries.", url: "/terms", images: ["/opengraph-image"] } };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          <BrandLogo />
        </Link>

        <div className="mt-10">
           <p className="mt-4 leading-8">
             AppFolor provides information about web development,
             Android development, iOS development, mobile app projects,
             video editing, our team, and our project process.
              </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms for using this website.
          </h1>

          <p className="mt-6 text-zinc-500">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-12 text-zinc-400">
          <section>
            <h2 className="text-2xl font-bold text-white">
              1. Website Purpose
            </h2>

            <p className="mt-4 leading-8">
              This website presents information about our services, team,
              projects, and availability for web development, Android
              development, iOS development, mobile projects, and video
              editing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              2. Project Inquiries
            </h2>

            <p className="mt-4 leading-8">
              Submitting a project request does not automatically create a
              contract or guarantee that we will accept the project. Project
              scope, price, timeline, responsibilities, and deliverables must
              be agreed separately before work begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. Estimates and Pricing
            </h2>

            <p className="mt-4 leading-8">
              Any early price or timeline discussion is an estimate unless it
              is confirmed as part of a final project agreement. Project cost
              may change if requirements, scope, features, or deadlines change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Client Responsibilities
            </h2>

            <p className="mt-4 leading-8">
              Clients are responsible for providing accurate project
              requirements, required content, access, feedback, and approvals
              needed to complete the agreed work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Intellectual Property
            </h2>

            <p className="mt-4 leading-8">
              Ownership and usage rights for project files, code, designs,
              videos, assets, and other deliverables will be determined by the
              specific project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              6. Third-Party Tools
            </h2>

            <p className="mt-4 leading-8">
              Some projects may use third-party platforms, APIs, hosting
              providers, frameworks, libraries, app stores, payment services,
              or other external systems. Their availability and terms are
              controlled by their respective providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              7. Portfolio and Concept Projects
            </h2>

            <p className="mt-4 leading-8">
              Some work displayed on this website may be clearly identified as
              a concept project rather than completed client work. Concept
              projects are presented to demonstrate ideas, workflows, and
              capabilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              8. Limitation of Information
            </h2>

            <p className="mt-4 leading-8">
              Website content is provided for general informational purposes
              and may be updated, changed, or removed without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 leading-8">
              These terms may be updated when our services, website, or
              business practices change. Updated terms will be published on
              this page.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </main>
  );
}