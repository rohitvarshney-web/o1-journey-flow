import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Shield, Check } from "lucide-react";
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
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-accent/10 border border-accent/20"
              >
                <span className="text-xs font-medium text-accent uppercase tracking-wide">Exclusive Protection Plan</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground"
              >
                Apply with{" "}
                <span className="text-primary">Complete Confidence</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Our Approval Protection Plan removes all financial risk from your O-1 visa application. If your petition
                is denied, we refund your entire service fee - no exceptions.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="space-y-4"
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-sm p-6 sm:p-8 shadow-md">
                {/* Shield Icon */}
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-primary rounded-sm flex items-center justify-center shadow-md">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Approval Protection
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">Money-Back Guarantee</h3>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="space-y-0">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Coverage</span>
                      <span className="font-medium text-sm text-foreground">Full Service Fee</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Claim Process</span>
                      <span className="font-medium text-sm text-foreground">Hassle-Free</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Eligibility</span>
                      <span className="font-medium text-sm text-foreground">All O-1 Applicants</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-muted-foreground">Processing Time</span>
                      <span className="font-medium text-sm text-foreground">5 Business Days</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 rounded-sm p-4 border border-accent/20">
                    <p className="text-sm text-foreground text-center">
                      <span className="font-semibold text-accent">96% approval rate</span> - most clients never need to
                      use it, but it's there when you want the extra security.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ApprovalProtection;
