import { Mail, Phone } from 'lucide-react';

const SlideContact = () => {
  return (
    <div className="slide-inner flex flex-col items-center justify-center text-center gap-7" style={{ minHeight: 'calc(100vh - 160px)' }}>
      <h2
        className="font-serif"
        style={{
          fontSize: '80px',
          color: 'hsl(var(--slide-text))',
          letterSpacing: '-3px',
          lineHeight: 1,
        }}
      >
        Let's Talk
      </h2>

      <p className="text-base font-light" style={{ color: 'hsl(var(--slide-muted))' }}>
        Ready to bring AI-powered vision to your operations?
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="mailto:rohit@yantrailabs.com"
          className="flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-light transition-colors duration-300 no-underline"
          style={{
            background: 'hsl(var(--slide-bg2))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--slide-text))',
          }}
        >
          <Mail className="w-4 h-4" style={{ color: 'hsl(var(--slide-accent))' }} />
          rohit@yantrailabs.com
        </a>

        <a
          href="tel:+919123102267"
          className="flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-light transition-colors duration-300 no-underline"
          style={{
            background: 'hsl(var(--slide-bg2))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--slide-text))',
          }}
        >
          <Phone className="w-4 h-4" style={{ color: 'hsl(var(--slide-accent))' }} />
          +91 91231 02267
        </a>
      </div>

      {/* Footer logo */}
      <div className="flex items-center gap-2.5 mt-4 opacity-35">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="hsl(var(--slide-accent))" opacity="0.6" />
          <text x="6" y="17" fontSize="14" fontWeight="700" fill="white" fontFamily="DM Serif Display, serif">Y</text>
        </svg>
        <span className="font-serif text-lg" style={{ color: 'hsl(var(--slide-muted))' }}>YantraI Labs</span>
      </div>
    </div>
  );
};

export default SlideContact;
