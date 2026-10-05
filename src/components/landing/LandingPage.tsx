import CoreIntelligence from "@/components/landing/CoreIntelligence";
import MarketPreview from "@/components/landing/MarketPreview";
import MarketSynthesis from "./MarketSynthesis";
import ProcessOverview from "./ProcessOverview";
import Explainability from "./Explainability";

const LandingPage = () => {
  return (
    <div>
      <MarketPreview />
      <CoreIntelligence />
      <MarketSynthesis />
      <ProcessOverview />
      <Explainability />
    </div>
  );
};

export default LandingPage;
