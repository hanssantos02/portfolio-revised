---
name: Hans Santos — Interfaces & Instruments
description: An independent engineering studio in warm ivory, charcoal, and cobalt
colors:
  canvas: '#f7f5ef'
  ink: '#171b26'
  accent: '#1847e6'
  soft-blue: '#a6bedf'
  muted: '#596273'
  rule: '#d6d7d3'
  inset: '#eeeee8'
  dark-rule: '#465063'
  dark-muted: '#b7c0ce'
  map-line: '#667891'
  map-active: '#adc6ff'
typography:
  display:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(3.25rem, 8.1vw, 9.1rem)
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: -0.035em
    fontVariation: '"opsz" 12, "wdth" 85'
  headline:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2.75rem, 4.6vw, 5.5rem)
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.03em
  project-title:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2.25rem, 4.2vw, 5rem)
    fontWeight: 550
    lineHeight: 1.04
    letterSpacing: -0.025em
  service-title:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(1.75rem, 2.7vw, 3.2rem)
    fontWeight: 550
    lineHeight: 1.12
    letterSpacing: -0.025em
  body:
    fontFamily: Arial, Helvetica, sans-serif
    lineHeight: 1.55
  lead:
    fontFamily: Arial, Helvetica, sans-serif
    fontSize: clamp(1.125rem, 1.35vw, 1.375rem)
    lineHeight: 1.55
  project-summary:
    fontFamily: Arial, Helvetica, sans-serif
    fontSize: clamp(1.25rem, 1.6vw, 1.75rem)
    lineHeight: 1.4
  personal-context:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(1.75rem, 2.5vw, 3rem)
    lineHeight: 1.2
    letterSpacing: -0.02em
  process-title:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: 1.375rem
    fontWeight: 550
    lineHeight: 1.25
  navigation:
    fontFamily: Arial, Helvetica, sans-serif
    fontSize: 0.9375rem
    lineHeight: 1.55
  caption:
    fontFamily: Arial, Helvetica, sans-serif
    fontSize: 0.75rem
    lineHeight: 1.55
  contact:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(3rem, 5.4vw, 6.5rem)
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.03em
  contact-link:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2rem, 3.8vw, 4rem)
    fontWeight: 550
    lineHeight: 1.3
  mobile-display:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2.8rem, 9.9vw, 4.5rem)
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: -0.035em
    fontVariation: '"opsz" 12, "wdth" 85'
  mobile-headline:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2.5rem, 9vw, 4rem)
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.03em
  mobile-contact:
    fontFamily: Bricolage Grotesque, Arial, sans-serif
    fontSize: clamp(2.75rem, 10vw, 4rem)
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.03em
rounded:
  square: '0'
  circle: 50%
spacing:
  half: 0.5rem
  three-quarter: 0.75rem
  unit: 1rem
  control-inline: 1.25rem
  one-and-half: 1.5rem
  double: 2rem
  triple: 3rem
  gutter: clamp(1.25rem, 4.7vw, 5.5rem)
  section: clamp(4rem, 7vw, 8rem)
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.canvas}'
    rounded: '{rounded.square}'
    padding: 1rem 1.25rem
  button-primary-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.canvas}'
  link-text:
    textColor: '{colors.accent}'
  navigation:
    textColor: '{colors.ink}'
    typography: '{typography.navigation}'
  service-selector:
    textColor: '{colors.dark-muted}'
    rounded: '{rounded.square}'
    padding: 0.5rem 0.65rem
  service-selector-selected:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.canvas}'
  button-copy:
    textColor: '{colors.canvas}'
    rounded: '{rounded.square}'
    padding: 0.5rem 0.75rem
  button-copy-hover:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.accent}'
  service-row:
    textColor: '{colors.ink}'
    padding: 2rem 0
  assembly-map:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.canvas}'
    rounded: '{rounded.square}'
    padding: 1.25rem 1.75rem
  diagram-node:
    backgroundColor: '{colors.canvas}'
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: 1rem
  evidence-panel:
    backgroundColor: '{colors.inset}'
    textColor: '{colors.muted}'
    rounded: '{rounded.square}'
    padding: 2rem
---

# Design System: Hans Santos

## Overview

**Creative North Star: "Interfaces & instruments"**

A premium independent engineering studio connects expressive typography with precise assembly geometry. Warm ivory gives the reading space a human character; charcoal supplies a focused field for diagrams and authentic project evidence. Cobalt marks actions and emphasis, with soft blue supporting legibility on dark surfaces.

The system is spacious, flat, and deliberate. Large headings establish hierarchy, open numbered rows make information scannable, and rectangular media frames give real interfaces room to speak. The authored monogram connects the personal voice to the service map. Motion settles or confirms a state; readable content is present before animation or interaction.

Hans’s comprehensive redesign request on **11 October 2026** supersedes the earlier composition and quiet-motion limits. The initial Editorial engineering studio selection on 10 October and the earlier 11 October interactive refinement remain factual history, not competing visual authorities. This document records the implemented redesign in `src/app/globals.css`, `src/app/page.tsx`, and their components. No generated comp was approved for this redesign; historical comps remain historical. The canonical plan and `.impeccable/surfaces/src-app-page-tsx.md` record the current authority and page-specific expression.

