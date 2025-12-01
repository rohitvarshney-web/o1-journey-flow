import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const visaTypes = [
  {
    name: "O-1",
    title: "O-1",
    description: "Can be fastest path for extraordinary talent with strong evidence.",
    difficulty: "Moderate",
    type: "Nonimmigrant/Up to 3 Years",
    highlight: true,
  },
  {
    name: "H-1B",
    title: "H-1B",
    description: "Common work visa but requires lottery with odds of being selected ranging from 10-30%. Requires employer sponsor and $100k filing fee.",
    difficulty: "Moderate",
    type: "Nonimmigrant/18 months-6 Years",
    highlight: false,
  },
  {
    name: "L-1",
    title: "L-1",
    description: "Enables multinational companies to transfer managers or specialized employees to U.S. offices.",
    difficulty: "High",
    type: "Nonimmigrant/Up to 7 Years",
    highlight: false,
  },
  {
    name: "EB-2 NIW",
    title: "EB-2 NIW",
    description: "Green Card pathway for those pursuing endeavors of national interest.",
    difficulty: "Moderate",
    type: "Green Card/Up to 10 Years",
    highlight: false,
  },
];

const VisaComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="visa-comparison" ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-muted-foreground mb-4 tracking-wide uppercase">
            Why Choose O-1?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O-1 vs.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Other Visas
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Which U.S. Immigration Path Is Right for You?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={visa.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                visa.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border"
              } transition-all hover:shadow-lg flex flex-col`}
            >
              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                    visa.highlight
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {visa.title}
                </span>
              </div>
              
              <p
                className={`text-base leading-relaxed mb-8 flex-grow ${
                  visa.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                }`}
              >
                {visa.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-current/20">
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      visa.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    Difficulty:{" "}
                    <span
                      className={visa.highlight ? "text-primary-foreground" : "text-foreground"}
                    >
                      {visa.difficulty}
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold ${
                      visa.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    Type:{" "}
                    <span
                      className={visa.highlight ? "text-primary-foreground" : "text-foreground"}
                    >
                      {visa.type}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" className="text-lg px-8 group">
            Check Your Eligibility For O-1
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaComparison;
