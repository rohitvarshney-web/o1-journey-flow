import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Free eligibility check",
    description: "Our in-house team conducts a quick assessment to ensure you meet the qualifications for the O-1 visa.",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
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

          {/* Right side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
              Teleport simplifies the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">process</span>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button className="bg-foreground text-background px-8 py-3 rounded-full font-semibold hover:bg-foreground/90 transition-colors">
                Schedule a free consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
