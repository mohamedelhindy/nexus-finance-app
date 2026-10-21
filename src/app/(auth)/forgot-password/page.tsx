import AuthNavbar from "@/components/auth/AuthNavbar";
import ForgotPassword from "@/components/forgot-password/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthNavbar variant="signin" />
      <ForgotPassword />
    </>
  );
}