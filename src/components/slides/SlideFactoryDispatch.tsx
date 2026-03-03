interface Props {
  variant?: 'sourcing' | 'dispatch';
}

const SlideFactoryDispatch = ({ variant = 'sourcing' }: Props) => {
  const title = variant === 'sourcing' ? 'Factory Sourcing AI' : 'Dispatch Verification AI';

  return (
    <div className="slide-inner">
      <div className="w-full" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-2.5 text-[14px] sm:text-[20px] tracking-[2px] sm:tracking-[3px] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0071e3' }}>
            <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center" style={{ border: '2px solid #8b9dc3' }}>
              <div className="w-2 h-2 sm:w-3 sm:h-3" style={{ border: '2px solid #f97316', animation: 'statusPulse 2s infinite' }} />
            </div>
            {title}
          </div>
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px]" style={{ color: '#22c55e' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e', animation: 'blinkDot 1.5s infinite' }} />
            ONLINE
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-4 sm:gap-6">
          {/* Main scene */}
          <div className="rounded-lg overflow-hidden" style={{ background: '#1a1d21', border: '1px solid rgba(139,157,195,0.15)' }}>
            <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3" style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(139,157,195,0.1)' }}>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[1px] sm:tracking-[2px]" style={{ color: '#8b9dc3' }}>
                {variant === 'sourcing' ? 'Inbound Material Scan' : 'Outbound Dispatch Verification'}
              </span>
              <span className="flex items-center gap-1.5 text-[8px] sm:text-[9px]" style={{ color: '#22c55e' }}>
                <span className="w-[5px] h-[5px] rounded-full inline-block" style={{ background: '#22c55e', animation: 'livePulse 1s infinite' }} />
                LIVE
              </span>
            </div>

            <div className="relative" style={{ height: '220px', overflow: 'hidden' }}>
              {/* Scanner */}
              <div className="absolute top-[30px] left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 sm:w-20 h-8 sm:h-10 rounded flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #3d4450, #2d3339)', border: '2px solid #4a5568' }}>
                  <div className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] rounded-full" style={{ background: 'radial-gradient(circle, #3b82f6 0%, #1e40af 100%)', border: '2px solid #4b5563', animation: 'scanGlow 2s infinite' }} />
                </div>
                <div className="w-3 sm:w-3.5 h-4 sm:h-5 mx-auto" style={{ background: '#3d4450', borderLeft: '2px solid #4a5568', borderRight: '2px solid #4a5568' }} />
              </div>

              {/* Beam */}
              <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-0.5 opacity-70" style={{ height: '100px', background: 'linear-gradient(180deg, #3b82f6, transparent)' }} />

              {/* Moving items */}
              <div className="absolute bottom-[78px] left-0 right-0">
                {[
                  { shape: 'carton', label: 'VERIFIED', pass: true, delay: '0s' },
                  { shape: 'pallet', label: 'VERIFIED', pass: true, delay: '2.25s' },
                  { shape: 'crate', label: 'MISMATCH', pass: false, delay: '4.5s' },
                  { shape: 'drum', label: 'VERIFIED', pass: true, delay: '6.75s' },
                ].map((item, i) => (
                  <div key={i} className="absolute bottom-0" style={{ animation: `itemMove 9s linear infinite`, animationDelay: item.delay }}>
                    <span
                      className="absolute -top-7 left-1/2 -translate-x-1/2 text-[7px] sm:text-[8px] font-semibold px-2 py-0.5 rounded-sm whitespace-nowrap text-white"
                      style={{
                        background: item.pass ? '#22c55e' : '#ef4444',
                        animation: 'labelShow 9s linear infinite',
                        animationDelay: item.delay,
                        opacity: 0,
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      className="rounded"
                      style={{
                        width: item.shape === 'drum' ? '30px' : '42px',
                        height: item.shape === 'drum' ? '42px' : '36px',
                        background:
                          item.shape === 'carton' ? 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #92400e 100%)' :
                            item.shape === 'pallet' ? 'linear-gradient(180deg, #78716c 0%, #57534e 100%)' :
                              item.shape === 'crate' ? 'linear-gradient(180deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)' :
                                'linear-gradient(90deg, #4b5563 0%, #9ca3af 30%, #d1d5db 50%, #9ca3af 70%, #4b5563 100%)',
                      }}
                    />
                    <div
                      className="absolute -inset-[6px] rounded-sm"
                      style={{
                        border: '2px solid transparent',
                        animation: `${item.pass ? 'scanPass' : 'scanFail'} 9s linear infinite`,
                        animationDelay: item.delay,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Conveyor */}
              <div
                className="absolute bottom-[50px] left-[20px] sm:left-[30px] right-[20px] sm:right-[30px] h-6 sm:h-7 rounded-sm"
                style={{
                  background: 'repeating-linear-gradient(90deg, #2d3339 0px, #2d3339 20px, #3d4450 20px, #3d4450 22px)',
                  animation: 'beltMove 1.2s linear infinite',
                }}
              />
              <div className="absolute bottom-[46px] left-[20px] sm:left-[30px] right-[20px] sm:right-[30px] h-8 sm:h-9 rounded-b-md" style={{ border: '2px solid #3d4450', borderTop: 'none' }} />
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-row sm:flex-col gap-3 sm:gap-5">
            <div className="rounded-lg p-3 sm:p-4 flex-1 sm:flex-none" style={{ background: '#1a1d21', border: '1px solid rgba(139,157,195,0.15)' }}>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[1.5px] pb-2 sm:pb-2.5 mb-2 sm:mb-3" style={{ color: '#f97316', borderBottom: '1px solid rgba(139,157,195,0.1)' }}>
                {variant === 'sourcing' ? 'Sourcing Stats' : 'Dispatch Stats'}
              </div>
              {[
                { label: 'Orders', value: '342', cls: '' },
                { label: 'Verified', value: '98.5%', cls: 'text-[#22c55e]' },
                { label: 'Held', value: '1.5%', cls: 'text-[#ef4444]' },
                { label: 'On-Time', value: '96.2%', cls: 'text-[#f97316]' },
              ].map((s, i) => (
                <div key={i} className="flex justify-between mb-2 sm:mb-3 text-[10px] sm:text-[11px]">
                  <span style={{ color: '#4a5568' }}>{s.label}</span>
                  <span className={`font-semibold ${s.cls}`} style={s.cls ? {} : { color: '#c4cad4' }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-3 sm:p-4 flex-1 sm:flex-none" style={{ background: '#1a1d21', border: '1px solid rgba(139,157,195,0.15)' }}>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[1.5px] pb-2 sm:pb-2.5 mb-2 sm:mb-3" style={{ color: '#f97316', borderBottom: '1px solid rgba(139,157,195,0.1)' }}>
                Verification
              </div>
              <div className="text-[9px] sm:text-[10px] space-y-2 sm:space-y-2.5">
                <div className="flex items-center gap-2"><span style={{ color: '#22c55e' }}>✓</span> <span style={{ color: '#c4cad4' }}>SKU Match</span></div>
                <div className="flex items-center gap-2"><span style={{ color: '#22c55e' }}>✓</span> <span style={{ color: '#c4cad4' }}>Quantity</span></div>
                <div className="flex items-center gap-2"><span style={{ color: '#f6c915', animation: 'spinAnim 2s linear infinite', display: 'inline-block' }}>◐</span> <span style={{ color: '#c4cad4' }}>Label Scan</span></div>
                <div className="flex items-center gap-2"><span style={{ color: '#4a5568' }}>○</span> <span style={{ color: '#c4cad4' }}>Weight Check</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div className="mt-4 sm:mt-5">
          <div className="text-[8px] sm:text-[9px] uppercase tracking-[2px] mb-2 sm:mb-3" style={{ color: '#8b9dc3' }}>Operations</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {[
              { icon: '🚚', name: 'GRN Verification', metric: 'Inward receipt check' },
              { icon: '🏷️', name: 'Label & Barcode', metric: 'OCR validation' },
              { icon: '⚖️', name: 'Weight Tally', metric: 'Auto reconciliation' },
              { icon: '📋', name: 'PO Matching', metric: 'Order vs delivery' },
              { icon: '📍', name: 'Load Planning', metric: 'Route optimization' },
            ].map((uc, i) => (
              <div key={i} className="rounded-md p-3 sm:p-4 transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#1a1d21', border: '1px solid rgba(139,157,195,0.12)' }}>
                <div className="text-lg sm:text-xl mb-1.5 sm:mb-2.5">{uc.icon}</div>
                <div className="text-[12px] sm:text-[14px] font-semibold tracking-wide mb-1 sm:mb-1.5 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{uc.name}</div>
                <div className="text-[8px] sm:text-[9px]" style={{ color: '#22c55e' }}>{uc.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFactoryDispatch;
