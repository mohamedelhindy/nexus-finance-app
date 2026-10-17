import ClosingCta from "@/components/landing/ClosingCta";
import CoreIntelligence from "@/components/landing/CoreIntelligence";
import Explainability from "@/components/landing/Explainability";
import MarketPreview from "@/components/landing/MarketPreview";
import MarketSynthesis from "@/components/landing/MarketSynthesis";
import ProcessOverview from "@/components/landing/ProcessOverview";
import SiteFooter from "@/components/landing/SiteFooter";
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
