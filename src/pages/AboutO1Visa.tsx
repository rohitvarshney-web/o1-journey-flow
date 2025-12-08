import Navigation from "@/components/Navigation";
import WhoQualifies from "@/components/WhoQualifies";
import Understanding from "@/components/Understanding";
import Benefits from "@/components/Benefits";
import VisaComparison from "@/components/VisaComparison";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import CTA from "@/components/CTA";

const AboutO1Visa = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <WhoQualifies />
        <Understanding />
        <Benefits />
        <VisaComparison />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default AboutO1Visa;
