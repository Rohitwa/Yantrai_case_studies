import pilferageVideo from '@/assets/veesion-IA-crop-1.mp4';

const SlidePilferage = () => {
  return (
    <div className="slide-inner">
      <div className="text-center mb-4">
        <h2 className="slide-title">Pilferage <em>Detection AI</em></h2>
      </div>

      <div className="w-full max-w-[900px] mx-auto rounded-xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #1a1d21 0%, #0d0f11 100%)', boxShadow: '0 25px 80px rgba(0,0,0,0.6)' }}>
        {/* Header bar */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4" style={{ background: 'linear-gradient(90deg, #2a2e33 0%, #1e2227 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 12px #4ade80' }} />
            <span className="text-[10px] sm:text-[13px] font-semibold tracking-[1px] sm:tracking-[2px] uppercase" style={{ color: '#c8d0d8' }}>
              YANTRAI LABS • MATERIAL SURVEILLANCE
            </span>
          </div>
          <span className="text-[10px] sm:text-[12px] font-mono hidden sm:inline" style={{ color: '#7a8590' }}>UNIT-7A</span>
        </div>

        {/* Video viewport */}
        <div className="relative overflow-hidden" style={{ background: '#000' }}>
          <video
            src={pilferageVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
            style={{ display: 'block', maxHeight: '280px', objectFit: 'contain' }}
          />
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-2.5 sm:py-3.5" style={{ background: 'linear-gradient(90deg, #1e2227, #252a30)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <span className="text-[10px] sm:text-[12px] font-semibold tracking-wider" style={{ color: '#4ade80' }}>
            LIVE MONITORING
          </span>
          <div className="flex gap-3 sm:gap-5 text-[9px] sm:text-[11px]" style={{ color: '#5a6570' }}>
            <span>AI: 97.3%</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">ACTIVE</span>
          </div>
        </div>

        {/* Additional Use Cases */}
        <div className="px-4 sm:px-6 py-4 sm:py-5" style={{ background: '#0d0f11', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="text-[9px] sm:text-[10px] font-bold tracking-[2px] mb-3 sm:mb-4" style={{ color: '#6a7580' }}>ADDITIONAL USE CASES</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {['Warehouse Shrinkage Monitoring', 'Chemical Leakage Identification', 'Scrap Diversion Monitoring', 'Inventory Reconciliation', 'Restricted Area Tracking'].map((item, i) => (
              <div key={i} className="rounded-md px-3 py-2.5 sm:px-3.5 sm:py-3 text-[11px] sm:text-[12px] font-medium" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(100,110,120,0.15)', color: '#a8b4c0' }}>
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
