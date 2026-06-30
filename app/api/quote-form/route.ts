import { NextResponse } from "next/server";

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

  // TODO: Wire up email delivery (Resend or Nodemailer) using RESEND_API_KEY
  // from env. Until then we log the lead so it's visible in Vercel logs.
  // Example:
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "leads@houstoncoolpools.com",
  //     to: "info@houstoncoolpools.com",
  //     subject: "NEW FREE POOL QUOTE REQUEST",
  //     text: JSON.stringify(body, null, 2),
  //   });
  console.log("[free-pool-quote] new lead:", body);

  return NextResponse.json({ success: true });
}
