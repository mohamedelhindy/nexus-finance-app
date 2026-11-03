const reviewSections: Array<{
  label: string;
  value: string;
  detail?: string;
}> = [
  {
    label: "Personal",
    value: "Alistair Vance",
    detail: "Born 14/03/1988",
  },
  {
    label: "Account",
    value: "a.vance@bridgewater.com",
  },
  {
    label: "Interests",
    value: "Technology, Financial Services, Energy",
  },
  {
    label: "Region",
    value: "Egypt",
    detail: "Africa/Cairo (GMT+02:00)",
  },
];

const ReviewSignup = () => {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col rounded-b-lg border-b border-border bg-surface">
      <div className="mx-auto w-full max-w-[960px] flex-1 px-0 pb-10 pt-16 max-sm:px-5 max-sm:pb-8 max-sm:pt-12">
        <div className="mb-11">
          <h1 className="font-serif text-[56px] font-normal leading-none tracking-[-0.055em] text-foreground max-sm:text-[46px]">
            Ready to get started?
          </h1>
          <p className="mt-6 text-[17px] leading-[1.5] text-text-secondary">
            Review your details before creating your account.
          </p>
        </div>

        <div className="border-t border-[#55514b]">
          {reviewSections.map(({ label, value, detail }) => (
            <div
              className="grid min-h-[81px] grid-cols-[276px_1fr_42px] items-center gap-8 border-b border-border max-sm:grid-cols-[1fr_auto] max-sm:gap-4 max-sm:py-5"
              key={label}
            >
              <h2 className="text-base font-medium text-foreground">{label}</h2>
              <div className="max-sm:col-start-1 max-sm:row-start-2">
                <p className="text-base text-foreground">{value}</p>
                {detail && (
                  <p className="text-[14px] leading-[1.35] text-text-secondary">
                    {detail}
                  </p>
                )}
              </div>
              <button
                className="text-right text-sm text-primary transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary max-sm:col-start-2 max-sm:row-start-1"
                type="button"
              >
                Edit
              </button>
            </div>
          ))}

          <div className="grid min-h-[132px] grid-cols-[276px_1fr_42px] items-start gap-8 border-b border-border py-6 max-sm:grid-cols-1 max-sm:gap-4">
            <div>
              <h2 className="text-base font-medium text-foreground">
                Agreements
              </h2>
              <p className="text-[13px] leading-[1.2] text-text-muted">
                Both are required.
              </p>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-base text-text-secondary">
                <input
                  className="h-[22px] w-[22px] shrink-0 accent-primary"
                  defaultChecked
                  type="checkbox"
                />
                <span>
                  I agree to the{" "}
                  <a
                    className="font-medium text-primary hover:text-primary-hover"
                    href="/terms"
                  >
                    Terms of Service.
                  </a>
                </span>
              </label>
              <label className="flex items-center gap-3 text-base text-text-secondary">
                <input
                  className="h-[22px] w-[22px] shrink-0 accent-primary"
                  defaultChecked
                  type="checkbox"
                />
                <span>
                  I have read and agree to the{" "}
                  <a
                    className="font-medium text-primary hover:text-primary-hover"
                    href="/privacy"
                  >
                    Privacy Policy.
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReviewSignup;
