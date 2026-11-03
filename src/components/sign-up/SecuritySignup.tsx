import Image from "next/image";

export const SecuritySignup = () => {
  return (
    <>
      <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[830px] flex-1 px-0 pb-10 pt-7 max-sm:px-5 max-sm:pt-8">
          <div className="mb-12 grid grid-cols-4 gap-2.5 max-sm:mb-9">
            <div>
              <div className="h-0.5 bg-primary" />
              <p className="mt-2 text-[13px] text-primary">
                <span className="mr-2 font-serif italic">01</span>✓{" "}
                <span className="ml-1">Personal</span>
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-primary" />
              <p className="mt-2 text-[13px] font-semibold text-foreground">
                <span className="mr-2 font-serif italic font-normal">02</span>
                Security
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-border" />
              <p className="mt-2 text-[13px] text-text-muted">
                <span className="mr-2 font-serif italic">03</span>
                Interests &amp; region
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-border" />
              <p className="mt-2 text-[13px] text-text-muted">
                <span className="mr-2 font-serif italic">04</span>Review
              </p>
            </div>
          </div>

          <div className="mb-10">
            <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
              Secure your account.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.5] text-text-secondary">
              Choose the credentials you&apos;ll use to access NEXUS.
            </p>
          </div>

          <form noValidate>
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
                  className="h-12 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                />
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
                      className="h-12 w-full rounded-[9px] border border-primary bg-surface px-3.5 pr-11 text-base text-foreground outline-none ring-[3px] ring-primary/20 placeholder:text-text-placeholder"
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
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
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
