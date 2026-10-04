const MarketPreview = () => {
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-0 lg:py-20">
      <div className="w-full max-w-[560px]">
        {/* header */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#d8d1c6] bg-[#f4f1ea]/80 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2c2a28] shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0c726d]" />
          AI FINANCIAL INTELLIGENCE
        </div>

        {/* Market preview insight */}
        <h1 className="max-w-[540px] font-serif text-[clamp(3.3rem,5vw,6.4rem)] leading-[0.9] tracking-[-0.06em] text-[#161512]">
          See the bigger picture in
          <span className="block italic">global markets.</span>
        </h1>

        <p className="mt-7 max-w-[520px] text-[17px] leading-[1.55] text-[#4b453e]">
          NEXUS connects company fundamentals, market movements, financial news,
          macroeconomic signals, and AI analysis into one financial intelligence
          platform.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-xl bg-[#0d7d75] px-6 py-3 text-[15px] font-medium text-white shadow-[0_8px_16px_rgba(13,125,117,0.2)] transition-colors hover:bg-[#0b6b66]"
          >
            Explore Intelligence
          </button>
          <button
            type="button"
            className="rounded-xl border border-[#d4cfc5] bg-transparent px-6 py-3 text-[15px] font-medium text-[#1f1d1a] transition-colors hover:bg-[#efeae1]"
          >
            Learn How It Works
          </button>
        </div>

        {/*  */}
        <div className="mt-14 grid max-w-[520px] grid-cols-3 gap-8 border-t border-[#d8d1c6] pt-7 text-left">
          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[22px]">
              42,000+
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Equities Monitored
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[22px]">
              180+
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Macro Indicators
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[22px]">
              100%
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Verifiable Citations
            </div>
          </div>
        </div>
      </div>

      {/* macro conviction signal */}
      <div className="w-full max-w-[580px]">
        <div className="rounded-[18px] border border-[#d7d0c5] bg-[#f7f4ee] p-4 shadow-[0_12px_24px_rgba(30,25,20,0.05)]">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#3a352f]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0d7c73]" />
              MACRO CONVICTION SIGNAL
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#7c7368]">
              LIVE // 14:32:00 UTC
            </div>
          </div>

          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <div className="font-medium text-[13px] text-[#201d1b]">
                Global Liquidity Dynamics
              </div>
              <div className="mt-1 text-[12px] text-[#6b645d]">
                Cross-asset sovereign liquidity expansion vs. yield spread
                compression
              </div>
            </div>

            <div className="pt-1 text-right">
              <div className="font-serif text-[22px] leading-none text-[#1a1816]">
                142.84
              </div>
              <div className="mt-1 text-[12px] font-medium text-[#1d8b78]">
                +3.42% 30D
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border border-[#d8d0c4] bg-[#e8e2d8] p-3 pb-2">
            <div className="mb-2 flex items-center justify-between text-[11px] text-[#6d665f]">
              <span>Sovereign Net Absorption</span>
              <span>120-Day Range</span>
            </div>

            <svg
              viewBox="0 0 520 170"
              className="h-[150px] w-full"
              aria-label="Macroeconomic trend chart"
              role="img"
            >
              <defs>
                <linearGradient id="liquidityFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0d7d75" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#0d7d75" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[0, 1, 2, 3, 4].map((row) => (
                <line
                  key={row}
                  x1="0"
                  x2="520"
                  y1={26 + row * 30}
                  y2={26 + row * 30}
                  stroke="#bcb1a3"
                  strokeOpacity="0.3"
                  strokeDasharray="2 8"
                />
              ))}

              <path
                d="M0 120 C 35 105, 60 90, 100 96 S 160 120, 200 82 S 270 60, 310 78 S 380 70, 420 42 S 470 44, 520 36 L520 170 L0 170 Z"
                fill="url(#liquidityFill)"
              />

              <path
                d="M0 120 C 35 105, 60 90, 100 96 S 160 120, 200 82 S 270 60, 310 78 S 380 70, 420 42 S 470 44, 520 36"
                fill="none"
                stroke="#0e857b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {[0, 1, 2, 3].map((point) => (
                <path
                  key={point}
                  d={`M${point * 140 + 10} 144 L${point * 140 + 10} 170`}
                  stroke="#b9b0a5"
                  strokeOpacity="0.4"
                  strokeDasharray="1 8"
                />
              ))}

              <g fontSize="10" fill="#7a7168" fontFamily="sans-serif">
                <text x="35" y="164">
                  OCT 2024
                </text>
                <text x="170" y="164">
                  DEC 2024
                </text>
                <text x="305" y="164">
                  FEB 2025
                </text>
                <text x="430" y="164">
                  APR 2025
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#d8d1c6] bg-[#f2efe8] p-3 text-[#1b1916]">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#514d49]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#e4eee9] text-[10px] text-[#0d7d75]">
                  🏛
                </span>
                CENTRAL BANK RESERVES
              </div>
              <div className="font-serif text-[18px] text-[#1a1816]">
                G4 Balance Sheet
              </div>
              <div className="mt-1 text-[12px] text-[#5f5a52]">
                +4Bbps shift in policy tone
              </div>
            </div>

            <div className="rounded-xl border border-[#d8d1c6] bg-[#f2efe8] p-3 text-[#1b1916]">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#514d49]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#e4eee9] text-[10px] text-[#0d7d75]">
                  ⤴
                </span>
                SECTOR FLOW IMPACT
              </div>
              <div className="font-serif text-[18px] text-[#1a1816]">
                High-Duration Technology
              </div>
              <div className="mt-1 text-[12px] text-[#5f5a52]">
                Historical correlation: 0.81 (5Y)
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#d8d1c6] pt-3 text-[12px] text-[#544e47]">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#dfeee8] text-[10px] text-[#0d7d75]">
                ✓
              </span>
              Validated against 14 central bank balance sheets
            </div>

            <button
              type="button"
              className="text-[#4f4a45] hover:text-[#1c1a17]"
            >
              Inspect Citations →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPreview;
