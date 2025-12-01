import Navbar from "@/components/landing/Navbar";
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f]">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-amber-500/3 blur-[150px]" />
      </div>

      <Navbar />
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
