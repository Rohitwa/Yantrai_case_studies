

## Plan: Add 3 missing capability cards to Page 6 (Biogas AI)

Add "Gas Leak & Safety", "Resource Planning & Optimization", and "Quality Control" to the right column capabilities, making it 6 cards total. Adjust spacing and animation delays to fit all 6 within the diagram.

### Changes to `src/components/slides/SlideBiogasAI.tsx`

1. **Add 3 new entries** to the capabilities array (lines 128-131):
   - `{ title: 'Gas Leak & Safety', desc: 'Leak detected → emergency protocol activated', color: 'hsl(var(--slide-green))' }`
   - `{ title: 'Resource Planning & Optimization', desc: 'Usage forecast → allocation optimized', color: 'hsl(var(--slide-accent))' }`
   - `{ title: 'Quality Control', desc: 'Output anomaly flagged → process adjusted', color: 'hsl(var(--slide-teal))' }`

2. **Add CSS animation delays** for cards 4-6 (nth-child 4, 5, 6) at 6s, 7.5s, 9s intervals

3. **Reduce card gap** from 12px to 8px and **reduce card padding** from `12px 16px` to `8px 12px` so all 6 cards fit vertically

4. **Add right connectors** for the 3 additional rows (6 connectors total matching 6 capability cards), reduce connector gap similarly

5. **Add left data source connectors** — keep 3 sources but ensure vertical alignment still works with the taller right column

