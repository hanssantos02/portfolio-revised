# Project Evidence

U2 establishes the content and evidence used by the portfolio. Verification and capture date: **2026-10-10**. The selected work is personal project work, including learning examples, rather than paid client commissions. Source inspection demonstrates implemented code; it does not establish customer use, measured results, physical hardware testing, or commercial deployment.

## Traceability

| Portfolio content | Authority | Requirements |
| --- | --- | --- |
| Four service offers | Hans's approved offers in `docs/portfolio-content.md` and the canonical plan | R3, R5 |
| Ledger screenshot and copy | `hanssantos02/todo-list`, revision `d393d24522104fb785cb4e438001766049c45da9`; running demo | R5–R6, R8, R12 |
| Library screenshot and copy | `hanssantos02/Library`, revision `b922d10ffeda259151cb2b0717433a0be803edb2`; running demo | R5–R6, R8, R12 |
| Cloak screenshot and copy | Owner-supplied local `appbuilders-ceres` checkout, revision `61d6bcc2dd162e378b922ff53b65f8540b5a3616`; source and real local interface; reviewed 2026-10-11 | R5–R6, R8, R12 |
| Smart Fingerprint Unlock Drawer copy and diagram | `hanssantos02/Smart-Fingerprint-Unlock-Drawer`, revision `ba11f70731c79f7df36f25c81aa1ebf8a78c6129`; README and firmware | R5, R7–R8, R12; F2 |
| Email and Facebook | Exact owner-supplied destinations in `docs/portfolio-content.md` | R9; AE6 |
| Independent media and demo variants | `src/content/portfolio.ts` | R7, R12; F4; AE4, AE8; KTD3–KTD4 |

The source revision and verification date are stored separately from visitor copy in each project's `evidence` field. Demo status is independent of media: a retained screenshot is not proof that a demo is still available.

## Ledger

