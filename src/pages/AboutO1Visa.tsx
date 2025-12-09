import Navigation from "@/components/Navigation";
import VisualIntro from "@/components/VisualIntro";
import WhoQualifies from "@/components/WhoQualifies";
import Understanding from "@/components/Understanding";
import Benefits from "@/components/Benefits";
import VisaComparison from "@/components/VisaComparison";
import ConsultationCTA from "@/components/ConsultationCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CTA from "@/components/CTA";
import useScrollToHash from "@/hooks/useScrollToHash";

const AboutO1Visa = () => {
  useScrollToHash();
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <VisualIntro />
        <WhoQualifies />
        <Understanding />
        <Benefits />
        <VisaComparison />
        <ConsultationCTA />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutO1Visa;
