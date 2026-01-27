import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import ApplicationForm from "@/components/ApplicationForm";

const PricingPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Popular Immigration Services for Startups
          </h2>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 text-center shadow-lg ring-2 ring-primary"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">O-1 Visa</h3>
            <div className="w-16 h-px bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground mb-2">Prices starting from</p>
            <p className="text-4xl md:text-5xl font-bold text-primary mb-4">$7,000</p>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">Money Back Guarantee</span>
            </div>
          </motion.div>
        </div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default PricingPlans;

