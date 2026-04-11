import { createHmac, timingSafeEqual } from "crypto";

export function verifyLinqSignature(
  payload: string,
  timestamp: string | null,
  signature: string | null,
  secret: string,
): boolean {
  if (!signature || !timestamp) {
    return false;
  }

  const signedData = `${timestamp}.${payload}`;

  const hmac = createHmac("sha256", secret);
  const digest = hmac.update(signedData).digest("hex");

  const digestBuffer = Buffer.from(digest, "hex");
  const signatureBuffer = Buffer.from(signature, "hex");

  if (digestBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return timingSafeEqual(digestBuffer, signatureBuffer);
}
