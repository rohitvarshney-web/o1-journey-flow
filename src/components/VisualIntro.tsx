import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const VisualIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              What is the <span className="bg-gradient-primary bg-clip-text text-transparent">O-1?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              A 3-year visa that gives you the freedom to work and live in the US with unlimited extensions, no academic
              requirements, no annual cap, and no wage requirements—the O-1 is one of the most flexible and advantageous
              US work visas. The O-1 visa is for individuals whose achievements set them apart, whether in technology,
              science, the arts, business, or sports. If you've earned recognition, led impactful work, or gained
              distinction in your field, this visa can turn those accomplishments into the right to live and work in the
              U.S.
            </p>
            {/* Know More button - hidden on mobile (shows below card) and on about page */}
            {!isAboutPage && (
              <Button asChild size="lg" className="hidden lg:inline-flex text-sm sm:text-base bg-primary hover:bg-primary/90">
                <Link to="/about-o1-visa">Know More</Link>
              </Button>
            )}
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-2"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 border border-primary/20">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-20 sm:w-32 h-20 sm:h-32 bg-accent/10 rounded-full blur-3xl" />

              {/* Content card */}
              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    US
                  </div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">O-1 Visa</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Work Authorization</div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>3-year initial period</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Unlimited extensions</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>No annual cap or lottery</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span>Family can join on O-3</span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Approval Rate: 95.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Know More button - shows below card on mobile only, hidden on about page */}
          {!isAboutPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-3 lg:hidden w-full"
            >
              <Button asChild size="lg" className="w-full text-sm sm:text-base bg-primary hover:bg-primary/90">
                <Link to="/about-o1-visa">Know More</Link>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisualIntro;
