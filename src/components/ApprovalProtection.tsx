import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";

const ApprovalProtection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "100% fee refund if your application is denied",
    "No questions asked - straightforward claim process",
    "Peace of mind throughout your visa journey",
    "Available for both O-1A and O-1B applications",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Exclusive Protection Plan</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              >
                Apply with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Complete Confidence
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our Approval Protection Plan removes all financial risk from your O-1 visa application. 
                If your petition is denied, we refund your entire service fee—no exceptions.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="group text-base px-8 h-14 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsFormOpen(true)}
                >
                  Learn About Protection Plan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 md:p-10 border border-border shadow-2xl">
                {/* Shield Icon */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <Shield className="w-10 h-10 text-primary-foreground -rotate-12" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Approval Protection
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Money-Back Guarantee
                    </h3>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Coverage</span>
                      <span className="font-semibold text-foreground">Full Service Fee</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Claim Process</span>
                      <span className="font-semibold text-foreground">Hassle-Free</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-muted-foreground">Eligibility</span>
                      <span className="font-semibold text-foreground">All O-1 Applicants</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-muted-foreground">Processing Time</span>
                      <span className="font-semibold text-foreground">5 Business Days</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                    <p className="text-sm text-foreground/80 text-center">
                      <span className="font-semibold text-accent">96% approval rate</span> — most clients never need to use it, 
                      but it&apos;s there when you want the extra security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ApprovalProtection;
