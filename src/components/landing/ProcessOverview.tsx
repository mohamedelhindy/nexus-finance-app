import Image from "next/image";
import { pipelineStages } from "@/constants";

const ProcessOverview = () => {
  return (
    <section className="relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-surface-container px-[4vw] py-24 lg:px-[15vw]">
      <div className="flex w-full flex-col items-center text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-primary">
          Verifiable Telemetry Pipeline
        </p>

        <h1 className="mt-3 max-w-[48rem] font-serif text-[clamp(2.5rem,3.8vw,4rem)] leading-[1.05] tracking-[-0.05em] text-[#161512]">
          From market movement to meaningful insight.
        </h1>

        <p className="mt-6 max-w-[48rem] text-[15px] leading-[1.55] text-[#6b665f]">
          How raw market signals transform into institutional clarity. Five
          deliberate stages, completely open to verification at every layer.
        </p>
      </div>

      <div className="mt-14 flex w-full flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-[1vw]">
        {pipelineStages.map((stage) => (
          <div
            key={stage.number}
            className="flex min-h-[244px] min-w-[220px] flex-1 flex-col rounded-[7px] border border-[#d8d1c6] bg-[#fffdf9] p-5 text-left shadow-[0_2px_5px_rgba(29,27,25,0.04)]"
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-[4px] font-medium ${
                  stage.accent
                    ? "bg-primary text-white"
                    : "bg-surface-container text-[#1d1b19]"
                }`}
              >
                {stage.number}
              </span>
              <Image
                src={stage.iconSrc}
                alt=""
                width={22}
                height={22}
                className={stage.accent ? "" : "opacity-60"}
              />
            </div>

            <h2 className="mt-5 text-[17px] font-medium tracking-[-0.02em] text-[#161512]">
              {stage.title}
            </h2>

            <p className="mt-2 text-[13px] leading-[1.5] text-[#6b665f]">
              {stage.description}
            </p>

            <div className="mt-auto border-t border-[#d8d1c6] pt-3 text-[12px] text-[#7b746b]">
              {stage.footer}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex w-full items-center justify-between gap-4 rounded-[7px] border border-[#d8d1c6] bg-[#fffdf9] px-5 py-4 text-[13px] text-[#4f4a45] shadow-[0_2px_5px_rgba(29,27,25,0.03)]">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/data-lineage.svg"
            alt=""
            width={22}
            height={22}
          />
          Every step preserves complete data lineage back to primary government
          and statutory source feeds.
        </div>
        <span className="shrink-0 font-medium text-primary">
          View Pipeline Architecture →
        </span>
      </div>
    </section>
  );
};

export default ProcessOverview;