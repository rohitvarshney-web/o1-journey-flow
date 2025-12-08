import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import ApplicationForm from "@/components/ApplicationForm";

const pricingPlans = [
  // {
  //   visa: "EB-1A Green Card",
  //   plan: "Silver Plan",
  //   guarantee: "(no money-back)",
  //   price: "$8,475",
  //   featured: false,
  // },
  // {
  //   visa: "EB-1A Green Card",
  //   plan: "Gold Plan",
  //   guarantee: "(60% money-back)",
  //   price: "$10,000",
  //   featured: false,
  // },
  // {
  //   visa: "EB-1A Green Card",
  //   plan: "Platinum Plan",
  //   guarantee: "(100% money-back + RFE cap of $2.5k)",
  //   price: "$12,000",
  //   featured: true,
  // },
  {
    visa: "O-1 Visa",
    plan: "Gold Plan",
    guarantee: "(60% money-back)",
    price: "$7,000",
    featured: false,
  },
  {
    visa: "O-1 Visa",
    plan: "Platinum Plan",
    guarantee: "(100% money-back)",
    price: "$8,750",
    featured: true,
  },
];

const PricingPlans = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Popular immigration services for startups:
          </h2>
        </motion.div>

        {/* EB-1A Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {pricingPlans.slice(0, 2).map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow ${
                plan.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">{plan.visa}</h3>
              <div className="w-12 h-px bg-border mx-auto mb-4" />
              <p className="font-semibold text-foreground mb-1">{plan.plan}</p>
              <p className="text-sm text-muted-foreground mb-4">{plan.guarantee}</p>
              <p className="text-lg text-foreground">
                from <span className="font-bold text-xl">{plan.price}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* O-1 Plans */}
        {/* <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {pricingPlans.slice(3).map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={`bg-background rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow ${
                plan.featured ? "ring-2 ring-primary" : ""
              }`}
            >
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">{plan.visa}</h3>
              <div className="w-12 h-px bg-border mx-auto mb-4" />
              <p className="font-semibold text-foreground mb-1">{plan.plan}</p>
              <p className="text-sm text-muted-foreground mb-4">{plan.guarantee}</p>
              <p className="text-lg text-foreground">
                from <span className="font-bold text-xl">{plan.price}</span>
              </p>
            </motion.div>
          ))}
        </div> */}

        {/* Offer Banner */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-medium">
            $500 off offer on all other legal services!
          </div>

          <div>
            <Button
              onClick={() => setIsFormOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full"
            >
              View all visas
            </Button>
          </div>
        </motion.div> */}
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default PricingPlans;
