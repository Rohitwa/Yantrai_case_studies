import { useState, useEffect } from 'react';

const useCases = [
  { icon: '🦺', title: 'PPE Compliance', desc: 'Hard hat, vest & glove detection' },
  { icon: '⚠️', title: 'Safety Zone Violation', desc: 'Restricted area breach alerts' },
  { icon: '📋', title: 'Maintenance Validation', desc: 'Checklist completion tracking' },
  { icon: '🚫', title: 'Unauthorized Access', desc: 'Identity & badge verification' },
  { icon: '📊', title: 'Shift Productivity', desc: 'Real-time efficiency metrics' },
];

const SlidePlantMonitoring = () => {
  const [phase, setPhase] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [operatorPos, setOperatorPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => {
        const next = (p + 1) % 6;
        if (next === 4) setAlertVisible(true);
        if (next === 0) setAlertVisible(false);
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveInterval = setInterval(() => setOperatorPos(p => (p + 1) % 100), 80);
    return () => clearInterval(moveInterval);
  }, []);

  const getOperatorX = () => {
    const cycle = operatorPos % 100;
    return cycle < 50 ? 380 + cycle * 2.4 : 500 - (cycle - 50) * 2.4;
  };

  return (
    <div className="slide-inner">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 rounded-sm px-4 py-1.5 mb-4" style={{ background: 'linear-gradient(180deg, #c8c8c8, #b0b0b0)', border: '1px solid #999', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.15)' }}>
          <div className="w-2 h-2 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
          <span className="text-[11px] font-mono font-medium tracking-wider" style={{ color: '#333' }}>AI MONITORING ACTIVE</span>
        </div>
        <h2 className="slide-title">Real-Time Activity <em>Monitoring</em></h2>
        <p className="text-[13px]" style={{ color: 'hsl(var(--slide-muted))' }}>Compliance Validation in Plant Operations</p>
      </div>

      {/* Animation container */}
      <div className="w-full max-w-[940px] mx-auto rounded-md overflow-hidden" style={{ background: '#1a1d21', border: '1px solid #333', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
        {/* Top bar */}
        <div className="flex justify-between items-center px-4 py-2.5" style={{ background: 'linear-gradient(180deg, #2a2d32, #1f2227)', borderBottom: '1px solid #333' }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
              <div className="w-2 h-2 rounded-full bg-[#facc15]" />
              <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            </div>
            <span className="font-mono text-[11px] tracking-wider" style={{ color: '#9ca3af' }}>CAM-04 • ASSEMBLY UNIT B • LIVE</span>
          </div>
          <span className="font-mono text-[11px] font-medium" style={{ color: phase >= 2 ? '#facc15' : '#22c55e' }}>
            {phase >= 2 ? '⚠ DEVIATION' : '● NORMAL'}
          </span>
        </div>

        {/* Scene */}
        <div className="relative overflow-hidden" style={{ height: '320px', background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 60%, #171923 100%)' }}>
          {/* Ceiling lights */}
          <div className="absolute top-0 left-0 right-0 h-[35px]" style={{ background: '#1a1d21', borderBottom: '3px solid #2d3748' }}>
            {[120, 320, 520, 720].map((x, i) => (
              <div key={i} className="absolute rounded-b" style={{ left: x, top: 20, width: 60, height: 15, background: 'linear-gradient(180deg, #374151, #1f2937)' }}>
                <div className="absolute -bottom-[30px] left-1/2 -translate-x-1/2" style={{ width: 80, height: 30, background: 'radial-gradient(ellipse, rgba(253,224,71,0.15), transparent 70%)', animation: 'lightBlink 8s infinite', animationDelay: `${i * 0.5}s` }} />
              </div>
            ))}
          </div>

          {/* Back wall */}
          <div className="absolute top-[35px] left-0 right-0 h-20" style={{ background: 'linear-gradient(180deg, #374151, #2d3748)' }}>
            <div className="absolute left-[60px] top-[15px] w-[50px] h-[50px] rounded-sm flex items-center justify-center text-2xl" style={{ background: '#facc15', border: '2px solid #000' }}>⚡</div>
          </div>

          {/* Floor */}
          <div className="absolute bottom-0 left-0 right-0 h-[100px]" style={{ background: 'linear-gradient(180deg, #4a5568, #2d3748)' }}>
            <div className="absolute top-5 left-10 right-10 h-1" style={{ background: 'repeating-linear-gradient(90deg, #facc15 0px, #facc15 20px, #1a1a1a 20px, #1a1a1a 40px)', opacity: 0.6 }} />
          </div>

          {/* Machine */}
          <div className="absolute left-[50px] bottom-[80px]" style={{ animation: 'machineVibrate 0.15s infinite' }}>
            <div className="relative" style={{ width: 200, height: 140, background: 'linear-gradient(135deg, #6b7280, #4b5563 40%, #374151)', borderRadius: 4, boxShadow: '0 8px 24px rgba(0,0,0,0.4)', border: '1px solid #1f2937' }}>
              <div className="absolute top-3 left-3 rounded-sm p-2" style={{ width: 80, height: 60, background: 'linear-gradient(180deg, #1f2937, #111827)', border: '1px solid #374151' }}>
                <div className="rounded-sm h-5 flex items-center justify-center font-mono text-[11px] mb-1.5" style={{ background: '#022c22', color: '#22c55e', textShadow: '0 0 8px #22c55e', border: '1px solid #064e3b' }}>
                  {phase >= 2 ? 'CHECK REQ' : 'RUNNING'}
                </div>
                <div className="flex gap-1">
                  {['#22c55e', '#facc15', '#ef4444', '#3b82f6'].map((c, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-full" style={{ background: c, boxShadow: `0 0 4px ${c}`, border: '1px solid rgba(0,0,0,0.3)' }} />
                  ))}
                </div>
              </div>
              <div className="absolute top-3 right-3 rounded-sm overflow-hidden" style={{ width: 60, height: 45, background: 'linear-gradient(135deg, #0f172a, #1e293b)', border: '2px solid #374151' }}>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full" style={{ border: '2px solid #22c55e', borderTop: '2px solid transparent', transform: 'translate(-50%,-50%)', animation: 'spinAnim 1s linear infinite' }} />
              </div>
            </div>
          </div>

          {/* Operator */}
          <div className="absolute transition-[left]" style={{ left: getOperatorX(), bottom: 95, transitionDuration: '0.08s' }}>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="rounded-t-full" style={{ width: 32, height: 20, background: 'linear-gradient(180deg, #fbbf24, #d97706)' }} />
            </div>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full" style={{ width: 24, height: 24, background: 'linear-gradient(180deg, #fcd9b6, #e5b896)' }} />
            <div className="rounded-t" style={{ width: 36, height: 50, background: 'linear-gradient(180deg, #22c55e, #16a34a)', animation: 'breathe 3s ease-in-out infinite' }}>
              <div className="absolute top-2 left-1 right-1 h-1" style={{ background: '#d1d5db' }} />
              <div className="absolute top-5 left-1 right-1 h-1" style={{ background: '#d1d5db' }} />
            </div>
            <div className="flex gap-0.5 justify-center">
              <div style={{ width: 14, height: 40, background: 'linear-gradient(180deg, #1e3a5f, #1e293b)', borderRadius: '0 0 3px 3px', transform: `rotate(${Math.sin(operatorPos * 0.3) * 8}deg)`, transformOrigin: 'top center' }} />
              <div style={{ width: 14, height: 40, background: 'linear-gradient(180deg, #1e3a5f, #1e293b)', borderRadius: '0 0 3px 3px', transform: `rotate(${Math.sin(operatorPos * 0.3 + Math.PI) * 8}deg)`, transformOrigin: 'top center' }} />
            </div>
          </div>

          {/* Detection box */}
          {phase >= 2 && (
            <div className="absolute rounded" style={{ left: getOperatorX() - 30, bottom: 70, width: 90, height: 120, border: `2px solid ${phase >= 3 ? '#ef4444' : '#facc15'}`, background: phase >= 3 ? 'rgba(239,68,68,0.08)' : 'rgba(250,204,21,0.08)', animation: 'warningPulse 1.5s infinite', transition: 'left 0.08s linear' }}>
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-sm" style={{ background: phase >= 3 ? '#ef4444' : '#facc15' }}>
                <span className="font-mono text-[9px] font-semibold" style={{ color: phase >= 3 ? '#fff' : '#1a1a1a' }}>OP-0247</span>
              </div>
            </div>
          )}

          {phase >= 2 && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20" style={{ animation: 'fadeSlideIn 0.4s ease-out' }}>
              <div className="flex items-center gap-2 rounded-sm px-5 py-2.5 font-mono text-[12px] font-semibold" style={{ background: 'rgba(250,204,21,0.95)', color: '#1a1a1a', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <span className="text-[14px]">⚠</span> PARAMETER CHECK MISSED
              </div>
              {phase >= 3 && (
                <div className="rounded-sm px-4 py-2 font-mono text-[11px] font-medium text-white" style={{ background: 'rgba(239,68,68,0.95)', animation: 'fadeSlideIn 0.3s ease-out' }}>
                  COMPLIANCE DEVIATION DETECTED
                </div>
              )}
            </div>
          )}

          {/* Alert panel */}
          {alertVisible && (
            <div className="absolute top-12 right-5 w-[200px] rounded-md overflow-hidden z-30" style={{ background: 'rgba(255,255,255,0.98)', boxShadow: '0 8px 32px rgba(0,0,0,0.25)', animation: 'alertSlide 0.5s ease-out' }}>
              <div className="flex items-center gap-2 px-3 py-2.5" style={{ background: 'linear-gradient(90deg, #dc2626, #b91c1c)' }}>
                <span className="text-base">🔔</span>
                <span className="font-mono text-[10px] font-semibold text-white tracking-wider">ALERT TRIGGERED</span>
              </div>
              <div className="p-3">
                <div className="text-[12px] font-semibold mb-1.5" style={{ color: '#1f2937' }}>Notification Sent To:</div>
                <div className="text-[11px] space-y-1 mb-2.5" style={{ color: '#4b5563' }}>
                  <div>• Plant Head</div>
                  <div>• Floor Supervisor</div>
                </div>
                <div className="rounded-sm px-2.5 py-2" style={{ background: '#fef3c7', border: '1px solid #fcd34d' }}>
                  <span className="font-mono text-[10px] font-medium" style={{ color: '#92400e' }}>Hourly Discrepancy Alert</span>
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full px-4 py-2" style={{ background: 'rgba(0,0,0,0.5)' }}>
            {['Monitor', 'Detect', 'Analyze', 'Alert', 'Log'].map((label, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full transition-all duration-300" style={{ background: phase >= i ? (i >= 2 ? '#facc15' : '#22c55e') : '#4b5563', boxShadow: phase === i ? `0 0 8px ${i >= 2 ? '#facc15' : '#22c55e'}` : 'none' }} />
                <span className="font-mono text-[9px]" style={{ color: phase >= i ? '#e5e7eb' : '#6b7280' }}>{label}</span>
                {i < 4 && <div className="w-5 h-px" style={{ background: phase > i ? '#6b7280' : '#374151' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="w-full max-w-[940px] mx-auto mt-4">
        <div className="grid grid-cols-5 gap-3">
          {useCases.map((uc, i) => (
            <div key={i} className="rounded p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default" style={{ background: 'white', border: '1px solid #e5e7eb' }}>
              <div className="text-xl mb-2.5">{uc.icon}</div>
              <div className="text-[12px] font-semibold mb-1" style={{ color: '#1f2937' }}>{uc.title}</div>
              <div className="text-[10px] leading-snug" style={{ color: '#9ca3af' }}>{uc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidePlantMonitoring;
