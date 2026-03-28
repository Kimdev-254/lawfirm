import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_MESSAGE_LENGTH = 5000;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  // Guard: ensure server is configured correctly
  if (!process.env.CLIENT_EMAIL) {
    console.error("CLIENT_EMAIL environment variable is not set");
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const phone = sanitize(body.phone);
    const email = sanitize(body.email);
    const incidentLocation = sanitize(body.incidentLocation);
    const subject = sanitize(body.subject);
    const message = sanitize(body.message);

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters` },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Website Form <info@kennethwaweruadvocates.co.ke>", // ✅ replace with your verified domain
      to: [process.env.CLIENT_EMAIL],
      replyTo: email,
      subject: `New Case Request: ${subject || "No Subject"}`,
      text: `
        New Case Request from ${firstName} ${lastName}

        Phone: ${phone || "N/A"}
        Email: ${email}
        Location: ${incidentLocation || "N/A"}

        Subject: ${subject || "N/A"}

        Message:
        ${message}
      `.trim(),
    });

    if (process.env.NODE_ENV !== "production") {
      console.log("Email sent:", data);
    }

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Failed to send email:", message);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}