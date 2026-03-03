const SlideOneGodown = () => {
  return (
    <div className="slide-inner">
      <div className="sec-label">Solutions we have delivered</div>
      <h2 className="slide-title">One Godown</h2>
      <p className="text-xs sm:text-sm mb-4 max-w-[700px]" style={{ color: 'hsl(var(--slide-muted))' }}>
        Seamless, faster Vision AI for retail — multi-SKU detection at the point of sale, powered by YantraI Labs.
      </p>

      {/* YouTube Embed */}
      <div className="w-full max-w-[640px] mx-auto mb-4">
        <div
          className="rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            border: '2px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/IT6a_o3h5Mw"
              title="One Godown AI - Multi-SKU Detection"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-[640px] mx-auto">
        {[
          { icon: '📦', title: 'Multi-SKU Detection', desc: 'Identify multiple product types in a single frame at the retail counter.' },
          { icon: '⚡', title: 'Real-Time Processing', desc: 'Instant detection and counting with no lag at the point of sale.' },
          { icon: '🎯', title: 'High Accuracy', desc: '99%+ detection accuracy across diverse product categories and packaging.' },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'hsl(var(--slide-bg2))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
            <h3 className="font-serif text-base sm:text-lg mb-1 sm:mb-2" style={{ color: 'hsl(var(--slide-text))' }}>{item.title}</h3>
            <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: 'hsl(var(--slide-muted))' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideOneGodown;
