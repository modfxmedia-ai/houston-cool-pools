import { NextResponse } from "next/server";
import { sendLeadEmail } from "../../../lib/lead-mailer";

export const runtime = "nodejs";

interface ServiceFormBody {
  name?: string;
  phone?: string;
  smsConsent?: boolean;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  hearAbout?: string;
  lookingFor?: string;
  message?: string;
}

const REQUIRED_FIELDS: (keyof ServiceFormBody)[] = ["name", "phone"];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body: ServiceFormBody;
  try {
    body = (await request.json()) as ServiceFormBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const missing = REQUIRED_FIELDS.filter(
    (k) => !body[k] || String(body[k]).trim() === "",
  );
  if (missing.length) {
    return NextResponse.json(
      { success: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }
  if (body.email && !isEmail(String(body.email))) {
    return NextResponse.json(
      { success: false, error: "Invalid email address." },
      { status: 400 },
    );
  }

  // Deliver the lead. Falls back to console.log when RESEND_API_KEY is not set.
  await sendLeadEmail({
    subject: "NEW POOL-SERVICE LEAD",
    payload: body as Record<string, unknown>,
  });

  return NextResponse.json({ success: true });
}
