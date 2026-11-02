import AuthNavbar from "@/components/auth/AuthNavbar";

const interests = [
  { label: "Technology", selected: true },
  { label: "Financial Services", selected: true },
  { label: "Healthcare", selected: false },
  { label: "Energy", selected: true },
  { label: "Industrials", selected: false },
  { label: "Consumer", selected: false },
  { label: "Real Estate", selected: false },
  { label: "Telecommunications", selected: false },
];

export const InterestSignup = () => {
  return (
    <>
      <AuthNavbar variant="signin" />
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
              <p className="mt-2 text-[13px] text-primary">
                <span className="mr-2 font-serif italic">02</span>✓{" "}
                <span className="ml-1">Security</span>
              </p>
            </div>
            <div>
              <div className="h-0.5 bg-primary" />
              <p className="mt-2 text-[13px] font-semibold text-foreground">
                <span className="mr-2 font-serif italic font-normal">03</span>
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
              Make NEXUS yours.
            </h1>
            <p className="mt-6 text-[17px] leading-[1.5] text-text-secondary">
              Choose your interests and regional preferences.
            </p>
          </div>

          <form noValidate>
            <div className="border-t border-[#55514b]">
              <div className="grid min-h-[116px] grid-cols-[234px_1fr] items-start gap-8 border-b border-border pt-5 max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <h2 className="text-base font-medium text-foreground">
                    Interests
                  </h2>
                  <p className="mt-1 max-w-[150px] text-[13px] text-text-muted">
                    Preferred sectors. Choose any that apply.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map(({ label, selected }) => (
                    <span
                      className={`rounded-full border px-3.5 py-2 text-[13px] ${
                        selected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input-border bg-input-background text-text-secondary"
                      }`}
                      key={label}
                    >
                      {selected && <span className="mr-1.5">✓</span>}
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid min-h-[85px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <label
                  className="text-base font-medium text-foreground"
                  htmlFor="country"
                >
                  Country
                </label>
                <select
                  className="h-12 w-full appearance-none rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  defaultValue="Egypt"
                  id="country"
                >
                  <option>Egypt</option>
                </select>
              </div>

              <div className="grid min-h-[91px] grid-cols-[234px_1fr] items-center gap-8 border-b border-border max-sm:grid-cols-1 max-sm:gap-4 max-sm:py-5">
                <div>
                  <label
                    className="text-base font-medium text-foreground"
                    htmlFor="timezone"
                  >
                    Timezone
                  </label>
                  <p className="mt-1 text-[13px] text-text-muted">
                    Set separately from your country.
                  </p>
                </div>
                <select
                  className="h-12 w-full appearance-none rounded-[9px] border border-input-border bg-input-background px-3.5 text-base text-foreground outline-none focus:border-primary focus:bg-surface focus:ring-[3px] focus:ring-primary/20"
                  defaultValue="Africa/Cairo (GMT+02:00)"
                  id="timezone"
                >
                  <option>Africa/Cairo (GMT+02:00)</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default InterestSignup;
