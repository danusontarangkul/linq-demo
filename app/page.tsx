import { QrCode } from "@/components/QrCode";
import { SmsOpenButton } from "@/components/SmsOpenButton";

export default async function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-16 font-sans dark:bg-black">
      <main className="flex w-full max-w-lg flex-col items-center gap-10 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Text To Home
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Browse real estate listings through SMS or iMessage—scan to open the
            start page, then we will open a new Linq chat to your number. No app
            or account required.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <QrCode initialMessage="I want to start a chat with Linq!" />
          <SmsOpenButton initialMessage="I want to start a chat with Linq!" />
          <p className="max-w-xs text-sm text-zinc-500 dark:text-zinc-500">
            Scan or tap to continue.
          </p>
        </div>
      </main>
    </div>
  );
}
