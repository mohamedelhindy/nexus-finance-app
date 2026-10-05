import Image from "next/image";
import { explainabilityDimensions } from "@/constants";

const Explainability = () => {
  return (
    <section className="flex min-h-[700px] w-full flex-col bg-[#f6f3ed] px-[4vw] py-24 lg:px-[15vw]">
      <div className="flex w-full flex-col">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
          Zero Black-Box Opacity
        </p>

        <h1 className="mt-3 font-serif text-[clamp(2.1rem,3.4vw,3rem)] leading-[1.05] tracking-[-0.05em] text-[#161512]">
          AI that explains the signal.
        </h1>

        <p className="mt-6 max-w-[48rem] text-[15px] leading-[1.55] text-[#6b665f]">
          NEXUS does not simply produce a black-box rating or a superficial
          positive/negative label. Every assessment is grounded in verifiable
          corporate filings, macroeconomic telemetry, and transparent reasoning
          across six strict dimensions.
        </p>
      </div>

      <div className="mt-14 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {explainabilityDimensions.map((dimension) => (
          <article
            key={dimension.number}
            className="flex min-h-[262px] flex-col rounded-[7px] border border-[#d8d1c6] bg-[#fffdf9] p-5 shadow-[0_2px_5px_rgba(29,27,25,0.04)]"
          >
            <div className="flex items-center justify-between">
              <p
                className={`text-[11px] font-medium uppercase tracking-[0.06em] ${
                  dimension.accent ? "text-[#d86b61]" : "text-primary"
                }`}
              >
                {dimension.number}
              </p>
              <Image src={dimension.iconSrc} alt="" width={22} height={22} />
            </div>

            <h2 className="mt-5 text-[18px] font-medium tracking-[-0.02em] text-[#161512]">
              {dimension.title}
            </h2>

            <p className="mt-2 text-[14px] leading-[1.55] text-[#6b665f]">
              {dimension.description}
            </p>

            <p className="mt-auto border-t border-[#d8d1c6] pt-3 font-mono text-[10px] text-[#8b8379]">
              {dimension.example}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Explainability;
