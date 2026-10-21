import Button from "@/components/shared/Button";
import Image from "next/image";

const MarketPreview = () => {
  return (
    <section className="mx-auto flex min-h-0 w-full min-w-0 flex-col items-center justify-center gap-10 overflow-hidden px-5 py-16 sm:px-8 lg:min-h-[850px] lg:w-[70%] lg:flex-row lg:items-center lg:gap-[3.5vw] lg:px-0 lg:py-24">
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        {/* header */}
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-md bg-surface-container px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-text-secondary shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          AI FINANCIAL INTELLIGENCE
        </div>

        {/* Market preview insight */}
        <h1 className="font-serif text-[clamp(2.8rem,3.8vw,4.2rem)] leading-[0.91] tracking-[-0.06em] text-foreground">
          See the bigger picture in
          <span className="block italic">global markets.</span>
        </h1>

        <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.5] text-text-secondary">
          NEXUS connects company fundamentals, market movements, financial news,
          macroeconomic signals, and AI analysis into one financial intelligence
          platform.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button
            text="Explore Intelligence"
            color="bg-primary text-primary-foreground hover:bg-primary-hover"
            className="px-5 py-2.5 text-[14px]"
          />
          <Button
            text="Learn How It Works"
            color="border border-border bg-transparent text-foreground hover:bg-surface-container"
            className="px-5 py-2.5 text-[14px]"
          />
        </div>

        {/*  */}
        <div className="mt-9 grid grid-cols-3 gap-3 border-t border-border pt-6 text-left sm:mt-11 sm:gap-4 sm:pt-7">
          <div>
            <div className="font-serif text-[18px] font-semibold text-foreground sm:text-[20px]">
              42,000+
            </div>
            <div className="mt-1 text-[13px] text-text-secondary">
              Equities Monitored
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-foreground sm:text-[20px]">
              180+
            </div>
            <div className="mt-1 text-[13px] text-text-secondary">
              Macro Indicators
            </div>
          </div>

          <div>
            <div className="font-serif text-[18px] font-semibold text-foreground sm:text-[20px]">
              100%
            </div>
            <div className="mt-1 text-[13px] text-text-secondary">
              Verifiable Citations
            </div>
          </div>
        </div>
      </div>

      {/* macro conviction signal */}
      <div className="flex min-w-0 flex-1">
        <div className="w-full rounded-[8px] border border-border bg-surface-container-lowest p-[clamp(1.25rem,2vw,2rem)] shadow-[0_8px_18px_var(--shadow-card)]">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
            <div className="inline-flex min-w-0 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-text-secondary sm:text-[11px] sm:tracking-[0.18em]">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              MACRO CONVICTION SIGNAL
            </div>
            <div className="text-[9px] uppercase tracking-[0.12em] text-text-placeholder sm:text-[11px] sm:tracking-[0.18em]">
              LIVE // 14:32:08 UTC
            </div>
          </div>

          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 font-medium text-[16px] text-foreground sm:text-[18px]">
                Global Liquidity Dynamics
                <span className="rounded-[3px] bg-primary-subtle px-2 py-1 text-[10px] font-medium text-primary-token">
                  Overweight
                </span>
              </div>
              <div className="mt-1 text-[12px] text-text-muted">
                Cross-asset sovereign liquidity expansion vs. yield spread
                compression
              </div>
            </div>

            <div className="shrink-0 pt-1 text-right">
              <div className="font-serif text-[22px] leading-none text-foreground sm:text-[26px]">
                142.84
              </div>
              <div className="mt-1 text-[12px] font-medium text-success">
                +3.42% 30D
              </div>
            </div>
          </div>

          <div className="rounded-[7px] border border-border bg-surface-container p-2.5 pb-1">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-1 text-[10px] text-text-muted sm:text-[11px]">
              <span>Sovereign Net Absorption</span>
              <span>120-Day Range</span>
            </div>

            <Image
              src="/assets/liquidity-chart.svg"
              alt="Macroeconomic trend chart"
              className="h-[138px] w-full"
              height={170}
              width={520}
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 border-t border-border pt-4 sm:grid-cols-2">
            <div className="rounded-[6px] border border-border bg-surface-container p-3 text-foreground">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-secondary sm:text-[11px] sm:tracking-[0.16em]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-primary-subtle text-[10px] text-primary">
                  🏛
                </span>
                CENTRAL BANK RESERVES
              </div>
              <div className="font-serif text-[16px] text-foreground">
                G4 Balance Sheet
              </div>
              <div className="mt-1 text-[12px] text-text-muted">
                +4Bbps shift in policy tone
              </div>
            </div>

            <div className="rounded-[6px] border border-border bg-surface-container p-3 text-foreground">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-secondary sm:text-[11px] sm:tracking-[0.16em]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-primary-subtle text-[10px] text-primary">
                  ⤴
                </span>
                SECTOR FLOW IMPACT
              </div>
              <div className="font-serif text-[16px] text-foreground">
                High-Duration Technology
              </div>
              <div className="mt-1 text-[12px] text-text-muted">
                Historical correlation: 0.81 (5Y)
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4 text-[12px] text-text-secondary">
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary-subtle text-[10px] text-primary">
                ✓
              </span>
              Validated against 14 central bank balance sheets
            </div>

            <Button
              text="Inspect Citations →"
              color="bg-transparent text-primary hover:text-foreground"
              className="px-0 py-0 text-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPreview;
