import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import logoSmall from '@/assets/branding/yantrai_labs_logo.png';
import SlideIntro from '@/components/slides/SlideIntro';
import SlideArchitecture from '@/components/slides/SlideArchitecture';
import SlideFeedMonitoring from '@/components/slides/SlideFeedMonitoring';
import SlideFactoryDispatch from '@/components/slides/SlideFactoryDispatch';

import SlidePilferage from '@/components/slides/SlidePilferage';
import SlidePlantMonitoring from '@/components/slides/SlidePlantMonitoring';
import SlideBiogasAI from '@/components/slides/SlideBiogasAI';
import SlideOneGodown from '@/components/slides/SlideOneGodown';
import SlideContact from '@/components/slides/SlideContact';

const TOTAL_SLIDES = 8;

const SLIDE_NAMES = [
  "Introduction",
  "System Architecture",
  "Feed Monitoring",
  "Pilferage Detection",
  "Plant Monitoring",
  "Biogas AI",
  "Retail Vision AI",
  "Contact Us"
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<number | null>(null);

  const toggleFullscreen = () => {
    const doc = document as any;
    const body = document.body as any;

    const isFull = !!(doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement);

    if (!isFull) {
      try {
        const options = { navigationUI: 'hide' };
        if (body.requestFullscreen) {
          body.requestFullscreen(options).catch((err: any) => {
            console.error("Standard requestFullscreen failed:", err);
            if (body.webkitRequestFullscreen) body.webkitRequestFullscreen();
          });
        } else if (body.webkitRequestFullscreen) {
          body.webkitRequestFullscreen();
        } else if (body.mozRequestFullScreen) {
          body.mozRequestFullScreen();
        } else if (body.msRequestFullscreen) {
          body.msRequestFullscreen();
        }
      } catch (e) {
        console.error("Fullscreen toggle catch block:", e);
      }
    } else {
      try {
        if (doc.exitFullscreen) {
          doc.exitFullscreen().catch((err: any) => console.error("Standard exitFullscreen failed:", err));
        } else if (doc.webkitExitFullscreen) {
          doc.webkitExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
          doc.mozCancelFullScreen();
        } else if (doc.msExitFullscreen) {
          doc.msExitFullscreen();
        }
      } catch (e) {
        console.error("Fullscreen exit catch block:", e);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      const isFull = !!(doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement);
      setIsFullscreen(isFull);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    document.addEventListener('fullscreenerror', (e) => console.error('Fullscreen Error Event:', e));

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
  };

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
    <div className="slide-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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

      {/* Split Slider Navigation */}
      <button
        className="nav-arrow-edge left"
        onClick={prev}
        disabled={current === 0}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="nav-arrow-edge right"
        onClick={next}
        disabled={current === total - 1}
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Center Controls */}
      <div className="bottom-controls">
        <button
          className="fullscreen-btn"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? (
            <>
              <Minimize className="w-4 h-4 mr-2" />
              <span>Exit</span>
            </>
          ) : (
            <>
              <Maximize className="w-4 h-4 mr-2" />
              <span>Full Screen</span>
            </>
          )}
        </button>

        <div className="page-counter group">
          <span className="font-medium">{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>

          <div className="nav-dropdown">
            {SLIDE_NAMES.map((name, i) => (
              <button
                key={i}
                className={`nav-dropdown-item ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="slide-dots">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
