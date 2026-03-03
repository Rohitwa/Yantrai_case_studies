import pilferageVideo from '@/assets/veesion-IA-crop-1.mp4';

const SlidePilferage = () => {
  return (
    <div className="slide-inner">
      <div className="text-center mb-4">
        <h2 className="slide-title">Pilferage <em className="italic font-normal text-[#0071e3]">Detection AI</em></h2>
      </div>

      <div className="w-full max-w-[900px] mx-auto rounded-xl overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0, 0, 0, 0.08)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
        {/* Header bar */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4" style={{ background: '#f5f5f7', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 12px #4ade80' }} />
            <span className="text-[10px] sm:text-[13px] font-semibold tracking-[1px] sm:tracking-[2px] uppercase" style={{ color: '#86868b' }}>
              YantrAI Labs • MATERIAL SURVEILLANCE
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
        <div className="flex justify-between items-center px-4 sm:px-6 py-2.5 sm:py-3.5" style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
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
        <div className="px-4 sm:px-6 py-4 sm:py-5" style={{ background: '#f5f5f7', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
          <div className="text-[9px] sm:text-[10px] font-bold tracking-[2px] mb-3 sm:mb-4" style={{ color: '#86868b' }}>ADDITIONAL USE CASES</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {['Warehouse Shrinkage Monitoring', 'Chemical Leakage Identification', 'Scrap Diversion Monitoring', 'Inventory Reconciliation', 'Restricted Area Tracking'].map((item, i) => (
              <div key={i} className="rounded-md px-3 py-2.5 sm:px-3.5 sm:py-3 text-[11px] sm:text-[12px] font-medium" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', color: '#1d1d1f' }}>
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
