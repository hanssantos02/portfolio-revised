---
name: "Hans Santos — Interactive Editorial Engineering Studio"
description: "Warm paper, expressive type, and an interactive cobalt workbench"
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
    fontSize: "clamp(3.5rem, 7vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "\"opsz\" 12, \"wdth\" 83"
  headline:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.1vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  service-title:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.7vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  lead:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
  supporting:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
  brand:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "1.625rem"
  process:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "1.5rem"
  contact:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(3rem, 5.5vw, 6rem)"
  contact-link:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "2.5rem"
  tablet-display:
    fontSize: "clamp(3.5rem, 10vw, 6.5rem)"
  mobile-display:
    fontSize: "clamp(2.8rem, 12vw, 5.5rem)"
  mobile-action:
    fontSize: "0.9375rem"
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
  section: "7rem"
  gutter: "clamp(1.25rem, 4.6875vw, 5rem)"
---

# Design System: Hans Santos

The approved editorial engineering studio identity remains warm ivory, near-black, and cobalt with locally hosted Bricolage Grotesque headings. Hans's 11 October 2026 refinement asks for stronger interaction and a more memorable presentation, inspired by Ben Scott's portfolio, while preserving the services-first structure.

## Composition

An expressive headline and project inquiry sit beside a cobalt service explorer. Selecting Web, Apps, Electronics, or Embedded replaces the illustrative system sketch, supporting description, and relevant next step. The sketches describe service concepts; they are not screenshots of completed work. The Apps action leads to contact because no dedicated application case study has been verified.

Open service rows retain all four offers with authored geometric SVG symbols. Selected work uses alternating image-and-copy compositions, returning to a single column below 900px. Authentic images and clearly labeled hardware evidence carry the project story. A cobalt contact section closes the page with exact email and Facebook destinations and an optional clipboard action.

## Typography and geometry

Bricolage is the display voice, including service headings; Arial remains the explanatory body face. Normal text uses 1rem, lead copy 1.25rem, and supporting text .875rem. Media provenance and sketch notes use .75rem. Body measures stay bounded. Display sizes are fluid and use the documented optical and width axes. Narrow screens use the mobile display ramp.

The maximum shell width is 1800px. The browser root font size is left intact; rem spacing follows the visitor's text preferences. Breakpoints at 1100, 900, and 700px adjust the hero, project geometry, diagram, and navigation. Controls and section boundaries remain rectangular and flat. The phone silhouette in the service sketch is a device diagram, not a rounded UI panel.

## Interaction and motion

The hero explorer is the focal interaction: a 650ms linework reveal and two finite 1600ms signal passes play on selection. There is no perpetual animation, scroll listener, animation dependency, or hidden content reveal. Supporting arrow and color feedback uses 240ms transitions. Reduced motion removes the linework and signal animation and smooth scrolling, retaining selected state and readable content.

The opaque sticky header tracks the section in view through IntersectionObserver. Viewport-height pixel margins preserve the observation region on wide screens. Navigation wraps visibly on mobile. Anchors reserve space beneath the header.

Buttons use native keyboard behavior and expose selection through aria-pressed. The explorer announces updates through a polite live region. Cobalt focus outlines become ivory within cobalt surfaces. Clipboard success and failure use a status region; the literal email and mail link are always present. Essential descriptions, evidence, and contact links remain server rendered and usable without JavaScript.

## Color and surface rules

Cobalt is the single accent, including the service explorer, action links, contact surface, selection, and scrollbar. Colored surfaces use ivory text and borders tinted from ivory. Near-black and gray text sit on paper. Hover feedback never replaces a visible focus outline.

Retain square controls, thin rules, and flat surfaces. Do not introduce competing orange or dark themes, decorative shadows, external font requests, fabricated project imagery, testimonials, or business results. Keep illustrative service geometry visibly distinguished from authentic project evidence.
