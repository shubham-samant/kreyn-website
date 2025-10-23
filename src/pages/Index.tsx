import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DigitalAgents from "@/components/DigitalAgents";
import PhysicalAgents from "@/components/PhysicalAgents";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DigitalAgents />
      <PhysicalAgents />
      <Features />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
