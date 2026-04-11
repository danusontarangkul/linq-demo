import { config } from "@/utils/env";

export function linqSmsHref(initialMessage: string): string {
  const phoneNumber = config.linq.phoneNumber;
  return `sms:${phoneNumber}&body=${encodeURIComponent(initialMessage)}`;
}
