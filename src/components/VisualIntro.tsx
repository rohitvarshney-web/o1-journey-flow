import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const VisualIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              What is the <span className="bg-gradient-primary bg-clip-text text-transparent">O-1?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A 3-year visa that gives you the freedom to work and live in the US with unlimited extensions, no academic
              requirements, no annual cap, and no wage requirements—the O-1 is one of the most flexible and advantageous
              US work visas. The O-1 visa is for individuals whose achievements set them apart, whether in technology,
              science, the arts, business, or sports. If you've earned recognition, led impactful work, or gained
              distinction in your field, this visa can turn those accomplishments into the right to live and work in the
              U.S.
            </p>
            <Button size="lg" className="text-base bg-primary hover:bg-primary/90">
              Schedule a free consultation
            </Button>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

              {/* Content card */}
              <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    US
                  </div>
                  <div>
                    <div className="font-semibold">O-1A Visa</div>
                    <div className="text-sm text-muted-foreground">Work Authorization</div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>3-year initial period</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Unlimited extensions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>No annual cap or lottery</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Family can join on O-3</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CheckCircle className="w-5 h-5" />
                    <span>Approval Rate: 95.6%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualIntro;
