

## Fix Slide 6 (One Godown) — Overflow & Title Update

**Problem**: Content overflows the viewport — the YouTube embed at 56.25% aspect ratio plus 3 use-case cards push below the fold. Title needs updating.

**Changes to `src/components/slides/SlideOneGodown.tsx`:**

1. **Update headline**: Change section label to "Solutions we have delivered" and title to "One Godown"
2. **Reduce YouTube embed size**: Shrink `max-w-[800px]` → `max-w-[640px]`, reduce border from `8px` to `2px`, lighten border to match white theme (`rgba(0,0,0,0.06)`)
3. **Compact use-case cards**: Reduce padding from `p-6` to `p-4`, shrink gap from `gap-5` to `gap-3`, match max-width to video (`max-w-[640px]`)
4. **Reduce spacing**: `mb-8` → `mb-4` on subtitle and video container to keep everything in frame

