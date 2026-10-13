export function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export function hasControlCharacters(value: string) {
  return /[\u0000-\u001f\u007f]/.test(value);
}

// Upstash may return success=true when its timeout fallback wins.
export function rateLimitUnavailable(result: { reason?: string }) {
  return result.reason === "timeout";
}

// Keep this list explicit: never trust a hostname supplied in request headers.
// Add a purchased domain here before enabling its production contact form.
const contactHostnames = new Set([
  "appfolor.vercel.app",
  "appfolor-preview.wazirafzali57.workers.dev",
]);

export function validTurnstileResult(value: unknown): boolean {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const result = value as Record<string, unknown>;
  return result.success === true &&
    typeof result.hostname === "string" &&
    contactHostnames.has(result.hostname.toLowerCase());
}
