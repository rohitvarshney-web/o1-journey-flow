import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

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
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">Understanding the O-1 Visa</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What It Takes To{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Qualify for the O-1</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You must meet at least <span className="font-bold text-primary">3 criteria</span> set by USCIS. Requirements vary between O-1A and O-1B visas.
          </p>
        </motion.div>

        {/* O-1A Criteria */}
        <motion.div
          id="o1a-criteria"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12 mb-10 border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  O-1A Visa Criteria
                </h3>
                <p className="text-base text-muted-foreground">
                  Science, Business, Education, Athletics
                </p>
              </div>
            </div>
            <p className="text-lg mb-2 font-medium">
              Meet at least <span className="text-primary font-bold">3 of these 8 criteria</span>:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {o1aCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                className="group relative bg-card border-2 border-primary/20 rounded-2xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <span className="text-primary group-hover:text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground leading-relaxed font-medium pt-1">{criterion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* O-1B Criteria */}
        <motion.div
          id="o1b-criteria"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12 mb-10 border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  O-1B Visa Criteria
                </h3>
                <p className="text-base text-muted-foreground">
                  Arts, Film, Television
                </p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4">
              <p className="text-base font-medium">
                <span className="text-primary font-bold">Major award holders:</span> If you've received an Oscar, Emmy, Grammy, or similar major national/international award, it may stand alone as proof—no other criteria needed.
              </p>
            </div>
            <p className="text-lg font-medium">
              Otherwise, meet at least <span className="text-primary font-bold">3 of these 6 criteria</span>:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {o1bCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                className="group relative bg-card border-2 border-primary/20 rounded-2xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <span className="text-primary group-hover:text-primary-foreground font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground leading-relaxed font-medium pt-1">{criterion}</p>
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
