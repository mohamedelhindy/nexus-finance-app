import CoreIntelligence from "@/components/landing/CoreIntelligence";
import MarketPreview from "@/components/landing/MarketPreview";
import MarketSynthesis from "./MarketSynthesis";

const LandingPage = () => {
  return (
    <div>
      <MarketPreview />
      <CoreIntelligence />
      <MarketSynthesis />
    </div>
  );
};

export default LandingPage;
