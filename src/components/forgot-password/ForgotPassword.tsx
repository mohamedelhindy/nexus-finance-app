"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "./forgot-password.schema";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async () => {};

  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[820px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-9">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Forgot your password?
          </h1>
          <p className="mt-5 max-w-[390px] text-[17px] leading-[1.45] text-text-secondary">
            Enter the email linked to your account. We&apos;ll send a
            verification code so you can set a new password.
          </p>
        </div>

        <form
          id="forgot-password-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="border-t border-[#55514b]">
            <div className="grid min-h-[107px] grid-cols-[230px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <div>
                <label
                  className="block text-base font-medium text-foreground"
                  htmlFor="forgot-password-email"
                >
                  Email
                </label>
                <p className="mt-1 max-w-[145px] text-[13px] leading-[1.35] text-text-muted">
                  We&apos;ll send a 6-digit code to this address.
                </p>
              </div>
              <div>
                <input
                  autoFocus
                  className="h-13 w-full rounded-[9px] border border-input-border bg-surface px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:ring-[3px] focus:ring-primary/20"
                  id="forgot-password-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex min-h-[81px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-820px)/2))] py-4 max-sm:flex-col-reverse max-sm:items-stretch max-sm:gap-4 max-sm:px-5">
        <Link
          className="text-[15px] text-text-secondary hover:text-foreground"
          href="/login"
        >
          <span aria-hidden="true" className="mr-2 text-lg leading-none">
            ‹
          </span>
          Back to sign in
        </Link>
        <button
          className="h-12 w-[171px] shrink-0 rounded-[9px] border-0 bg-primary text-[15px] font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
          disabled={isSubmitting}
          form="forgot-password-form"
          type="submit"
        >
          Send code
        </button>
      </div>
    </main>
  );
};

export default ForgotPassword;
