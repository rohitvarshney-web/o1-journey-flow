import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, FlaskConical, Palette, Users } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  {
    icon: Briefcase,
    title: "Startup founders",
    description: "Your investors and customers are in the US. Fundraise, hire, meet customers, and grow your business within the US.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Code,
    title: "Engineers and data scientists",
    description: "You're a top engineer or data scientist who is building and discovering new advanced technology.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: FlaskConical,
    title: "Researchers",
    description: "You want to commercialize or continue your research in the US after receiving your degree.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Palette,
    title: "Artists and designers",
    description: "The O-1 is an option for outstanding individuals in almost any field. You may also qualify for the O-1 if you're at the top of your industry.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Executives and managerial",
    description: "Executives and managers who are in almost any field may also qualify for the O-1.",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const WhoQualifies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            See who qualifies for the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">O-1</span>
          </h2>
          <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
            Schedule a free consultation
          </Button>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoQualifies;
