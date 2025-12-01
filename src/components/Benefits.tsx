import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Zap, Clock, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "No Annual Cap",
    description:
      "Unlike H-1B visas, O-1A has no annual quota or lottery. Apply anytime without waiting for an annual filing window.",
  },
  {
    icon: Users,
    title: "Extraordinary Ability Standard",
    description:
      "For those with sustained national or international acclaim in sciences, education, business, or athletics. Demonstrate expertise through awards, publications, or significant contributions.",
  },
  {
    icon: CheckCircle2,
    title: "Flexible Duration",
    description:
      "Initial approval for up to 3 years with unlimited 1-year extensions. Continue working while your extension is pending.",
  },
  {
    icon: Shield,
    title: "Path to Green Card",
    description:
      "O-1A status supports EB-1A and EB-2 NIW green card applications. Dual intent allows you to pursue permanent residency.",
  },
  {
    icon: Clock,
    title: "Premium Processing",
    description:
      "Get USCIS decisions in as little as 15 calendar days with premium processing. Fast-track your application when time is critical.",
  },
  {
    icon: Zap,
    title: "Family Benefits",
    description:
      "Bring your spouse and children under 21 to the U.S. on O-3 status. They can study and remain with you throughout your stay.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" ref={ref} className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O-1 Visa <span className="bg-gradient-primary bg-clip-text text-transparent">Key Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For individuals with extraordinary ability in sciences, education, business, or athletics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
