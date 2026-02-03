import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScheduleCallModal from "@/components/ScheduleCallModal";
import principalAttorney from "@/assets/principal-attorney.png";

const benefits = [
  "Discuss your company's holistic immigration strategy",
  "Get an evaluation of your case to see if you meet visa requirements",
  "Get up to date advice on the visa processing timelines",
  "Full clarity and transparency every step along the way",
];

const ConsultationCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-muted border border-border rounded-sm p-6 sm:p-10 md:p-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2">
                Take the First Step:
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule your free consultation!
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => setIsScheduleOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-sm text-sm font-medium w-full sm:w-auto"
              >
                Request a consultation
              </Button>
            </div>

            {/* Attorney Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="rounded-sm overflow-hidden shadow-md max-w-xs mx-auto md:max-w-none">
                <img src={principalAttorney} alt="Principal Attorney" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/90 p-4">
                  <h4 className="text-background font-serif font-semibold text-base">Principal Attorney</h4>
                  <p className="text-background/70 text-sm">Teleport</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ScheduleCallModal open={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </section>
  );
};

export default ConsultationCTA;
