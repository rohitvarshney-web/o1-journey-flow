import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-card rounded-3xl p-10 md:p-16 shadow-xl border border-border"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              O-1 Journey?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our immigration experts and take the first step 
            toward your extraordinary ability visa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-14 border-2"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-10 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by talent at leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Apple", "Meta", "Google", "Tesla", "Amazon"].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-lg font-semibold text-foreground/70"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
