import { linqSmsHref } from "@/utils/linq-sms-href";

type Props = {
  initialMessage: string;
  className?: string;
  children?: React.ReactNode;
};

export function SmsOpenButton({
  initialMessage,
  className,
  children,
}: Props) {
  const href = linqSmsHref(initialMessage);

  return (
    <a
      href={href}
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:border-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
      }
    >
      {children ?? "Open in Messages"}
    </a>
  );
}
