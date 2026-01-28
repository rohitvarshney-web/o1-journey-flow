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
    <section ref={ref} className="py-16 sm:py-20 bg-muted border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground leading-tight">
            Ready to Start Your O-1 Journey?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
            Take our quick assessment to see if you qualify for the O-1 "Talent Visa" and get personalized guidance from our expert team.
          </p>
          <Button
            size="lg"
            className="group text-sm font-medium px-6 h-12 rounded-sm bg-primary hover:bg-primary/90 transition-colors"
            onClick={() => setIsFormOpen(true)}
          >
            Check Your O-1 Readiness
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ReadinessCTA;
