import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";

const PricingPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section ref={ref} className="py-20 md:py-28 section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Popular Immigration Services for Startups
          </h2>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-sm p-8 text-center shadow-md"
          >
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">O-1 Visa</h3>
            <div className="w-12 h-px bg-border mx-auto mb-6" />
            <p className="text-muted-foreground mb-2">Prices starting from</p>
            <p className="text-4xl sm:text-5xl font-bold text-primary mb-4">$7,000</p>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-sm mb-6">
              <span className="text-sm font-medium">Money Back Guarantee</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Most standard O-1 cases are $7,000. If you need additional support for narrative development, recommendation letters, or complex case structuring, we will confirm any incremental costs upfront.
            </p>
            <Button 
              size="lg"
              className="w-full rounded-sm bg-primary hover:bg-primary/90 text-sm font-medium group"
              onClick={() => setIsFormOpen(true)}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default PricingPlans;
