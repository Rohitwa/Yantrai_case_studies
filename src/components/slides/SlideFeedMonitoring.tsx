import { useState, useEffect, useCallback } from 'react';

const timeFrameData: Record<number, { c: number; w: number; l: string; r: number }> = {
  10: { c: 142, w: 5740, l: '10 min', r: 574 },
  30: { c: 423, w: 17120, l: '30 min', r: 570 },
  60: { c: 847, w: 34280, l: '1 hour', r: 571 },
  480: { c: 6784, w: 274500, l: '8 hours', r: 572 },
  1440: { c: 20352, w: 823200, l: '24 hours', r: 571 },
};

const palletWeightRanges: Record<string, [number, number]> = {
  p1: [42, 55],
  p2: [28, 38],
  p3: [55, 72],
  p4: [15, 24],
  p5: [36, 48],
};

const fmt = (x: number) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const SlideFeedMonitoring = () => {
  const [tf, setTf] = useState(60);
  const [count, setCount] = useState(0);
  const [baseCount, setBaseCount] = useState(847);
  const [baseWeight, setBaseWeight] = useState(34280);
  const [rate, setRate] = useState(571);
  const [palletWeights, setPalletWeights] = useState<Record<string, string>>({
    p1: '48.5', p2: '32.2', p3: '62.8', p4: '18.4', p5: '41.6'
  });

  const selectTf = useCallback((m: number) => {
    const d = timeFrameData[m];
    setTf(m);
    setBaseCount(d.c);
    setBaseWeight(d.w);
    setRate(d.r);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(n => n + 1);
      setBaseCount(c => c + 1);
      setBaseWeight(w => w + Math.floor(Math.random() * 30 + 25));
      setRate(Math.floor(550 + Math.random() * 40));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWeights: Record<string, string> = {};
      Object.entries(palletWeightRanges).forEach(([key, [min, max]]) => {
        newWeights[key] = (Math.random() * (max - min) + min).toFixed(1);
      });
      setPalletWeights(newWeights);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const d = timeFrameData[tf];

  return (
    <div className="slide-inner">
      <div className="text-center mb-4">
        <h2 className="slide-title">Vision AI for <em>Feed Monitoring</em></h2>
        <p className="text-xs" style={{ color: 'hsl(var(--slide-muted))' }}>
          Conveyor Feed → Detection → Weight Estimation → Count → Real-Time Insight
        </p>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ background: 'hsl(var(--slide-bg2))', border: '1px solid hsl(var(--border))' }}>
        <div className="flex gap-2.5 p-2.5" style={{ minHeight: '300px' }}>
          {/* Scene - Camera View */}
          <div className="flex-1 rounded-lg relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a2a3a 0%, #0f1a24 50%, #080e14 100%)', boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)' }}>
            {/* Industrial lighting */}
            <div className="absolute pointer-events-none" style={{ top: '-30%', left: '30%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(255,250,230,0.04) 0%, transparent 70%)' }} />

            {/* Corner brackets */}
            {[
              { pos: 'top-[6px] left-[6px]', border: 'border-t-2 border-l-2' },
              { pos: 'top-[6px] right-[6px]', border: 'border-t-2 border-r-2' },
              { pos: 'bottom-[6px] left-[6px]', border: 'border-b-2 border-l-2' },
              { pos: 'bottom-[6px] right-[6px]', border: 'border-b-2 border-r-2' },
            ].map((c, i) => (
              <div key={i} className={`absolute w-[14px] h-[14px] z-20 ${c.pos} ${c.border}`} style={{ borderColor: '#22d3ee' }} />
            ))}

            {/* Live label */}
            <span className="absolute top-2 left-[26px] z-10 flex items-center gap-[5px] rounded text-white" style={{ background: 'rgba(0,0,0,0.9)', fontSize: '8px', fontWeight: 600, padding: '3px 8px' }}>
              <span className="w-[5px] h-[5px] rounded-full" style={{ background: '#ef4444', animation: 'blinkDot 1s infinite' }} />
              LIVE FEED
            </span>

            {/* Count line */}
            <div className="absolute z-[15]" style={{ top: '28px', bottom: '16%', right: '20%', width: '2px', background: 'linear-gradient(180deg, #ef4444 0%, rgba(239,68,68,0.3) 100%)', boxShadow: '0 0 12px rgba(239,68,68,0.7)' }} />
            <div className="absolute z-20 text-white" style={{ top: '8px', right: 'calc(20% - 30px)', background: '#ef4444', fontSize: '9px', fontWeight: 700, padding: '3px 7px', borderRadius: '3px' }}>
              Count: {count}
            </div>

            {/* Conveyor System */}
            <div className="absolute left-0 right-0" style={{ bottom: '6%', height: '68%' }}>
              {/* Belt frame */}
              <div className="absolute rounded" style={{ bottom: '8%', left: '-2%', right: '-2%', height: '50%', background: 'linear-gradient(180deg, #2d3a47 0%, #1f2a35 25%, #151d25 60%, #0a1015 100%)', boxShadow: '0 10px 25px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,0.03)' }}>
                {/* Top rail */}
                <div className="absolute left-0 right-0 h-[10px] top-0 z-[8]" style={{ background: 'linear-gradient(180deg, #7a8490 0%, #5a6470 30%, #3d4550 70%, #2a3038 100%)', borderRadius: '3px 3px 0 0', boxShadow: '0 3px 8px rgba(0,0,0,0.5)' }} />
                {/* Roller bed */}
                <div className="absolute left-0 right-0 overflow-hidden" style={{ top: '10px', bottom: '10px', background: '#080c10' }}>
                  <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(90deg, #121a22 0px, #1a252f 2px, #243342 5px, #2e4052 8px, #3a5065 10px, #2e4052 12px, #243342 15px, #1a252f 18px, #121a22 20px, transparent 20px, transparent 36px)', animation: 'feedRollMove 0.45s linear infinite' }} />
                  <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(255,255,255,0.06) 8px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.06) 12px, transparent 14px, transparent 36px)', animation: 'feedRollMove 0.45s linear infinite' }} />
                </div>
                {/* Bottom rail */}
                <div className="absolute left-0 right-0 h-[10px] bottom-0 z-[8]" style={{ background: 'linear-gradient(180deg, #2a3038 0%, #3d4550 30%, #5a6470 70%, #7a8490 100%)', borderRadius: '0 0 3px 3px' }} />
                {/* Supports */}
                <div className="absolute flex justify-between" style={{ bottom: '-18px', left: '8%', right: '8%', height: '18px' }}>
                  {[0,1,2,3,4].map(i => (
                    <div key={i} style={{ width: '10px', height: '100%', background: 'linear-gradient(90deg, #3a4550, #5a6575, #3a4550)', borderRadius: '0 0 2px 2px' }} />
                  ))}
                </div>
              </div>

              {/* Pallets */}
              <div className="absolute inset-0 z-[12]" style={{ bottom: '12%' }}>
                {[
                  { cls: 'p1', delay: '0s', bottom: '30%', w: 70, h: 52, bg: 'linear-gradient(160deg, #8b7355 0%, #7a6348 20%, #6b5540 45%, #5a4535 70%, #4a3828 100%)' },
                  { cls: 'p2', delay: '-1.2s', bottom: '34%', w: 52, h: 40, bg: 'linear-gradient(155deg, #7d6b50 0%, #6d5b42 25%, #5d4d38 50%, #4d3d2a 75%, #3d2f20 100%)' },
                  { cls: 'p3', delay: '-2.4s', bottom: '26%', w: 80, h: 60, bg: 'linear-gradient(165deg, #9a8565 0%, #8a7555 20%, #7a6545 45%, #6a5538 70%, #5a4528 100%)' },
                  { cls: 'p4', delay: '-3.6s', bottom: '38%', w: 40, h: 30, bg: 'linear-gradient(150deg, #756045 0%, #655038 30%, #55422c 60%, #453520 100%)' },
                  { cls: 'p5', delay: '-4.8s', bottom: '32%', w: 62, h: 48, bg: 'linear-gradient(158deg, #887050 0%, #786042 25%, #685235 55%, #584428 80%, #48361c 100%)' },
                ].map(p => (
                  <div key={p.cls} className="absolute" style={{ bottom: p.bottom, animation: `feedPalletMove 6s linear infinite`, animationDelay: p.delay }}>
                    {/* Weight tag */}
                    <div className="absolute text-white whitespace-nowrap z-[15]" style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)', background: '#22c55e', fontSize: '9px', fontWeight: 700, padding: '2px 8px', borderRadius: '3px', boxShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>
                      {palletWeights[p.cls]} kg
                    </div>
                    {/* Detection box */}
                    <div className="absolute" style={{ inset: '-5px', border: '2px solid #22c55e', borderRadius: '3px', boxShadow: '0 0 14px rgba(34,197,94,0.6)' }} />
                    {/* Pallet body */}
                    <div style={{ position: 'relative', transform: 'perspective(300px) rotateX(-8deg) rotateY(-10deg)' }}>
                      <div className="relative overflow-hidden" style={{ width: `${p.w}px`, height: `${p.h}px`, background: p.bg, borderRadius: '4px 4px 2px 2px', boxShadow: '5px 6px 18px rgba(0,0,0,0.5), inset -4px -4px 12px rgba(0,0,0,0.3), inset 3px 3px 10px rgba(255,255,255,0.08)' }}>
                        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 20%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06) 0%, transparent 25%), radial-gradient(circle at 40% 80%, rgba(0,0,0,0.15) 0%, transparent 20%)' }} />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[8px]" style={{ width: `${p.w}px`, background: 'linear-gradient(180deg, #8b6f4a 0%, #6b5535 50%, #4a3a25 100%)', borderRadius: '1px', boxShadow: '2px 3px 6px rgba(0,0,0,0.5)' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="rounded-lg p-2 flex flex-col overflow-hidden" style={{ width: '175px', background: 'white', border: '1px solid hsl(var(--border))' }}>
            <div className="flex justify-between items-center pb-1.5 mb-1.5" style={{ borderBottom: '1px solid #f3f4f6' }}>
              <span style={{ fontSize: '7px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Metrics</span>
              <div className="flex items-center gap-[3px] rounded-full" style={{ background: 'rgba(34,197,94,0.1)', padding: '2px 5px' }}>
                <span className="rounded-full" style={{ width: '4px', height: '4px', background: '#22c55e', animation: 'statusPulse 1.5s infinite' }} />
                <span style={{ fontSize: '6px', fontWeight: 600, color: '#16a34a' }}>LIVE</span>
              </div>
            </div>

            {/* Time frame buttons */}
            <div className="mb-1.5">
              <div style={{ fontSize: '6px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '3px' }}>Time Frame</div>
              <div className="flex gap-[2px] flex-wrap">
                {[10, 30, 60, 480, 1440].map(m => (
                  <button
                    key={m}
                    onClick={() => selectTf(m)}
                    style={{
                      background: tf === m ? '#1f2937' : '#f3f4f6',
                      border: `1px solid ${tf === m ? '#1f2937' : '#e5e7eb'}`,
                      color: tf === m ? 'white' : '#4b5563',
                      fontSize: '6px',
                      padding: '2px 4px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    {m === 60 ? '1h' : m === 480 ? '8h' : m === 1440 ? '24h' : `${m}m`}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
              <div className="rounded p-1.5" style={{ background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <div style={{ fontSize: '6px', color: '#6b7280', textTransform: 'uppercase' }}>Feed Pallet Count</div>
                <div className="tabular-nums" style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', lineHeight: 1.1 }}>{fmt(baseCount)}</div>
                <div style={{ fontSize: '6px', color: '#9ca3af' }}>in last {d.l}</div>
              </div>
              <div className="rounded p-1.5" style={{ background: '#f9fafb', border: '1px solid #f3f4f6' }}>
                <div style={{ fontSize: '6px', color: '#6b7280', textTransform: 'uppercase' }}>Total Feed Weight</div>
                <div className="tabular-nums" style={{ fontSize: '15px', fontWeight: 700, color: '#1f2937', lineHeight: 1.1 }}>{fmt(baseWeight)}<span style={{ fontSize: '8px', color: '#6b7280' }}>kg</span></div>
                <div style={{ fontSize: '6px', color: '#9ca3af' }}>in last {d.l}</div>
              </div>
              <div className="flex items-center gap-1.5 rounded p-1.5 mt-auto" style={{ background: 'rgba(34,197,94,0.08)' }}>
                <div className="flex items-center justify-center rounded-full" style={{ width: '15px', height: '15px', background: '#22c55e' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-2 h-2"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: '6px', color: '#6b7280', textTransform: 'uppercase' }}>Feed Rate</div>
                  <div className="tabular-nums" style={{ fontSize: '10px', fontWeight: 600, color: '#16a34a' }}>{rate} kg/min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use case cards */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        {['Real-Time Weight & Count', 'Rate Drop & Jam Alerts', 'Foreign Object Detection', 'Safety & Intrusion Alerts'].map((title, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg p-3.5 transition-shadow hover:shadow-md" style={{ background: 'white', border: '1px solid hsl(var(--border))' }}>
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
