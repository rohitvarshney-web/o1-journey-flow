import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FastCommunication = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-accent/20 rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
                Fast & clear<br />communications
              </h2>
              <p className="text-muted-foreground text-lg">
                We make it easy for you to understand every step of the immigration process. Plus, our average response time is just 3 hours during business hours.
              </p>
            </div>

            <div className="relative">
              {/* Chat bubbles mockup */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-background rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-xs ml-auto"
                >
                  <p className="text-sm text-foreground">I DON'T KNOW HOW TO DRAFT THIS FORM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="bg-primary text-primary-foreground rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-xs"
                >
                  <p className="text-sm">NO WORRIES, WE'LL TAKE CARE OF IT :)</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="bg-background rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-xs ml-auto"
                >
                  <p className="text-sm text-foreground">OMG! THANK YOU SO MUCH 🙏</p>
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FastCommunication;
