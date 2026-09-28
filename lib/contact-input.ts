export class ContactInputError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

const MAX_BODY_BYTES = 48 * 1024;

// Bound actual streamed bytes, even when Content-Length is missing or inaccurate.
export async function readContactBody(request: Request): Promise<Record<string, unknown>> {
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new ContactInputError("Please send the form as JSON.", 415);
  }
  const length = Number(request.headers.get("content-length"));
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    throw new ContactInputError("Your request is too large.", 413);
  }
  if (!request.body) throw new ContactInputError("Please complete the form.");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const deadline = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(new ContactInputError("Request timed out. Please try again.", 408));
      void reader.cancel().catch(() => {});
    }, 10_000);
  });
  try {
    while (true) {
      const { done, value } = await Promise.race([reader.read(), deadline]);
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        void reader.cancel().catch(() => {});
        throw new ContactInputError("Your request is too large.", 413);
      }
      chunks.push(value);
    }
  } finally {
    clearTimeout(timer);
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  let body: unknown;
  try { body = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); }
  catch { throw new ContactInputError("The request is invalid. Please submit the form again."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new ContactInputError("The request must contain form fields.");
  }
  const data = body as Record<string, unknown>;
  if (data.budget !== undefined && (typeof data.budget !== "string" || data.budget.length > 100)) {
    throw new ContactInputError("Budget must be at most 100 characters.");
  }
  if (typeof data.turnstileToken !== "string" || !data.turnstileToken.trim() || data.turnstileToken.length > 2048) {
    throw new ContactInputError("Please complete the security verification.");
  }
  return data;
}
