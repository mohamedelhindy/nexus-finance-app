import Button from "@/components/shared/Button";
import { closingCta } from "@/constants";

const ClosingCta = () => {
  return (
    <section className="flex min-h-[600px] w-full items-center justify-center bg-surface-container px-6 py-24">
      <div className="flex w-full flex-col items-center text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-primary text-[20px] font-bold text-primary-foreground">
          N
        </div>

        <h1 className="mt-6 font-serif text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.05em] text-foreground">
          {closingCta.title}
        </h1>

        <p className="mt-5 max-w-[32rem] text-[16px] leading-[1.5] text-text-muted">
          {closingCta.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
            text="Get Started"
            color="bg-primary text-primary-foreground hover:bg-primary-hover"
            className="px-8 py-3"
          />
          <Button
            text="Explore NEXUS"
            color="border border-border bg-surface-container-lowest text-foreground hover:bg-surface-container"
            className="px-8 py-3"
          />
        </div>

        <p className="mt-7 text-[12px] tracking-[0.02em] text-text-placeholder">
          {closingCta.note}
        </p>
      </div>
    </section>
  );
};

export default ClosingCta;
