import AuthNavbar from "@/components/auth/AuthNavbar";
import VerifyEmail from "@/components/verify-email/VerifyEmail";

export default function VerifyEmailPage() {
  return (
    <>
      <AuthNavbar variant="wrong-email" />
      <VerifyEmail />
    </>
  );
}