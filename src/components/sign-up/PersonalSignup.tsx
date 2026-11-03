"use client";

import { useFormContext } from "react-hook-form";
import type { SignupFormData } from "./Signup.schema";

const PersonalSignup = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  return (
    <section>
        <div className="flex-1 pb-10 pt-11 max-sm:pb-8 max-sm:pt-10">
          <div className="mb-9">
            <h1 className="font-serif text-[54px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[42px]">
              Let&apos;s get to know you.
            </h1>
            <p className="mt-5 max-w-[360px] text-[16px] leading-[1.5] text-text-secondary">
              Start with your personal details.
            </p>
          </div>

            <div className="border-t border-[#55514b]">
              <div className="grid min-h-[93px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <h2 className="text-base font-medium text-foreground">
                    Name
                  </h2>
                  <p className="mt-1 text-[13px] text-text-muted">
                    As you&apos;d like it shown.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  <input
                    {...register("firstName")}
                    className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-[14px] text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    type="text"
                    placeholder="First name"
                    autoComplete="given-name"
                  />
                  <input
                    {...register("lastName")}
                    className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-[14px] text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    type="text"
                    placeholder="Last name"
                    autoComplete="family-name"
                  />
                </div>
                {(errors.firstName || errors.lastName) && (
                  <p className="col-start-2 text-xs text-destructive max-sm:col-start-1" role="alert">
                    {errors.firstName?.message || errors.lastName?.message}
                  </p>
                )}
              </div>

              <div className="grid min-h-[93px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <h2 className="text-base font-medium text-foreground">
                    Date of Birth
                  </h2>
                  <p className="mt-1 text-[13px] text-text-muted">
                    Format: DD/MM/YYYY
                  </p>
                </div>
                <div>
                <input
                  {...register("dateOfBirth")}
                  className="h-12 w-full rounded-[9px] border border-primary bg-surface px-3.5 text-[14px] text-foreground outline-none ring-[3px] ring-primary/20 placeholder:text-text-placeholder"
                  type="date"
                  aria-label="Date of Birth"
                  autoComplete="bday"
                />
                {errors.dateOfBirth && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.dateOfBirth.message}
                  </p>
                )}
                </div>
              </div>
            </div>
        </div>
    </section>
  );
};

export default PersonalSignup;
