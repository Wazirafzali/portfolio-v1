import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const allowedServices = [
  "Web Development",
  "Android Development",
  "iOS Development",
  "Mobile App - Android & iOS",
  "Video Editing",
  "Multiple Services",
  "Other",
];

const allowedDeadlines = [
  "ASAP",
  "1-2 weeks",
  "2-4 weeks",
  "1-3 months",
  "Flexible",
  "Not sure yet",
];

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    // --------------------------------------------------
    // 1. CHECK UPSTASH CONFIGURATION
    // --------------------------------------------------

    const upstashUrl =
      process.env.UPSTASH_REDIS_REST_URL;

    const upstashToken =
      process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!upstashUrl || !upstashToken) {
      console.error(
        "Upstash environment variables are missing."
      );

      return NextResponse.json(
        {
          error:
            "Server security configuration is incomplete.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 2. CREATE REDIS + RATE LIMITER
    // --------------------------------------------------

    const redis = new Redis({
      url: upstashUrl,
      token: upstashToken,
    });

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(
        5,
        "10 m"
      ),
      prefix: "appfolor-contact",
    });

    // --------------------------------------------------
    // 3. GET VISITOR IP
    // --------------------------------------------------

    const forwardedFor =
      request.headers.get(
        "x-forwarded-for"
      );

    const ip =
      forwardedFor
        ?.split(",")[0]
        ?.trim() ||
      request.headers.get(
        "x-real-ip"
      ) ||
      "unknown";

    // --------------------------------------------------
    // 4. RATE LIMIT
    // --------------------------------------------------

    const rateLimitResult =
      await ratelimit.limit(ip);

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a few minutes and try again.",
        },
        {
          status: 429,
        }
      );
    }

    // --------------------------------------------------
    // 5. READ FORM DATA
    // --------------------------------------------------

    const body = await request.json();

    const {
      name,
      email,
      service,
      budget,
      deadline,
      message,
      website,
      turnstileToken,
    } = body;

    // --------------------------------------------------
    // 6. HONEYPOT ANTI-SPAM
    // --------------------------------------------------

    if (
      typeof website === "string" &&
      website.trim() !== ""
    ) {
      // Fake success for bots.
      return NextResponse.json({
        success: true,
      });
    }

    // --------------------------------------------------
    // 7. REQUIRED FIELD VALIDATION
    // --------------------------------------------------

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof deadline !== "string" ||
      typeof message !== "string" ||
      typeof turnstileToken !== "string"
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const cleanName = name.trim();

    const cleanEmail =
      email.trim().toLowerCase();

    const cleanService =
      service.trim();

    const cleanBudget =
      typeof budget === "string"
        ? budget.trim()
        : "";

    const cleanDeadline =
      deadline.trim();

    const cleanMessage =
      message.trim();

    // --------------------------------------------------
    // 8. FIELD LENGTH VALIDATION
    // --------------------------------------------------

    if (
      cleanName.length < 2 ||
      cleanName.length > 100
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid name.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      cleanEmail.length < 5 ||
      cleanEmail.length > 150
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      cleanMessage.length < 20 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        {
          error:
            "Message must be between 20 and 5000 characters.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // 9. EMAIL VALIDATION
    // --------------------------------------------------

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(cleanEmail)
    ) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // 10. SERVICE WHITELIST
    // --------------------------------------------------

    if (
      !allowedServices.includes(
        cleanService
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid service selected.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // 11. DEADLINE WHITELIST
    // --------------------------------------------------

    if (
      !allowedDeadlines.includes(
        cleanDeadline
      )
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid timeline selected.",
        },
        {
          status: 400,
        }
      );
    }

    // --------------------------------------------------
    // 12. CHECK TURNSTILE SECRET
    // --------------------------------------------------

    const turnstileSecret =
      process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      console.error(
        "TURNSTILE_SECRET_KEY is missing."
      );

      return NextResponse.json(
        {
          error:
            "Security verification is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 13. VERIFY CLOUDFLARE TURNSTILE
    // --------------------------------------------------

    const verifyResponse =
      await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: new URLSearchParams({
            secret:
              turnstileSecret,

            response:
              turnstileToken,
          }),
        }
      );

    const turnstileResult =
      (await verifyResponse.json()) as TurnstileResponse;

    if (!turnstileResult.success) {
      console.error(
        "Turnstile verification failed:",
        turnstileResult[
          "error-codes"
        ]
      );

      return NextResponse.json(
        {
          error:
            "Security verification failed. Please try again.",
        },
        {
          status: 403,
        }
      );
    }

    // --------------------------------------------------
    // 14. CHECK RESEND API KEY
    // --------------------------------------------------

    const resendApiKey =
      process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error(
        "RESEND_API_KEY is missing."
      );

      return NextResponse.json(
        {
          error:
            "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 15. CHECK DESTINATION EMAIL
    // --------------------------------------------------

    const contactToEmail =
      process.env.CONTACT_TO_EMAIL;

    if (!contactToEmail) {
      console.error(
        "CONTACT_TO_EMAIL is missing."
      );

      return NextResponse.json(
        {
          error:
            "Destination email is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 16. CREATE RESEND
    // THIS IS WHERE RESEND IS CREATED
    // --------------------------------------------------

    const resend =
      new Resend(resendApiKey);

    // --------------------------------------------------
    // 17. ESCAPE USER CONTENT
    // --------------------------------------------------

    const safeName =
      escapeHtml(cleanName);

    const safeEmail =
      escapeHtml(cleanEmail);

    const safeService =
      escapeHtml(cleanService);

    const safeBudget =
      escapeHtml(
        cleanBudget ||
          "Not specified"
      );

    const safeDeadline =
      escapeHtml(cleanDeadline);

    const safeMessage =
      escapeHtml(cleanMessage).replaceAll(
        "\n",
        "<br />"
      );

    // --------------------------------------------------
    // 18. SEND EMAIL THROUGH RESEND
    // --------------------------------------------------

    const { error: resendError } =
      await resend.emails.send({
        from:
          "AppFolor <onboarding@resend.dev>",

        to: [
          contactToEmail,
        ],

        replyTo:
          cleanEmail,

        subject:
          `New AppFolor project inquiry from ${cleanName}`,

        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #18181b;">

            <h1 style="margin-bottom: 8px;">
              New AppFolor Project Inquiry
            </h1>

            <p style="color: #71717a;">
              A visitor submitted the project form on AppFolor.
            </p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e4e4e7;" />

            <p>
              <strong>Name:</strong>
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong>
              ${safeEmail}
            </p>

            <p>
              <strong>Service:</strong>
              ${safeService}
            </p>

            <p>
              <strong>Budget:</strong>
              ${safeBudget}
            </p>

            <p>
              <strong>Timeline:</strong>
              ${safeDeadline}
            </p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e4e4e7;" />

            <h2>
              Project Message
            </h2>

            <p style="line-height: 1.7;">
              ${safeMessage}
            </p>

            <hr style="margin: 24px 0; border: 0; border-top: 1px solid #e4e4e7;" />

            <p style="font-size: 12px; color: #a1a1aa;">
              Submitted through AppFolor website.
            </p>

          </div>
        `,
      });

    // --------------------------------------------------
    // 19. HANDLE RESEND ERROR
    // --------------------------------------------------

    if (resendError) {
      console.error(
        "Resend error:",
        resendError
      );

      return NextResponse.json(
        {
          error:
            "We could not send your message. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    // --------------------------------------------------
    // 20. SUCCESS
    // --------------------------------------------------

    return NextResponse.json({
      success: true,

      message:
        "Your project request has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}