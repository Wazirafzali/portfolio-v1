"use client";

import Script from "next/script";
import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
          retry?: "auto" | "never";
          "retry-interval"?: number;
          callback?: (token: string) => void;
          "error-callback"?: (
            errorCode: string
          ) => void;
          "expired-callback"?: () => void;
          "timeout-callback"?: () => void;
          "unsupported-callback"?: () => void;
        }
      ) => string;

      reset: (
        widgetId?: string
      ) => void;

      remove: (
        widgetId: string
      ) => void;
    };
  }
}

type FormDataState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  deadline: string;
  message: string;
  website: string;
};

const initialFormData: FormDataState = {
  name: "",
  email: "",
  service: "",
  budget: "",
  deadline: "",
  message: "",
  website: "",
};

export default function Contact() {
  const siteKey =
    process.env
      .NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const turnstileContainerRef =
    useRef<HTMLDivElement | null>(null);

  const widgetIdRef =
    useRef<string | null>(null);

  const [turnstileReady, setTurnstileReady] =
    useState(false);

  const [
    turnstileToken,
    setTurnstileToken,
  ] = useState("");

  const [
    securityMessage,
    setSecurityMessage,
  ] = useState("");

  const [formData, setFormData] =
    useState<FormDataState>(
      initialFormData
    );

  const [status, setStatus] =
    useState<
      | "idle"
      | "loading"
      | "success"
      | "error"
    >("idle");

  const [message, setMessage] =
    useState("");

  // --------------------------------------------
  // Render Cloudflare Turnstile explicitly
  // --------------------------------------------

  useEffect(() => {
    if (
      !turnstileReady ||
      !siteKey ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      widgetIdRef.current
    ) {
      return;
    }

    try {
      widgetIdRef.current =
        window.turnstile.render(
          turnstileContainerRef.current,
          {
            sitekey: siteKey,

            theme: "dark",

            size: "flexible",

            retry: "auto",

            "retry-interval": 8000,

            callback: (token) => {
              console.log(
                "Turnstile verification successful."
              );

              setTurnstileToken(token);

              setSecurityMessage(
                "Security verification completed."
              );
            },

            "error-callback": (
              errorCode
            ) => {
              console.error(
                "Turnstile error:",
                errorCode
              );

              setTurnstileToken("");

              setSecurityMessage(
                `Security verification error: ${errorCode}`
              );
            },

            "expired-callback": () => {
              console.warn(
                "Turnstile token expired."
              );

              setTurnstileToken("");

              setSecurityMessage(
                "Security verification expired. Please complete it again."
              );
            },

            "timeout-callback": () => {
              console.warn(
                "Turnstile verification timed out."
              );

              setTurnstileToken("");

              setSecurityMessage(
                "Security verification timed out. Please try again."
              );
            },

            "unsupported-callback": () => {
              console.error(
                "Turnstile browser unsupported."
              );

              setTurnstileToken("");

              setSecurityMessage(
                "This browser could not complete the security verification."
              );
            },
          }
        );
    } catch (error) {
      console.error(
        "Turnstile render error:",
        error
      );

      setSecurityMessage(
        "Security verification could not be loaded."
      );
    }

    return () => {
      if (
        widgetIdRef.current &&
        window.turnstile
      ) {
        try {
          window.turnstile.remove(
            widgetIdRef.current
          );
        } catch {
          // Ignore cleanup errors
        }

        widgetIdRef.current =
          null;
      }
    };
  }, [
    turnstileReady,
    siteKey,
  ]);

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function resetTurnstile() {
    setTurnstileToken("");

    setSecurityMessage("");

    if (
      widgetIdRef.current &&
      window.turnstile
    ) {
      try {
        window.turnstile.reset(
          widgetIdRef.current
        );
      } catch (error) {
        console.error(
          "Turnstile reset error:",
          error
        );
      }
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setStatus("idle");
    setMessage("");

    // --------------------------------------------
    // Validate Turnstile before API request
    // --------------------------------------------

    if (!siteKey) {
      setStatus("error");

      setMessage(
        "Security verification is not configured."
      );

      return;
    }

    if (!turnstileToken) {
      setStatus("error");

      setMessage(
        "Please complete the security verification first."
      );

      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name:
              formData.name,

            email:
              formData.email,

            service:
              formData.service,

            budget:
              formData.budget,

            deadline:
              formData.deadline,

            message:
              formData.message,

            website:
              formData.website,

            turnstileToken,
          }),
        }
      );

      let data: {
        success?: boolean;
        message?: string;
        error?: string;
      } = {};

      try {
        data =
          await response.json();
      } catch {
        // Response was not JSON
      }

      console.log(
        "Contact API status:",
        response.status
      );

      console.log(
        "Contact API response:",
        data
      );

      if (!response.ok) {
        setStatus("error");

        setMessage(
          data.error ||
            `Request failed with HTTP ${response.status}.`
        );

        resetTurnstile();

        return;
      }

      setStatus("success");

      setMessage(
        data.message ||
          "Your project request has been sent successfully."
      );

      setFormData(
        initialFormData
      );

      resetTurnstile();
    } catch (error) {
      console.error(
        "Contact submit error:",
        error
      );

      setStatus("error");

      setMessage(
        "The request could not reach the server. Please check your connection and try again."
      );

      resetTurnstile();
    }
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => {
          console.log(
            "Turnstile script ready."
          );

          setTurnstileReady(
            true
          );
        }}
        onError={() => {
          console.error(
            "Turnstile script failed to load."
          );

          setSecurityMessage(
            "Cloudflare security verification failed to load."
          );
        }}
      />

      <section
        id="contact"
        className="border-t border-white/10 bg-zinc-900/30 py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="mb-4 font-medium text-cyan-400">
                Start a Project
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tell us about your
                project.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                Tell AppFolor what you
                need and we will review
                your project request.
              </p>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    maxLength={100}
                    value={
                      formData.name
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={150}
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Service *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={
                      formData.service
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  >
                    <option value="">
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
                      Mobile App -
                      Android & iOS
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
                    Budget
                  </label>

                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    value={
                      formData.budget
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="Optional"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="deadline"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Timeline *
                  </label>

                  <select
                    id="deadline"
                    name="deadline"
                    required
                    value={
                      formData.deadline
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  >
                    <option value="">
                      Select a timeline
                    </option>

                    <option value="ASAP">
                      ASAP
                    </option>

                    <option value="1-2 weeks">
                      1-2 weeks
                    </option>

                    <option value="2-4 weeks">
                      2-4 weeks
                    </option>

                    <option value="1-3 months">
                      1-3 months
                    </option>

                    <option value="Flexible">
                      Flexible
                    </option>

                    <option value="Not sure yet">
                      Not sure yet
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Project details *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={20}
                    maxLength={5000}
                    rows={7}
                    value={
                      formData.message
                    }
                    onChange={
                      handleChange
                    }
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-400"
                    placeholder="Tell us what you would like to build..."
                  />
                </div>
              </div>

              {/* Honeypot field */}
              <div
                className="hidden"
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
                  value={
                    formData.website
                  }
                  onChange={
                    handleChange
                  }
                />
              </div>

              {/* Cloudflare Turnstile */}
              <div className="mt-7">
                <p className="mb-3 text-sm font-medium text-zinc-300">
                  Security
                  verification *
                </p>

                {!siteKey ? (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                    Security
                    verification is not
                    configured.
                  </div>
                ) : (
                  <div
                    ref={
                      turnstileContainerRef
                    }
                    className="min-h-[70px]"
                  />
                )}

                {securityMessage && (
                  <p
                    className={`mt-3 text-sm ${
                      turnstileToken
                        ? "text-green-400"
                        : "text-amber-400"
                    }`}
                  >
                    {
                      securityMessage
                    }
                  </p>
                )}
              </div>

              {message && (
                <div
                  className={`mt-6 rounded-xl border p-4 text-sm ${
                    status ===
                    "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status ===
                  "success"
                    ? "✓ "
                    : "✕ "}

                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  status ===
                  "loading"
                }
                className="mt-7 w-full rounded-xl bg-cyan-400 px-6 py-4 font-bold text-zinc-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status ===
                "loading"
                  ? "Sending..."
                  : "Submit Project Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}