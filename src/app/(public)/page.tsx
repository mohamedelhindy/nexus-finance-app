import ClosingCta from "@/features/landing/ClosingCta";
import CoreIntelligence from "@/features/landing/CoreIntelligence";
import Explainability from "@/features/landing/Explainability";
import MarketPreview from "@/features/landing/MarketPreview";
import MarketSynthesis from "@/features/landing/MarketSynthesis";
import ProcessOverview from "@/features/landing/ProcessOverview";
import SiteFooter from "@/features/landing/SiteFooter";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-66px)] bg-[#f6f3ed]">
        <MarketPreview />
        <CoreIntelligence />
        <MarketSynthesis />
        <ProcessOverview />
        <Explainability />
        <ClosingCta />
        <SiteFooter />
      </main>
    </>
  );
}
