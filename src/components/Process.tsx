import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";

const steps = [
  {
    number: "1",
    title: "Free eligibility check",
    description:
      "Our in-house team conducts a quick assessment to ensure you meet the qualifications for the O-1 visa.",
  },
  {
    number: "2",
    title: "Digital intake",
    description: "Complete our streamlined online form to provide us with your background and achievements.",
  },
  {
    number: "3",
    title: "Dedicated lawyer",
    description: "Get matched with an experienced O-1 attorney who will guide you through every step.",
  },
  {
    number: "4",
    title: "Review process",
    description: "Your attorney reviews and refines your petition to maximize approval chances.",
  },
  {
    number: "5",
    title: "Share & sign",
    description: "Review the final petition, sign the documents, and we'll file with USCIS on your behalf.",
  },
];

const Process = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Visual Card - shows below text on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />

              {/* Form Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">O-1A application</div>
                    <div className="text-xs text-muted-foreground">Applicant</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Country of nationality</label>
                    <div className="h-10 bg-secondary/30 border border-border rounded-lg flex items-center px-3 text-sm text-muted-foreground">
                      Select country
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Country of residence</label>
                    <div className="h-10 bg-secondary/30 border border-border rounded-lg flex items-center px-3 text-sm text-muted-foreground">
                      United States
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Job title</label>
                    <div className="h-10 bg-secondary/30 border border-border rounded-lg flex items-center px-3 text-sm text-muted-foreground">
                      Your position
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-primary">You're eligible for the O-1A visa</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps - shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
              Teleport simplifies the <span className="bg-gradient-primary bg-clip-text text-transparent">process</span>
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <Button 
                size="lg" 
                className="px-8 py-3 text-base font-semibold"
                onClick={() => setIsFormOpen(true)}
              >
                Schedule a free consultation
              </Button>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default Process;
