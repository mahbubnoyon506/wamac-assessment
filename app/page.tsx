import { CurriculumSection } from "./components/CurriculumSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { SoutionSection } from "./components/SoutionSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SoutionSection />
      <FeaturesSection />
      <CurriculumSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
