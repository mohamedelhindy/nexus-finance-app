import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { SignupFormData } from "./Signup.schema";

export const SecuritySignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupFormData>();

  return (
    <section>
        <div className="mx-auto w-full max-w-[830px] flex-1 px-0 pb-10 pt-7 max-sm:px-5 max-sm:pt-8">
          <div className="mb-10">
            <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
              Secure your account.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.5] text-text-secondary">
              Choose the credentials you&apos;ll use to access NEXUS.
            </p>
          </div>

            <div className="border-t border-[#55514b]">
              <div className="grid min-h-[109px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <label
                    className="block text-base font-medium text-foreground"
                    htmlFor="signup-email"
                  >
                    Email
                  </label>
                  <p className="mt-1 max-w-[150px] text-[13px] text-text-muted">
                    Used to sign in and verify your account.
                  </p>
                </div>
                <input
                  {...register("email")}
                  className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive" role="alert">{errors.email.message}</p>}
              </div>

              <div className="grid min-h-[113px] grid-cols-[234px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <label
                    className="block text-base font-medium text-foreground"
                    htmlFor="signup-password"
                  >
                    Password
                  </label>
                  <p className="mt-1 text-[13px] text-text-muted">
                    At least 12 characters.
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <input
                      {...register("password")}
                      className="h-12 w-full rounded-[9px] border border-primary bg-surface px-3.5 pr-11 text-base text-foreground outline-none ring-[3px] ring-primary/20 placeholder:text-text-placeholder"
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      autoComplete="new-password"
                    />
                    <button
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      type="button"
                      onClick={() => setShowPassword((visible) => !visible)}
                    >
                    <Image
                      aria-hidden="true"
                      alt=""
                      className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                      height={16}
                      src="/assets/eye.svg"
                      width={16}
                    />
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-destructive" role="alert">{errors.password.message}</p>}
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-text-secondary">
                    <span className="text-primary">● 12+ characters</span>
                    <span className="text-primary">
                      ● Upper &amp; lower case
                    </span>
                    <span className="text-primary">● One digit</span>
                    <span className="text-text-muted">○ One symbol</span>
                  </div>
                </div>
              </div>

              <div className="grid min-h-[85px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <label
                  className="text-base font-medium text-foreground"
                  htmlFor="confirm-password"
                >
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    {...register("confirmPassword")}
                    className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 pr-11 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    id="confirm-password"
                    type="password"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                  />
                  <Image
                    aria-hidden="true"
                    alt=""
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                    height={16}
                    src="/assets/eye.svg"
                    width={16}
                  />
                </div>
                {errors.confirmPassword && <p className="col-start-2 text-xs text-destructive max-sm:col-start-1" role="alert">{errors.confirmPassword.message}</p>}
              </div>
            </div>
        </div>
    </section>
  );
};
