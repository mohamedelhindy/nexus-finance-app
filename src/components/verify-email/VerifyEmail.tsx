"use client";

import Link from "next/link";

const VerifyEmail = () => {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[825px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-9">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Verify your email.
          </h1>
          <p className="mt-5 max-w-[390px] text-[17px] leading-[1.45] text-text-secondary">
            Confirm this address to secure your account and start using NEXUS.
          </p>
        </div>

        <div className="border-t border-[#55514b]">
          <div className="grid min-h-[85px] grid-cols-[230px_1fr_75px] items-center gap-8 border-b border-border max-sm:grid-cols-[1fr_auto] max-sm:gap-4">
            <span className="text-base font-medium text-foreground">
              Email address
            </span>
            <strong className="text-sm font-semibold text-foreground">
              a.vance@bridgewater.com
            </strong>
            <button
              className="border-0 bg-transparent p-0 text-left text-sm font-semibold text-primary hover:text-primary-hover"
              type="button"
            >
              Change
            </button>
          </div>

          <div className="grid min-h-[85px] grid-cols-[230px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-2 max-sm:py-5">
            <span className="text-base font-medium text-foreground">
              Status
            </span>
            <span className="inline-flex w-fit items-center gap-2 rounded-md bg-primary-subtle px-2 py-1 text-[13px] font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Waiting for confirmation
            </span>
          </div>

          <div className="grid min-h-[93px] grid-cols-[230px_1fr_auto] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-2 max-sm:py-5">
            <div>
              <p className="m-0 text-base font-medium text-foreground">
                Didn&apos;t get it?
              </p>
              <p className="mt-1 text-[13px] text-text-muted">
                Check your spam folder first.
              </p>
            </div>
            <span className="text-sm font-medium text-primary">
              Resend in 00:42
            </span>
            <button
              className="border-0 bg-transparent p-0 text-left text-sm font-semibold text-primary hover:text-primary-hover"
              type="button"
            >
              Resend email
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[81px] items-center justify-between gap-6 border-t border-border px-[max(1.5rem,calc((100vw-825px)/2))] py-4 max-sm:flex-col-reverse max-sm:items-stretch max-sm:gap-4 max-sm:px-5">
        <Link
          className="text-[15px] text-text-secondary hover:text-foreground"
          href="/login"
        >
          <span aria-hidden="true" className="mr-2 text-lg leading-none">
            ‹
          </span>
          Back
        </Link>
        <button
          className="h-12 w-[182px] shrink-0 rounded-[9px] border-0 bg-primary text-[15px] font-semibold text-primary-foreground hover:bg-primary-hover max-sm:w-full"
          type="button"
        >
          I&apos;ve verified my email
        </button>
      </div>
    </main>
  );
};

export default VerifyEmail;
