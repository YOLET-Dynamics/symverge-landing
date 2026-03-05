import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;
const ipTimestamps = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipTimestamps.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) return true;

  recent.push(now);
  ipTimestamps.set(ip, recent);
  return false;
}

function sanitize(str: string): string {
  return str.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "").trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
  });

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Inquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <span style="font-size:18px;font-weight:700;letter-spacing:0.15em;color:#ffffff;">SYM</span><span style="font-size:18px;font-weight:700;letter-spacing:0.15em;color:#3a8f65;">VERGE</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#141414;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:32px 28px;">

              <!-- Title -->
              <h1 style="margin:0 0 4px 0;font-size:20px;font-weight:700;color:#ffffff;">New Contact Inquiry</h1>
              <p style="margin:0 0 28px 0;font-size:13px;color:#6b7280;">${date}</p>

              <!-- Sender Info -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 16px;background-color:rgba(58,143,101,0.08);border-radius:10px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 2px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">From</p>
                          <p style="margin:0;font-size:16px;font-weight:600;color:#ffffff;">${escapedName}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:12px;">
                          <p style="margin:0 0 2px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">Email</p>
                          <a href="mailto:${escapedEmail}" style="font-size:14px;color:#3a8f65;text-decoration:none;">${escapedEmail}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:0 0 24px 0;" />

              <!-- Message -->
              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">Message</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#d1d5db;">${escapedMessage}</p>

            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td align="center" style="padding:28px 0 0 0;">
              <a href="mailto:${escapedEmail}" style="display:inline-block;padding:12px 32px;background-color:#3a8f65;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:999px;">Reply to ${escapedName}</a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:32px 0 0 0;">
              <p style="margin:0;font-size:12px;color:#4b5563;">Sent from the contact form at <a href="https://symverge.tech" style="color:#3a8f65;text-decoration:none;">symverge.tech</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type." },
        { status: 400 }
      );
    }

    const body = await request.json();

    if (body?.company) {
      return NextResponse.json({ success: true });
    }

    const name = sanitize(String(body?.name ?? ""));
    const email = sanitize(String(body?.email ?? ""));
    const message = sanitize(String(body?.message ?? ""));

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const fromAddress =
      process.env.RESEND_FROM ?? "SYMVERGE Contact <noreply@symverge.tech>";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: "contact@symverge.tech",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: buildEmailHtml(name, email, message),
      text: [`Name: ${name}`, `Email: ${email}`, ``, `Message:`, message].join(
        "\n"
      ),
    });

    if (error) {
      console.error("[Resend error]", JSON.stringify(error));
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    console.log("[Resend success]", data?.id);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
