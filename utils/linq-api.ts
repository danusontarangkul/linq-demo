import { config } from "@/utils/env";

export async function sendLinqMessage(chatId: string, text: string) {
  const url = `https://api.linq.dev/v1/chats/${chatId}/messages`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.linq.apiKey}`,
    },
    body: JSON.stringify({
      text: text,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error(`[Linq API Error] ${response.status}: ${errorData}`);
    throw new Error(`Linq API failed with status ${response.status}`);
  }

  return await response.json();
}
