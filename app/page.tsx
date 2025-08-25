import CallToAction from "@/components/call-to-action";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
      <CallToAction />
      <FooterSection />
    </>
  );
}
