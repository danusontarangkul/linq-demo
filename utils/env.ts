export function getEnvVar(name: string): string {
  const value = process.env[name];

  if (!value || value.length === 0) {
    throw new Error(
      `[Config Error]: Environment variable ${name} is not set. 
         Make sure it is defined in your .env.local or deployment settings.`,
    );
  }

  return value;
}

export const config = {
  linq: {
    phoneNumber: getEnvVar("NEXT_PUBLIC_LINQ_PHONE_NUMBER"),
    apiKey: getEnvVar("LINQ_API_KEY"),
    webhookSecret: getEnvVar("LINQ_WEBHOOK_SECRET"),
  },
};
