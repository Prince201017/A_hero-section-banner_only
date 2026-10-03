# DESIGN SYSTEM DIRECTION

## Purpose

This project is a collection of brand-facing visual experiments.

It is not a template library.

The system should provide enough consistency that different experiments feel related, while allowing each experiment to have its own art direction.

## Foundation

### Typography

Use three roles:

Display — large, expressive, editorial.

Interface — compact, highly legible, neutral.

Technical — monospaced or tabular style for measurements, object IDs, system labels, and metadata.

Do not use five or six unrelated font families.

### Spacing

Favor generous spacing.

The visual hierarchy should be created through scale, position, whitespace, weight, contrast, and motion — not through borders and cards everywhere.

### Borders

Use hairline borders.

Borders should describe structure, not decorate empty space.

### Radius

Avoid universal rounded-card styling.

Different materials may use different radii.

Editorial frames can be sharp.

Physical surfaces can have subtle rounding.

Controls can use restrained radii.

## Color architecture

Define semantic variables instead of scattering hex values through components.

Suggested tokens:

BG
SURFACE
SURFACE-RAISED
TEXT
TEXT-MUTED
LINE
ACCENT
CHROME
CHROME-HIGHLIGHT
CHROME-SHADOW

The same component should work in light and dark environments.

## Motion language

Motion should be:

- deliberate
- short
- physical
- calm
- reversible
- interruptible

Avoid:

- bounce everywhere
- random parallax
- perpetual floating
- excessive blur
- glitch transitions
- infinite attention-seeking loops

Recommended conceptual motion curves:

SOFT-IN
SOFT-OUT
MATERIAL
SNAPPY
EDITORIAL

Create reusable motion constants rather than repeating arbitrary durations.

## Interaction hierarchy

Level 1 — passive

The design looks complete without interaction.

Level 2 — responsive

Pointer movement subtly changes material, light, or position.

Level 3 — intentional

Click, drag, hover, or keyboard interaction reveals another state.

Level 4 — transformational

The whole composition changes.

Use Level 4 rarely.

## Component philosophy

A component should answer one visual question.

Good components:

BrandLockup
ChromeSurface
MaterialController
ProductStage
TypeExperiment
ImageAperture
MaterialScanner
LogoConstruction
MotionSignature

Avoid giant components named EverythingSection or MainHero that contain unrelated ideas.

## Responsive philosophy

Do not simply shrink desktop compositions.

For mobile:

- reduce competing elements
- preserve the main visual idea
- move metadata when necessary
- replace pointer-only interaction with touch
- maintain the visual hierarchy

The mobile version can be a different composition.

## Accessibility

Every experiment must have:

- keyboard-accessible controls
- visible focus
- semantic labels
- reduced-motion behavior
- sufficient text contrast
- non-motion fallback

The visual experience can be experimental without making the interface inaccessible.

## Performance

Prefer CSS transforms, opacity, clip-path, SVG, and requestAnimationFrame where needed.

Avoid unnecessary large canvas simulations, multiple WebGL contexts, heavy video, and continuous expensive layout calculations.

Pointer-driven effects should be throttled or frame-scheduled.

## Brand rule

The interface should feel designed before it feels animated.

Animation is a material property of the identity, not the identity itself.
