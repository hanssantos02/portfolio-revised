# Premium freelance portfolio redesign

Review date: 11 October 2026. Branch: `codex/premium-engineering-redesign`.

## Before and after

The incumbent had useful service exploration, honest evidence, and direct contact, but its restrained headline, repeated paper surfaces, modest project imagery, and similar section rhythms gave the work little visual emphasis. The redesigned page uses a broad two-line typographic opening, a charcoal connected-capability map, open numbered services, dark editorial project spreads, a personal maker introduction, a four-stage process, and a full-width cobalt contact close.

The brief's premium digital engineering studio direction governs this replacement. The historical editorial approval remains recorded; the canonical plan now also records Hans's comprehensive redesign authority. R1 remains resolved. No further styling approval was requested. Earlier comps remain historical assets, rather than the spatial target for this new direct implementation. Impeccable context, new-work, critique/audit, motion, clarification, craft-floor, polish, finish review, and documentation guidance informed the work.

## Implemented system

- Warm ivory `#f7f5ef`, charcoal `#171b26`, cobalt `#1847e6`, soft blue `#a6bedf`, and muted slate `#596273`.
- Self-hosted Bricolage Grotesque for display and headings; Arial/Helvetica for readable body copy. Existing license and font assets retained.
- Fluid typography, open service rows, thin rules, restrained circular actions, and alternating project compositions. No card grid, generated project interface, stock photo, gradients, or animation dependency.
- One finite 700ms headline settle and selected-connection draw. Supporting interactions use 240ms feedback. Reduced motion retains static geometry, readable state changes, and ordinary anchor jumps.
- Desktop service map preserves all four connected capabilities. Narrow screens enlarge the selected capability with all four labeled controls still available.

## Content, architecture, and resilience

`src/app/page.tsx` composes the page from reusable sections. `about-process.tsx` separates the introduction/process from the homepage. `build-explorer.tsx` shares authored capability geometry across desktop and mobile views. `portfolio.ts` now includes concise service deliverables and source-backed project purpose/technology fields.

The contact destinations, personal-project labels, real screenshot files, captions, sample-data disclosures, and evidence limitations are preserved. Library remains session-only; the drawer has no public hardware demo and retains a labeled system diagram. Project image/diagram/text variants and demo availability remain independent.

Enhancement controls remain disabled until hydration via the shared `use-client-ready.ts` hook. A visitor without JavaScript still has service content, the default illustrative map, project descriptions, source/demo links, and direct contact information. Image errors and clipboard errors retain useful recovery messages. Hashes including `#intro`, `#services`, `#work`, and `#contact` remain compatible.

## Verification

The initial redesign results, before the later Cloak addition, are recorded below:

| Gate | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed |
| `npm run build` | Passed; static root route |
| `PLAYWRIGHT_CHROMIUM_CHANNEL=chrome npm run test:browser -- --workers=1` | Passed; 32 tests in 47.7s |
| Axe WCAG A/AA scan | Zero violations at 360/390/768/1024/1086/1440/1920px after final corrections |
| Overflow / page errors | None at those seven visual review widths |
| Source diff whitespace | `git diff --check` passed |

Installed Chrome provides Playwright's Chromium browser. The browser suite preserves coverage for source/media fallbacks, keyboard focus, no-JavaScript contact and disabled enhancements, 200% text, reduced motion, clipboard success/failure, service selection, hash compatibility, and active navigation. Tests intentionally track the new headline and service description; existing functional coverage was retained and expanded to the requested tablet/large-desktop sizes.

## Independent visual and technical review

Impeccable's fresh finish reviewer returned **ship** at screenshot-and-source scope: no material visual fixes. It reviewed all seven widths, plus high-resolution section evidence, against the request and direction contract. Interactive behavior was verified by browser tests and direct browser use; screenshots alone do not measure animation smoothness.

The technical audit ran Impeccable's detector once. It returned two contextual font warnings for the intentional body/diagram Arial fallback and twenty type-ramp advisories against the old design document. The font warnings are contextual false positives; the new intentional type ramp is documented in the replacement DESIGN.md. The detector was not rerun to chase a numeric clean result.

The audit identified service label/name mismatch, unlabeled-role ARIA containers, enabled no-JS controls, and a narrow Work navigation target. Those were corrected: natural service-link naming, explicit groups, hydration-safe disabled state, and 44px minimum navigation targets. A transient collapsed viewport also exposed an existing negative-margin observer edge case; header margin magnitudes now clamp safely, and a resize regression checks recovery without page errors. The documenter updated DESIGN.md and the sidecar to match the implemented system. The scoped technical verdict returned ship with all recorded fixes resolved.

Axe leaves a manual contrast check for decorative SVG labels because it cannot infer the SVG background. Those labels use the same high-contrast ivory or dark-muted text on charcoal as the surrounding surface. Recorded normal-text pairs exceed 4.5:1; focus-indicator pairs exceed 3:1. This is targeted automated/manual evidence, not a blanket WCAG certification or a performance benchmark.

## Review artifacts and limits

Local screenshots are in `.impeccable/review/`: `before-1440.png`, `before-390.png`, `desktop.png`, `mobile.png`, the five other width captures, hero captures, and desktop/mobile services/work/approach/contact captures. Full-page screenshots retain the authentic sticky header. Section-only captures temporarily hide sticky chrome without changing layout to avoid screenshot overlays; the initial obstructed section captures were replaced before independent review.

`accessibility.json`, `detector.json`, and `technical-audit.md` hold local technical evidence. This directory is intentionally ignored by Git; these screenshots are local review artifacts, not shipped website assets.

Hardware photos/video remain future owner-supplied evidence. At the initial redesign review, no dedicated verified application project was available, so Apps invited discussion. Cloak subsequently supplies application evidence as described below. No deployment configuration or application dependencies changed, and no production deployment was performed during implementation.

## Cloak addition and final source verification

Hans supplied Cloak from `/home/nexus/repos/appbuilders-ceres/` on 11 October 2026. The project entry includes a genuine local-interface screenshot with fictional-data and rules-only disclosures, source-backed copy, its repository link, and the exact owner-supplied TikTok motion-video link. Its live-demo placeholder is a disabled native button with no destination; the note explains temporary unavailability. The Apps selector now links to Cloak. Source/capture provenance is recorded in `docs/project-evidence.md`.

After this addition and Hans’s introduction edit, lint, typecheck, and production build passed. The production browser suite passed **33 tests in 51.1s**, including Cloak’s image/caption, source/video destinations, disabled demo, and absence of a broken demo link. Desktop and 390px mobile inspection confirmed readable presentation and no horizontal overflow. These checks do not re-date the earlier independent review or axe scan. Local captures are `.impeccable/review/cloak-desktop.jpg`, `cloak-mobile.jpg`, and `cloak-mobile-actions.jpg`.
