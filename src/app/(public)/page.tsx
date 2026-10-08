import ClosingCta from "@/features/landing/ClosingCta";
import CoreIntelligence from "@/features/landing/CoreIntelligence";
import Explainability from "@/features/landing/Explainability";
import MarketPreview from "@/features/landing/MarketPreview";
import MarketSynthesis from "@/features/landing/MarketSynthesis";
import ProcessOverview from "@/features/landing/ProcessOverview";
import SiteFooter from "@/features/landing/SiteFooter";
import Navbar from "@/components/shared/Navbar";
import LandingMotion from "@/components/shared/LandingMotion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-66px)] bg-[#f6f3ed]">
        <LandingMotion>
          <MarketPreview />
        </LandingMotion>

        <LandingMotion>
          <CoreIntelligence />
        </LandingMotion>

        <LandingMotion>
          <MarketSynthesis />
        </LandingMotion>

        <LandingMotion>
          <ProcessOverview />
        </LandingMotion>

        <LandingMotion>
          <Explainability />
        </LandingMotion>

        <LandingMotion>
          <ClosingCta />
        </LandingMotion>

        <LandingMotion>
          <SiteFooter />
        </LandingMotion>
      </main>
    </>
  );
}