- Repository: [hanssantos02/todo-list](https://github.com/hanssantos02/todo-list).
- Source: [entry point](https://github.com/hanssantos02/todo-list/blob/d393d24522104fb785cb4e438001766049c45da9/src/index.js), [task model](https://github.com/hanssantos02/todo-list/blob/d393d24522104fb785cb4e438001766049c45da9/src/todo.js), and [storage module](https://github.com/hanssantos02/todo-list/blob/d393d24522104fb785cb4e438001766049c45da9/src/storage.js).
- Demo inspected and captured: [Ledger demo](https://hanssantos02.github.io/todo-list/).
- Displayed claims: project organisation, task creation and completion, priorities, optional due dates, and browser localStorage persistence. The entry point wires these operations to the interface; `todo.js` defines task properties and completion; `storage.js` saves and loads project data with localStorage.
- Capture: `public/projects/ledger.webp`, **1268 × 713 px**. Original browser capture was `/tmp/portfolio-project-captures/ledger.jpg`; the local WebP preserves its dimensions and visible interface. No screen elements were composited or generated.
- Capture data: the local browser was populated through the real interface with the synthetic project **Portfolio demo** and three example entries: **Sketch the layout** (high priority, due 15 October 2026, completed), **Review the service copy** (medium priority), and **Check the mobile view** (low priority). The screenshot caption explicitly identifies these as example entries. They are not client records or evidence of delivered work.
- Published alt text describes the three priorities and completed state; the caption records the date and example-data disclosure.

## Library

- Repository: [hanssantos02/Library](https://github.com/hanssantos02/Library).
- Source: [javascript.js](https://github.com/hanssantos02/Library/blob/b922d10ffeda259151cb2b0717433a0be803edb2/javascript.js). `Book` begins at line 30; validation begins at line 105; search and read filters are at lines 126–138; read toggling is at line 283; the three starter books are at lines 429–435.
- Demo inspected and captured: [Library demo](https://hanssantos02.github.io/Library/).
- Displayed claims: validated book entry, read-status toggling, title/author search, and filtering by read status. Data is held in the page's `myLibrary` array. Changes do not persist across refresh; the copy therefore describes the current page session. The README's future-work list is stale and is not the authority for these capabilities.
- Capture: `public/projects/library.webp`, **1268 × 713 px**. Original browser capture was `/tmp/portfolio-project-captures/library.jpg`; the local WebP preserves its dimensions and visible interface. No screen elements were composited or generated.
- Capture data: the demo's default seeded shelf contains **The Left Hand of Darkness**, **Pilgrim at Tinker Creek**, and **The Master and Margarita**. No user entries were added. The caption identifies the books as default samples; they do not represent Hans's personal reading history.
- Published alt text identifies the default sample books and the search/filter controls.

## Smart Fingerprint Unlock Drawer

- Repository: [hanssantos02/Smart-Fingerprint-Unlock-Drawer](https://github.com/hanssantos02/Smart-Fingerprint-Unlock-Drawer).
- Source: [README](https://github.com/hanssantos02/Smart-Fingerprint-Unlock-Drawer/blob/ba11f70731c79f7df36f25c81aa1ebf8a78c6129/README.md) and [SmartDrawer.ino](https://github.com/hanssantos02/Smart-Fingerprint-Unlock-Drawer/blob/ba11f70731c79f7df36f25c81aa1ebf8a78c6129/SmartDrawer.ino).
- Displayed claims: ESP32 firmware, a fingerprint sensor connected over UART, fingerprint enrollment, lock control with automatic relocking, and a local Wi-Fi browser dashboard for user management and recent activity.
- Code evidence: UART setup at line 854; fingerprint matching/unlocking at lines 932–946; enrollment/storage at lines 953–1008; relocking at lines 895–898; dashboard API registration at lines 824–831. The README and firmware explain the ESP32, fingerprint sensor, and lock relationships.
- Media: `type: "diagram"`, `id: "smart-drawer"`. The diagram must be visibly labeled **Illustrative diagram**, with readable component context. It represents source-confirmed relationships, not a wiring guide, physical photograph, or verified hardware test.
- Demo: `type: "unavailable"`. No public hardware demo was supplied. The repository source remains available independently.
- Limits: no real hardware photographs or videos were provided. No security guarantee, measured performance, customer, or production-readiness claim is supported. The dashboard code has no login/authentication layer. Hardware photos and video remain pending from Hans.

## Cloak — added 11 October 2026

- Hans requested this addition from `/home/nexus/repos/appbuilders-ceres/`. Its clean checkout identifies [Jedddy/appbuilders-ceres](https://github.com/Jedddy/appbuilders-ceres) as the source repository, revision `61d6bcc2dd162e378b922ff53b65f8540b5a3616`. The repository returned HTTP 200 during inspection.
- Kind: **Hackathon application project**, supported by its `PRODUCT.md` AppBuildersPH Hackathon context. This label does not claim a prize, sole authorship, paying customer, or commercial result.
- Source: `components/package-workspace.tsx`, `components/review-panel.tsx`, `components/preview-panel.tsx`, `lib/server/pipeline.ts`, `lib/server/export.ts`, `lib/server/layers.ts`, and `lib/ai/`. These implement recipient-aware review, keep/redact decisions, preview, rules/OCR/local-model detection, and rebuilt exports with unchanged originals. Stack labels trace to `package.json` and the wired detection/AI layers.
- Capture: `public/projects/cloak.webp`, **1280 × 720 px**, captured from the actual local Review screen on 11 October 2026. The isolated `/tmp/cloak-portfolio-preview` workspace used a fictional “Northwind Studio (demo)” recipient and “Contractor handoff · demo” package, with `fixtures/demo-package/notes.md` uploaded through the actual API and scanned in rules-only mode. No interface elements were composited or generated; no existing user workspace was read or modified.
- Screenshot scope: real interface and rules-only findings. It does not demonstrate AI-model accuracy or guarantee detection of every sensitive item. The caption explicitly names fictional data and rules-only mode.
- Live demo: Hans reported it is temporarily unavailable. The pending demo has no URL and renders a disabled placeholder; it does not link to a blank URL or reload the portfolio. Change `demo` to `{ type: "available", url: "…" }` when a genuine working destination is supplied.
- Motion video: [owner-supplied TikTok link](https://vt.tiktok.com/ZSbvj6Bhr/). It is a separate external action, not an embedded video or a substitute claim that the public application is working.
- Browser coverage asserts the authentic image/caption, exact video and source URLs, disabled demo, and absence of a demo link.

## Contact

- Email address: `hansprielasantos02@gmail.com`; link destination must be `mailto:hansprielasantos02@gmail.com`.
- Facebook destination: `https://www.facebook.com/profile.php?id=61576625156355`.
- These are the exact destinations in `docs/portfolio-content.md`. Verification should inspect link destinations without sending a message. Facebook may require login; email opens the visitor's mail application.

## Maintaining evidence

Edit project copy and availability in `src/content/portfolio.ts`; keep source links, revisions, and dates current. Put replacement images in `public/projects/` and set their actual width, height, descriptive alt text, and factual caption. Screenshot captures must come from real project interfaces and disclose synthetic or seeded data.

To replace the drawer diagram after Hans supplies a real photo, replace only its `media` value with an image entry:

```ts
media: {
  type: "image",
  src: "/projects/smart-drawer.webp",
  width: /* actual image width */,
  height: /* actual image height */,
  alt: /* description of the real photograph */,
  caption: /* owner, capture date, and what the photo demonstrates */,
}
```

Update this document's provenance and remove the illustrative caption for that media. The surrounding project description and links use the same project model (F4). A photograph does not by itself establish functionality or performance. If usable media is unavailable, use `{ type: "text", note: "…" }`; if a demo fails verification, use `{ type: "unavailable", note: "…" }`. Keep the verified source action available in both cases (AE4, AE8).

## Verification status

U2 uses manual source and capture inspection, actual image metadata, and TypeScript checks as replacement verification for this content/asset unit. No existing browser tests were present at intake. The completed production suite verifies U2's content alongside the page/media components from U3–U4: exact contact links, text media with unavailable demo, diagram/image replacement, visible diagram labeling, and intercepted image failure. `tests/portfolio.spec.ts` and `tests/media.spec.ts` also cover keyboard use, no JavaScript, five viewport widths, enlarged text, and reduced motion. Browser verification uses installed Chrome through Playwright; the default browser download timed out.

## Redesign evidence review — 11 October 2026

The redesign retains the original authentic screenshot files, capture dates, sample-data disclosures, source revisions, project limitations, and exact contacts. It adds `purpose` and `technologies` to the typed project model. Ledger's JavaScript/localStorage labels trace to its recorded entry point and storage module. Library's JavaScript/HTML/CSS labels describe its existing browser implementation. The drawer's ESP32, C++/Arduino, UART, and Wi-Fi labels trace to the recorded firmware and README. Purpose statements explain the same implemented capabilities; they do not add customer outcomes.

Both existing public demo URLs returned HTTP 200 during the redesign review. This reachability check does not re-date the original source inspection or guarantee future availability. The three personal projects remain distinct from service illustrations and commissioned work. No hardware photograph, hardware test result, security guarantee, or application case study was added.
