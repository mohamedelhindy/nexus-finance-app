"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useReducedMotion } from "motion/react";
import type { LoginFormData } from "./login.schema";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <main className="login-page flex min-h-screen items-center justify-center bg-surface-container-lowest px-6 py-12 text-foreground">
      <motion.div
        className="login-content w-full max-w-110"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          href="/"
          className="login-back group mb-8 inline-flex gap-2 text-[14px] text-text-secondary"
        >
          <span className="text-[20px] leading-none text-primary transition-transform duration-200 group-hover:-translate-x-1">
            <span aria-hidden="true">←</span>
          </span>
          <span className="transition-colors duration-200 group-hover:text-foreground">
            Go back
          </span>
        </Link>

        <div className="login-intro mb-10">
          <h1 className="login-title font-serif text-[clamp(2.7rem,6vw,3.5rem)] leading-none tracking-[-0.06em]">
            Welcome back.
          </h1>
          <p className="login-description mt-5 max-w-88 text-[15px] leading-[1.55] text-text-secondary">
            Sign in to continue to your financial intelligence workspace.
          </p>
        </div>

        <form
          className="login-form space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-[14px] font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              {...register("email")}
              className="h-14.5 w-full rounded-xl border border-input-border bg-input-background px-4 text-[15px] text-foreground outline-none transition-shadow placeholder:text-text-placeholder focus:border-primary focus:ring-4 focus:ring-(--focus-ring)"
            />
          </div>

          <div>
            <div className="login-password-label mb-2 flex items-center justify-between gap-4">
              <label
                htmlFor="password"
                className="text-[14px] font-medium text-foreground"
              >
                Password
              </label>
              <label className="group inline-flex cursor-pointer items-center gap-2 text-[12px] text-text-muted">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(event) => setShowPassword(event.target.checked)}
                  className="peer sr-only"
                />
                <span className="flex h-4 w-4 items-center justify-center rounded-[5px] border border-input-border bg-surface text-[11px] text-transparent transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-(--focus-ring)">
                  ✓
                </span>
                <span className="transition-colors group-hover:text-foreground">
                  Show password
                </span>
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                {...register("password")}
                className="h-14.5 w-full rounded-xl border border-input-border bg-input-background px-4 text-[15px] text-foreground outline-none transition-shadow placeholder:text-text-placeholder focus:border-primary focus:ring-4 focus:ring-(--focus-ring)"
              />
            </div>
            <div className="mt-4 text-right">
              <Link
                href="/forgot-password"
                className="text-[14px] font-medium text-primary transition-colors hover:text-primary-hover"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="h-14 w-full rounded-[11px] bg-primary text-[16px] font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus:outline-none focus:ring-4 focus:ring-(--focus-ring)"
          >
            Sign In
          </button>
        </form>

        <div className="my-8 h-px bg-border" />

        <p className="login-signup text-[15px] text-text-secondary">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Create account
          </Link>
        </p>
      </motion.div>
    </main>
  );
};

export default Login;
