import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { PrivacyNoticeClient } from "../components/info/PrivacyNoticeClient";

const SLUG = "privacynotice";

export const metadata: Metadata = buildPageMetadata(`/${SLUG}`);

export default function Page() {
  return <PrivacyNoticeClient />;
}
