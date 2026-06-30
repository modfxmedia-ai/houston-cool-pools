"use client";

import { usePathname } from "next/navigation";

const HIDDEN_PREFIXES = ["/free-pool-quote"];

export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const hidden = HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  if (hidden) return null;
  return <>{children}</>;
}
