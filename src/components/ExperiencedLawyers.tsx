import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const lawyers = [
  { experience: "7+", position: "top-8 left-8" },
  { experience: "12+", position: "bottom-16 left-32" },
  { experience: "23+", position: "top-4 right-8" },
  { experience: "11+", position: "bottom-8 right-24" },
];

const ExperiencedLawyers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="text-center py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
              Experienced<br />& creative lawyers
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Our network of experienced lawyers and co-counsel will bring ease and clarity to your immigration journey
            </p>
          </div>

          {/* Floating lawyer badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-8 left-4 md:left-16 flex items-center gap-2"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-4 border-background shadow-lg" />
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full">
              7+ YEARS OF EXPERIENCE
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-16 left-8 md:left-32 flex items-center gap-2"
          >
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full">
              12+ YEARS OF EXPERIENCE
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/50 border-4 border-background shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-4 right-4 md:right-16 flex items-center gap-2"
          >
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full">
              23+ YEARS OF EXPERIENCE
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/50 border-4 border-background shadow-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 right-8 md:right-32 flex items-center gap-2"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/40 border-4 border-background shadow-lg" />
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full">
              11+ YEARS OF EXPERIENCE
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencedLawyers;
