import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Award, Zap, Clock, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Work with immigration lawyers who have handled thousands of O-1 cases across tech, arts, and business.",
  },
  {
    icon: Award,
    title: "Evidence Development",
    description: "Custom case support with strategic evidence coaching to showcase your extraordinary abilities.",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined process with premium processing options to get you working in the U.S. faster.",
  },
  {
    icon: Users,
    title: "Ex-USCIS Review",
    description: "Every application reviewed by former USCIS officers before filing for maximum approval chances.",
  },
  {
    icon: Zap,
    title: "Real-Time Tracking",
    description: "Live case preparation tracking through our portal. Stay informed at every step.",
  },
  {
    icon: CheckCircle2,
    title: "Success Guarantee",
    description: "Visa approved or 100% refund available on select plans. We're invested in your success.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              O-1 Visa Service
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support from application to approval, backed by years of expertise
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
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
