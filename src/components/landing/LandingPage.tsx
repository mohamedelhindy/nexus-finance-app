import CoreIntelligence from "@/components/landing/CoreIntelligence";
import MarketPreview from "@/components/landing/MarketPreview";
import MarketSynthesis from "./MarketSynthesis";
import ProcessOverview from "./ProcessOverview";
import Explainability from "./Explainability";
import ClosingCta from "./ClosingCta";
import SiteFooter from "./SiteFooter";

const LandingPage = () => {
  return (
    <div>
      <MarketPreview />
      <CoreIntelligence />
      <MarketSynthesis />
      <ProcessOverview />
      <Explainability />
      <ClosingCta />
      <SiteFooter />
    </div>
  );
};

export default LandingPage;
