# CE Workflow and Styling Handoff

## Authority and Current Boundary

Canonical product authority: `docs/plans/2026-10-10-2226-feat-client-services-portfolio-plan.md`.
The document is implementation-ready. Hans approved option 1, Editorial engineering studio, on 2026-10-10, resolving R1.
Hans invoked `lfg` for the build and selected a visual mockup before code. Do not reopen the settled styling choice.
The initial styling gate was resolved interactively before entering the autonomous stages.
This file maps applicable skills; it does not claim that all have run or authorize unrelated workflows.

## Styling Discussion Brief

The approved structure is services first, aimed at potential clients across web, apps, electronics, and embedded systems.
The reference suggests stronger visual project presentation, but the user has not selected its dark theme, colors, typography, effects, or compositions.
The rough grayscale comparisons were layout probes only.

To fulfill R1, lead with a concise question about the look Hans wants, then present three analyzed choices with an option to mix or supply another reference.
Explain palette, type character, spacing, project-media treatment, mobile readability, and motion intent for each.
Use Impeccable's design analysis as a complement to the CE skills.
If a visual comp or prototype is needed, follow the applicable skill's user-choice workflow before creating it.

Candidate directions for analysis, not approved styling:

- **Editorial engineering studio:** light or warm-neutral surfaces, dark readable type, a controlled accent, generous space, and large authentic project imagery. Likely strongest for explaining four services to nontechnical clients; risks looking generic unless the actual builds carry the personality.
- **Dark technical studio:** charcoal surfaces, high-contrast typography, restrained color, and carefully limited schematic accents. Connects to the supplied reference and software/hardware range; can drift into a developer résumé or become harder to scan if effects dominate.
- **Contemporary maker portfolio:** a neutral foundation, a more expressive accent, diagrams alongside screenshots, and a visible personal voice. Can make the cross-disciplinary work memorable; needs restraint while authentic hardware imagery is limited.

Hans selected the editorial direction with strong project previews. The orange-accent mix was not selected.
The accepted styling is recorded in the canonical plan and R1's Outstanding Question is resolved. PRODUCT.md and DESIGN.md carry design context; DESIGN.md begins as a seed and will describe actual implemented tokens after review.
The candidate descriptions above are historical discussion evidence, not simultaneous build instructions.

## Execution record

On 2026-10-11 Hans requested a more interactive and modern presentation while approving the existing structure. The refinement preserves the editorial palette and factual project content, adds an illustrative service explorer, sticky section tracking, alternating project layouts, and clipboard feedback, and updates DESIGN.md and the home surface brief. Essential content remains server rendered. Motion is finite and has a static reduced-motion alternative. Verification covers the existing 22 browser scenarios plus five interaction scenarios; browser environment timeouts were rerun with one Chrome worker. No production dependencies were added.

R1 was resolved before planning and scaffolding. The current LFG run enriched the canonical plan, generated three editorial compositions, selected composition C under delegated autonomy, and implemented the services-first page. The hero and responsive comparison gates both scored 91%. Production checks cover navigation, exact contact destinations, all media variants, image failure, keyboard focus, no-JavaScript use, enlarged text, viewport widths, and reduced motion. Review and shipping outcomes are recorded in the PR and final handoff. No production deployment or recurring automation is part of this run.

## Historical Planning and Execution Sequence

1. Resume the requirements with the styling discussion governed by R1.
2. Check the completed requirements with `ce-doc-review` when useful, then have `ce-plan` enrich the same plan after the blocker is resolved.
3. During Hans's separately invoked `lfg` run, follow the installed pipeline's actual ordering for implementation, simplification, independent review, fixes, browser validation, and shipping.
4. Invoke conditional skills only when their documented triggers exist; external publishing, feedback sweeps, and scheduled monitoring are not implied by this matrix.

The initial request to use every CE skill is handled by accounting for each one below.
Forcing iOS tests, corpus retuning, external publication, or unrelated integrations would not improve this website.

## Complete CE Skill Map

