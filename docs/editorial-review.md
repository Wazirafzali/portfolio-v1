# AppFolor editorial refinement

## Scope and findings
Inspected App Router pages, shared components, project data, metadata, contact UI, and styles. Stack: Next.js 16, React 19, TypeScript, Tailwind 4 and native CSS. Public routes are the home page, seven project cases, Privacy, Terms, and framework loading/error/not-found states. No localization files were found. Team, WhyUs and TechStack are not mounted by the current home page.

Findings: repeated abstract slogans; service descriptions with few concrete deliverables; overly large legal subheadings; introductory text before legal page titles; duplicate Privacy introduction; rotated service labels; low-contrast service icons in light mode.

## Changes
- Hero explains the work and audience; shorter, explicit action labels.
- All six services explain available work without adding unsupported delivery claims.
- About, process, FAQ, footer and case-study framing use more direct English.
- Built projects remain distinct from concepts. Medlearna screenshots, limitations, routes and platform facts remain intact. No desktop case study was invented.
- Contact labels, guidance and fallback messages improved. Field values, validation, API, Turnstile, Redis, and Resend logic are unchanged.
- Existing Manrope / DM Sans system retained. Fluid hero measure, legal heading scale, status-page styling, mobile targets and light-mode icon contrast refined.
- Canonical URLs, brand email, service anchors and theme controls preserved.

## Representative copy changes
| Before | After |
| --- | --- |
| Your next idea. Beautifully built. | Websites and apps. Built around your work. |
| A little of what’s possible. | Built work. Ideas in progress. |
| Ready for the next step. | Test and hand over |
| Submit Project Request | Send project request |

## Validation
- Full ESLint passed after moving temporary review scripts outside the repository.
- TypeScript noEmit passed.
- Production build passed, including 19 generated pages.
- 25 existing contact/configuration tests passed.
- Browser: 11 routes at widths 320, 390, 768 and 1440, with no horizontal document overflow and one H1 per route.
- Screenshots reviewed for mobile/desktop hero, light-mode services, contact and Privacy.
- Mobile menu and focused Escape dismissal, theme switching/persistence, Android filter, and four service anchor targets checked.
- Git diff reviewed; no contact API changes.

## Remaining manual checks
Publish and review on a physical phone. No live email was sent during this review. Runtime error recovery was inspected in source, not triggered in production. This is not a full accessibility certification. Desktop project details remain pending from the owner.

## Changed source files
app/editorial.css, app/layout.tsx, app/page.tsx, app/privacy/page.tsx, app/terms/page.tsx, app/error.tsx, app/not-found.tsx, app/loading.tsx
components/Hero.tsx, Services.tsx, Projects.tsx, Process.tsx, FAQ.tsx, Footer.tsx, Contact.tsx, CaseStudy.tsx, MedlearnaScreens.tsx
data/projects.ts, data/team.ts
