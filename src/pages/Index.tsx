import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import VisualIntro from "@/components/VisualIntro";
import Understanding from "@/components/Understanding";
import WhoQualifies from "@/components/WhoQualifies";
import VisaComparison from "@/components/VisaComparison";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Benefits />
        <VisualIntro />
        <Understanding />
        <WhoQualifies />
        <VisaComparison />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
