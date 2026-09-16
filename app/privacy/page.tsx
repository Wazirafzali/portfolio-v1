import type { Metadata } from "next";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export const metadata: Metadata = { title: "Privacy Policy", description: "How AppFolor handles information submitted through this website.", alternates: { canonical: "/privacy" }, openGraph: { title: "Privacy Policy | AppFolor", description: "How AppFolor handles information submitted through this website.", url: "/privacy", images: ["/opengraph-image"] } };

export default function PrivacyPage() {
  return (
    <main className="studio-site legal-page min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <Link
          href="/"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          <BrandLogo />
        </Link>

        <div className="mt-10">
         <p className="mt-4 leading-8">
            When you submit a project request to AppFolor through this website,
             we may collect information such as your name, email address,
              selected service, estimated budget, preferred timeline, and
               project details.
              </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            How we handle your information.
          </h1>

          <p className="mt-6 text-zinc-500">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-14 space-y-12 text-zinc-400">
          <section>
            <h2 className="text-2xl font-bold text-white">
              1. Information We Collect
            </h2>

            <p className="mt-4 leading-8">
              When you submit a project request through this website,
              we may collect information such as your name, email address,
              selected service, estimated budget, preferred timeline, and
              project details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              2. How We Use Your Information
            </h2>

            <p className="mt-4 leading-8">
              We use the information you provide to review your project,
              respond to your inquiry, communicate with you, prepare project
              estimates, and coordinate services with the appropriate team
              member.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              3. Project Information
            </h2>

            <p className="mt-4 leading-8">
              Please avoid submitting passwords, payment card details,
              confidential credentials, private access keys, or other highly
              sensitive information through the project inquiry form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              4. Analytics
            </h2>

            <p className="mt-4 leading-8">
              We may use website analytics and performance tools to understand
              how visitors use the website, improve performance, and identify
              which pages or services are most useful.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              5. Third-Party Services
            </h2>

            <p className="mt-4 leading-8">
              This website may rely on third-party service providers for
              hosting, analytics, email delivery, and related technical
              functions. Information may be processed by those providers as
              necessary to operate the website and respond to project
              inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              6. Data Retention
            </h2>

            <p className="mt-4 leading-8">
              We may retain project inquiries and related communications for
              as long as reasonably necessary to respond to requests, manage
              projects, maintain business records, and resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              7. Your Choices
            </h2>

            <p className="mt-4 leading-8">
              If you have submitted information through this website and want
              to ask about correcting or deleting it, you can contact us using
              the contact information provided on the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              8. Security
            </h2>

            <p className="mt-4 leading-8">
              We take reasonable steps to protect information submitted through
              the website, but no online system or transmission method can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">
              9. Changes to This Policy
            </h2>

            <p className="mt-4 leading-8">
              We may update this Privacy Policy when our website, services, or
              business practices change. The updated version will be published
              on this page.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-zinc-950 transition hover:bg-cyan-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}