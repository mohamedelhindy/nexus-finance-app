import Button from "@/components/shared/Button";

const MarketPreview = () => {
  return (
    <section className="mx-auto min-w-[600px] flex min-h-[700px] w-full flex-col items-center justify-center gap-10 overflow-hidden lg:w-[70%] lg:flex-row lg:items-center lg:gap-[3.5vw] lg:px-0 lg:py-0">
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        {/* header */}
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md bg-surface-container px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-text-secondary shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0c726d]" />
          AI FINANCIAL INTELLIGENCE
        </div>

        {/* Market preview insight */}
        <h1 className="font-serif text-[clamp(2.8rem,3.8vw,4.2rem)] leading-[0.91] tracking-[-0.06em] text-[#161512]">
          See the bigger picture in
          <span className="block italic">global markets.</span>
        </h1>

        <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.5] text-[#4b453e]">
          NEXUS connects company fundamentals, market movements, financial news,
          macroeconomic signals, and AI analysis into one financial intelligence
          platform.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button
            text="Explore Intelligence"
            color="bg-[#0d7d75] text-white shadow-[0_8px_16px_rgba(13,125,117,0.2)] hover:bg-[#0b6b66]"
            className="px-5 py-2.5 text-[14px]"
          />
          <Button
            text="Learn How It Works"
            color="border border-[#d4cfc5] bg-transparent text-[#1f1d1a] hover:bg-[#efeae1]"
            className="px-5 py-2.5 text-[14px]"
          />
        </div>

        {/*  */}
        <div className="mt-11 grid grid-cols-3 gap-4 border-t border-[#d8d1c6] pt-7 text-left">
          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[20px]">
              42,000+
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Equities Monitored
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[20px]">
              180+
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Macro Indicators
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-[#11100f] sm:text-[20px]">
              100%
            </div>
            <div className="mt-1 text-[13px] text-[#5a544e]">
              Verifiable Citations
            </div>
          </div>
        </div>
      </div>

      {/* macro conviction signal */}
      <div className="flex min-w-0 flex-1">
        <div className="w-full rounded-[8px] border border-[#d7d0c5] bg-[#fffdf9] p-[clamp(1.25rem,2vw,2rem)] shadow-[0_8px_18px_rgba(30,25,20,0.04)]">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#d8d1c6] pb-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#3a352f]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0d7c73]" />
              MACRO CONVICTION SIGNAL
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[#7c7368]">
              LIVE // 14:32:08 UTC
            </div>
          </div>

          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-medium text-[18px] text-[#201d1b]">
                Global Liquidity Dynamics
                <span className="rounded-[3px] bg-[#dcece5] px-2 py-1 text-[10px] font-medium text-[#25766a]">
                  Overweight
                </span>
              </div>
              <div className="mt-1 text-[12px] text-[#6b645d]">
                Cross-asset sovereign liquidity expansion vs. yield spread
                compression
              </div>
            </div>

            <div className="pt-1 text-right">
              <div className="font-serif text-[26px] leading-none text-[#1a1816]">
                142.84
              </div>
              <div className="mt-1 text-[12px] font-medium text-[#1d8b78]">
                +3.42% 30D
              </div>
            </div>
          </div>

          <div className="rounded-[7px] border border-[#d8d0c4] bg-[#e8e2d8] p-2.5 pb-1">
            <div className="mb-2 flex items-center justify-between text-[11px] text-[#6d665f]">
              <span>Sovereign Net Absorption</span>
              <span>120-Day Range</span>
            </div>

            <svg
              viewBox="0 0 520 170"
              className="h-[138px] w-full"
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

          <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-[#d8d1c6] pt-4">
            <div className="rounded-[6px] border border-[#d8d1c6] bg-[#e8e1d5] p-3 text-[#1b1916]">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#514d49]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#e4eee9] text-[10px] text-[#0d7d75]">
                  🏛
                </span>
                CENTRAL BANK RESERVES
              </div>
              <div className="font-serif text-[16px] text-[#1a1816]">
                G4 Balance Sheet
              </div>
              <div className="mt-1 text-[12px] text-[#5f5a52]">
                +4Bbps shift in policy tone
              </div>
            </div>

            <div className="rounded-[6px] border border-[#d8d1c6] bg-[#e8e1d5] p-3 text-[#1b1916]">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#514d49]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[#e4eee9] text-[10px] text-[#0d7d75]">
                  ⤴
                </span>
                SECTOR FLOW IMPACT
              </div>
              <div className="font-serif text-[16px] text-[#1a1816]">
                High-Duration Technology
              </div>
              <div className="mt-1 text-[12px] text-[#5f5a52]">
                Historical correlation: 0.81 (5Y)
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#d8d1c6] pt-4 text-[12px] text-[#544e47]">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#dfeee8] text-[10px] text-[#0d7d75]">
                ✓
              </span>
              Validated against 14 central bank balance sheets
            </div>

            <Button
              text="Inspect Citations →"
              color="bg-transparent text-[#0d7775] hover:text-[#1c1a17]"
              className="px-0 py-0 text-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPreview;
