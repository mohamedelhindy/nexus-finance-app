"use client";

import { useFormContext } from "react-hook-form";
import type { SignupFormData } from "./Signup.schema";

const interests = [
  "Technology",
  "Financial Services",
  "Healthcare",
  "Energy",
  "Industrials",
  "Consumer",
  "Real Estate",
  "Telecommunications",
];

export const InterestSignup = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<SignupFormData>();
  const selectedInterests = watch("interests");

  const toggleInterest = (interest: string) => {
    const next = selectedInterests.includes(interest)
      ? selectedInterests.filter((item) => item !== interest)
      : [...selectedInterests, interest];

    setValue("interests", next, { shouldDirty: true, shouldValidate: true });
  };

  return (
    <section>
      <div className="mx-auto w-full max-w-[830px] flex-1 px-0 pb-10 pt-7 max-sm:px-5 max-sm:pt-8">
        <div className="mb-10">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Make NEXUS yours.
          </h1>
          <p className="mt-6 text-[17px] leading-[1.5] text-text-secondary">
            Choose your interests and regional preferences.
          </p>
        </div>

        <div className="border-t border-[#55514b]">
          <div className="grid min-h-[116px] grid-cols-[234px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
            <div>
              <h2 className="text-base font-medium text-foreground">
                Interests
              </h2>
              <p className="mt-1 max-w-[150px] text-[13px] text-text-muted">
                Preferred sectors. Choose any that apply.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((label) => {
                const selected = selectedInterests.includes(label);
                return (
                  <button
                    className={`rounded-full border px-3.5 py-2 text-[13px] ${
                      selected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input-border bg-input-background text-text-secondary"
                    }`}
                    key={label}
                    type="button"
                    onClick={() => toggleInterest(label)}
                  >
                    {selected && <span className="mr-1.5">✓</span>}
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
          {errors.interests && (
            <p className="border-b border-border py-2 text-xs text-destructive" role="alert">
              {errors.interests.message}
            </p>
          )}

          <div className="grid min-h-[85px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
            <label className="text-base font-medium text-foreground" htmlFor="country">
              Country
            </label>
            <select
              {...register("country")}
              className="h-12 w-full appearance-none rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
              id="country"
            >
              <option>Egypt</option>
            </select>
          </div>

          <div className="grid min-h-[91px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
            <div>
              <label className="text-base font-medium text-foreground" htmlFor="timezone">
                Timezone
              </label>
              <p className="mt-1 text-[13px] text-text-muted">
                Set separately from your country.
              </p>
            </div>
            <select
              {...register("timezone")}
              className="h-12 w-full appearance-none rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
              id="timezone"
            >
              <option>Africa/Cairo (GMT+02:00)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestSignup;
