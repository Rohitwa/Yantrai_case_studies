

## Theme Update: Match YantrAI Website Style

Based on the screenshot, the new theme is a **clean white** design with **blue accents** (matching yantrailabs.com), replacing the current lavender/indigo theme.

### New Design System (Style Guide for GIF creation)

**Colors:**
- Background: `#FFFFFF` (pure white)
- Secondary BG: `#F7F7F8` (very light gray, for cards/sections)
- Text Primary: `#1A1A2E` (near-black)
- Text Secondary / Muted: `#6B7280` (gray-500)
- Accent / Brand: `#2563EB` (blue-600, matching "Turn images into AI" heading)
- Accent Hover: `#1D4ED8` (blue-700)
- Green indicator: `#16A34A`
- Teal indicator: `#0891B2`
- Border: `rgba(0, 0, 0, 0.06)`
- CTA Button: `#1A1A2E` background, white text (pill-shaped, like "Get in touch")

**Typography:**
- Headings: **DM Serif Display**, regular weight
  - Slide title (H1): `48px` (clamp 36px-56px)
  - Section title (H2): `36px` (clamp 28px-42px)
  - Logo text: `20px`
- Body: **DM Sans**, 300-400 weight
  - Body text: `18px`
  - Small / labels: `13px`
  - Section labels (uppercase): `11px`, letter-spacing `0.15em`
- Monospace (stats): **JetBrains Mono**, `14px`

**Box Structure:**
- Card: `border-radius: 16px`, `border: 1px solid rgba(0,0,0,0.06)`, `background: #F7F7F8`, `padding: 24px`
- Pill buttons: `border-radius: 9999px`, `padding: 12px 24px`
- Image containers: `border-radius: 16px`, light `box-shadow: 0 4px 24px rgba(0,0,0,0.08)`
- Architecture image frame: white border instead of dark

**Layout Alignment:**
- Max content width: `1100px`, centered
- Slide padding: `40px` all sides
- Grid: 2-column for hero/feature slides, single column for architecture/contact
- Vertical gap between elements: `24px` standard, `12px` compact
- Navigation pill: white background with subtle shadow

### Implementation Changes

1. **`src/index.css`** -- Update all CSS custom properties:
   - `--slide-bg: 0 0% 100%` (white)
   - `--slide-bg2: 240 5% 97%` (light gray)
   - `--slide-bg3: 0 0% 100%`
   - `--slide-text: 240 47% 14%` (keep dark)
   - `--slide-muted: 220 9% 46%`
   - `--slide-accent: 217 91% 60%` (blue)
   - `--slide-accent2: 221 83% 53%` (slightly deeper blue)
   - `--background: 0 0% 100%`
   - `--card: 240 5% 97%`
   - Update `.slide-container` background
   - Update `.slide-nav` to white with shadow

2. **`SlideArchitecture.tsx`** -- Change image frame from dark `#2c2c3c` to light styling (white border, soft shadow)

3. **All slide components** -- No structural changes needed; CSS variables will cascade the new colors automatically. SVG hardcoded colors in `SlideIntro.tsx` need updating from `hsl(245 62% 56%)` to blue `hsl(217 91% 60%)`.

