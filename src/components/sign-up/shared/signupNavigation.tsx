"use client";

interface SignupNavigationProps {
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  isSubmitting?: boolean;
}

export default function SignupNavigation({
  currentStep,
  onBack,
  onNext,
  isSubmitting = false,
}: SignupNavigationProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === 3;

  return (
    <div className="flex min-h-[75px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-830px)/2))] py-4 max-sm:px-5">
      {isFirstStep ? (
        <span className="text-[14px] text-text-secondary">
          Step 1 of 4
        </span>
      ) : (
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="text-[14px] text-text-secondary hover:text-foreground disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span aria-hidden="true" className="mr-2 text-lg leading-none">
            ‹
          </span>
          Back
        </button>
      )}

      {isLastStep ? (
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-[174px] rounded-[9px] bg-primary text-[14px] font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-[150px]"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="h-12 w-[174px] rounded-[9px] bg-primary text-[14px] font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-[150px]"
        >
          Continue
        </button>
      )}
    </div>
  );
}
