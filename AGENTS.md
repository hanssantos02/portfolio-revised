# Portfolio Project Instructions

Read `docs/plans/2026-10-10-2226-feat-client-services-portfolio-plan.md` before continuing this project.
It is the canonical implementation-ready plan and records the approved product and technical requirements.

## First Interaction on Resume

Honor requirement R1 before downstream work: resolve the user's exact styling choice interactively.
Use `docs/ce-workflow.md` for the analysis brief and candidate directions, and `docs/portfolio-content.md` for factual content.
The services-first wireframe approves content structure only.
An `lfg` invocation does not waive R1; the user's instruction takes precedence over that skill's usual hands-off behavior.
If the plan still lists styling under Resolve Before Planning, do not begin implementation planning, install dependencies, scaffold an app, write production UI, or generate final assets.
Once explicit styling approval is recorded in the plan, do not ask the same question again.

## Existing Scope

The approved stack and product constraints are in the plan's R2–R12.
Hans approved Editorial engineering studio styling and invoked `lfg` for implementation, verification, and PR delivery. Do not ask for styling again while that approval remains recorded in the plan.
Production deployment, unrelated messages, and recurring automations remain outside this scope. Supporting documents and the skill map do not authorize those actions.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
