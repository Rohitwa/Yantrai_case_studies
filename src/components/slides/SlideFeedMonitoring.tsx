import { useState, useEffect } from 'react';

const sequences = [
  { objects: 12, weight: 480, rate: 24, status: 'normal', label: 'NORMAL' },
  { objects: 15, weight: 600, rate: 25, status: 'normal', label: 'NORMAL' },
  { objects: 18, weight: 720, rate: 24, status: 'normal', label: 'NORMAL' },
  { objects: 22, weight: 880, rate: 23, status: 'normal', label: 'NORMAL' },
  { objects: 25, weight: 1000, rate: 22, status: 'normal', label: 'NORMAL' },
  { objects: 23, weight: 920, rate: 18, status: 'warning', label: 'RATE DROP DETECTED' },
  { objects: 20, weight: 800, rate: 16, status: 'warning', label: 'RATE DROP DETECTED' },
  { objects: 19, weight: 760, rate: 19, status: 'normal', label: 'RECOVERING' },
  { objects: 21, weight: 840, rate: 22, status: 'normal', label: 'NORMAL' },
];

const SlideFeedMonitoring = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % sequences.length), 2000);
    return () => clearInterval(timer);
  }, []);

  const seq = sequences[idx];

  return (
    <div className="slide-inner">
      <div className="text-center mb-4">
        <h2 className="slide-title">Vision AI for <em>Feed Monitoring</em></h2>
        <p className="text-xs" style={{ color: 'hsl(var(--slide-muted))' }}>
          Conveyor Feed → Detection → Weight Estimation → Count → Real-Time Insight
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: 'hsl(var(--slide-bg2))', border: '1px solid hsl(var(--border))' }}>
        <div className="grid grid-cols-[1fr_200px] gap-4 p-4">
          {/* Visual Scene */}
          <div className="rounded-xl relative overflow-hidden" style={{ background: '#1f2937', minHeight: '280px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)' }}>
            <span className="absolute top-3 left-3 z-10 text-[9px] font-medium uppercase tracking-wider text-white px-2 py-1 rounded" style={{ background: 'rgba(0,0,0,0.6)' }}>Live Feed</span>

            {/* Scan area */}
            <div className="absolute" style={{ top: '45px', left: '12%', right: '12%', bottom: '95px', border: '1px dashed rgba(107,144,128,0.3)', borderRadius: '4px' }}>
              {['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map((cls, i) => (
                <div key={i} className={`absolute w-[10px] h-[10px] ${cls}`} style={{ borderColor: '#6b9080' }} />
              ))}
            </div>

            {/* Conveyor system */}
            <div className="absolute bottom-[30px] left-0 right-0 h-[80px]">
              {/* Biomass objects */}
              <div className="absolute bottom-[22px] left-0 right-[45px] h-[50px]">
                {[5, 18, 32, 48, 62, 78].map((left, i) => (
                  <div
                    key={i}
                    className="absolute bottom-0 rounded-t-md"
                    style={{
                      left: `${left}%`,
                      width: `${28 + (i % 3) * 4}px`,
                      height: `${22 + (i % 3) * 4}px`,
                      background: 'linear-gradient(135deg, #8b7355, #6d5a42)',
                      animation: `moveRight 8s linear infinite`,
                      animationDelay: `${-i}s`,
                    }}
                  >
                    <div className="absolute inset-[-3px] rounded-lg" style={{ border: '1.5px solid #6b9080', animation: 'boxPulse 1.5s ease-in-out infinite' }} />
                  </div>
                ))}
              </div>

              {/* Belt */}
              <div className="absolute bottom-0 left-0 right-0 h-[18px]" style={{ background: 'linear-gradient(to bottom, #4b5563, #374151)', borderTop: '2px solid #6b7280' }}>
                <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 16px, #6b7280 16px, #6b7280 18px)', animation: 'conveyorMove 1.5s linear infinite' }} />
              </div>

              {/* Inlet */}
              <div className="absolute right-0 bottom-[18px] w-[28px] h-[55px] rounded-l" style={{ background: 'linear-gradient(to right, #6b7280, #4b5563)' }}>
                <div className="absolute left-[6px] top-[12px] w-[16px] h-[30px] rounded-sm" style={{ background: '#111827' }} />
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="rounded-xl p-4 flex flex-col" style={{ background: 'white', border: '1px solid #e5e7eb' }}>
            <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 text-[10px] font-semibold uppercase tracking-wider" style={{ borderBottom: '1px solid #f3f4f6', color: '#6b7280' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M3 3v18h18" /><path d="M18 9l-5 5-4-4-3 3" /></svg>
              Real-Time Metrics
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-3">
                <div className="text-[9px] uppercase tracking-wide" style={{ color: '#6b7280' }}>Objects Detected</div>
                <div className="text-2xl font-semibold tabular-nums" style={{ color: '#1f2937' }}>{seq.objects}</div>
              </div>
              <div className="mb-3">
                <div className="text-[9px] uppercase tracking-wide" style={{ color: '#6b7280' }}>Estimated Weight</div>
                <div className="text-2xl font-semibold tabular-nums" style={{ color: '#1f2937' }}>{seq.weight}<span className="text-[11px] font-normal ml-0.5" style={{ color: '#6b7280' }}>kg</span></div>
              </div>
              <div className="mb-3">
                <div className="text-[9px] uppercase tracking-wide" style={{ color: '#6b7280' }}>Feed Rate</div>
                <div className="text-2xl font-semibold tabular-nums" style={{ color: '#1f2937' }}>{seq.rate}<span className="text-[11px] font-normal ml-0.5" style={{ color: '#6b7280' }}>kg/min</span></div>
              </div>

              <div className="pt-2.5 mt-2.5" style={{ borderTop: '1px solid #f3f4f6' }}>
                <div
                  className="flex items-center gap-2 rounded-md px-2.5 py-2 transition-all duration-500"
                  style={{ background: seq.status === 'normal' ? 'rgba(107,144,128,0.1)' : 'rgba(212,165,116,0.15)' }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: seq.status === 'normal' ? '#6b9080' : '#d4a574',
                      animation: 'statusPulse 2s ease-in-out infinite',
                    }}
                  />
                  <span className="text-[10px] font-semibold" style={{ color: seq.status === 'normal' ? '#6b9080' : '#d4a574' }}>
                    {seq.label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use case cards */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {['Real-Time Weight & Count', 'Rate Drop & Jam Alerts', 'Foreign Object Detection', 'Safety & Intrusion Alerts'].map((title, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3.5 transition-shadow hover:shadow-md" style={{ background: 'white', border: '1px solid #e5e7eb' }}>
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-[11px] font-semibold flex-shrink-0" style={{ background: '#f3f4f6', color: '#4b5563' }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="text-[13px] font-medium" style={{ color: '#374151' }}>{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideFeedMonitoring;
