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
