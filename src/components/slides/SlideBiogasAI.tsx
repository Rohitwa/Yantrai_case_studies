import { Camera, Wifi, List } from 'lucide-react';

const SlideBiogasAI = () => {
  return (
    <div className="slide-inner" style={{ maxWidth: 1000 }}>
      <style>{`
        @keyframes biogasFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes biogasDotMove {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 6px); opacity: 0; }
        }
        @keyframes biogasPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes biogasCardSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .biogas-source { opacity: 0; animation: biogasFadeIn 0.5s ease forwards; }
        .biogas-source:nth-child(1) { animation-delay: 0.3s; }
        .biogas-source:nth-child(2) { animation-delay: 0.6s; }
        .biogas-source:nth-child(3) { animation-delay: 0.9s; }
        .biogas-dot {
          position: absolute; top: 50%; width: 6px; height: 6px;
          border-radius: 50%; background: #0071e3;
          transform: translateY(-50%);
          animation: biogasDotMove 2s linear infinite;
        }
        .biogas-connector { position: relative; flex: 1; height: 2px; margin: 0 8px; }
        .biogas-connector::before {
          content: ''; position: absolute; inset: 0;
          border-top: 2px dashed rgba(0, 113, 227, 0.3);
        }
        .biogas-ring {
          position: absolute; border-radius: 50%;
          border: 2px solid rgba(0, 113, 227, 0.2);
          animation: biogasPulse 2.5s ease-in-out infinite;
        }
        .biogas-cap-card { opacity: 0; animation: biogasCardSlide 0.5s ease forwards; }
        .biogas-cap-card:nth-child(1) { animation-delay: 1.5s; }
        .biogas-cap-card:nth-child(2) { animation-delay: 3s; }
        .biogas-cap-card:nth-child(3) { animation-delay: 4.5s; }
        .biogas-cap-card:nth-child(4) { animation-delay: 6s; }
        .biogas-cap-card:nth-child(5) { animation-delay: 7.5s; }
        .biogas-cap-card:nth-child(6) { animation-delay: 9s; }
      `}</style>

      <div className="sec-label">Biogas AI Platform</div>
      <h2 className="slide-title">Turn plant data into <em className="italic font-normal text-[#0071e3]">real-time intelligence.</em></h2>
      <p className="text-xs sm:text-sm font-light" style={{ color: 'hsl(var(--slide-muted))', marginTop: -12, marginBottom: 24 }}>
        A unified AI layer that processes video feeds, sensor streams, and operational logs to drive autonomous plant decisions.
      </p>

      {/* Main diagram card */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 0, 0, 0.08)',
        borderRadius: 24, padding: '20px 16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      }}>
        <div className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-center font-semibold mb-4 sm:mb-5" style={{ color: 'hsl(var(--slide-accent))' }}>
          Unified AI Intelligence Layer
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center gap-0">
          {/* Left — Data Sources */}
          <div style={{ width: 160, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: <Camera size={18} />, label: 'Camera' },
              { icon: <Wifi size={18} />, label: 'IoT Sensors' },
              { icon: <List size={18} />, label: 'Ops Logs' },
            ].map((s, i) => (
              <div key={i} className="biogas-source" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'hsl(var(--slide-bg))', borderRadius: 10,
                padding: '10px 14px', border: '1px solid hsl(var(--border))',
              }}>
                <div style={{ color: 'hsl(var(--slide-accent))' }}>{s.icon}</div>
                <span style={{ fontSize: 12, fontWeight: 500, color: 'hsl(var(--slide-text))' }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Left connectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '0 0 80px', justifyContent: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} className="biogas-connector" style={{ height: 42, display: 'flex', alignItems: 'center' }}>
                <div className="biogas-dot" style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
            ))}
          </div>

          {/* Center — AI Engine */}
          <div style={{ flexShrink: 0, width: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: 90, height: 90 }}>
              <div className="biogas-ring" style={{ inset: 0 }} />
              <div className="biogas-ring" style={{ inset: 10, animationDelay: '0.5s' }} />
              <div className="biogas-ring" style={{ inset: 20, animationDelay: '1s' }} />
              <div style={{
                position: 'absolute', inset: 28, borderRadius: '50%',
                background: 'hsl(var(--slide-accent))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px hsl(var(--slide-accent) / 0.4)',
              }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', textAlign: 'center', lineHeight: 1.1 }}>AI</span>
              </div>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'hsl(var(--slide-accent))', marginTop: 8 }}>AI Engine</span>
          </div>

          {/* Right connectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '0 0 80px' }}>
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} className="biogas-connector" style={{ height: 28, display: 'flex', alignItems: 'center' }}>
                <div className="biogas-dot" style={{ animationDelay: `${i * 0.4 + 1}s` }} />
              </div>
            ))}
          </div>

          {/* Right — Capabilities */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { title: 'Predictive Maintenance', desc: 'Failure risk detected → service scheduled', color: 'hsl(var(--slide-green))' },
              { title: 'Feedstock Optimization', desc: 'Input quality drop → yield stabilized', color: 'hsl(var(--slide-accent))' },
              { title: 'Real-Time Process Control', desc: 'pH deviation detected → auto correction', color: 'hsl(var(--slide-teal))' },
              { title: 'Gas Leak & Safety', desc: 'Leak detected → emergency protocol activated', color: 'hsl(var(--slide-green))' },
              { title: 'Resource Planning & Optimization', desc: 'Usage forecast → allocation optimized', color: 'hsl(var(--slide-accent))' },
              { title: 'Quality Control', desc: 'Output anomaly flagged → process adjusted', color: 'hsl(var(--slide-teal))' },
            ].map((c, i) => (
              <div key={i} className="biogas-cap-card" style={{
                background: 'hsl(var(--slide-bg))', borderRadius: 10,
                padding: '8px 12px', border: '1px solid hsl(var(--border))',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: c.color, boxShadow: `0 0 6px ${c.color}` }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'hsl(var(--slide-text))' }}>{c.title}</span>
                  <span style={{ fontSize: 9, color: c.color, fontWeight: 500, marginLeft: 'auto' }}>Active</span>
                </div>
                <div style={{ fontSize: 11, color: 'hsl(var(--slide-muted))' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: stacked vertical layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Data Sources row */}
          <div className="flex gap-2 justify-center flex-wrap">
            {[
              { icon: <Camera size={16} />, label: 'Camera' },
              { icon: <Wifi size={16} />, label: 'IoT Sensors' },
              { icon: <List size={16} />, label: 'Ops Logs' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2" style={{
                background: 'hsl(var(--slide-bg))', border: '1px solid hsl(var(--border))',
              }}>
                <div style={{ color: 'hsl(var(--slide-accent))' }}>{s.icon}</div>
                <span className="text-[11px] font-medium" style={{ color: 'hsl(var(--slide-text))' }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6" style={{ background: 'hsl(var(--slide-accent) / 0.3)' }} />
          </div>

          {/* AI Engine */}
          <div className="flex justify-center">
            <div className="relative w-16 h-16">
              <div className="biogas-ring" style={{ inset: 0 }} />
              <div className="biogas-ring" style={{ inset: 8, animationDelay: '0.5s' }} />
              <div style={{
                position: 'absolute', inset: 16, borderRadius: '50%',
                background: 'hsl(var(--slide-accent))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px hsl(var(--slide-accent) / 0.4)',
              }}>
                <span className="text-[8px] font-bold text-white">AI</span>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6" style={{ background: 'hsl(var(--slide-accent) / 0.3)' }} />
          </div>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { title: 'Predictive Maintenance', desc: 'Failure risk → service scheduled', color: 'hsl(var(--slide-green))' },
              { title: 'Feedstock Optimization', desc: 'Quality drop → yield stabilized', color: 'hsl(var(--slide-accent))' },
              { title: 'Real-Time Process Control', desc: 'pH deviation → auto correction', color: 'hsl(var(--slide-teal))' },
              { title: 'Gas Leak & Safety', desc: 'Leak detected → emergency protocol', color: 'hsl(var(--slide-green))' },
              { title: 'Resource Planning', desc: 'Usage forecast → allocation optimized', color: 'hsl(var(--slide-accent))' },
              { title: 'Quality Control', desc: 'Output anomaly → process adjusted', color: 'hsl(var(--slide-teal))' },
            ].map((c, i) => (
              <div key={i} className="rounded-lg p-2.5" style={{
                background: 'hsl(var(--slide-bg))', border: '1px solid hsl(var(--border))',
              }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-[6px] h-[6px] rounded-full" style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }} />
                  <span className="text-[11px] font-semibold" style={{ color: 'hsl(var(--slide-text))' }}>{c.title}</span>
                  <span className="text-[8px] ml-auto font-medium" style={{ color: c.color }}>Active</span>
                </div>
                <div className="text-[10px]" style={{ color: 'hsl(var(--slide-muted))' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBiogasAI;
