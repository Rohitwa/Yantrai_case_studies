

## Updated Plan: Pages 3, 4, 5 Changes (No New Page 6)

**Current slide order (7 slides, unchanged):**
1. Intro → 2. Architecture → 3. Feed Monitoring → 4. Pilferage → 5. Plant Monitoring → 6. One Godown → 7. Contact

### Page 3 — Feed Monitoring: Replace animation with pallet visualization

**File: `SlideFeedMonitoring.tsx` — full rewrite**

Based on `vision-ai-feed-pallets.html`:
- Industrial camera viewport with conveyor roller system and 5 moving pallets, each with green detection bounding boxes and weight tags (e.g. "~82 kg")
- Right-side stats panel with time frame toggle buttons (10m / 30m / 1h / 8h / 24h), showing Feed Pallet Count, Total Feed Weight, Feed Rate with animated counters
- Count line overlay across the conveyor
- Bottom row: same 4 use-case cards (Real-Time Weight & Count, Rate Drop & Jam Alerts, Foreign Object Detection, Safety & Intrusion Alerts)
- Title stays: "Vision AI for Feed Monitoring"

### Page 4 — Pilferage: Replace SVG scene with video

**File: `SlidePilferage.tsx` — partial rewrite**

- Copy `veesion-IA-crop-1.mp4` to `src/assets/`
- Replace the entire SVG viewport section with a `<video>` element (autoplay, loop, muted, playsInline)
- Keep the dark header bar (YANTRAI LABS • MATERIAL SURVEILLANCE)
- Remove the scene-cycling state logic and overlay panels
- Rename bottom section title from "SIMILAR INDUSTRIAL APPLICATIONS" to "Additional Use Cases"
- Keep the 5 bottom box items
- Title stays: "Pilferage Detection AI"

### Page 5 — Plant Monitoring: Replace with Real-time Activity

**File: `SlidePlantMonitoring.tsx` — full rewrite**

Based on `Real-time_activity.jsx`:
- Two scenes cycling every 5s: "Garbage Detection" and "PPE Compliance", each with a base64-encoded camera image
- Alert panel slides in after 1.5s per scene with detection details (confidence %, location, action)
- Bottom stats bar: Detection Accuracy 98.7%, Response Time 1.2s, Active Cameras 24/24
- "More Use Cases" section with 5 cards: PPE Compliance, Safety Zone Violation, Maintenance Validation, Unauthorized Access, Shift Productivity
- Title: "Real-Time Activity Monitoring"

### No changes to Index.tsx
Slide count remains 7. No new page inserted.

