import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    } = body;

    if (
      !name ||
      !email ||
      !service ||
      !budget ||
      !deadline ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof budget !== "string" ||
      typeof deadline !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid project request.",
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
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

    const recipientEmail =
      process.env.CONTACT_TO_EMAIL;

    if (!recipientEmail) {
      console.error(
        "CONTACT_TO_EMAIL is not configured."
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

    const { data, error } =
      await resend.emails.send({
        from:
          "Project Inquiry <onboarding@resend.dev>",

        to: [recipientEmail],

        replyTo: email,

        subject:
          `New Project Request: ${service}`,

        text: `
NEW PROJECT REQUEST

CLIENT
Name: ${name}
Email: ${email}

PROJECT
Service: ${service}
Budget: ${budget}
Deadline: ${deadline}

PROJECT DETAILS
${message}

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