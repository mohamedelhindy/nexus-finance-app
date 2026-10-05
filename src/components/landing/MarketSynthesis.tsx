import synthesisThreads from "@/constants/index";

const MarketSynthesis = () => {
  return (
    <section className="flex min-h-[850px] w-full flex-col items-center justify-center gap-12 overflow-hidden bg-background px-[15vw] py-24 lg:flex-row lg:items-center lg:gap-[3vw] lg:py-16">
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
          Cross-Asset Synthesis
        </p>

        <h1 className="mt-4 font-serif text-[clamp(2.5rem,3.5vw,3.7rem)] leading-[1.08] tracking-[-0.05em] text-foreground">
          Understand what is moving the market.
        </h1>

        <p className="mt-6 text-[15px] leading-[1.55] text-text-muted">
          Isolated metrics fail during regime changes. NEXUS maps causal
          dependencies across disparate domains, showing precisely why asset
          valuations shift and which variables will decide the next pivot.
        </p>

        <div className="mt-8">
          <ul>
            {synthesisThreads.map(({ label, text }) => (
              <li
                key={label}
                className="flex gap-3 border-b border-border py-4 text-[14px] leading-[1.45] text-text-muted last:border-b-0"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p>
                  <strong className="mr-2 font-medium text-foreground">
                    {label}:
                  </strong>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex min-w-0 flex-1">
        <div className="w-full rounded-[8px] border border-border bg-surface-container-lowest p-[clamp(1.25rem,1.7vw,2rem)] shadow-[0_8px_18px_var(--shadow-card)]">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-4 text-[11px]">
            <div className="flex items-center gap-2 text-text-muted">
              <span className="rounded-[3px] bg-surface-container px-2 py-1.5 font-medium text-text-secondary">
                CASE STUDY // 084
              </span>
              <span>Global Semiconductor Nexus</span>
            </div>
            <span className="text-primary">Multi-Tier Dependency</span>
          </div>

          <div className="mt-5 rounded-[6px] bg-surface-container p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-[17px] font-medium text-foreground">
                <span className="text-[22px] leading-none text-primary">✣</span>
                Subsidies &amp; Lithography Interlock
              </h2>
              <span className="rounded-[3px] bg-surface-container-lowest px-2 py-1 font-mono text-[10px] text-text-secondary">
                ASML · TSM · INTC
              </span>
            </div>

            <SynthesisNode
              eyebrow="MACRO CATALYST"
              title="U.S. CHIPS Act & EU Chips Joint Undertaking"
              description="$52.7B combined capital disbursements accelerating capex"
              metric="FLOW: +18.4%"
            />

            <div className="py-2 text-center text-xl text-text-placeholder">↓</div>

            <SynthesisNode
              eyebrow="CAPITAL EQUIPMENT CHOKEPOINT"
              title="ASML Holding N.V. (High-NA EUV Delivery Rate)"
              description="Lead times holding steady at 14 months; backlogs absorbing foundry prepayments"
              metric="PRICING: +9.2%"
            />

            <div className="py-2 text-center text-xl text-text-placeholder">↓</div>

            <SynthesisNode
              eyebrow="FOUNDRY MARGIN TRANSLATION"
              title="Taiwan Semiconductor (TSMC) N2 Node Yields"
              description="Gross margin guidance reaffirmed at 53–55% despite overseas fab startup dilution"
              metric="CONVICTION: 94%"
            />
          </div>

          <div className="mt-5 rounded-[6px] bg-surface-container px-4 py-5">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-primary">
              <span>⌁</span>
              Synthesized Nexus Takeaway
            </div>
            <p className="mt-2 text-[13px] leading-[1.55] text-text-muted">
              Foundry margin compressibility is completely offset by sovereign
              subsidy offsets through Q4 2025. Equipment backlog ensures
              defensive cash flow even during consumer silicon demand softening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SynthesisNodeProps {
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
}

const SynthesisNode = ({
  eyebrow,
  title,
  description,
  metric,
}: SynthesisNodeProps) => {
  return (
    <div className="mt-3 grid grid-cols-[1fr_auto] gap-3 rounded-[4px] border border-border bg-surface-container-lowest px-3 py-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.06em] text-text-placeholder">
          {eyebrow}
        </p>
        <h3 className="mt-1 text-[14px] font-medium text-foreground">{title}</h3>
        <p className="mt-1 text-[12px] leading-[1.4] text-text-placeholder">
          {description}
        </p>
      </div>
      <span className="pt-1 text-right font-mono text-[10px] text-primary">
        {metric}
      </span>
    </div>
  );
};

export default MarketSynthesis;
