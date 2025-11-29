import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisualIntro from "@/components/VisualIntro";
import Benefits from "@/components/Benefits";
import WhoQualifies from "@/components/WhoQualifies";
import Understanding from "@/components/Understanding";
import VisaComparison from "@/components/VisaComparison";
import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Hero />
        <VisualIntro />
        <WhoQualifies />
        <Understanding />
        <Benefits />
        <VisaComparison />
        <Process />
        <Timeline />
        <Testimonials />
        <FAQ />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