**Key Characteristics:**

- Warm ivory, charcoal, cobalt, and soft blue with thin contextual rules.
- Self-hosted Bricolage Grotesque headings and readable Arial body copy.
- Open numbered rows, broad media spreads, and rectangular controls.
- An original assembly map with readable selected detail on narrow screens.
- Finite motion, visible navigation, keyboard focus, and honest evidence labels.

## Colors

The normative values above mirror the root CSS properties. The palette pairs warm paper with cool engineering tones. Sidecar tonal ramps are synthesized panel metadata, not additional implemented palette tokens.

### Primary

- **Cobalt** (`accent`): primary actions, selected service controls, highlighted headline words, ordinals, and the full-width contact field.

### Secondary

- **Soft Blue** (`soft-blue`): emphasis, technology notes, and keyboard outlines within dark or cobalt sections.
- **Active Connection Blue** (`map-active`): selected diagram paths, node outlines, and explorer destination links.

### Neutral

- **Warm Ivory** (`canvas`): the page canvas, diagram backing, and readable foreground on charcoal/cobalt.
- **Charcoal** (`ink`): body text, the assembly-map field, and selected-work section.
- **Slate Copy** (`muted`): supporting copy on ivory.
- **Paper Rule** (`rule`): dividers on light surfaces.
- **Inset Ivory** (`inset`): image backing and failed-image fallback field.
- **Dark Rule** (`dark-rule`): dividers on charcoal.
- **Dark Supporting Copy** (`dark-muted`): descriptions, captions, and inactive controls on charcoal.
- **Connection Slate** (`map-line`): inactive map geometry and selector hover outlines.

**The Contextual Contrast Rule.** Use ink and muted copy on ivory; use ivory and dark-muted copy on charcoal. Soft blue supports dark-surface emphasis and focus, while cobalt carries primary actions and the contact field.

## Typography

**Display Font:** self-hosted Bricolage Grotesque, with Arial and sans-serif fallbacks. `next/font/local` loads the variable WOFF2 with the available 200–800 weight range and swap behavior; no external font request is needed.

**Body Font:** Arial, Helvetica, sans-serif. There is no separate mono face.

Bricolage gives the studio its expressive, slightly irregular voice. Arial carries the reading work. The browser’s root font size remains intact; the source body inherits its base size and sets the documented line height.

### Hierarchy

- **Display:** the fluid display role spans the opening; its fixed optical and width axes keep the large two-line setting controlled. The mobile-display role applies below the mobile breakpoint.
- **Headline:** section headings use the fluid headline role; mobile-headline replaces its size at narrow widths.
- **Project and service titles:** both use Bricolage at medium weight, with their own fluid ramps and tighter tracking. Project titles become 2.5rem on mobile; service titles become 1.75rem.
- **Lead and project summary:** the lead introduces Hans beside the map; project summaries have a stronger size and tighter line height. Lead measures are 34ch, becoming 38ch on mobile.
- **Personal context and process titles:** a fluid personal introduction pairs with compact Bricolage step headings. Service and process ordinals use tabular numerals.
- **Body and navigation:** normal explanatory copy uses the inherited body rhythm. Compact navigation uses its documented role and becomes 0.875rem on mobile.
- **Caption:** source captions, diagram notes, and technical context stay secondary. Media captions have a maximum measure of 75ch.
- **Contact:** the oversized close and email action have separate ramps; mobile-contact governs the narrow closing heading.

**The Two Voices Rule.** Use Bricolage for headings, ordinals, and identity; use Arial for explanations, navigation, and controls. Keep the display role’s measured optical-size and width settings.

## Layout

The shell has a maximum width of 1800px, centered with the fluid gutter token. Large sections use the fluid section-spacing token. Thin rules establish boundaries without boxing every item. Body measures stay bounded even when the shell is wide.

The home surface opens with a full-width two-line headline. Supporting copy and actions sit beside the charcoal map in a 0.42fr/1fr grid; this becomes 0.55fr/1fr at 75rem and a single column at 56.25rem. Open numbered service rows use four desktop columns, then place descriptions under titles. Selected work uses a broad image/copy split; the Library spread reverses that emphasis. Project spreads become a single column at 56.25rem. The personal introduction uses two columns; the four-stage process changes to two columns at 56.25rem and one column at 43.75rem. Contact stacks at 43.75rem.

Source breakpoints are **75rem**, **56.25rem**, and **43.75rem**; retain rem units so geometry responds to the visitor’s text preferences. At 43.75rem, the full network map is replaced by an enlarged selected capability and connection, while all four native selection controls remain visible. Header navigation stays visible and wraps; no hidden menu is introduced. Anchor scroll space is 8rem, increasing to 9rem on mobile, with corresponding project-heading margins.

The wide two-line hero, alternating work spreads, and closing contact composition belong to this home surface rather than every future page. The reusable world is the type, contextual palette, open spacing, assembly geometry, and flat surfaces.

