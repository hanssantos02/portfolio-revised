# Hans Santos — Client Services Portfolio

A services-first portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The single page covers web development, app development, electronics engineering, and embedded systems, followed by source-backed personal and hackathon projects, a working approach, and direct contact. The premium editorial design pairs an interactive engineering map with numbered services, dark project spreads, a personal introduction, and a cobalt contact section.

## Run locally

Use Node.js 24.18.1 or a later Node 24 release, with npm 11.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For the production version:

```sh
npm run build
npm run start
```

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:browser
```

The browser suite starts its own production server on port 3133. It checks section order, contact destinations, hash navigation, keyboard focus, JavaScript-free use, eight viewport widths, enlarged text, reduced motion, failed images, independent media/demo variants, the service explorer, clipboard success/failure, and section tracking. If Chrome is already installed, use `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm run test:browser -- --workers=1` instead of downloading Chromium. This environment uses one Chrome worker to avoid browser contention.

The locked baseline respects the environment's release-age and peer compatibility rules: Playwright 1.63.0, TypeScript 6.0.3, ESLint 9.39.5. `npm audit` currently reports five high findings from one unpatched `braces` advisory in the development lint dependency chain. These dependencies are not part of the deployed browser bundle; do not use a forced framework downgrade as an audit fix.

## Update content and evidence

Edit `src/content/portfolio.ts` for services, deliverable labels, project purpose/capabilities/verified technology, demo availability, and the exact email/Facebook destinations. Put genuine captures in `public/projects/`, with actual dimensions, descriptive alt text, and a truthful caption. The screenshots include explicitly disclosed example or default sample data.

The introduction’s “View résumé” button opens `public/resume-hans-santos.pdf` in a new tab. Replace that file to update the résumé while keeping its URL and button intact.

Each project's `media` is an independent `image`, `diagram`, or `text` entry. To replace the drawer diagram with a real photo, change its media to an image entry and update the caption and provenance. No page redesign is needed. If a demo is unavailable, change its `demo` to `unavailable`; its source remains accessible. See [project evidence](docs/project-evidence.md) for verified source revisions, claims, capture origins, and a replacement example.

Display text and links are server rendered. Client behavior is limited to the service map, section tracking, email copying, and project image failure handling. Enhancement controls are disabled in server-rendered HTML and enabled after hydration through `src/components/use-client-ready.ts`; essential content and destinations work without JavaScript. The font is self-hosted with its license in `src/fonts/`. No database, CMS, form service, runtime external content fetch, or deployment integration is configured.

## Product and design authority

The [canonical plan](docs/plans/2026-10-10-2226-feat-client-services-portfolio-plan.md) records approved scope and styling. [PRODUCT.md](PRODUCT.md) owns product context; [DESIGN.md](DESIGN.md) records the implemented visual system. The selected visual mockup and its approval are retained in `.impeccable/mocks/`.

## Redesign review

The 11 October 2026 redesign is documented in [redesign-review.md](docs/redesign-review.md). `src/components/about-process.tsx` owns the personal introduction and four-stage process; the homepage composes the sections, and `src/app/globals.css` owns the visual tokens and responsive rules. No application dependency or deployment configuration was added.
