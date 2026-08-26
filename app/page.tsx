import HeroSection from "../components/redesign/sections/HeroSection";
import TrustStrip from "../components/redesign/sections/TrustStrip";
import Values from "../components/redesign/sections/Values";
import Capabilities from "../components/redesign/sections/Capabilities";
import Approach from "../components/redesign/sections/Approach";
import Impact from "../components/redesign/sections/Impact";
import StatsSection from "../components/redesign/sections/StatsSection";
import ProductSuite from "../components/redesign/sections/ProductSuite";
import Engagement from "../components/redesign/sections/Engagement";
import ClosingCTA from "../components/redesign/sections/ClosingCTA";

export default function Home() {
  return (
    <div className="dx-page">
      <HeroSection />
      <TrustStrip />
      <Values />
      <Capabilities />
      <Approach />
      <Impact />
      <StatsSection />
      <ProductSuite />
      <Engagement />
      <ClosingCTA />
    </div>
  );
}
