import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Search, Upload, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Free Consultation",
    description: "Schedule a free call to assess your eligibility and discuss your case strategy.",
  },
  {
    icon: Search,
    title: "Evidence Development",
    description: "Work with our team to build a compelling case showcasing your extraordinary abilities.",
  },
  {
    icon: Upload,
    title: "Documentation Review",
    description: "Ex-USCIS officers review your application before filing to ensure maximum approval chances.",
  },
  {
    icon: Send,
    title: "Application Filing",
    description: "We file your O-1 petition with USCIS, with optional premium processing for faster results.",
  },
  {
    icon: CheckCircle,
    title: "Approval & Beyond",
    description: "Receive your O-1 visa approval and start your journey in the United States.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, Streamlined{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              O-1 Process
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to approval in 5 clear steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex items-start gap-6 mb-12 last:mb-0"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
                )}

                {/* Step icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
