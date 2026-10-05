import LandingPage from "@/components/landing/LandingPage";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-66px)] bg-[#f6f3ed]">
        <LandingPage />
      </main>
    </>
  );
}
