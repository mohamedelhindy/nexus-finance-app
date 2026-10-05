import { footerContent } from "@/constants";

const SiteFooter = () => {
  return (
    <footer className="w-full bg-surface-container-lowest px-6 pb-10 pt-16 text-text-secondary sm:px-10 lg:px-[15vw] lg:pt-16">
      <div className="mx-auto w-full max-w-[1344px]">
        <div className="grid gap-10 md:grid-cols-[minmax(18rem,1.35fr)_repeat(3,minmax(8rem,1fr))] md:gap-12">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-primary text-[17px] font-bold leading-none text-primary-foreground">
                N
              </span>
              <span className="font-serif text-[20px] font-semibold tracking-[-0.04em] text-foreground">
                NEXUS
              </span>
            </div>

            <p className="mt-5 max-w-[21rem] text-[14px] leading-[1.55] text-text-secondary">
              {footerContent.description}
            </p>
          </div>

          {footerContent.navigation.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.08em] text-foreground">
                {column.title}
              </h2>
              <ul className="mt-3 space-y-2 text-[14px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[12px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContent.copyright}</p>
          <p>{footerContent.signature}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
