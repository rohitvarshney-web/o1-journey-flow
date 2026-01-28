import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const Understanding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const o1aCriteria = [
    "Nationally or internationally recognized prizes or awards for excellence: Honors that show you are at the top of your field.",
    "Membership in associations requiring outstanding achievements: Groups that only admit members recognized for excellence.",
    "Published material about you in professional or major media: Articles, press, or features highlighting your work.",
    "Participation as a judge of the work of others: Serving as a reviewer, panelist, or evaluator in your field.",
    "Original contributions of major significance: Research, patents, or innovations that have advanced your industry.",
    "Authorship of scholarly articles: Publications in professional journals, books, or well-regarded media.",
    "Employment in a lead or critical role for distinguished organizations: Leadership or key responsibilities at respected companies or institutions.",
    "High salary or other remuneration: Compensation significantly higher than peers in your field.",
  ];

  const o1bCriteria = [
    "Lead, starring, or critical roles in distinguished productions or events: Think high-profile credits in film, television, or the arts that received recognition, critical acclaim, or major distribution.",
    "Lead, starring, or critical roles in distinguished organizations: For example, recognized theaters, performing companies, film studios, or cultural institutions with a proven reputation.",
    "Published material in major newspapers, trade journals, or media: Coverage, profiles, or reviews about you or your work in well-known outlets.",
    "Record of major commercial or critically acclaimed success: Evidence such as box office receipts, television ratings, streaming figures, or press documenting critical national or international acclaim.",
    "Significant recognition from organizations and industry figures: Letters, testimonials, or documented acclaim from authorities in your field.",
    "High salary or substantial remuneration for services: Contracts, pay stubs, or other evidence showing compensation well above others in the field.",
    "Other comparable evidence can also apply: I.e., alternative proof that demonstrates extraordinary achievement in the arts, film, or television.",
  ];

  return (
    <section id="understanding" ref={ref} className="py-20 md:py-28 section-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-medium text-primary mb-3 tracking-wide uppercase">Understanding the O-1 Visa</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
            What It Takes To{" "}
            <span className="text-primary">Qualify for the O-1</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You must meet at least <span className="font-semibold text-foreground">3 criteria</span> set by USCIS. Requirements vary between O-1A and O-1B visas.
          </p>
        </motion.div>

        {/* O-1A Criteria */}
        <motion.div
          id="o1a-criteria"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-card border border-border rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-1 text-foreground">
                  O-1A Visa Criteria
                </h3>
                <p className="text-sm text-muted-foreground">
                  Science, Business, Education, Athletics
                </p>
              </div>
            </div>
            <p className="text-base font-medium text-foreground">
              Meet at least <span className="text-primary font-semibold">3 of these 8 criteria</span>:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {o1aCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.15 + index * 0.04 }}
                className="bg-card border border-border rounded-sm p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{criterion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* O-1B Criteria */}
        <motion.div
          id="o1b-criteria"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card border border-border rounded-sm p-6 sm:p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-1 text-foreground">
                  O-1B Visa Criteria
                </h3>
                <p className="text-sm text-muted-foreground">
                  Arts, Film, Television
                </p>
              </div>
            </div>
            <div className="bg-muted border border-border rounded-sm p-4 mb-4">
              <p className="text-sm font-medium text-foreground">
                <span className="text-primary font-semibold">Major award holders:</span> If you've received an Oscar, Emmy, Grammy, or similar major national/international award, it may stand alone as proof - no other criteria needed.
              </p>
            </div>
            <p className="text-base font-medium text-foreground">
              Otherwise, meet at least <span className="text-primary font-semibold">3 of these 6 criteria</span>:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {o1bCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.25 + index * 0.04 }}
                className="bg-card border border-border rounded-sm p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-primary font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{criterion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Understanding;