| Skill | Applicability | Concrete role or reason |
|---|---|---|
| `ce-brainstorm` | Used | Owns the requirements and the unresolved styling choice; resume it to settle R1. |
| `ce-plan` | Required after R1 | Enrich the same unified plan with implementation units and verification; do not create a conflicting requirements document. |
| `ce-work` | Required during build | Implement the enriched plan and return evidence to the invoking pipeline. |
| `ce-noslop` | Used and reusable | Keep requirements, service copy, project explanations, and PR prose plain and factual. |
| `ce-doc-review` | Recommended after styling | Review the complete requirements for gaps before implementation planning; no code work. |
| `ce-ideate` | Useful for styling | Generate three distinct, project-grounded styling directions for R1. |
| `ce-pov` | Useful for styling | Evaluate those directions against client clarity, authentic evidence, and Hans's preferences. |
| `ce-strategy` | Conditional | Use if service positioning or business priorities remain unclear; do not reopen approved audience or scope without cause. |
| `ce-prototype` | Conditional on user choice | Offer if exact finish or motion cannot be judged from options and a cheap sketch; keep prototypes disposable. |
| `ce-bakeoff` | Conditional | Use only if developing competing solutions is needed to settle a consequential unresolved choice; not a duplicate layout exercise. |
| `ce-explain` | Conditional | Explain unfamiliar project behavior or source evidence that affects truthful case-study copy. |
| `ce-setup` | Conditional before build | Inspect or configure CE project health when needed; avoid installing unrelated packs. |
| `ce-worktree` | Conditional before build | Isolate implementation when the repository workflow calls for it; documentation approval is not a request to create one now. |
| `ce-simplify-code` | Required by active lfg | Simplify settled implementation while preserving the approved visual identity and behavior. |
| `ce-code-review` | Required by active lfg | Independently review code, regressions, accessibility behavior, and plan compliance. |
| `ce-test-browser` | Required by active lfg | Verify desktop/mobile flows, contact targets, media fallbacks, focus behavior, and reduced motion. |
| `ce-debug` | Conditional | Diagnose concrete failures found during implementation or verification. |
| `ce-optimize` | Conditional | Improve a measured performance or usability bottleneck; avoid speculative tuning. |
| `ce-polish` | Conditional interactive follow-up | Refine the working UI from Hans's browser feedback after the initial implementation. |
| `ce-dogfood` | Explicit invocation only | Available for a separately requested hands-off browser QA pass; merely listing it does not invoke it. |
| `ce-commit` | Conditional shipping support | Create a focused commit when needed by the chosen workflow; avoid duplicating commits owned by the shipping pipeline. |
| `ce-commit-push-pr` | Active shipping stage | Commit, push, and open a PR only during the later user-invoked build/shipping run. |
| `ce-babysit-pr` | Active shipping stage | Follow the actual PR and CI when the pipeline reaches that stage; no monitor or automation now. |
| `ce-resolve-pr-feedback` | Conditional after review | Resolve feedback actually left on the PR. |
| `ce-compound` | Conditional after verification | Capture non-obvious reusable lessons that are not already explained by the final code and tests. |
| `ce-compound-refresh` | Conditional maintenance | Audit captured lessons if they later become stale; no learning corpus exists yet. |
| `ce-handoff` | Useful on resume | Load this plan and supporting files in a fresh session; preserve the R1 gate and current readiness. |
| `ce-promote` | Optional after shipping | Draft a launch announcement if Hans asks; do not publish or message anyone from this planning request. |
| `ce-proof` | Optional sharing | Publish a planning document to Proof only when requested; local Markdown is the chosen deliverable. |
| `ce-riffrec-feedback-analysis` | Conditional on supplied feedback | Interpret a recording or capture if Hans provides one during refinement. |
| `ce-sweep` | Not currently applicable | No feedback-source integration has been requested; do not connect accounts or acknowledge external messages. |
| `ce-product-pulse` | Not currently applicable | No configured product signals or reporting cadence exists for this portfolio. |
| `ce-test-xcode` | Not applicable | The deliverable is a website; advertising app-development services does not make this a native iOS project. |
| `ce-retune` | Not applicable | This is not a skill-corpus tuning task and no benchmark harness was requested. |
| `lfg` | Invoked | Orchestrates planning, implementation, review, and PR delivery after R1 was resolved. |
