import type { NextConfig } from "next";

const isDevelopment =
  process.env.NODE_ENV === "development";

const contentSecurityPolicy = `
  default-src 'self';

  script-src
    'self'
    'unsafe-inline'
    ${isDevelopment ? "'unsafe-eval'" : ""}
    https://challenges.cloudflare.com
    https://va.vercel-scripts.com;

  style-src
    'self'
    'unsafe-inline';

  img-src
    'self'
    data:
    blob:
    https:;

  font-src
    'self'
    data:;

  connect-src
    'self'
    https://challenges.cloudflare.com
    https://va.vercel-scripts.com
    https://vitals.vercel-insights.com;

  frame-src
    https://challenges.cloudflare.com;

  object-src
    'none';

  base-uri
    'self';

  form-action
    'self';

  frame-ancestors
    'none';

  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value:
      "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;