import Link from "next/link";

const AuthNavbar = () => {
  return (
    <header className="h-[65px] rounded-t-lg border-t-2 border-primary border-border bg-surface">
      <nav className="mx-auto flex h-[62px] max-w-[1280px] items-center justify-between px-8 max-sm:px-5">
        <h1 className="m-0 font-serif text-[17px] font-medium tracking-[0.28em] text-primary">
          NEXUS
        </h1>
        <p className="m-0 text-xs text-text-secondary max-sm:text-[11px]">
          New to NEXUS?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            Create account
          </Link>
        </p>
      </nav>
    </header>
  );
};

export default AuthNavbar;
