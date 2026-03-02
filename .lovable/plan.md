

## New Page 6: Biogas AI Intelligence Layer

**Insert a new slide after Page 5 (Plant Monitoring) and before current Page 6 (One Godown). Total slides go from 7 to 8.**

### Content (extracted from GIF)

The slide is an animated architecture diagram for the "Biogas AI Platform":

- **Header**: Label "Biogas AI Platform", title "Turn plant data into real-time intelligence.", subtitle about unified AI for video/sensors/ops data
- **Main diagram** inside a rounded card labeled "Unified AI Intelligence Layer" with three columns:
  - **Left — Data Sources**: Three items stacked vertically with icons and dashed connector lines animating toward the center:
    - Camera (camera icon)
    - IoT Sensors (signal/wifi icon)
    - Ops Logs (list/menu icon)
  - **Center — AI Engine**: A pulsing concentric circle element with "AI Engine" label, connected by animated dashed lines with small moving dots
  - **Right — Capabilities**: Three cards that slide in sequentially (staggered animation):
    1. **Predictive Maintenance** — "Failure risk detected → service scheduled" — Active (green dot)
    2. **Feedstock Optimization** — "Input quality drop → yield stabilized" — Active (blue dot)
    3. **Real-Time Process Control** — "pH deviation detected → auto correction" — Active (teal dot)

### Animation sequence (CSS-only, looping)
1. Data source icons fade in (staggered 0.3s each)
2. Dashed lines draw from sources toward AI Engine with small dots traveling along them
3. AI Engine pulses/glows
4. Capability cards slide in from right one by one (staggered 1.5s apart)
5. Loop resets after ~8s

### Files to change

1. **Create `src/components/slides/SlideBiogasAI.tsx`** — New slide component matching existing theme (uses `slide-inner`, `sec-label`, `slide-title`, CSS variables, DM Sans/DM Serif Display fonts)
2. **Update `src/pages/Index.tsx`** — Import new component, insert at index 5 (after Plant Monitoring), bump total to 8, shift One Godown to index 6 and Contact to index 7

### Theme alignment
- White background with `hsl(var(--slide-bg))` / `hsl(var(--slide-bg2))` card
- Blue accent `hsl(var(--slide-accent))` for AI Engine circle and label highlights
- Font: DM Serif Display for title, DM Sans for body
- Card borders: `1px solid hsl(var(--border))`
- Consistent with existing slides' rounded-xl cards, subtle shadows

