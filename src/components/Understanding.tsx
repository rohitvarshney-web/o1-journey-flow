import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Clock, Users, Building2, Zap, Globe, Award, UserCheck } from "lucide-react";
import { Button } from "./ui/button";

const Understanding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "No lottery or annual cap: Apply anytime. Approvals are based on your achievements, not random chance.",
    "Career flexibility: Work with multiple employers or projects through an agent petitioner.",
    "Faster decisions: If you choose premium processing, you can get a decision from USCIS in 15 business days or less.",
    "Family friendly: Spouses and children under 21 can join you in the U.S. on the O-3 visa.",
    "Bring support staff: Creatives and athletes can bring their teams with them on O-2 visas, so they can work together in the U.S.",
    "Renewable long-term: Stay in the U.S. as long as you continue qualifying work.",
    "Prestige & recognition: Formal U.S. government acknowledgment of your extraordinary ability.",
  ];

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
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Understanding the O-1 Visa
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Is the O-1 Visa and{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Who Qualifies?
            </span>
          </h2>
        </motion.div>

        {/* Who Is the O-1 Visa For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Who Is the O-1 Visa For?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            The O-1 visa is for individuals whose achievements set them apart, whether in technology, science, the arts, business, or sports. If you've earned recognition, led impactful work, or gained distinction in your field, this visa can turn those accomplishments into the right to live and work in the U.S.
          </p>
        </motion.div>

        {/* Benefits of the O-1 Visa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Benefits of the O-1 Visa
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            The O-1 isn't just a work visa; it's one of the most powerful ways for high-achieving professionals to build a future in the United States. Here's why people choose it:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                className="flex gap-4 items-start"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* O-1 Visa Approval Odds */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20 bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            O-1 Visa Approval Odds
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Your chances of approval depend less on luck and more on how your story is told. According to USCIS, about <span className="font-semibold text-foreground">94.6%*</span> of O-1 petitions are approved. Manifest's lawyers' approval rates for O-1 visa exceeds <span className="font-semibold text-foreground">96%**</span>, thanks to the way we structure cases, highlight achievements, and anticipate USCIS concerns.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The difference isn't just paperwork. It's strategy: knowing which evidence to emphasize, how to frame your accomplishments, and how to present your case in a way that matches what USCIS is really looking for.
          </p>
          <p className="text-sm text-muted-foreground italic">
            *Based on data from USCIS from FY 2024.
          </p>
          <p className="text-sm text-muted-foreground italic">
            **Historical approval rates across all visa types and include cases handled by Manifest attorneys and lawyers in connection with their work at Manifest and their current and prior law firms. Past results do not guarantee future outcomes.
          </p>
        </motion.div>

        {/* O-1 Visa Processing Time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            O-1 Visa Processing Time
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            After we've filed your O-1 visa petition, USCIS will review your case. It can take as little as 15 days or up to 2+ months to get a decision:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold">Premium Processing</h4>
              </div>
              <p className="text-muted-foreground">
                Guarantees a decision in <span className="font-semibold text-foreground">15 business days</span> (for a $2,805 fee paid to USCIS).
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-semibold">Standard Processing</h4>
              </div>
              <p className="text-muted-foreground">
                Can take <span className="font-semibold text-foreground">4 to 6 months</span>, depending on the service center's workload.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Who Can Sponsor an O-1 Visa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Who Can Sponsor an O-1 Visa?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
            An O-1 visa always requires a U.S. sponsor—but that sponsor doesn't have to be a traditional employer. You can be sponsored by:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">U.S. Company or Startup</h4>
                <p className="text-muted-foreground">
                  A U.S. company or your own startup, hiring you for a specific role
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <UserCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-lg mb-2">U.S.-Based Agent</h4>
                <p className="text-muted-foreground">
                  A U.S.-based agent representing multiple projects or employers
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mt-8">
            This flexibility is one of the O-1's biggest advantages, making it possible to structure your work in a way that truly serves your career goals.
          </p>
        </motion.div>

        {/* What It Takes To Qualify */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What It Takes To Qualify for the O-1
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
            To qualify for an O-1 visa, you must meet at least 3 of the criteria set by USCIS. The specific criteria vary slightly depending on whether you're applying for an O-1A (science, business, education, athletics) or an O-1B (arts, film, television) visa.
          </p>

          {/* O-1A Criteria */}
          <div className="mb-16">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                O-1A Visa Criteria (Science, Business, Education, Athletics)
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                To qualify for an O-1A, you must meet at least 3 of the following 8 criteria set by USCIS:
              </p>
            </div>
            <div className="grid gap-6">
              {o1aCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  className="flex gap-4 items-start bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {criterion}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* O-1B Criteria */}
          <div>
            <div className="bg-accent/50 rounded-2xl p-8 md:p-12 mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                O-1B Visa Criteria (Arts, Film, Television)
              </h4>
              <p className="text-lg text-muted-foreground mb-6">
                If you've received a major national or international award, such as an Oscar, Emmy, Grammy, or similar, it may stand alone as proof of extraordinary ability. In this case, you wouldn't need to meet any additional criteria.
              </p>
              <p className="text-lg text-muted-foreground">
                If not, for the O-1B, you must meet at least 3 of the following 6 criteria:
              </p>
            </div>
            <div className="grid gap-6">
              {o1bCriteria.map((criterion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                  className="flex gap-4 items-start bg-card border border-border rounded-xl p-6"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent-foreground font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {criterion}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 text-center"
          >
            <h4 className="text-xl md:text-2xl font-bold mb-4">
              How Manifest's O-1 Visa Lawyers Help
            </h4>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most accomplished professionals already meet 3 or more criteria, often without realizing it. Manifest attorneys map your achievements directly to USCIS's criteria and frame them in a way that demonstrates extraordinary ability, even if your career doesn't "look extraordinary" on paper.
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
