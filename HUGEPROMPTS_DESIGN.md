# HUGE PROMPTS — BRAND / DESIGN / NEXT.JS EXPERIMENTS

These are intentionally large creative briefs for generating individual design experiments, not an instruction to generate one huge website.

---

# PROMPT 01 — PREMIUM DIGITAL BRAND OBJECT

Create a single-screen premium digital brand showcase experiment using Next.js and TypeScript.

The composition must feel like a high-end brand identity presentation rather than a marketing website.

Do not build a conventional navbar, feature grid, pricing section, testimonial section, or long scrolling landing page.

The viewport should contain one dominant visual object and a very small amount of supporting information.

The object should have a physical material quality: brushed metal, polished chrome, ceramic, glass, engineered plastic, paper, stone, or another material appropriate to the selected brand.

Use a dark graphite or warm-white environment with restrained contrast.

The brand mark should be treated as part of the object rather than pasted on top of it.

Introduce extremely subtle environmental lighting.

Pointer movement should influence the object by a small amount. The user should feel that they are inspecting something physical.

Use layered lighting rather than an obvious gradient.

Include tiny technical metadata such as:

OBJECT 01
MATERIAL / POLISHED CHROME
EDITION / 001
STATE / ACTIVE

Keep metadata secondary.

The primary composition should have significant negative space.

The object must not look like a cheap 3D mockup.

Avoid generic glassmorphism, neon cyberpunk, purple AI gradients, floating blobs, giant buttons, excessive shadows, unnecessary cards, stock photography, and template-like SaaS UI.

The final result should feel suitable for a luxury technology, fashion, automotive, architecture, jewelry, or industrial design brand.

Implement the experience as a reusable component rather than a complete website.

---

# PROMPT 02 — CHROME SURFACE / BROWSER-LIKE BRAND FRAME

Create a highly polished browser-like chrome surface as a standalone interface experiment.

The top edge of the viewport contains a compact account area with a circular avatar, account name, and a minimal three-dot menu.

Next to it, create a restrained address/search-like surface.

The surface must feel physical.

It should have:

subtle metallic reflection,
controlled gradient,
soft edge highlight,
very fine grain,
variable luminance,
slight depth,
realistic but restrained shadows.

Add a compact action button. It must be visually small and work on both light and dark themes.

Do not make the action button oversized.

Create a small material-control interface somewhere outside the main chrome surface.

The controller should modify the chrome in real time.

Parameters:

HUE
SATURATION
BRIGHTNESS
ANGLE
REFLECTION
BLUR
GRAIN
EDGE

The controls should feel like a design tool, not a settings dashboard.

When a value changes, the actual chrome surface must react immediately.

The experiment should communicate the idea that a brand's interface material can be designed like a physical surface.

Do not build a full browser.

Do not create fake tabs with meaningless content.

The browser metaphor is only the material frame.

---

# PROMPT 03 — EDITORIAL TYPOGRAPHIC MACHINE

Create a standalone typographic composition where one large word becomes the entire visual object.

Use a premium editorial typeface or a carefully selected system fallback.

The word should occupy a major portion of the viewport.

Create a controlled animation system where the typography can transition between:

STATIC
EXPANDED
COMPRESSED
CUT
SHIFT
REVEAL

The transitions should feel mechanical and intentional.

Use masks, clipping, tracking, variable font weight, opacity, and translation.

Do not use glitch effects.

Do not use random letter scrambling.

Do not use excessive distortion.

The word should remain legible.

Add tiny editorial metadata in a monospaced or technical style.

Example metadata:

TYPE STUDY / 04
WEIGHT / 680
TRACKING / -0.04em
MOTION / LINEAR

The composition must work as a poster even before interaction.

---

# PROMPT 04 — PRODUCT INSPECTION STAGE

Create a single product inspection scene.

The product is centered with large negative space around it.

The user can move the pointer around the product to subtly change the camera angle and lighting.

Add three invisible interaction zones.

