---
name: "Hans Santos — Editorial Engineering Studio"
description: "Warm paper, expressive sans-serif type, and precise cobalt actions"
colors:
  canvas: "#f7f5ef"
  ink: "#1a1a1a"
  accent: "#1847e6"
  muted: "#606060"
  rule: "#d9d6cc"
  secondary-surface: "#f0ede5"
  control-text: "#ffffff"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(4rem, 8.594vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "normal"
    fontVariation: "\"opsz\" 12, \"wdth\" 83"
  headline:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 3.255vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  service-title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  caption:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  square: "0"
spacing:
  half: "0.5rem"
  three-quarter: "0.75rem"
  unit: "1rem"
  control-inline: "1.25rem"
  one-and-half: "1.5rem"
  double: "2rem"
  triple: "3rem"
  quadruple: "4rem"
  section: "6rem"
  gutter: "clamp(1.25rem, 4.6875vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.control-text}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "1rem 1.25rem"
    width: "21.25rem"
  link-text:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  service-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  evidence-panel:
    backgroundColor: "{colors.secondary-surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
  diagram-node:
    backgroundColor: "{colors.secondary-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "1.5rem"
---

# Design System: Hans Santos

## Overview

**Creative North Star: "Editorial engineering studio"**

Warm paper, expressive sans-serif headings, and open space give Hans's portfolio a personal, clear, deliberate voice. Near-black text carries the information; cobalt gives actions and selected headline words a consistent emphasis.

The world is flat and precise. Rules organize information, rectangular controls feel direct, and authentic project evidence supplies visual complexity. Motion is brief feedback; content is visible before any interaction.

**Key Characteristics:**

- Warm paper surfaces with near-black text.
- Bricolage Grotesque headings paired with Arial body text.
- Cobalt actions, fine rules, and square geometry.
- Open spacing, readable measures, and responsive stacking.
- Authentic imagery and explicitly labeled illustrative diagrams.

## Colors

A warm neutral palette supports one cobalt accent. The frontmatter owns the exact values.

### Primary

- **Cobalt:** Actions, selected display words, keyboard focus, selection, and the small identity marker.

### Neutral

- **Warm Paper:** The continuous page canvas.
- **Near Black:** Headings and primary text.
- **Quiet Gray:** Supporting text, captions, and diagram connections.
- **Paper Rule:** Fine separators between rows and sections.
- **Inset Paper:** Image backing and illustrative diagram surfaces.
- **Control White:** Text on the filled cobalt action and focused skip link.

### Named Rules

**The One Accent Rule.** Cobalt identifies emphasis and interaction; retain the warm neutral foundation when extending the system.

## Typography

**Display Font:** Locally hosted Bricolage Grotesque, with Arial and sans-serif fallbacks.

**Body Font:** Arial, with Helvetica and sans-serif fallbacks.

**Character:** Bricolage's expressive shapes give large headings a personal voice. Arial keeps explanations and interactive labels compact and familiar.

### Hierarchy

- **Display:** The largest heading uses the display token with optical sizing disabled and explicit optical-size and width axes. At intermediate widths its size is `clamp(4rem, 8.1vw, 7rem)`; at narrow widths it is `clamp(2.8rem, 12vw, 5.5rem)`.
- **Headline:** Section headings use the headline token. The contact heading has a larger contextual size, `clamp(3rem, 5.2vw, 5rem)`.
- **Title:** Project headings use the title token, retain the inherited regular weight, and limit their measure to 17 characters. Service names use the separate bold Arial service-title token; on narrow screens their size becomes `1.25rem`.
- **Body:** Standard text uses the body token. Lead explanations range from `1.25rem` to `1.4375rem`; project summaries use `1.375rem` with a `1.4` line height and become `1.125rem` on narrow screens. Long explanations use measures of 60–68 characters.
- **Label:** Navigation and the filled action use the label token. Labels retain normal case and tracking.
- **Caption:** Media captions and supporting availability notes use the caption token; captions have a maximum measure of 75 characters.

### Named Rules

**The Two Voices Rule.** Use Bricolage for expressive headings and Arial for explanatory copy and compact service names. Keep the display's measured variable-font settings when reusing that role.

## Layout

The outer shell has a fluid gutter and a maximum width of 1800px. Desktop root type scales with the viewport using `clamp(14px, 1.041667vw, 18.75px)` above 1100px; at smaller widths the normal browser root size applies. Preserve rem-based spacing so type and geometry scale together.

Paired information areas use CSS grids with generous gaps; row content uses smaller gaps. At 1100px, supporting text moves beneath row titles. At 700px, paired areas stack, navigation wraps while staying visible, and diagram connections turn vertically. The spacing tokens record the recurring rhythm; individual compositions and content order remain in the surface brief.

Body copy uses bounded character measures. Images fill their available width with natural aspect ratios. All content permits wrapping, including contact addresses and narrow-screen display text.

## Elevation & Depth

The system uses no shadows. A secondary paper surface frames media, while fine rules distinguish adjacent information. Depth comes from tonal separation, type scale, and space.

### Named Rules

**The Flat Paper Rule.** Extend the paper-and-rule vocabulary without adding decorative shadows or floating panels.

## Shapes

Controls, media, and diagram nodes have square corners. Separators and diagram outlines are thin, straight lines. The arrow is an inline stroked SVG that inherits the surrounding color; the identity marker is a small cobalt square.

## Components

### Buttons

The primary action is a rectangular filled link with a cobalt background and white text. It uses the frontmatter padding and width, caps its width at the available space, and maintains a minimum height of `3.75rem`. Its label and arrow share a flex row. Hover adds an underline; keyboard focus uses the global cobalt outline.

### Text Links

Secondary actions are open cobalt links with an inline arrow. They maintain a minimum height of `2.75rem`. Hover underlines the text. When motion is permitted, arrows shift slightly diagonally using the recorded motion tokens.

### Navigation

Navigation uses plain near-black labels with generous horizontal gaps and a minimum link height of `2.75rem`. It wraps into a visible full-width row on narrow screens. A focused skip link exposes a filled cobalt control above the main content.

### Service Rows

An open row combines a muted tabular ordinal, bold Arial title, supporting explanation, and cobalt arrow. A fine bottom rule supplies separation. The whole row is a link, with a visible keyboard outline. At intermediate widths the explanation moves under the title; narrow screens retain the ordinal and arrow columns.

### Evidence Panels

Image backing and diagram panels use Inset Paper with square corners. Images fill the panel without distortion. Captions remain outside the media surface. Unavailable-media text retains a readable measure and does not remove the surrounding description or source action.

### Diagram Nodes

Illustrative nodes use a thin Quiet Gray outline, an inset-paper surface, and clear title/detail text. Straight connectors describe relationships. Mobile stacking preserves the connections vertically. The visible illustrative label is factual evidence context.

## Do's and Don'ts

### Do:

- **Do** preserve the warm paper, near-black, and cobalt palette.
- **Do** use locally hosted Bricolage for expressive headings and Arial for explanatory text.
- **Do** retain square controls, fine rules, bounded text measures, and visible navigation at narrow widths.
- **Do** show a cobalt keyboard outline and retain content when reduced motion is requested.
- **Do** use authentic project imagery and label illustrative diagrams clearly.

### Don't:

- **Don't** add decorative shadows, pill controls, or a competing orange or dark visual theme.
- **Don't** substitute a system display face for the local Bricolage font.
- **Don't** hide meaningful content behind animation or require motion for comprehension.
- **Don't** invent project photography, customer evidence, credentials, or results.

