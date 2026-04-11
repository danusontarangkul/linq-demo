import { NextRequest, NextResponse } from "next/server";
import { config } from "@/utils/env";
import { verifyLinqSignature } from "@/utils/crypto";
import { handleLinqEvent } from "@/services/linq-handler";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    const signature = req.headers.get("x-webhook-signature");
    const timestamp = req.headers.get("x-webhook-timestamp");

    if (
      !verifyLinqSignature(
        body,
        timestamp,
        signature,
        config.linq.webhookSecret,
      )
    ) {
      console.error("[Linq Webhook] Signature mismatch");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = JSON.parse(body);
    await handleLinqEvent(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Route Error:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
