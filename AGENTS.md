# Portfolio Project Instructions

Read `docs/plans/2026-10-10-2226-feat-client-services-portfolio-plan.md` before continuing this project.
It is the canonical requirements-only plan, not an implementation-ready specification.

## First Interaction on Resume

Honor requirement R1 before downstream work: resolve the user's exact styling choice interactively.
Use `docs/ce-workflow.md` for the analysis brief and candidate directions, and `docs/portfolio-content.md` for factual content.
The services-first wireframe approves content structure only.
An `lfg` invocation does not waive R1; the user's instruction takes precedence over that skill's usual hands-off behavior.
If the plan still lists styling under Resolve Before Planning, do not begin implementation planning, install dependencies, scaffold an app, write production UI, or generate final assets.
Once explicit styling approval is recorded in the plan, do not ask the same question again.

## Existing Scope

The approved stack and product constraints are in the plan's R2–R12.
The current session is documentation only, and the user intends to invoke `lfg` separately for the build.
Do not treat supporting documents or the skill map as authorization to publish, deploy, send messages, or start recurring automations.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
