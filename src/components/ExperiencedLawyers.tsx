import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import lawyer1 from "@/assets/lawyer-1.png";
import lawyer2 from "@/assets/lawyer-2.png";
import lawyer3 from "@/assets/lawyer-3.png";
import lawyer4 from "@/assets/lawyer-4.png";

const lawyers = [
  { image: lawyer1, experience: "7+", name: "Sarah Chen" },
  { image: lawyer2, experience: "12+", name: "Michael Torres" },
  { image: lawyer3, experience: "23+", name: "Robert Williams" },
  { image: lawyer4, experience: "11+", name: "Amanda Johnson" },
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
              Experienced
              <br />& creative lawyers
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Our network of experienced lawyers and co-counsel will bring ease and clarity to your immigration journey
            </p>
          </div>

          {/* Floating lawyer badges - top left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-8 left-4 md:left-16 flex items-center gap-2"
          >
            <img
              src={lawyers[0].image}
              alt={lawyers[0].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-background shadow-lg"
            />
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
              {lawyers[0].experience} YEARS OF EXPERIENCE
            </span>
          </motion.div>

          {/* Bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-24 left-8 md:left-32 flex items-center gap-2"
          >
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
              {lawyers[1].experience} YEARS OF EXPERIENCE
            </span>
            <img
              src={lawyers[1].image}
              alt={lawyers[1].name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-background shadow-lg"
            />
          </motion.div>

          {/* Top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-4 right-4 md:right-16 flex items-center gap-2"
          >
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
              {lawyers[2].experience} YEARS OF EXPERIENCE
            </span>
            <img
              src={lawyers[2].image}
              alt={lawyers[2].name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-background shadow-lg"
            />
          </motion.div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 right-8 md:right-32 flex items-center gap-2"
          >
            <img
              src={lawyers[3].image}
              alt={lawyers[3].name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-background shadow-lg"
            />
            <span className="bg-primary/10 text-primary text-xs md:text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
              {lawyers[3].experience} YEARS OF EXPERIENCE
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencedLawyers;