## Elevation & Depth

The implementation uses **no shadows**. Depth comes from warm ivory, charcoal, and cobalt fields; inset image backing; fine rules; and strong differences in type scale. Project screenshots supply complexity without decorative UI framing.

**The Flat Surface Rule.** Create hierarchy through tonal fields, spacing, scale, and thin rules; do not add decorative shadows or floating card treatments.

## Shapes

Controls, map containers, media frames, and diagram nodes are square and rectangular. Light and dark dividers use 1px borders; selected navigation uses a 2px underline. Circular service-arrow outlines use the circle token and measure 3rem, becoming 2.75rem on mobile. Circles, an outlined identity diamond, and the monogram’s geometric strokes belong to the assembly language; they do not imply rounded cards or pill controls.

## Components

### Buttons

The primary action is a native anchor with cobalt fill, ivory text, square corners, and the frontmatter padding. Its minimum height is 3.75rem; hover changes the fill to charcoal. Text actions are open links with inline SVG arrows and a minimum height of 2.75rem. Project and contact text actions use ivory in their contextual fields.

The clipboard button is an outlined native button on cobalt. Enhancement buttons for copying and map selection remain disabled until hydration; without JavaScript the default map, all service descriptions, visible address, and native contact links remain available. Disabled controls use the native default cursor, and hover feedback applies only to enabled buttons. Its border is soft blue; hover inverts to ivory with cobalt text. A status region reports success or provides the manual-copy instruction. The visible email address and mail link remain independent of clipboard success.

Keyboard outlines are 3px with a 5px offset. Light surfaces use cobalt, the primary action uses charcoal, and the explorer/work/contact fields use soft blue. Inline SVG arrows shift 3px on hover only when motion is permitted.

### Navigation

An opaque sticky header combines the authored geometric monogram with the Bricolage brand and plain visible navigation. Navigation targets have a minimum width and height of 2.75rem. Native links expose the active section through `aria-current="location"` and a cobalt underline. Hover retains link affordance. The header stacks at the mobile breakpoint while navigation remains visible. A focusable skip link precedes the page content.

### Service Rows

Whole-row native anchors combine cobalt ordinals, large Bricolage titles, supporting deliverables, readable descriptions, and a circular arrow. Fine bottom rules keep the rows open. Hover changes the title to cobalt and fills the circular arrow with cobalt/ivory; the focus outline remains distinct. Responsive rows preserve every service description.

### Assembly Map

The charcoal explorer connects browser, application, circuit, and firmware sketches around the authored monogram. Four native buttons expose `aria-pressed`; the selected button uses cobalt/ivory and the active connection color. Selected paths and node strokes gain emphasis; inactive geometry remains visible on desktop. The small-screen version enlarges the selected node and its connection instead of compressing the full map. A polite live region contains the explanation and destination link. The map is visibly labeled as an illustrative service concept; Apps leads to Cloak’s application project.

### Project Evidence

Authentic screenshots render at their own aspect ratio in square inset frames. Purpose, detail, and source links live outside the media boundary. Hardware relationships use square outlined nodes on ivory with a visible **Illustrative diagram** label. Image failures leave a readable fallback and the surrounding evidence intact. The Ledger and Library captures from 10 October 2026 and the drawer’s source-confirmed limitations remain recorded in `docs/project-evidence.md`; the redesign does not recast them as new captures or verified physical operation.

Cloak joins the same project-spread layout with a genuine local-interface capture and a fictional-data caption. Its motion-video and repository actions remain live while the demo is temporarily unavailable. A pending demo is a native disabled button, with no URL, transparent background, and `--dark-muted` text; the adjacent note explains its state. Supply an available demo URL in the content model when it returns.

### Motion

With `prefers-reduced-motion: no-preference`, headline settling and selected-path drawing each run for **700ms** using the source easing. Color/border feedback and arrow/navigation movement use **240ms**; arrow movement uses the same easing while the color transitions retain their source default timing function. No animation library, perpetual signal, parallax, or hidden content reveal is present. Reduced motion leaves the geometry and selected colors static, keeps text updates, and changes smooth scrolling to automatic scrolling.

## Do's and Don'ts

### Do:

- Do preserve the contextual palette and its readable light-on-dark pairings.
- Do use the self-hosted Bricolage font for headings and Arial for explanatory copy.
- Do retain generous spacing, bounded text measures, square surfaces, and visible navigation.
- Do keep all four service controls available when the map becomes selected detail on mobile.
- Do preserve visible keyboard focus and static content under reduced motion.
- Do use authentic screenshots and clearly label illustrative diagrams.

### Don't:

- Don’t turn the open service rows and project spreads into a uniform card grid.
- Don’t introduce decorative shadows or rounded panel treatments into this flat system.
- Don’t use soft blue or dark-muted copy on ivory without checking its contrast in that context.
- Don’t hide meaningful content behind animation or require motion to understand a selection.
- Don’t treat the service map as project evidence or invent project photography, clients, credentials, or results.
