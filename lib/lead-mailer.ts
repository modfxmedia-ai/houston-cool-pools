import { Resend } from "resend";

/**
 * Send a lead notification email via Resend.
 *
 * Requires the following environment variables (see `.env.local` /
 * Vercel project settings):
 *  - `RESEND_API_KEY`  – API key from https://resend.com
 *  - `LEAD_FROM_EMAIL` – verified sender, e.g. "leads@houstoncoolpools.com"
 *  - `LEAD_TO_EMAIL`   – inbox for new leads, e.g. "info@houstoncoolpools.com"
 *
 * If any of these are missing we fall back to `console.log` so local
 * development still works. The response is never surfaced to the client so
 * a mailer outage will never break the form submission itself.
 */
export async function sendLeadEmail({
  subject,
  payload,
}: {
  subject: string;
  payload: Record<string, unknown>;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.warn(
      "[lead-mailer] RESEND_API_KEY / LEAD_FROM_EMAIL / LEAD_TO_EMAIL not set; lead only logged.",
    );
    console.log(`[lead-mailer] ${subject}:`, payload);
    return;
  }

  const resend = new Resend(apiKey);
  const text = Object.entries(payload)
    .map(([k, v]) => `${k}: ${typeof v === "string" ? v : JSON.stringify(v)}`)
    .join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      subject,
      text,
    });
  } catch (err) {
    // Log but do not throw – we still respond 200 to the user so the form
    // shows success even if the mailer had a transient error.
    console.error("[lead-mailer] Resend send failed:", err);
    console.log(`[lead-mailer] ${subject}:`, payload);
  }
}
