const CoreIntelligence = () => {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-66px)] max-w-[1280px] items-center justify-center overflow-hidden px-6 py-8 lg:flex-row lg:justify-between lg:gap-12 lg:px-6 lg:py-0 xl:px-0">
      <div className="w-full max-w-[540px]">
        <h2 className="font-serif text-[clamp(2.5rem,3.5vw,3.5rem)] leading-[0.91] tracking-[-0.06em] text-[#161512]">
          Institutional Synthesis
        </h2>

        <h1>Financial Intelligence without the noise.</h1>

        <p className="mt-4 text-[15px] leading-[1.5] text-[#4b453e]">
          Markets produce overwhelming volumes of filings, pricing fluctuations,
          and macroeconomic noise. NEXUS continuously synthesizes disparate data
          sources into clear, explainable signals.
        </p>
      </div>

      <div>
        <ExplanationCard
          imgSrc="./"
          imgAlt="Company"
          header="Company Intelligence"
          paragraph="Understand company performance, financial strength, weaknesses, and downside factors. Grounded in audited 10-K, 10-Q, and international filings with precise structural decomposition."
        />

        <ExplanationCard
          imgSrc="./"
          imgAlt="Company"
          header="Market Intelligence"
          paragraph="Understand market movements, sectors, macroeconomic signals, and structural changes. Track intermarket linkages across currency desks, commodities, and fixed income."
        />

        <ExplanationCard
          imgSrc="./"
          imgAlt="Company"
          header="AI Research"
          paragraph="Get AI-powered financial analysis with explanations and supporting context. Every narrative is underpinned by direct evidentiary links and confidence calibrations."
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
}

const ExplanationCard = ({
  imgSrc,
  imgAlt,
  header,
  paragraph,
}: ExplanationCardProp) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>

      <h1>{header}</h1>
      <p>{paragraph}</p>

      <br />

      <p>bluh</p>
    </div>
  );
};
