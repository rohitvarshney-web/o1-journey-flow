import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.png";
import ApplicationForm from "./ApplicationForm";
import ScheduleCallModal from "./ScheduleCallModal";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center pt-20 lg:pt-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
              Your <span className="text-primary">O-1 visa</span>, handled start to finish.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
              Eligibility to filing, including strategy, narrative, and recommendation letters - led by experienced, US-licensed immigration lawyers.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="group text-sm font-medium px-6 h-12 rounded-sm bg-primary hover:bg-primary/90 transition-colors"
                onClick={() => setIsFormOpen(true)}
              >
                Check Your O-1 Readiness
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm font-medium px-6 h-12 rounded-sm border-border hover:bg-muted transition-colors"
                onClick={() => setIsScheduleOpen(true)}
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden lg:block"
          >
            <img 
              src={heroImage} 
              alt="O-1 Visa Professional" 
              className="w-full h-auto rounded-sm shadow-lg" 
            />
          </motion.div>
        </div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
      <ScheduleCallModal open={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </section>
  );
};

export default Hero;
