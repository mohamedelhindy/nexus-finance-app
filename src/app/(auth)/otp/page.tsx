import AuthNavbar from "@/components/auth/AuthNavbar";
import Otp from "@/components/otp/Otp";

export default function OtpPage() {
  return (
    <>
      <AuthNavbar variant="wrong-email" />
      <Otp />
    </>
  );
}