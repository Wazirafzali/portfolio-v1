"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
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
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus("success");
      setStatusMessage(
        "Message sent successfully. Thank you for contacting me!"
      );

      form.reset();
    } catch (error) {
      setStatus("error");

      if (error instanceof Error) {
        setStatusMessage(error.message);
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-zinc-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left side */}
          <div>
            <p className="mb-4 font-medium text-cyan-400">
              Contact
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Have a project in mind?

              <span className="block text-zinc-500">
                Let&apos;s build it together.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              I&apos;m open to freelance projects, collaborations, and
              interesting opportunities. Send me a message and tell me about
              what you want to build.
            </p>

            <div className="mt-12 space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Email
                  </p>

                  <p className="font-medium text-zinc-200">
                    Available through contact form
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  ◉
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Location
                  </p>

                  <p className="font-medium text-zinc-200">
                    Available Worldwide
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  ✓
                </div>

                <div>
                  <p className="text-sm text-zinc-500">
                    Availability
                  </p>

                  <p className="font-medium text-green-400">
                    Open for new projects
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

              {/* Name */}
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
                  maxLength={100}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              {/* Email */}
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
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Project Type
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-zinc-300 outline-none transition focus:border-cyan-400"
                >
                  <option
                    value=""
                    disabled
                  >
                    Select project type
                  </option>

                  <option value="Website Development">
                    Website Development
                  </option>

                  <option value="Web Application">
                    Web Application
                  </option>

                  <option value="AI Project">
                    AI Project
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={3000}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-cyan-400 px-6 py-4 font-bold text-zinc-950 transition duration-300 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "loading"
                  ? "Sending..."
                  : "Send Message →"}
              </button>

              {/* Success */}
              {status === "success" && (
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-400">
                  ✓ {statusMessage}
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
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