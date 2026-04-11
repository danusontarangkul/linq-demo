import { linqSmsHref } from "@/utils/linq-sms-href";
import QRCode from "qrcode";
import Image from "next/image";

type Props = {
  initialMessage: string;
  className?: string;
};

export async function QrCode({ initialMessage, className }: Props) {
  const smsUri = linqSmsHref(initialMessage);

  const dataUrl = await QRCode.toDataURL(smsUri, {
    margin: 1,
    width: 240,
    color: { dark: "#18181b", light: "#ffffff" },
    errorCorrectionLevel: "M",
  });

  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm ${className ?? ""}`}
    >
      <Image
        src={dataUrl}
        alt="Scan to start chat"
        width={240}
        height={240}
        unoptimized
        priority
      />
    </div>
  );
}
