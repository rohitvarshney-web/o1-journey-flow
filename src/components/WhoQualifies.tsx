import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, FlaskConical, Palette, Users } from "lucide-react";

const categories = [
  {
    icon: Briefcase,
    title: "Startup founders",
    description:
      "Your investors and customers are in the US. Fundraise, hire, meet customers, and grow your business within the US.",
  },
  {
    icon: Code,
    title: "Engineers and data scientists",
    description: "You're a top engineer or data scientist who is building and discovering new advanced technology.",
  },
  {
    icon: FlaskConical,
    title: "Researchers",
    description: "You want to commercialize or continue your research in the US after receiving your degree.",
  },
  {
    icon: Palette,
    title: "Artists and designers",
    description:
      "The O-1 is an option for outstanding individuals in almost any field. You may also qualify for the O-1 if you're at the top of your industry.",
  },
  {
    icon: Users,
    title: "Executives and managerial",
    description: "Executives and managers who are in almost any field may also qualify for the O-1.",
  },
];

const WhoQualifies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-qualifies" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
            See who qualifies for the <span className="text-primary">O-1</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.05 + index * 0.08 }}
                className="bg-card border border-border rounded-sm p-6 sm:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-muted flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">{category.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoQualifies;
