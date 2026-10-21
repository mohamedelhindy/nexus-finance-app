"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, type OtpFormData } from "./otp.schema";

const Otp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
  });

  const onSubmit = async (data: OtpFormData) => {
    const otp = [
      data.digit1,
      data.digit2,
      data.digit3,
      data.digit4,
      data.digit5,
      data.digit6,
    ].join("");

    console.log(otp);
  };

  const digits = [
    "digit1",
    "digit2",
    "digit3",
    "digit4",
    "digit5",
    "digit6",
  ] as const;

  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[825px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-9">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Enter your code.
          </h1>

          <p className="mt-5 max-w-[390px] text-[17px] leading-[1.45] text-text-secondary">
            We sent a 6-digit code to a.vance@bridgewater.com. It expires in 10
            minutes.
          </p>
        </div>

        <form id="otp-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="border-t border-[#55514b]">
            <div className="grid min-h-[85px] grid-cols-[230px_1fr_45px] items-center gap-8 border-b border-border max-sm:grid-cols-[1fr_auto] max-sm:gap-4">
              <span className="text-base font-medium text-foreground">
                Sent to
              </span>

              <strong className="text-sm font-semibold text-foreground">
                {/* TODO: Replace with the actual email address after backend is up */}
                a.vance@bridgewater.com
              </strong>

              <Link
                className="text-sm font-semibold text-primary hover:text-primary-hover"
                href="/forgot-password"
              >
                Change
              </Link>
            </div>

            <div className="grid min-h-[125px] grid-cols-[230px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <div>
                <label
                  className="block text-base font-medium text-foreground"
                  htmlFor="digit1"
                >
                  Verification code
                </label>

                <p className="text-[13px] text-text-muted">
                  Enter all 6 digits.
                </p>
              </div>

              <div>
                <div className="flex gap-2">
                  {digits.map((digit, index) => (
                    <input
                      key={digit}
                      id={digit}
                      aria-label={`Verification digit ${index + 1}`}
                      className="h-[59px] w-[52px] rounded-[9px] border border-input-border bg-input-background text-center font-serif text-[25px] text-foreground outline-none focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20 max-sm:h-12 max-sm:w-10"
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      {...register(digit, {
                        onChange: (event) => {
                          const input = event.target;
                          input.value = input.value
                            .replace(/\D/g, "")
                            .slice(-1);
                        },
                      })}
                    />
                  ))}
                </div>

                {Object.keys(errors).length > 0 && (
                  <p className="mt-2 text-xs text-destructive" role="alert">
                    Enter all 6 digits correctly.
                  </p>
                )}

                <p className="mt-2 text-[13px] text-text-secondary">
                  Didn't get it?{" "}
                  <button
                    className="border-0 bg-transparent p-0 text-primary hover:text-primary-hover"
                    type="button"
                    onClick={() => {
                      // TODO: Request a new OTP from your backend
                    }}
                  >
                    Resend code
                  </button>{" "}
                  <span className="text-text-muted">00:42</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex min-h-[81px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-825px)/2))] py-4 max-sm:flex-col-reverse max-sm:items-stretch max-sm:gap-4 max-sm:px-5">
        <Link
          className="text-[15px] text-text-secondary hover:text-foreground"
          href="/forgot-password"
        >
          <span aria-hidden="true" className="mr-2 text-lg leading-none">
            ‹
          </span>
          Back
        </Link>

        <button
          className="h-12 w-[171px] shrink-0 rounded-[9px] border-0 bg-primary text-[15px] font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
          disabled={isSubmitting}
          form="otp-form"
          type="submit"
        >
          {isSubmitting ? "Verifying..." : "Verify"}
        </button>
      </div>
    </main>
  );
};

export default Otp;
