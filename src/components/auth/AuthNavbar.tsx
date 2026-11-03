import Link from "next/link";

interface AuthNavbarProps {
  variant?: "signup" | "signin" | "wrong-email";
}

const AuthNavbar = ({ variant = "signup" }: AuthNavbarProps) => {
  return (
    <header className="h-[62px] border-b border-border border-t-2 border-t-primary bg-surface">
      <nav className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-[max(1.5rem,calc((100vw-1110px)/2))] max-sm:px-5">
        <h1 className="m-0 font-serif text-[17px] font-medium tracking-[0.28em] text-primary">
          NEXUS
        </h1>
        {variant === "signup" ? (
          <p className="m-0 text-xs text-text-secondary max-sm:text-[11px]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary-hover"
            >
              Sign in
            </Link>
          </p>
        ) : variant === "signin" ? (
          <p className="m-0 text-xs text-text-secondary max-sm:text-[11px]">
            Remembered it?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary-hover"
            >
              Sign in
            </Link>
          </p>
        ) : (
          <p className="m-0 text-xs text-text-secondary max-sm:text-[11px]">
            Wrong email?{" "}
            <Link
              href="/forgot-password"
              className="font-semibold text-primary hover:text-primary-hover"
            >
              Change address
            </Link>
          </p>
        )}
      </nav>
    </header>
  );
};

export default AuthNavbar;
