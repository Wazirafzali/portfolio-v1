import { getCloudflareContext } from "@opennextjs/cloudflare";

type ContactEnv = Partial<Record<
  | "APPFOLOR_HOST"
  | "UPSTASH_REDIS_REST_URL"
  | "UPSTASH_REDIS_REST_TOKEN"
  | "TURNSTILE_SECRET_KEY"
  | "RESEND_API_KEY"
  | "CONTACT_TO_EMAIL"
  | "CONTACT_FROM_EMAIL",
  string
>>;

// Read bindings during the request, so secrets added after a build are available.
export function getContactEnv(): ContactEnv {
  try {
    return getCloudflareContext().env as ContactEnv;
  } catch {
    // Vercel and plain next dev have no Cloudflare request context.
    return process.env as ContactEnv;
  }
}
