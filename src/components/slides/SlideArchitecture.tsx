import architectureDiagram from '@/assets/architecture-diagram.png';

const SlideArchitecture = () => {
  return (
    <div className="slide-inner">
      <div className="sec-label">Architecture</div>
      <h2 className="slide-title">Multimodal <em>AI Architecture</em></h2>

      <div className="w-full flex justify-center mt-4">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            maxWidth: '900px',
            width: '100%',
            background: '#fff',
          }}
        >
          <img
            src={architectureDiagram}
            alt="Multimodal AI Architecture - Input layer (Image, Video, Audio, Data) to Processing to Application outputs"
            className="w-full h-auto block"
            style={{ objectFit: 'contain', background: '#1a1a2a' }}
          />
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mt-4 sm:mt-6">
        {[
          { icon: '🔢', label: 'Object Counting' },
          { icon: '🔍', label: 'Defect Detection' },
          { icon: '🚨', label: 'Pilferage Detection' },
          { icon: '🛡️', label: 'Theft Detection' },
          { icon: '⚙️', label: 'Predictive Maintenance' },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-3 sm:p-4 text-center transition-all duration-200 hover:-translate-y-1"
            style={{
              background: 'hsl(var(--slide-bg2))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
            <div className="text-[10px] sm:text-xs font-medium" style={{ color: 'hsl(var(--slide-text))' }}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideArchitecture;
