// Dashboard fields sometimes receive an entire copied .env assignment.
// Only unwrap an assignment for the exact expected variable; never guess a key.
export function cleanContactSetting(name: string, raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  let value = raw.trim();
  const assignment = new RegExp(`^${name}\\s*=\\s*`);
  value = value.replace(assignment, "");
  if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1).trim();
  }
  return value || undefined;
}

type ProviderError = { name?: string; message?: string; statusCode?: number | null };

// Classify provider errors without returning recipient addresses or raw messages.
export function resendFailureCode(error: ProviderError): string {
  const message = (error.message || "").toLowerCase();
  if (message.includes("only send testing emails") || message.includes("own email address")) return "MAIL-TEST-RECIPIENT";
  if (message.includes("domain") && message.includes("not verified")) return "MAIL-DOMAIN";
  if (error.name === "suspended_api_key") return "MAIL-SUSPENDED";
  if (error.name === "restricted_api_key" || error.name === "invalid_permission") return "MAIL-PERMISSION";
  if (error.name === "invalid_api_key" || error.name === "missing_api_key" || error.statusCode === 401 || message.includes("api key is invalid")) return "MAIL-KEY";
  if (error.name?.includes("quota")) return "MAIL-QUOTA";
  if (error.statusCode === 429 || error.name === "rate_limit_exceeded") return "MAIL-LIMIT";
  if (error.name === "validation_error" || error.name === "invalid_parameter") return "MAIL-FIELDS";
  return "MAIL-PROVIDER";
}
