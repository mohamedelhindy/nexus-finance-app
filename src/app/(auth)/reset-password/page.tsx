import AuthNavbar from "@/components/auth/AuthNavbar";
import ResetPassword from "@/components/reset-password/ResetPassword";

export default function ResetPasswordPage() {
  return (
    <>
      <AuthNavbar variant="signin" />
      <ResetPassword />
    </>
  );
}