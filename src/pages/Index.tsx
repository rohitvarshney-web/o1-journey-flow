import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisualIntro from "@/components/VisualIntro";
import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ApprovalProtection from "@/components/ApprovalProtection";
import ConsultationCTA from "@/components/ConsultationCTA";
import PricingPlans from "@/components/PricingPlans";
import FloatingCTA from "@/components/FloatingCTA";
import useScrollToHash from "@/hooks/useScrollToHash";

const Index = () => {
  useScrollToHash();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Hero />
        <VisualIntro />
        <ApprovalProtection />
        <Process />
        <Timeline />
        <PricingPlans />
        <ConsultationCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
