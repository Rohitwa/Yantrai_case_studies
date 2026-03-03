const SlideIntro = () => {
  return (
    <div className="slide-inner flex flex-col items-start justify-center h-full">
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
        style={{ minHeight: 'calc(100vh - 160px)' }}
      >
        {/* Left: Text */}
        <div className="flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
          <h1
            className="font-serif leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-2px', color: 'hsl(var(--slide-text))' }}
          >
            Yantra<span style={{ color: 'hsl(var(--slide-accent2))' }}>I</span> Labs
          </h1>

          <p
            className="font-light opacity-75 max-w-[600px] leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.5rem)', color: 'hsl(var(--slide-text))' }}
          >
            Industrial Vision. Intelligent by Design.
          </p>

          <div
            className="opacity-40"
            style={{
              width: 'clamp(150px, 60%, 400px)',
              height: '1px',
              background: 'linear-gradient(90deg, hsl(var(--slide-accent)) 0%, transparent 70%)',
            }}
          />

          <p
            className="font-serif italic"
            style={{
              fontSize: 'clamp(0.85rem, 1.8vw, 1.25rem)',
              background: 'linear-gradient(90deg, hsl(var(--slide-accent2)), hsl(var(--slide-teal)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px hsla(var(--slide-accent), 0.35))',
            }}
          >
            AI systems that detect, analyze, and act in real time.
          </p>
        </div>

        {/* Right: Visual - hidden on small mobile */}
        <div className="hidden sm:flex items-center justify-center">
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              width: '100%',
              aspectRatio: '1',
              maxWidth: '380px',
              background: 'radial-gradient(ellipse at 30% 40%, hsl(var(--slide-accent) / 0.15), transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(var(--slide-teal) / 0.1), transparent 60%), hsl(var(--slide-bg2))',
              boxShadow: '0 12px 40px hsl(var(--slide-accent) / 0.12)',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ opacity: 0.6 }}>
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <line x1="200" y1="120" x2="120" y2="200" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="200" y1="120" x2="280" y2="200" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="120" y1="200" x2="200" y2="280" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="280" y1="200" x2="200" y2="280" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="200" y1="120" x2="200" y2="280" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.2" />
              <line x1="120" y1="200" x2="280" y2="200" stroke="hsl(217 91% 60%)" strokeWidth="1" strokeOpacity="0.2" />
              <circle cx="200" cy="120" r="20" fill="url(#nodeGlow)" />
              <circle cx="200" cy="120" r="6" fill="hsl(217 91% 60%)" />
              <circle cx="120" cy="200" r="16" fill="url(#nodeGlow)" />
              <circle cx="120" cy="200" r="5" fill="hsl(221 83% 53%)" />
              <circle cx="280" cy="200" r="16" fill="url(#nodeGlow)" />
              <circle cx="280" cy="200" r="5" fill="hsl(221 83% 53%)" />
              <circle cx="200" cy="280" r="18" fill="url(#nodeGlow)" />
              <circle cx="200" cy="280" r="6" fill="hsl(142 76% 36%)" />
              <circle cx="100" cy="120" r="3" fill="hsl(217 91% 60%)" opacity="0.4" />
              <circle cx="300" cy="120" r="3" fill="hsl(217 91% 60%)" opacity="0.4" />
              <circle cx="80" cy="280" r="3" fill="hsl(217 91% 60%)" opacity="0.3" />
              <circle cx="320" cy="280" r="3" fill="hsl(217 91% 60%)" opacity="0.3" />
              <line x1="100" y1="120" x2="200" y2="120" stroke="hsl(217 91% 60%)" strokeWidth="0.5" strokeOpacity="0.2" />
              <line x1="300" y1="120" x2="200" y2="120" stroke="hsl(217 91% 60%)" strokeWidth="0.5" strokeOpacity="0.2" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif tracking-tighter" style={{ color: 'hsl(var(--slide-accent))', opacity: 0.15, fontSize: 'clamp(60px, 15vw, 120px)' }}>Y</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideIntro;
