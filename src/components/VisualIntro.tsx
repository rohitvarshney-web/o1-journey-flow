import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const VisualIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  const highlights = [
    "3-year initial period",
    "Unlimited extensions",
    "No annual cap or lottery",
    "Family can join on O-3",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 section-gray relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="order-1"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              What is <span className="text-primary">'the' O-1 Visa?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              The O-1 is a U.S. work visa for people with extraordinary ability or achievement in fields like technology, science, business, the arts, or athletics. If approved, it can be granted for up to 3 years initially and may be extended in 1-year increments as long as eligible work continues. There is no annual cap and no specific degree requirement. The O-1 is employer or agent-sponsored, meaning you're authorized to work for the petitioning employer/agent (and any approved concurrent employers).
            </p>
            {!isAboutPage && (
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="hidden lg:inline-flex text-sm font-medium rounded-sm border-border hover:bg-muted"
              >
                <Link to="/about-o1-visa">Learn More</Link>
              </Button>
            )}
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative order-2 w-full"
          >
            <div className="bg-card border border-border rounded-sm p-6 sm:p-8 shadow-md">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                  US
                </div>
                <div>
                  <div className="font-serif font-semibold text-lg text-foreground">O-1 Visa</div>
                  <div className="text-sm text-muted-foreground">Work Authorization</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Approval rate */}
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-sm">
                <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                  <Check className="w-4 h-4" />
                  <span>Approval Rate: 96%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Know More button - mobile only */}
          {!isAboutPage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-3 lg:hidden w-full"
            >
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="w-full text-sm font-medium rounded-sm border-border hover:bg-muted"
              >
                <Link to="/about-o1-visa">Learn More</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisualIntro;
