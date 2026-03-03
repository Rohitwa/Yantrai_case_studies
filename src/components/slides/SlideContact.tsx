import { Mail, Phone, Globe } from 'lucide-react';
import logoSmall from '@/assets/branding/yantrai_labs_logo.png';

const SlideContact = () => {
  return (
    <div className="slide-inner flex flex-col items-center justify-center text-center gap-5 sm:gap-7" style={{ minHeight: 'calc(100vh - 160px)' }}>
      <h2
        className="font-sans font-semibold"
        style={{
          fontSize: 'clamp(40px, 10vw, 80px)',
          color: 'hsl(var(--slide-text))',
          letterSpacing: '-2px',
          lineHeight: 1,
        }}
      >
        Let's Talk
      </h2>

      <p className="text-sm sm:text-base font-light" style={{ color: 'hsl(var(--slide-muted))' }}>
        Ready to bring AI-powered vision to your operations?
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center w-full px-4 sm:px-0">
        <a
          href="mailto:rohit@yantrailabs.com"
          className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-light transition-colors duration-300 no-underline"
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
          className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-light transition-colors duration-300 no-underline"
          style={{
            background: 'hsl(var(--slide-bg2))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--slide-text))',
          }}
        >
          <Phone className="w-4 h-4" style={{ color: 'hsl(var(--slide-accent))' }} />
          +91 91231 02267
        </a>

        <a
          href="https://www.yantrailabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-light transition-colors duration-300 no-underline"
          style={{
            background: 'hsl(var(--slide-bg2))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--slide-text))',
          }}
        >
          <Globe className="w-4 h-4" style={{ color: 'hsl(var(--slide-accent))' }} />
          www.yantrailabs.com
        </a>
      </div>

      {/* Footer logo */}
      <div className="flex items-center gap-2.5 mt-4 opacity-35">
        <img src={logoSmall} alt="YantrAI Labs" className="h-6 w-auto object-contain grayscale" />
      </div>
    </div>
  );
};

export default SlideContact;
