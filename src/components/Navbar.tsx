import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-[66px] border-b border-[#e5e0d7] bg-surface-container-low">
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
          <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-primary-container text-[21px] font-bold text-white">
            N
          </span>
          <span className="font-serif text-[20px] font-bold tracking-[-0.04em] text-on-surface-ink">
            NEXUS
          </span>
        </Link>

        {/* navigation */}
        <div className="hidden items-center gap-8 text-[14px] lg:flex">
          <Link href="/" className="font-medium text-on-surface-ink">
            Explore
          </Link>

          <Link
            href="#companies"
            className="text-secondary transition-colors hover:text-on-surface-ink"
          >
            Companies
          </Link>

          <Link
            href="#news"
            className="text-secondary transition-colors hover:text-on-surface-ink"
          >
            News
          </Link>

          <Link
            href="#ai-research"
            className="text-secondary transition-colors hover:text-on-surface-ink"
          >
            AI Research
          </Link>
        </div>

        {/* user actions */}
        <div className="flex items-center gap-5">
          {/* theme toggle */}
          <div className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-[6px] transition-colors duration-200 hover:bg-[#e8e3d7]">
            <button
              type="button"
              aria-label="Toggle theme"
              className="cursor-pointer text-secondary"
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
            className="hidden text-[14px] text-secondary sm:block hover:text-on-surface-ink transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link
            href="#get-started"
            className="rounded-[6px] bg-primary-container px-4 py-2 text-[14px] font-medium text-white transition-colors duration-200 hover:bg-primary"
          >
            Get Started
          </Link>

          {/* user account */}
          <Link
            href="#account"
            aria-label="Your account"
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-container text-white transition-colors hover:bg-primary"
          >
            <Image src="/assets/profile.svg" alt="" width={32} height={32} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
