import HeroSection from "@/components/landing/HeroSection";
import GallerySection from "@/components/landing/GallerySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FooterSection from "@/components/landing/FooterSection";
import FAQ from "@/components/landing/faq-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      <HeroSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQ />
      <FooterSection />
    </div>
  );
}
