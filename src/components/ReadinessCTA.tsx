import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";

const ReadinessCTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your O-1 Journey?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8">
            Take our quick assessment to see if you qualify for the O-1 "Talent Visa" and get personalized guidance from our expert team.
          </p>
          <Button
            size="lg"
            className="group text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-14 shadow-md hover:shadow-lg transition-all"
            onClick={() => setIsFormOpen(true)}
          >
            Check Your O-1 Readiness
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ReadinessCTA;
