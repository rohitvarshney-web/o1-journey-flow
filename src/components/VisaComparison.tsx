import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    description:
      "Common work visa but requires lottery with odds of being selected ranging from 10-30%. Requires employer sponsor and $100k filing fee.",
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
    <section id="visa-comparison" ref={ref} className="py-20 md:py-28 section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium text-muted-foreground mb-3 tracking-wide uppercase">Why Choose O-1?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
            O-1 vs. <span className="text-primary">Other Visas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Which U.S. Immigration Path Is Right for You?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={visa.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.08 }}
              className={`relative rounded-sm p-6 border flex flex-col ${
                visa.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card border-border"
              }`}
            >
              <div className="mb-5">
                <span
                  className={`inline-block px-3 py-1.5 rounded-sm text-sm font-semibold ${
                    visa.highlight ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-primary"
                  }`}
                >
                  {visa.title}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 flex-grow ${
                  visa.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                }`}
              >
                {visa.description}
              </p>

              <div className="space-y-2 pt-5 border-t border-current/10">
                <div>
                  <p
                    className={`text-xs font-medium ${
                      visa.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    Difficulty:{" "}
                    <span className={visa.highlight ? "text-primary-foreground" : "text-foreground"}>
                      {visa.difficulty}
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs font-medium ${
                      visa.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    Type:{" "}
                    <span className={visa.highlight ? "text-primary-foreground" : "text-foreground"}>{visa.type}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaComparison;
