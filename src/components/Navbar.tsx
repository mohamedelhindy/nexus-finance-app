import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-[66px] border-b border-[#e5e0d7] bg-[#f6f3ed]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-[1368px] items-center justify-between px-6 lg:px-0"
      >
        <Link
          href="/"
          aria-label="Nexus home"
          className="flex items-center gap-1.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#147b76] text-[21px] font-bold text-white">
            N
          </span>
          <span className="font-serif text-[20px] font-bold tracking-[-0.04em] text-[#242321]">
            NEXUS
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[14px] lg:flex">
          <Link href="/" className="font-medium text-[#1f1f1d]">
            Explore
          </Link>

          <Link
            href="#companies"
            className="text-[#77736d] transition-colors hover:text-[#1f1f1d]"
          >
            Companies
          </Link>

          <Link
            href="#news"
            className="text-[#77736d] transition-colors hover:text-[#1f1f1d]"
          >
            News
          </Link>

          <Link
            href="#ai-research"
            className="text-[#77736d] transition-colors hover:text-[#1f1f1d]"
          >
            AI Research
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Toggle theme"
            className="text-[#5e5b55] transition-colors hover:text-[#147b76] cursor-pointer"
          >
            <Image src="/assets/sun.svg" alt="" width={20} height={20} />
          </button>
          <Link
            href="#sign-in"
            className="hidden text-[14px] text-[#77736d] sm:block"
          >
            Sign In
          </Link>
          <Link
            href="#get-started"
            className="rounded-[6px] bg-[#147b76] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#0f625e]"
          >
            Get Started
          </Link>
          <Link
            href="#account"
            aria-label="Your account"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#147b76] text-white transition-colors hover:bg-[#0f625e]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px] fill-none stroke-current stroke-[1.7]"
            >
              <circle cx="12" cy="8" r="3" />
              <path d="M5.5 19c.7-3 2.8-4.5 6.5-4.5s5.8 1.5 6.5 4.5" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
