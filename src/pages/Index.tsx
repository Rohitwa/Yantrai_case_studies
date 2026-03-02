import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideIntro from '@/components/slides/SlideIntro';
import SlideArchitecture from '@/components/slides/SlideArchitecture';
import SlideFeedMonitoring from '@/components/slides/SlideFeedMonitoring';

import SlidePilferage from '@/components/slides/SlidePilferage';
import SlidePlantMonitoring from '@/components/slides/SlidePlantMonitoring';
import SlideBiogasAI from '@/components/slides/SlideBiogasAI';
import SlideOneGodown from '@/components/slides/SlideOneGodown';
import SlideContact from '@/components/slides/SlideContact';

const TOTAL_SLIDES = 7;

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= TOTAL_SLIDES || idx === current) return;
    setDirection(idx > current ? 'right' : 'left');
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const slideClass = (idx: number) => {
    if (idx === current) return 'slide active';
    if (direction === 'right' && idx < current) return 'slide exit-left';
    return 'slide';
  };

  const slides = [
    <SlideIntro key={0} />,
    <SlideArchitecture key={1} />,
    <SlideFeedMonitoring key={2} />,
    <SlidePilferage key={3} />,
    <SlidePlantMonitoring key={4} />,
    <SlideOneGodown key={5} />,
  ];

  // Replace slide 8 (index 7) with contact if we have 8 slides
  // Actually we need 8 slides, and contact is the 8th (index 7 → SlideOneGodown, index 8 → Contact... wait let me recount)
  // Slide 1: Intro, 2: Architecture, 3: Feed, 4: Factory Sourcing, 5: Factory Dispatch, 6: Pilferage, 7: Plant, 8: OneGodown, 9: Contact
  // That's 9 slides. Plan says 8. Let me check - plan says Slide 7 = One Godown, Slide 8 = Contact. But we also have Plant Monitoring.
  // Plan: 1-Intro, 2-Architecture, 3-Feed, 4-Factory, 5-Pilferage, 6-Plant, 7-OneGodown, 8-Contact
  // But user wanted TWO factory pages (sourcing + dispatch). So that's 9 total.

  const allSlides = [
    <SlideIntro key={0} />,
    <SlideArchitecture key={1} />,
    <SlideFeedMonitoring key={2} />,
    <SlidePilferage key={3} />,
    <SlidePlantMonitoring key={4} />,
    <SlideBiogasAI key={5} />,
    <SlideOneGodown key={6} />,
    <SlideContact key={7} />,
  ];

  const total = allSlides.length;

  return (
    <div className="slide-container">
      {allSlides.map((slide, idx) => (
        <div
          key={idx}
          className={
            idx === current
              ? 'slide active'
              : idx < current
              ? 'slide exit-left'
              : 'slide'
          }
        >
          {slide}
        </div>
      ))}

      {/* Page counter */}
      <div className="page-counter">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Navigation */}
      <div className="slide-nav">
        <button className="nav-arrow" onClick={prev} disabled={current === 0}>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button className="nav-arrow" onClick={next} disabled={current === total - 1}>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
