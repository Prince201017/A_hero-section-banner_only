# BRAND SHOWCASE LAB — Experimental Next.js / TypeScript Direction

This repository is not a conventional long scrolling website.

Its purpose is to explore small, high-impact interface moments that make a brand feel designed: hero fragments, identity systems, product stages, kinetic typography, chrome surfaces, interactive controls, motion studies, and unusual UI compositions.

Think brand showcase / visual laboratory / premium digital identity, not a generic SaaS landing page.

## Core creative rule

Build independent, memorable sections or experiments that can exist alone.

Do NOT default to:

- Navbar → hero → features → testimonials → pricing → FAQ → footer
- Huge card grids
- Generic glassmorphism
- Generic gradients behind text
- Fake dashboards
- Excessive rounded rectangles
- Stock-looking 3D blobs
- AI-startup visual clichés
- A single continuous scroll experience containing everything

Every experiment should have a reason to exist.

## Visual vocabulary

Use a controlled mixture of:

- near-black graphite
- warm white / paper
- surgical white
- chrome / liquid metal
- smoked glass
- one deliberate accent colour
- extremely subtle grain
- hairline rules
- oversized editorial typography
- condensed labels
- tiny metadata
- precise spacing
- asymmetric composition
- large negative space
- cinematic image crops
- directional light
- optical blur
- restrained depth
- physical-feeling motion

The interface should feel closer to a fashion campaign, industrial design presentation, automotive configurator, art-direction board, or premium product launch than a template.

## Experiments worth building

### 01 — Identity Lockup

A brand wordmark sits almost alone in the viewport.

On pointer movement, a tiny amount of optical distortion follows the cursor. Letters remain readable. The effect should feel like material under light rather than a digital glitch.

The brand name can briefly split into:

MARK / MATERIAL / MOTION

Then resolve back into the identity.

### 02 — Chrome Header Surface

Create a browser-like top surface with:

- account avatar
- account name
- compact three-dot menu
- address/search field
- subtle chrome material
- light/dark compatibility
- a very small open/action button

The action button must remain legible in both themes. It should not become a giant CTA.

The chrome should be controlled through a small set of variables:

- highlight position
- reflection intensity
- surface brightness
- saturation
- edge contrast
- blur
- grain
- shadow density

### 03 — Gradient Material Controller

Do not create a fake browser search box.

Instead, create a small controller panel that actually changes the visual material of a top chrome/header surface.

Controls may include:

- hue
- saturation
- luminance
- gradient angle
- reflection
- opacity
- blur
- noise
- border intensity

The preview must update immediately.

### 04 — Product Object Stage

One product/object in the center.

No product grid.

The object rotates or subtly shifts according to pointer position. Lighting changes independently from rotation.

Useful states:

REST / FOCUS / INSPECT / ACTIVE

A tiny metadata rail can show:

MATERIAL / FINISH / DIMENSION / EDITION

### 05 — Editorial Type Block

Large type occupies the composition.

One word can become a physical object through:

- variable font weight
- tracking
- clipping
- mask movement
- vertical displacement
- light sweep

The typography should remain readable at every frame.

### 06 — Image Aperture

Instead of placing an image inside a standard card, create a geometric aperture that reveals it.

The aperture could be:

- vertical slit
- circle
- irregular polygon
- oversized crop window
- offset frame

Pointer movement controls the reveal by a small amount.

### 07 — Material Scanner

A tiny scanning line travels across a product image.

When it reaches a detail, contextual information appears beside the scan:

01 / EDGE FINISH

02 / SURFACE

03 / CONSTRUCTION

This should feel like a product inspection instrument, not a dashboard.

### 08 — Logo Construction Mode

Show a logo as construction geometry.

Thin lines, anchor points, radius measurements and alignment marks appear briefly.

Then the construction disappears and the final identity remains.

### 09 — Motion Signature

A single element repeatedly performs a brand-specific motion.

Not a decorative animation.

The motion itself becomes recognizable identity.

Examples:

- a controlled 14° tilt
- a slow optical stretch
- a two-stage reveal
- a short magnetic pull
- a soft snap into alignment

Document the motion as a reusable TypeScript animation primitive.

### 10 — Archive / Edition Selector

A tiny selector lets the visitor move between:

01 / FORM
02 / MATERIAL
03 / OBJECT
04 / MOTION

Each selection replaces the stage rather than creating another giant page section.

### 11 — Quiet Mode

A deliberately almost-empty composition.

One object, one line, one interaction.

Use this as a test for whether the brand identity works without decoration.

### 12 — Light Sweep

A directional light sweeps over a surface only when the user pauses.

The effect should be subtle enough that it can be mistaken for physical studio lighting.

### 13 — Cursor Instrument

Replace the normal cursor only inside the experiment area.

Possible states:

MOVE
HOLD
DRAG
INSPECT

Keep it tiny. Never turn the cursor into a giant glowing orb.

### 14 — Numbered Brand Spec

A small technical label system:

OBJECT 04
SYSTEM / 02
MATERIAL / 07
FRAME / 1440 × 900

This makes the work feel catalogued rather than decorated.

### 15 — Single-Frame Campaign

Design one viewport like a luxury campaign poster.

The composition should be complete without requiring the visitor to scroll.

Possible hierarchy:

brand → hero object → one sentence → tiny edition data → one action.

## Engineering principles

Use Next.js + TypeScript.

Prefer small isolated components:

- BrandLockup
- ChromeSurface
- MaterialController
- ProductStage
- TypeExperiment
- ImageAperture
- MaterialScanner
- LogoConstruction
- MotionSignature
- EditionSelector
- QuietMode

Use CSS variables for visual parameters.

Use Motion or GSAP where motion complexity warrants it.

Use pointer events carefully and support touch fallback.

Respect reduced motion, keyboard navigation, focus visibility, responsive layouts, and high contrast where needed.

Animation must never be required to understand the content.

## The quality test

Before accepting an experiment, ask:

1. Would this still feel intentional with the animation removed?
2. Is there one clear visual idea?
3. Does the interaction reinforce the brand?
4. Is the composition strong at first frame?
5. Does it avoid looking like a generic template?
6. Does every decorative element have a reason?
7. Could the experiment be shown as a single screenshot and still communicate a design idea?

If the answer is no, simplify it.
