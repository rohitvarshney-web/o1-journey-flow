import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

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
    <section ref={ref} className="py-20 md:py-32 bg-background">
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
            What Is the O-1 Visa and{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Who Qualifies?</span>
          </h2>
        </motion.div>

        {/* Who Is the O-1 Visa For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Who Is the O-1 Visa For?</h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            The O-1 visa is for individuals whose achievements set them apart, whether in technology, science, the arts,
            business, or sports. If you've earned recognition, led impactful work, or gained distinction in your field,
            this visa can turn those accomplishments into the right to live and work in the U.S.
          </p>
        </motion.div>

        {/* What It Takes To Qualify */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">What It Takes To Qualify for the O-1</h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            To qualify for an O-1 visa, you must meet at least 3 of the criteria set by USCIS. The specific criteria
            vary slightly depending on whether you're applying for an O-1A (science, business, education, athletics) or
            an O-1B (arts, film, television) visa.
          </p>

          {/* O-1A Criteria */}
          <div className="mb-16">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-10 mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                O-1A Visa Criteria (Science, Business, Education, Athletics)
              </h4>
              <p className="text-lg text-muted-foreground">
                To qualify for an O-1A, you must meet at least 3 of the following 8 criteria set by USCIS:
              </p>
            </div>
            <div className="grid gap-4">
              {o1aCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="flex gap-4 items-start bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* O-1B Criteria */}
          <div>
            <div className="bg-accent/10 rounded-2xl p-8 md:p-10 mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4">O-1B Visa Criteria (Arts, Film, Television)</h4>
              <p className="text-lg text-muted-foreground mb-4">
                If you've received a major national or international award, such as an Oscar, Emmy, Grammy, or similar,
                it may stand alone as proof of extraordinary ability. In this case, you wouldn't need to meet any
                additional criteria.
              </p>
              <p className="text-lg text-muted-foreground">
                If not, for the O-1B, you must meet at least 3 of the following 6 criteria:
              </p>
            </div>
            <div className="grid gap-4">
              {o1bCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                  className="flex gap-4 items-start bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{criterion}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 bg-gradient-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-4">How Teleport's O-1 Visa Lawyers Help</h4>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Most accomplished professionals already meet 3 or more criteria, often without realizing it. Teleport
              attorneys map your achievements directly to USCIS's criteria and frame them in a way that demonstrates
              extraordinary ability, even if your career doesn't "look extraordinary" on paper.
            </p>
            <Button size="lg" className="text-lg px-8">
              Request Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Understanding;
