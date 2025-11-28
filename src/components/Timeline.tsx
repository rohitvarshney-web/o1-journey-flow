import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, FolderOpen, FileText, CheckCircle2 } from "lucide-react";

const timelineSteps = [
  {
    icon: ClipboardCheck,
    title: "Teleport Quiz & Attorney Consult",
    duration: "(1-3 days)",
    description: [
      "Start with our free quiz. We'll assess your eligibility and if you're eligible book your free consultation.",
      "During the consult, you can share your story, get personalized guidance on your case, and make sure it's the right fit before you commit.",
    ],
  },
  {
    icon: FolderOpen,
    title: "Evidence Collection",
    duration: "(3-6 weeks)",
    description: [
      "You'll get a personalized document checklist and access to our secure client portal. With guidance from your attorney and an evidence coach* if needed, you'll upload materials that showcase your achievements and impact. See your case progress live, what your lawyer is working on and message your lawyer directly through the portal.",
    ],
  },
  {
    icon: FileText,
    title: "Petition Drafting, Review, and Filing",
    duration: "(4-6 weeks, may vary based on your case)",
    description: [
      "Your O-1 visa attorney drafts the full petition, including letters, a personal statement, and a cover memo. Depending on the plan you choose, your case is then reviewed by a second attorney or former USCIS officer to ensure it's strategically sound.",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Petition Decision",
    duration: "(15 business days with premium processing or 2 months+ standard)",
    description: [
      "After final review, we file your case with USCIS. Processing times are dependent on USCIS, but premium processing can guarantee a decision within 15 business days.",
    ],
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">The O-1 Visa Timeline</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            A Clear, Strategic Process,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">From Day One</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We know speed matters, especially when you have a job offer, project deadline, or looming immigration
            constraint. That's why we commit to firm turnaround times and a streamlined, tech-enabled application
            process from day one.
          </p>
          <Button size="lg" className="group">
            Request a Consultation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Side */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/3 -translate-x-1/4 group-hover:scale-110 transition-transform duration-500" />

                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-12 h-12 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative">
                      {/* Timeline connector */}
                      {index < timelineSteps.length - 1 && (
                        <div
                          className="hidden lg:block absolute left-0 top-full h-12 w-px bg-gradient-to-b from-primary/40 to-primary/0"
                          style={{ left: isEven ? "auto" : "0", right: isEven ? "0" : "auto" }}
                        />
                      )}

                      <div className="flex items-start gap-4">
                        {/* Mobile icon */}
                        <div className="lg:hidden flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                          <p className="text-sm text-primary font-semibold mb-4">{step.duration}</p>
                          <div className="space-y-3">
                            {step.description.map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line for desktop */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/40 to-primary/20 -bottom-12" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground text-center mt-12 max-w-4xl mx-auto"
        >
          *Disclaimer: Working with an evidence development coach does not guarantee approval of your case
        </motion.p>
      </div>
    </section>
  );
};

export default Timeline;
