import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an O-1 visa?",
    answer:
      "The O-1 visa is a non-immigrant visa for individuals with extraordinary ability in sciences, arts, education, business, athletics, or the entertainment industry. It allows you to work in the U.S. for up to 3 years, with unlimited extensions available.",
  },
  {
    question: "Who qualifies for an O-1 visa?",
    answer:
      "You qualify if you can demonstrate extraordinary ability through sustained national or international acclaim. This includes awards, publications, high salary, membership in exclusive organizations, or recognition from peers and experts in your field.",
  },
  {
    question: "How long does the O-1 visa process take?",
    answer:
      "Standard processing takes 2-3 months. With premium processing (an additional fee), USCIS will respond within 15 business days. Our team works efficiently to prepare your application while ensuring quality and thoroughness.",
  },
  {
    question: "What is the success rate for O-1 visas?",
    answer:
      "Teleport maintains a 96% approval rate for O-1 visa applications. This success comes from thorough case preparation, strategic evidence development, and review by ex-USCIS officers before filing.",
  },
  {
    question: "Can I bring my family on an O-1 visa?",
    answer:
      "Yes, your spouse and unmarried children under 21 can accompany you on O-3 dependent visas. However, O-3 visa holders cannot work in the U.S., though they can study.",
  },
  {
    question: "What's the difference between O-1A and O-1B?",
    answer:
      "O-1A is for individuals with extraordinary ability in sciences, education, business, or athletics. O-1B is for those in the arts or extraordinary achievement in the motion picture and television industry. The evidence requirements differ slightly between the two categories.",
  },
  {
    question: "Can an O-1 visa lead to a green card?",
    answer:
      "Yes, many O-1 visa holders transition to permanent residence through employment-based green cards (EB-1A or EB-2 NIW). The evidence used for your O-1 can often support your green card application.",
  },
  {
    question: "Do I need a job offer for an O-1 visa?",
    answer:
      "You need a U.S. employer, agent, or sponsor to petition for you, but it doesn't have to be a traditional job offer. Self-employed individuals can work with an agent to sponsor their O-1 visa.",
  },
];

const FAQ = () => {
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
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the O-1 visa process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
