import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import personConfused from "@/assets/person-confused.png";
import personHappy from "@/assets/person-happy.png";

const beforeItems = [
  "Massive upfront legal retainers ...",
  "No guarantees ...",
  "Weeks to get a lawyer response ...",
  "Confusing lawyer talk ...",
];

const afterItems = [
  "Clarity, simplicity and peace of mind",
  "Visa approved or money back",
  "Payment plans up to 12 months",
  "Transparent fees listed on the website",
];

const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Confused and overwhelmed?
          </h2>
          <p className="text-muted-foreground text-lg">
            No legal jargon. Only clear and simple words.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background border border-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="text-center mb-6">
              <span className="text-muted-foreground text-sm">before</span>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">manifest</h3>
              <div className="w-16 h-px bg-border mx-auto mt-2" />
            </div>

            <div className="space-y-3 min-h-[160px]">
              {beforeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="inline-block bg-destructive/10 text-destructive/80 px-4 py-2 rounded-lg text-sm italic"
                  style={{ 
                    marginLeft: `${index * 15}px`,
                    transform: `rotate(${-3 + index * 2}deg)`
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <img 
                src={personConfused} 
                alt="Confused person"
                className="w-28 h-28 rounded-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="text-center mb-6">
              <span className="text-primary text-sm font-medium">after</span>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">manifest</h3>
              <div className="w-16 h-px bg-primary/30 mx-auto mt-2" />
            </div>

            <div className="space-y-4 min-h-[160px]">
              {afterItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <img 
                src={personHappy} 
                alt="Happy person"
                className="w-28 h-28 rounded-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
