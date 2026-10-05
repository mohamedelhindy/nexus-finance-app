import Image from "next/image";

const CoreIntelligence = () => {
  return (
    <section className="flex min-h-[700px] w-full flex-col justify-center gap-12 overflow-hidden bg-surface-container px-[15vw] py-16 lg:gap-14">
      <div className="flex w-full flex-col">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
          Institutional Synthesis
        </p>

        <h1 className="mt-3 max-w-[42rem] font-serif text-[clamp(2.5rem,3.5vw,3.7rem)] leading-[1.05] tracking-[-0.05em] text-[#161512]">
          Financial intelligence without the noise.
        </h1>

        <p className="mt-5 max-w-[40rem] text-[15px] leading-[1.55] text-[#4b453e]">
          Markets produce overwhelming volumes of filings, pricing fluctuations,
          and macroeconomic noise. NEXUS continuously synthesizes disparate data
          sources into clear, explainable signals.
        </p>
      </div>

      <div className="flex w-full flex-wrap gap-5 lg:flex-nowrap lg:gap-[1.75vw]">
        <ExplanationCard
          imgSrc="/assets/company-intelligence.svg"
          imgAlt="Company intelligence"
          header="Company Intelligence"
          paragraph="Understand company performance, financial strength, weaknesses, and downside factors. Grounded in audited 10-K, 10-Q, and international filings with precise structural decomposition."
          footerLabel="Fundamental Forensics"
        />

        <ExplanationCard
          imgSrc="/assets/market-intelligence.svg"
          imgAlt="Market intelligence"
          header="Market Intelligence"
          paragraph="Understand market movements, sectors, macroeconomic signals, and structural changes. Track intermarket linkages across currency desks, commodities, and fixed income."
          footerLabel="Macro Liquidity & Flows"
        />

        <ExplanationCard
          imgSrc="/assets/ai-research.svg"
          imgAlt="AI research"
          header="AI Research"
          paragraph="Get AI-powered financial analysis with explanations and supporting context. Every narrative is underpinned by direct evidentiary links and confidence calibrations."
          footerLabel="Explainable Reasoning"
        />
      </div>
    </section>
  );
};

interface ExplanationCardProp {
  imgSrc: string;
  imgAlt: string;
  header: string;
  paragraph: string;
  footerLabel: string;
}

const ExplanationCard = ({
  imgSrc,
  imgAlt,
  header,
  paragraph,
  footerLabel,
}: ExplanationCardProp) => {
  return (
    <div className="bg-surface flex min-h-[310px] min-w-[min(100%,280px)] flex-1 flex-col gap-5 rounded-md border border-[#e5e0d8] p-[clamp(1.25rem,1.7vw,2rem)] shadow-[0_2px_5px_rgba(29,27,25,0.04)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-surface-container">
        <Image src={imgSrc} alt={imgAlt} width={48} height={48} />
      </div>

      <h2 className="text-[18px] font-medium tracking-[-0.02em] text-[#161512]">
        {header}
      </h2>
      <p className="text-[14px] leading-[1.55] text-[#6b665f]">{paragraph}</p>

      <div className="mt-auto h-px w-full bg-[#d8d1c6]" />

      <div className="flex items-center justify-between text-[12px] text-[#6b665f]">
        <p>{footerLabel}</p>
        <span className="text-primary">→</span>
      </div>
    </div>
  );
};

export default CoreIntelligence;