When the pointer enters a zone, a minimal annotation appears.

Example:

01 / EDGE
PRECISION-MILLED PROFILE

02 / SURFACE
MICRO-BRUSHED FINISH

03 / CORE
INTERNAL STRUCTURE

Annotations should appear near the object but never cover it.

The interface should feel like a museum object, engineering prototype, or luxury product inspection system.

Avoid dashboard UI.

Avoid cards.

Avoid excessive labels.

The product is the hero.

---

# PROMPT 05 — BRAND MOTION SIGNATURE

Create a single animated identity gesture.

The experiment contains only a logo, wordmark, or geometric symbol.

The symbol starts in a neutral state.

On interaction, it performs one carefully designed movement.

The movement should have:

anticipation,
primary motion,
settling,
micro-after-motion.

The total motion should be short and memorable.

Do not create an animation showcase containing dozens of effects.

The goal is to define one motion that could become the brand's recognizable digital signature.

Expose the timing as TypeScript constants so the motion can later be reused.

---

# PROMPT 06 — APERTURE IMAGE SYSTEM

Create an image presentation where the image is initially visible through a narrow geometric aperture.

The aperture expands as the user interacts.

Possible shape:

vertical rectangle,
circle,
diagonal slit,
soft polygon,
custom SVG path.

The surrounding composition should remain extremely minimal.

The image should feel discovered rather than displayed.

When the aperture expands, reveal a small amount of contextual typography.

Use smooth interpolation rather than abrupt CSS transitions.

The image should not be inside a card.

The aperture itself is the interface.

---

# PROMPT 07 — MATERIAL LAB

Create a standalone material laboratory for a brand.

The screen displays one surface.

The user can modify a handful of physical-feeling parameters:

roughness,
reflection,
light direction,
density,
opacity,
grain,
temperature.

Every adjustment changes the visual result.

Use CSS gradients, pseudo-elements, filters, SVG, Canvas, or WebGL only where appropriate.

Do not make the controls look like a generic admin dashboard.

The visual surface should occupy most of the screen.

The controls should be compact and editorial.

Display a small label:

MATERIAL STUDY
SURFACE / 07

The experiment should communicate how a digital brand can have a physical material language.

---

# PROMPT 08 — LUXURY CAMPAIGN FRAME

Create a single viewport that looks like a finished luxury campaign frame.

It should include:

one strong image,
one brand lockup,
one short statement,
one tiny technical identifier,
one restrained action.

Nothing else.

Use asymmetric composition.

Avoid centered-everything layouts.

Typography should be large but not necessarily centered.

The image crop should feel intentional.

The brand mark should have enough space to breathe.

Do not add a conventional footer.

Do not add a long story.

The frame should be ready to screenshot as a campaign image.

---

# PROMPT 09 — IDENTITY CONSTRUCTION VIEW

Create an interactive logo construction mode.

Start with the finished logo.

When activated, reveal:

grid,
construction circles,
alignment lines,
anchor points,
radius labels,
baseline,
safe-area markers.

Animate the construction lines into place.

Then allow the system to collapse back into the finished logo.

The technical graphics must feel like real design documentation.

Avoid fake random measurements.

Use consistent geometry.

Use a monochrome technical annotation language.

---

# PROMPT 10 — QUIET BRAND

Create the smallest possible premium brand interface.

One object.

One word.

One tiny label.

One interaction.

Nothing more.

The design should rely entirely on proportion, typography, material, light, and motion.

This experiment exists to test whether a brand can feel distinctive without visual noise.

If an element does not improve the composition, remove it.

---

# IMPLEMENTATION CONSTRAINT

For all prompts above, produce an implementation that is:

Next.js
TypeScript
component-driven
responsive
accessible
performance-conscious
easy to extend

Do not combine all prompts into one page.

Each prompt should be treated as an independent experiment that could later become its own route/component.

Use shared primitives where appropriate, but preserve the individual art direction of each experiment.
