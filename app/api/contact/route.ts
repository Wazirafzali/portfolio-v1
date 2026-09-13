import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

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
  "As soon as possible",
  "1 - 2 weeks",
  "2 - 4 weeks",
  "1 - 3 months",
  "Flexible",
  "Not sure yet",
];

type TurnstileResponse = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
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

    // Honeypot:
    // real visitors should never fill this field.
    if (
      typeof website === "string" &&
      website.trim().length > 0
    ) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Project request received.",
        }
      );
    }

    // Required fields
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
          success: false,
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Clean input
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanService = service.trim();
    const cleanDeadline = deadline.trim();
    const cleanMessage = message.trim();

    const cleanBudget =
      typeof budget === "string"
        ? budget.trim()
        : "";

    // Length validation
    if (
      cleanName.length < 2 ||
      cleanName.length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid name.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      cleanEmail.length > 150
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email address is too long.",
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
          success: false,
          message:
            "Project details must be between 20 and 5000 characters.",
        },
        {
          status: 400,
        }
      );
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Service whitelist
    if (
      !allowedServices.includes(cleanService)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid service selection.",
        },
        {
          status: 400,
        }
      );
    }

    // Timeline whitelist
    if (
      !allowedDeadlines.includes(
        cleanDeadline
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid timeline selection.",
        },
        {
          status: 400,
        }
      );
    }

    // Turnstile secret
    const turnstileSecret =
      process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      console.error(
        "TURNSTILE_SECRET_KEY is missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Security verification is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    // Verify Turnstile token with Cloudflare
    const verificationResponse =
      await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: new URLSearchParams({
            secret: turnstileSecret,
            response: turnstileToken,
          }),
        }
      );

    const verification =
      (await verificationResponse.json()) as TurnstileResponse;

    if (!verification.success) {
      console.error(
        "Turnstile verification failed:",
        verification["error-codes"]
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Security verification failed. Please try again.",
        },
        {
          status: 403,
        }
      );
    }

    // Email destination
    const recipientEmail =
      process.env.CONTACT_TO_EMAIL;

    if (!recipientEmail) {
      console.error(
        "CONTACT_TO_EMAIL is missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Server configuration error.",
        },
        {
          status: 500,
        }
      );
    }

    const safeBudget =
      cleanBudget || "Not specified";

    const { data, error } =
      await resend.emails.send({
        from:
          "Project Inquiry <onboarding@resend.dev>",

        to: [recipientEmail],

        replyTo: cleanEmail,

        subject:
          `New Project Request: ${cleanService}`,

        text: `
NEW PROJECT REQUEST

CLIENT
Name: ${cleanName}
Email: ${cleanEmail}

PROJECT
Service: ${cleanService}
Budget: ${safeBudget}
Preferred Timeline: ${cleanDeadline}

PROJECT DETAILS
${cleanMessage}

---
Submitted through Wazir Afzali & Team website.
        `,
      });

    if (error) {
      console.error(
        "Resend error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Project request could not be sent.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Project request sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error(
      "Project inquiry API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}