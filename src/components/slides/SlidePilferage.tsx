import { useState, useEffect } from 'react';

const sceneLabels = ['NORMAL OPERATION', 'SUSPICIOUS ACTIVITY', 'CONFIRMED PILFERAGE', 'ALERT COMMUNICATION'];

const SlidePilferage = () => {
  const [scene, setScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const durations = [3500, 4000, 4500, 5000];
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setScene(prev => (prev + 1) % 4);
        setIsTransitioning(false);
      }, 400);
    }, durations[scene]);
    return () => clearTimeout(timer);
  }, [scene]);

  return (
    <div className="slide-inner">
      <div className="sec-label">Security</div>
      <h2 className="slide-title">Pilferage <em>Detection AI</em></h2>

      <div className="w-full max-w-[900px] mx-auto rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #1a1d21 0%, #0d0f11 100%)', boxShadow: '0 25px 80px rgba(0,0,0,0.6)' }}>
        {/* Header bar */}
        <div className="flex justify-between items-center px-6 py-4" style={{ background: 'linear-gradient(90deg, #2a2e33 0%, #1e2227 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: scene === 3 ? '#4ade80' : '#a8b4c0',
                boxShadow: scene === 3 ? '0 0 12px #4ade80' : 'none',
              }}
            />
            <span className="text-[13px] font-semibold tracking-[2px] uppercase" style={{ color: '#c8d0d8' }}>
              YANTRAI LABS • MATERIAL SURVEILLANCE
            </span>
          </div>
          <span className="text-[12px] font-mono" style={{ color: '#7a8590' }}>UNIT-7A</span>
        </div>

        {/* Main viewport */}
        <div
          className="relative overflow-hidden transition-opacity duration-400"
          style={{ height: '360px', background: 'linear-gradient(180deg, #16181c 0%, #0c0e10 100%)', opacity: isTransitioning ? 0.3 : 1 }}
        >
          <svg viewBox="0 0 900 360" className="absolute w-full h-full">
            <defs>
              <linearGradient id="pgMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a4048" /><stop offset="50%" stopColor="#5a6570" /><stop offset="100%" stopColor="#3a4048" />
              </linearGradient>
              <linearGradient id="pgFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1d21" /><stop offset="100%" stopColor="#0d0f11" />
              </linearGradient>
            </defs>
            <rect x="0" y="270" width="900" height="90" fill="url(#pgFloorGrad)" />
            {[...Array(20)].map((_, i) => <line key={i} x1={i * 50} y1="270" x2={i * 50 + 25} y2="360" stroke="rgba(100,110,120,0.15)" strokeWidth="1" />)}
            <rect x="50" y="120" width="200" height="150" fill="url(#pgMetalGrad)" rx="4" />
            <rect x="60" y="130" width="180" height="80" fill="#1a1d21" rx="2" />
            <circle cx="80" cy="240" r="6" fill={scene >= 2 ? '#fcd34d' : '#3a4048'} />
            <circle cx="100" cy="240" r="6" fill={scene === 3 ? '#4ade80' : '#3a4048'} />
            <rect x="450" y="240" width="400" height="30" fill="#2a2e33" rx="4" />
            <rect x="500" y="150" width="350" height="110" fill="none" stroke="rgba(100,110,120,0.3)" strokeWidth="2" strokeDasharray="8 4" rx="4" />
            {[520, 580, 640, 705, 760].map((x, i) => <rect key={i} x={x} y={170 + (i % 2) * 10} width={50 + (i % 3) * 5} height={55 + (i % 2) * 10} fill={i % 2 === 0 ? '#5a6570' : '#6a7580'} rx="3" />)}

            {scene >= 1 && (
              <>
                <ellipse cx={scene >= 2 ? 420 : 480} cy="225" rx="18" ry="18" fill="#4a5058" style={{ transition: 'cx 1s ease' }} />
                <rect x={scene >= 2 ? 410 : 470} y="243" width="20" height="30" fill="#3a4048" rx="4" style={{ transition: 'x 1s ease' }} />
                {scene >= 2 && <rect x="395" y="250" width="35" height="24" fill="#6a7580" rx="2"><animate attributeName="opacity" values="1;0.7;1" dur="1.5s" repeatCount="indefinite" /></rect>}
                <rect x="495" y="145" width="360" height="120" fill="none" stroke="#fcd34d" strokeWidth="2" rx="6" style={{ opacity: 0.8 }}>
                  <animate attributeName="strokeOpacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                </rect>
              </>
            )}
          </svg>

          {/* Overlays per scene */}
          {scene === 1 && (
            <div className="absolute top-10 right-8 rounded-lg px-5 py-4" style={{ background: 'rgba(252,211,77,0.12)', border: '1px solid rgba(252,211,77,0.4)', backdropFilter: 'blur(8px)', animation: 'fadeSlideIn 0.5s ease' }}>
              <div className="text-[11px] font-bold tracking-[1.5px] mb-2" style={{ color: '#fcd34d' }}>⚠ AI DETECTION</div>
              <div className="text-[14px] font-semibold mb-1" style={{ color: '#e8e0d0' }}>Unusual Material Movement</div>
              <div className="text-[12px]" style={{ color: '#a8a098' }}>Zone Deviation Detected</div>
            </div>
          )}

          {scene === 2 && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 rounded-xl px-7 py-5" style={{ background: 'linear-gradient(135deg, rgba(40,44,50,0.95), rgba(30,34,38,0.95))', border: '1px solid rgba(252,211,77,0.5)', animation: 'pulseGlow 2s ease infinite' }}>
              <div className="text-[10px] font-bold tracking-[2px] text-center mb-3" style={{ color: '#fcd34d' }}>● CONFIRMED INCIDENT</div>
              <div className="text-[18px] font-bold text-center mb-1.5 text-white">Material Discrepancy Identified</div>
              <div className="text-[14px] font-semibold text-center" style={{ color: '#fcd34d' }}>Unauthorized Removal Detected</div>
            </div>
          )}

          {scene === 3 && (
            <>
              <div className="absolute top-5 right-5 rounded-lg px-4 py-3.5" style={{ background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.6)', animation: 'fadeSlideIn 0.4s ease' }}>
                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[1.5px] mb-1.5" style={{ color: '#4ade80' }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#4ade80', boxShadow: '0 0 10px #4ade80', animation: 'blinkDot 1s infinite' }} />
                  ALERT SENT
                </div>
                <div className="text-[13px] font-semibold" style={{ color: '#d0e8d8' }}>Alert Sent to Plant Head</div>
                <div className="text-[11px] mt-1" style={{ color: '#90b898' }}>Hourly Incident Log Updated</div>
              </div>

              <div className="absolute bottom-16 left-8 rounded-xl p-5 min-w-[220px]" style={{ background: 'linear-gradient(145deg, rgba(35,40,45,0.98), rgba(25,28,32,0.98))', border: '1px solid rgba(100,110,120,0.3)', animation: 'slideUp 0.5s ease' }}>
                <div className="text-[10px] font-bold tracking-[2px] mb-3.5 pb-2.5" style={{ color: '#8a9298', borderBottom: '1px solid rgba(100,110,120,0.2)' }}>INCIDENT DETAILS</div>
                {[['Timestamp', '14:32:07 IST'], ['Unit ID', 'PLANT-7A-STOR'], ['Material', 'Raw Steel Coil'], ['Deviation', '-12.5 kg']].map(([label, value], i) => (
                  <div key={i} className="flex justify-between mb-2 text-[12px]">
                    <span style={{ color: '#6a7580' }}>{label}</span>
                    <span className="font-semibold font-mono" style={{ color: i === 3 ? '#fcd34d' : '#c8d0d8' }}>{value}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Scene dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="h-2 rounded transition-all duration-300" style={{
                width: i === scene ? '28px' : '8px',
                background: i === scene ? (i === 3 ? '#4ade80' : i >= 1 ? '#fcd34d' : '#8a9298') : 'rgba(100,110,120,0.4)',
              }} />
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-3.5" style={{ background: 'linear-gradient(90deg, #1e2227, #252a30)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <span className="text-[12px] font-semibold tracking-wider transition-colors duration-300" style={{ color: scene === 3 ? '#4ade80' : scene >= 1 ? '#fcd34d' : '#7a8590' }}>
            {sceneLabels[scene]}
          </span>
          <div className="flex gap-5 text-[11px]" style={{ color: '#5a6570' }}>
            <span>AI CONFIDENCE: 97.3%</span>
            <span>|</span>
            <span>LIVE MONITORING</span>
          </div>
        </div>

        {/* Applications */}
        <div className="px-6 py-5" style={{ background: '#0d0f11', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="text-[10px] font-bold tracking-[2px] mb-4" style={{ color: '#6a7580' }}>SIMILAR INDUSTRIAL APPLICATIONS</div>
          <div className="grid grid-cols-5 gap-3">
            {['Warehouse Shrinkage Monitoring', 'Chemical Leakage Identification', 'Scrap Diversion Monitoring', 'Inventory Reconciliation', 'Restricted Area Tracking'].map((item, i) => (
              <div key={i} className="rounded-md px-3.5 py-3 text-[12px] font-medium" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(100,110,120,0.15)', color: '#a8b4c0' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePilferage;
