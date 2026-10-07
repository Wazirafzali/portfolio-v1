# Cloudflare migration rehearsal

The production Vercel deployment has not been moved. No domain, paid resource,
R2 bucket, database or Cloudflare account has been created by these changes.

## Build and preview

1. `npm ci`
2. Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` for the build (the existing .env.local works locally).
3. `npm run build:cloudflare`
4. `npm run preview:cloudflare`

The adapter's Windows build/runtime must pass before this is called deployment-ready.
If Windows support blocks the adapter, run the same locked dependencies on Linux/WSL.
Do not bypass version checks or silently downgrade Next.js.

`npm run build` remains the Vercel build. Cloudflare builds disable Vercel-only
analytics. Static pages use the read-only static-assets cache; contact stays dynamic.
No R2 or D1 binding is required for the current prerendered pages.

## Before a preview deployment

Use your own Cloudflare account. Login is interactive. Keep secrets out of Git and
out of chat. Configure these runtime secrets in the Worker settings:

- UPSTASH_REDIS_REST_URL
- UPSTASH_REDIS_REST_TOKEN
- TURNSTILE_SECRET_KEY
- RESEND_API_KEY
- CONTACT_TO_EMAIL
- CONTACT_FROM_EMAIL (optional; retain existing sender if unset)

For local preview only, put these in ignored `.dev.vars` (never upload this file).
APPFOLOR_HOST=cloudflare is configured in wrangler.jsonc. It makes rate limiting
use Cloudflare's cf-connecting-ip rather than untrusted forwarded headers.
Build NEXT_PUBLIC_TURNSTILE_SITE_KEY into the app; add the actual preview hostname
to the Turnstile widget's allowlist before testing the form.

The name appfolor-preview is a staging Worker, not a production domain.
Deploy only after build/runtime checks pass, account is selected, and secrets are set:
`npm run deploy:cloudflare`

## Acceptance checks before changing production

- Home, all seven project pages, privacy, terms, sitemap, OG image and missing-page route.
- Security headers on HTML and assets; mobile menus, themes and project filters.
- Malformed contact requests rejected; no email sent by these negative checks.
- One user-approved real inquiry delivers an email; rate limit remains effective.
- Record compressed Worker size and measured CPU use. Free-plan eligibility is
  not guaranteed by a successful Next.js build.
- Set the final canonical origin consistently in metadata, sitemap and structured data.
  Existing appfolor.vercel.app canonicals are intentionally unchanged for rehearsal.
- Configure custom domain, HTTPS and Turnstile hostnames; rerun the above checks.
- Keep Vercel available until the new host is verified, then handle redirects.

References: https://opennext.js.org/cloudflare/get-started
https://opennext.js.org/cloudflare/caching

## Current rehearsal result (2026-10-07)
Native Windows build stopped in esbuild while resolving open-next.config.ts (parent-directory access denied). WSL is not installed. The manually triggered GitHub Actions workflow Cloudflare compatibility check builds on Ubuntu without deploying or using production secrets. Its test-key build must never be published. Local contact-input tests: 13 passed. Adapter dependency audit has unresolved high-severity build/preview-tool findings; review before deployment.

Normal Next.js 16.3.8 production build: passed (19 routes). ESLint: passed. The Linux compatibility workflow runs automatically when codex/cloudflare-preparation is pushed, or manually from Actions. Unresolved audit findings include braces/brace-expansion, source-map-js and sharp through build/preview dependencies. Do not use npm audit fix --force: it proposes incompatible downgrades. Review patched versions before approving migration.

## Dependency follow-up (2026-10-07)
Linux build and dry-run deployment passed at commit 8895767 (GitHub run 37646896873). Updated lockfile fixes source-map-js, brace-expansion, undici and sharp findings. Wrangler is now 4.148.0. Miniflare is pinned through an override to the patched sharp 0.35.5; remove the override once upstream uses that version. Online npm audit --omit=dev: zero findings. Full audit: five high findings, all the single unpatched braces issue propagated through the ESLint dependency chain; this tool processes repository file patterns, not contact input. Local lint, Next build and 13 contact tests passed. The updated Linux workflow additionally checks Worker page responses and rejection of malformed contact JSON; that updated run is pending. No deployment or login has been completed.
