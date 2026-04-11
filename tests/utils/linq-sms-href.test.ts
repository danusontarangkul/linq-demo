import { describe, expect, it } from "vitest";
import { linqSmsHref } from "@/utils/linq-sms-href";

describe("linqSmsHref", () => {
  it("returns sms URL with configured number and encoded body", () => {
    const href = linqSmsHref("Hello & welcome");
    expect(href).toBe(
      `sms:+15551234567&body=${encodeURIComponent("Hello & welcome")}`,
    );
  });

  it("encodes empty message", () => {
    expect(linqSmsHref("")).toBe("sms:+15551234567&body=");
  });
});
