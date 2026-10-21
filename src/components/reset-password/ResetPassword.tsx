"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "./reset-password.schema";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });
  const [password, setPassword] = useState("");
  const passwordField = register("password");
  const passwordChecks: Array<[string, boolean]> = [
    ["8+ characters", password.length >= 8],
    ["Upper & lower case", /[A-Z]/.test(password) && /[a-z]/.test(password)],
    ["One digit", /\d/.test(password)],
    ["One symbol", /[!@#$%^&*(),_.?":{}|<>]/.test(password)],
  ];

  const onSubmit = async () => {};

  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[825px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-9">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Create a new password.
          </h1>
          <p className="mt-5 max-w-[390px] text-[17px] leading-[1.45] text-text-secondary">
            Your code was verified. Choose a new password for
            <br className="max-sm:hidden" /> a.vance@bridgewater.com.
          </p>
        </div>

        <form
          id="reset-password-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="border-t border-[#55514b]">
            <div className="grid min-h-[111px] grid-cols-[230px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <div>
                <label
                  className="block text-base font-medium text-foreground"
                  htmlFor="password"
                >
                  New password
                </label>
                <p className="mt-1 text-[13px] text-text-muted">
                  At least 8 characters.
                </p>
              </div>
              <div>
                <div className="relative">
                  <input
                    className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 pr-11 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    autoComplete="new-password"
                    {...passwordField}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      void passwordField.onChange(event);
                    }}
                  />
                  <PasswordToggle
                    visible={showPassword}
                    onClick={() => setShowPassword((visible) => !visible)}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.password.message}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-text-muted">
                  {passwordChecks.map(([label, valid]) => (
                    <span className="flex items-center gap-1" key={label}>
                      <span
                        className={`inline-block h-3 w-3 rounded-full border ${
                          valid
                            ? "border-primary bg-primary"
                            : "border-input-border"
                        }`}
                      />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid min-h-[92px] grid-cols-[230px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <div>
                <label
                  className="block text-base font-medium text-foreground"
                  htmlFor="confirmPassword"
                >
                  Confirm password
                </label>
                <p className="mt-1 text-[13px] text-text-muted">
                  Must match your new password.
                </p>
              </div>
              <div className="relative">
                <input
                  className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 pr-11 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your new password"
                  autoComplete="new-password"
                  {...register("confirmPassword")}
                />
                <PasswordToggle
                  visible={showConfirmPassword}
                  onClick={() => setShowConfirmPassword((visible) => !visible)}
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex min-h-[81px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-825px)/2))] py-4 max-sm:flex-col-reverse max-sm:items-stretch max-sm:gap-4 max-sm:px-5">
        <Link
          className="text-[15px] text-text-secondary hover:text-foreground"
          href="/otp"
        >
          <span aria-hidden="true" className="mr-2 text-lg leading-none">
            ‹
          </span>
          Back to sign in
        </Link>
        <button
          className="h-12 w-[171px] shrink-0 rounded-[9px] border-0 bg-primary text-[15px] font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
          disabled={isSubmitting}
          form="reset-password-form"
          type="submit"
        >
          Reset password
        </button>
      </div>
    </main>
  );
};

interface PasswordToggleProps {
  visible: boolean;
  onClick: () => void;
}

const PasswordToggle = ({ visible, onClick }: PasswordToggleProps) => (
  <button
    aria-label={visible ? "Hide password" : "Show password"}
    className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center border-0 bg-transparent text-text-muted hover:text-foreground"
    type="button"
    onClick={onClick}
  >
    <Image
      aria-hidden="true"
      alt=""
      className="h-4 w-4"
      height={16}
      src="/assets/eye.svg"
      width={16}
    />
  </button>
);

export default ResetPassword;
