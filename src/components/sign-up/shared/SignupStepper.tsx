"use client";

const steps = ["Personal", "Security", "Interests & Region", "Review"];

type SignupStepperProps = {
  currentStep: number;
};

const SignupStepper = ({ currentStep }: SignupStepperProps) => {
  return (
    <div className="grid w-full grid-cols-4 gap-2.5">
      {steps.map((step, index) => {
        const isActive = currentStep === index;
        const isCompleted = currentStep > index;

        return (
          <div key={step}>
            <div
              className={`h-0.5 ${
                isActive || isCompleted ? "bg-primary" : "bg-border"
              }`}
            />
            <p
              className={`mt-2 text-[13px] ${
                isActive
                  ? "font-semibold text-foreground"
                  : isCompleted
                    ? "text-primary"
                    : "text-text-muted"
              }`}
            >
              <span className="mr-2 font-serif italic font-normal">
                {String(index + 1).padStart(2, "0")}
              </span>
              {isCompleted && <span className="mr-1">✓</span>}
              {step}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SignupStepper;
