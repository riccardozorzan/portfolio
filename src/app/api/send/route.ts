import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, gRecaptchaToken } = await req.json();

    if (!name || !email || !message || !gRecaptchaToken) {
      return NextResponse.json(
        { error: "Missing required fields or token" },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams();
    formData.append("secret", process.env.RECAPTCHA_SECRET_KEY || "");
    formData.append("response", gRecaptchaToken);

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    const googleData = await googleRes.json();

    if (!googleData.success || (googleData.score !== undefined && googleData.score < 0.5)) {
      return NextResponse.json(
        { error: "Bot detected or invalid reCAPTCHA token" },
        { status: 422 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["riccardo@riccardozorzan.com"],
      subject: `[Portfolio Transmission] Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}