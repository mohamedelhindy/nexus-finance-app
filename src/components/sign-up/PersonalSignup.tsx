const PersonalSignup = () => {
  return (
    <>
      <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-[880px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
          <div className="mb-10">
            <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
              Let's get to know you.
            </h1>
            <p className="mt-6 max-w-[360px] text-[17px] leading-[1.5] text-text-secondary">
              Start with your personal details.
            </p>
          </div>

          <form noValidate>
            <div className="border-t border-[#55514b]">
              <div className="grid min-h-[132px] grid-cols-[264px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
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
                    className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    type="text"
                    placeholder="First name"
                    autoComplete="given-name"
                  />
                  <input
                    className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                    type="text"
                    placeholder="Last name"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="grid min-h-[132px] grid-cols-[264px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <h2 className="text-base font-medium text-foreground">
                    Date of Birth
                  </h2>
                  <p className="mt-1 text-[13px] text-text-muted">
                    Format: DD/MM/YYYY
                  </p>
                </div>
                <input
                  className="h-13 w-full rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none placeholder:text-text-placeholder focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  type="date"
                  aria-label="Date of Birth"
                  autoComplete="bday"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default PersonalSignup;
