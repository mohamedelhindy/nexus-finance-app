"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginSchema, type LoginFormData } from "./login.schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg bg-surface">
      <div className="mx-auto w-full max-w-[880px] flex-1 pt-14 max-sm:px-5 max-sm:pt-10">
        <div className="mb-8">
          <h1 className="font-serif text-[52px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[42px]">
            Welcome back.
          </h1>
          <p className="mt-5 max-w-[340px] text-[15px] leading-[1.45] text-text-secondary">
            Sign in to continue to your financial intelligence workspace.
          </p>
        </div>

        <form id="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="border-t border-[#55514b]">
            <div className="grid min-h-[92px] grid-cols-[264px_1fr] items-center border-b border-border max-sm:grid-cols-1 max-sm:gap-3 max-sm:py-4">
              <div>
                <label
                  className="block text-sm font-medium text-foreground"
                  htmlFor="email"
                >
                  Email
                </label>
                <p className="mt-1 text-[11px] text-text-muted">
                  The address you registered with.
                </p>
              </div>
              <div>
                <input
                  className="h-12 w-full rounded-[9px] border border-input-border bg-surface px-3.5 text-sm text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:ring-[3px] focus:ring-primary/20"
                  id="email"
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

            <div className="grid min-h-[112px] grid-cols-[264px_1fr] items-start border-b border-border pt-4 max-sm:grid-cols-1 max-sm:gap-3 max-sm:py-4">
              <label
                className="pt-1 text-sm font-medium text-foreground"
                htmlFor="password"
              >
                Password
              </label>
              <div>
                <div className="relative">
                  <input
                    className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 pr-11 text-sm text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register("password")}
                  />
                  <button
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center border-0 bg-transparent text-text-muted hover:text-foreground"
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.password.message}
                  </p>
                )}
                <Link
                  className="mt-4 block text-right text-xs font-semibold text-primary hover:text-primary-hover"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex min-h-[80px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-880px)/2))] py-4 max-sm:flex-col max-sm:items-stretch max-sm:gap-4 max-sm:px-5">
        <p className="m-0 text-[13px] text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-primary hover:text-primary-hover"
            href="/signup"
          >
            Create account
          </Link>
        </p>
        <button
          className="h-12 w-[171px] shrink-0 rounded-[9px] border-0 bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
          disabled={isSubmitting}
          form="login-form"
          type="submit"
        >
          Sign in
        </button>
      </div>
    </main>
  );
};

export default Login;
