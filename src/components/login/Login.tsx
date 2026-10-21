"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
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
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[880px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-10">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Welcome back.
          </h1>
          <p className="mt-6 max-w-[360px] text-[17px] leading-[1.5] text-text-secondary">
            Sign in to continue to your financial intelligence workspace.
          </p>
        </div>

        <form id="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="border-t border-[#55514b]">
            <div className="grid min-h-[104px] grid-cols-[264px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <div>
                <label
                  className="block text-base font-medium text-foreground"
                  htmlFor="email"
                >
                  Email
                </label>
                <p className="mt-1 text-[13px] text-text-muted">
                  The address you registered with.
                </p>
              </div>
              <div>
                <input
                  className="h-13 w-full rounded-[9px] border border-input-border bg-surface px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:ring-[3px] focus:ring-primary/20"
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

            <div className="grid min-h-[132px] grid-cols-[264px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
              <label
                className="pt-1 text-base font-medium text-foreground"
                htmlFor="password"
              >
                Password
              </label>
              <div>
                <div className="relative">
                  <input
                    className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 pr-11 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
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
                    <Image
                      aria-hidden="true"
                      alt=""
                      className="h-4 w-4"
                      height={16}
                      src="/assets/eye.svg"
                      width={16}
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-destructive" role="alert">
                    {errors.password.message}
                  </p>
                )}
                <Link
                  className="mt-5 block text-right text-sm font-semibold text-primary hover:text-primary-hover"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex min-h-[88px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-880px)/2))] py-5 max-sm:flex-col max-sm:items-stretch max-sm:gap-5 max-sm:px-5">
        <p className="m-0 text-[15px] text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-primary hover:text-primary-hover"
            href="/signup"
          >
            Create account
          </Link>
        </p>
        <button
          className="h-13 w-[171px] shrink-0 rounded-[9px] border-0 bg-primary text-base font-semibold text-primary-foreground hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
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
