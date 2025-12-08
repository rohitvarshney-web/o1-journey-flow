import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "@/components/ApplicationForm";

const benefits = [
  "Discuss your company's holistic immigration strategy",
  "Get an evaluation of your case to see if you meet visa requirements",
  "Get up to date advice on the visa processing timelines",
  "Full clarity and transparency every step along the way",
];

const ConsultationCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-6">
            Connect and let us handle all your immigration needs
          </h2>
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full"
          >
            Request a consultation
          </Button>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-accent/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
                Take the First Step:
              </h3>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                Schedule your free consultation!
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                onClick={() => setIsFormOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full"
              >
                Request a consultation
              </Button>
            </div>

            {/* Attorney Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl aspect-[4/5] flex items-end justify-center overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm p-4">
                  <h4 className="text-background font-semibold">Principal Attorney</h4>
                  <p className="text-background/80 text-sm">Manifest Law</p>
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

export default ConsultationCTA;
