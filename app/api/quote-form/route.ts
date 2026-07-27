import { NextResponse } from "next/server";
import { sendLeadEmail } from "../../../lib/lead-mailer";

export const runtime = "nodejs";

interface QuoteFormBody {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  helpWith?: string;
  hearAbout?: string;
  message?: string;
  smsConsent?: boolean;
}

const REQUIRED_FIELDS: (keyof QuoteFormBody)[] = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "postalCode",
  "helpWith",
];

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  let body: QuoteFormBody;
  try {
    body = (await request.json()) as QuoteFormBody;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const missing = REQUIRED_FIELDS.filter((k) => !body[k] || String(body[k]).trim() === "");
  if (missing.length) {
    return NextResponse.json(
      { success: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }
  if (!isEmail(String(body.email))) {
    return NextResponse.json(
      { success: false, error: "Invalid email address." },
      { status: 400 },
    );
  }

  // Deliver the lead. `sendLeadEmail` is best-effort – if RESEND_API_KEY is
  // not configured (e.g. local dev) it just console.logs the payload.
  await sendLeadEmail({
    subject: "NEW FREE POOL QUOTE REQUEST",
    payload: body as Record<string, unknown>,
  });

  return NextResponse.json({ success: true });
}
