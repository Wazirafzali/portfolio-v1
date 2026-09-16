"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
    };
  }
}

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const turnstileToken =
      formData.get("cf-turnstile-response");

    if (
      typeof turnstileToken !== "string" ||
      !turnstileToken
    ) {
      setStatus("error");
      setStatusMessage(
        "Please complete the security verification first."
      );
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      deadline: formData.get("deadline"),
      message: formData.get("message"),

      // Honeypot
      website: formData.get("website"),

      // Turnstile token
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Project request could not be sent."
        );
      }

      setStatus("success");
      setStatusMessage(
        "Your project request was sent successfully. We will review it and contact you soon."
      );

      form.reset();

      if (window.turnstile) {
        window.turnstile.reset();
      }
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setStatusMessage(error.message);
      } else {
        setStatusMessage(
          "Something went wrong. Please try again."
        );
      }

      if (window.turnstile) {
        window.turnstile.reset();
      }
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-zinc-950 py-28"
    >
      
      <Script
  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
  strategy="afterInteractive"
/>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-4 font-medium text-cyan-400">
              Start a Project
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Tell us what you
              <span className="block text-zinc-500">
                want to build.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              Whether you need a website, Android app, iOS app,
              both Android and iOS, or professional video editing,
              send us your requirements and we will coordinate
              the right specialist or specialists.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-cyan-400">
                  01
                </div>

                <div>
                  <h3 className="font-semibold">
                    Submit your request
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Choose the service you need and describe your project.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-cyan-400">
                  02
                </div>

                <div>
                  <h3 className="font-semibold">
                    We assign the right specialists
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    If your project needs multiple services,
                    the required specialists work together.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold text-cyan-400">
                  03
                </div>

                <div>
                  <h3 className="font-semibold">
                    We confirm the plan
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    We confirm scope, timeline, pricing,
                    responsibilities, and delivery before work starts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Honeypot - bots may fill this */}
              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Service Needed
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-zinc-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Android Development">
                    Android Development
                  </option>

                  <option value="iOS Development">
                    iOS Development
                  </option>

                  <option value="Mobile App - Android & iOS">
                    Mobile App - Android & iOS
                  </option>

                  <option value="Video Editing">
                    Video Editing
                  </option>

                  <option value="Multiple Services">
                    Multiple Services
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Estimated Budget
                  <span className="ml-2 text-zinc-600">
                    (Optional)
                  </span>
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-zinc-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="">
                    Prefer not to say yet
                  </option>

                  <option value="Under $500">
                    Under $500
                  </option>

                  <option value="$500 - $1,000">
                    $500 - $1,000
                  </option>

                  <option value="$1,000 - $3,000">
                    $1,000 - $3,000
                  </option>

                  <option value="$3,000 - $5,000">
                    $3,000 - $5,000
                  </option>

                  <option value="$5,000+">
                    $5,000+
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="deadline"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Preferred Timeline
                </label>

                <select
                  id="deadline"
                  name="deadline"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-zinc-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>

                  <option value="As soon as possible">
                    As soon as possible
                  </option>

                  <option value="1 - 2 weeks">
                    1 - 2 weeks
                  </option>

                  <option value="2 - 4 weeks">
                    2 - 4 weeks
                  </option>

                  <option value="1 - 3 months">
                    1 - 3 months
                  </option>

                  <option value="Flexible">
                    Flexible
                  </option>

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={20}
                  maxLength={5000}
                  rows={7}
                  placeholder="Tell us what you want to build, important features, platforms, and other requirements..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              {/* Cloudflare Turnstile */}
              {siteKey ? (
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="cf-turnstile"
                    data-sitekey={siteKey}
                    data-theme="dark"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-400">
                  Security verification is not configured.
                </div>
              )}

              <button
                type="submit"
                disabled={
                  status === "loading" || !siteKey
                }
                className="w-full rounded-xl bg-cyan-400 px-6 py-4 text-center font-bold text-zinc-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading"
                  ? "Sending Request..."
                  : "Submit Project Request →"}
              </button>

              {status === "success" && (
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm leading-6 text-green-400">
                  ✓ {statusMessage}
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-400">
                  ✕ {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}