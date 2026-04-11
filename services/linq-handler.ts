// services/linq-handler.ts

export type LinqPayload = {
  event_type: "message.received" | "message.failed" | "message.sent" | string;
  data: {
    chat: {
      id: string;
    };
    sender_handle: {
      handle: string;
    };
    parts: Array<{
      type: string;
      text: string;
    }>;
  };
};

export async function handleLinqEvent(payload: LinqPayload) {
  const { event_type, data } = payload;

  switch (event_type) {
    case "message.received":
      return await handleIncomingMessage(data);

    case "message.failed":
      return handleDeliveryFailure(data);

    default:
      return;
  }
}

async function handleIncomingMessage(data: LinqPayload["data"]) {
  const messageText = data.parts[0]?.text || "";
  const senderPhone = data.sender_handle.handle;
  const chatId = data.chat.id;

  const cleanMessage = messageText.trim().toLowerCase();

  if (cleanMessage.includes("start")) {
    await handleOnboarding(chatId, senderPhone);
  } else {
    await handleGeneralChat(chatId, messageText);
  }
}

async function handleOnboarding(chatId: string, phone: string) {
  console.log(`Onboarding: ${phone}`);
  // await sendLinqMessage(phone, "Welcome message here");
}

async function handleGeneralChat(chatId: string, text: string) {
  console.log(`General Chat: ${chatId}`);
}

function handleDeliveryFailure(data: LinqPayload["data"]) {
  console.error(`Failed to: ${data.sender_handle.handle}`);
}
