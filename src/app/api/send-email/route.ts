import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, incidentLocation, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, 
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL, // Sender (your Gmail)
      to: process.env.SMTP_EMAIL, // Recipient (your Gmail or another email)
      replyTo: email, 
      subject: "New Contact Form Submission",
      text: `You have a New Case Request from ${firstName} ${lastName}.
       Phone: ${phone}
       Email: ${email}
       Location: ${incidentLocation}

       Message:
      ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
