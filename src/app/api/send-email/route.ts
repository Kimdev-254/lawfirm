import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      incidentLocation,
      subject,
      message,
    } = await req.json();

    if (!email || !message || !firstName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email config
    const mailOptions = {
      from: `"Website Form" <${process.env.SMTP_EMAIL}>`, // ✅ always your/client email
      to: process.env.SMTP_EMAIL, // ✅ where submissions go
      replyTo: email, // ✅ user's email (e.g. johndoe23@gmail.com)
      subject: `New Case Request: ${subject || "No Subject"}`,
      text: `
      New Case Request from ${firstName} ${lastName || ""}

      Phone: ${phone || "N/A"}
      Email: ${email}
      Location: ${incidentLocation || "N/A"}

      Subject: ${subject || "N/A"}

      Message:
      ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email", details: error?.message },
      { status: 500 }
    );
  }
}