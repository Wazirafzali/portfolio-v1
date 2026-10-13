# AppFolor security review — 2026-10-13

Scope: current source, tracked files, dependency audit and low-impact public endpoint checks. This is not an exhaustive penetration test or a guarantee of security.

## Fixed
- Upstash limiter defaults to success on timeout. The contact route now rejects this fallback with HTTP 503 rather than continuing to mail verification.
- Reject ASCII control characters in name/email before email headers are constructed. The mail API uses structured JSON; no demonstrated SMTP exploit is claimed.
- Extracted existing HTML escaping for direct hostile-input regression coverage.

## Verified
- 28 local tests pass, including malicious HTML escaping, CRLF/control input and timeout handling.
- No SQL query engine, SQL query construction, shell execution or user-controlled outbound destination found in application paths reviewed. SQL injection is not applicable to the current contact implementation; no claim about future database features.
- Email body values are escaped; recipient/sender are server configuration, not user-selected. Reply-To is validated. React renders form messages as text. Structured data escapes '<'.
- JSON request type, actual streamed body size (48 KiB), read deadline, token bounds, field lengths, service/timeline allowlists exist.
- Turnstile is verified server-side before email. Redis limit is five attempts per ten minutes per IP.
- Live HTTPS homepage exposes CSP, HSTS, nosniff, DENY, Referrer-Policy and Permissions-Policy.
- Two live invalid POST requests (empty JSON and malformed JSON) returned HTTP 400. Neither could send email.
- No tracked .env files or matches for the limited private-key/GitHub-token/Resend-key patterns scanned. Values were not printed.
- npm audit --omit=dev: zero reported vulnerabilities.
- Full npm audit: five high entries trace to braces <=3.0.3 through the ESLint dependency chain; no patched version listed at https://github.com/advisories/GHSA-vfj7-8cjw-p6xm. Automatic suggested downgrade of eslint-config-next to 14 was not applied to Next 16. Do not process untrusted glob patterns in build tooling.

## Residual findings / limits
- CSP permits inline scripts for current Next static rendering. It is defense in depth, not a complete XSS barrier. A nonce/hash migration needs a separate rendering and caching review.
- Turnstile success is checked, but hostname/action are not additionally validated in application code. Widget hostname restrictions in Cloudflare need account-level review.
- IP rate limiting relies on hosting-provided forwarding headers. Spoof resistance at the deployment edge was not exhaustively tested.
- No authenticated sessions or administrative/data API were found. Classic authenticated CSRF/IDOR tests are therefore not applicable to this implementation. JSON-only requests and Turnstile reduce form abuse; no claim of complete anti-bot protection.
- No live flooding, successful email send, forged valid Turnstile token, credential rotation, or production outage simulation was performed.
- Account MFA, collaborator permissions, secret scopes, Git history, cloud logs, backups and Cloudflare widget settings need owner/account access.
- Dependency advisories and toolchain exposure remain an open finding. Existing Node module-format warning is unrelated to the tested security controls.

## Follow-up: Turnstile hostname validation
The contact route now accepts only strict success=true and an exact approved hostname returned by Cloudflare Siteverify. Approved: appfolor.vercel.app and appfolor-preview.wazirafzali57.workers.dev. Unrelated hosts, lookalike suffixes, missing hostnames and malformed results are rejected. The check does not trust request Host or Origin headers. Localhost and arbitrary Vercel preview domains cannot submit mail through this configuration; no production bypass exists.
When adding a custom domain, update contactHostnames in lib/contact-security.ts and the Cloudflare widget hostname configuration before enabling contact there.
29 tests pass. Live successful delivery still needs a real user Turnstile interaction after deployment.
Reference: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
