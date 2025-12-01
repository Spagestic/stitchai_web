import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import GallerySection from "@/components/landing/GallerySection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/landing/CTASection";
import FooterSection from "@/components/landing/FooterSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-primary">
      <HeroSection />
      <TrustedBySection />
      <HowItWorksSection />
      <GallerySection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
