import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import teleportLogo from "@/assets/teleport-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center overflow-hidden bg-primary/3 pt-24 sm:pt-28 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground flex flex-wrap items-center gap-2 sm:gap-3">
              Get O-1 visas 3x faster with
              <img src={teleportLogo} alt="Teleport" className="inline-block h-8 sm:h-12 lg:h-16 w-auto" />
            </h1>

            <p className="text-base sm:text-xl lg:text-2xl text-foreground/80 mb-8 sm:mb-10 max-w-2xl">
              Accelerate the visa application process with our AI-powered platform and in-house legal experts.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button size="lg" className="group text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 shadow-md hover:shadow-lg transition-all">
                Get Started Free
                <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img src={heroImage} alt="O-1 Visa Professional" className="w-full h-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
