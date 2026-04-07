import { CurriculumSection } from "./components/CurriculumSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import { SoutionSection } from "./components/SoutionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SoutionSection />
      <SoutionSection />
      <FeaturesSection />
      <CurriculumSection />
    </>
  );
}
