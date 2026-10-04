import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-[66px] border-b border-border bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-[1368px] items-center justify-between px-6 lg:px-0"
      >
        {/* logo */}
        <Link
          href="/"
          aria-label="Nexus home"
          className="flex items-center gap-1.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-primary-token text-[21px] font-bold text-primary-foreground">
            N
          </span>
          <span className="font-serif text-[20px] font-bold tracking-[-0.04em] text-foreground">
            NEXUS
          </span>
        </Link>

        {/* navigation */}
        <div className="hidden items-center gap-8 text-[14px] lg:flex">
          <Link href="/" className="font-medium text-foreground">
            Explore
          </Link>

          <Link
            href="#companies"
            className="text-text-secondary transition-colors hover:text-foreground"
          >
            Companies
          </Link>

          <Link
            href="#news"
            className="text-text-secondary transition-colors hover:text-foreground"
          >
            News
          </Link>

          <Link
            href="#ai-research"
            className="text-text-secondary transition-colors hover:text-foreground"
          >
            AI Research
          </Link>
        </div>

        {/* user actions */}
        <div className="flex items-center gap-5">
          {/* theme toggle */}
          <div className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-[6px] transition-colors duration-200 hover:bg-surface-container">
            <button
              type="button"
              aria-label="Toggle theme"
              className="cursor-pointer text-text-secondary"
            >
              <Image
                src="/assets/sun.svg"
                alt="light mode"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* sign in */}
          <Link
            href="#sign-in"
            className="hidden text-[14px] text-text-secondary transition-colors duration-200 hover:text-foreground sm:block"
          >
            Sign In
          </Link>
          <Link
            href="#get-started"
            className="rounded-[6px] bg-primary px-4 py-2 text-[14px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary-hover"
          >
            Get Started
          </Link>

          {/* user account */}
          <Link
            href="#account"
            aria-label="Your account"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            <Image src="/assets/profile.svg" alt="" width={32} height={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
