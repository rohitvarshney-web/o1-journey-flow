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
    <section ref={ref} className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-4 sm:mb-6 px-2">
            Connect and let us handle all your immigration needs
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-accent/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mb-1 sm:mb-2">Take the First Step:</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 sm:mb-8">Schedule your free consultation!</p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => setIsScheduleOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base w-full sm:w-auto"
              >
                Request a consultation
              </Button>
            </div>

            {/* Attorney Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative order-1 md:order-2"
            >
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg max-w-xs mx-auto md:max-w-none">
                <img 
                  src={principalAttorney} 
                  alt="Principal Attorney" 
                  className="w-full aspect-[4/5] object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm p-3 sm:p-4">
                  <h4 className="text-background font-semibold text-sm sm:text-base">Principal Attorney</h4>
                  <p className="text-background/80 text-xs sm:text-sm">Teleport</p>
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
