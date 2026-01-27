import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, FolderOpen, FileText, CheckCircle2, FileCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplicationForm from "./ApplicationForm";

const timelineSteps = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Free Eligibility Check & Consultation",
    duration: "1-3 days",
    description:
      "Start with our free quiz. We'll assess your eligibility and book your free consultation. Share your story, get personalized guidance, and make sure it's the right fit before you commit.",
  },
  {
    number: "2",
    icon: FileCheck,
    title: "Digital Intake & First Payment",
    duration: "1-2 days",
    description:
      "Complete our streamlined online form to provide us with your background and achievements. A small transaction helps us move forward with the process.",
  },
  {
    number: "3",
    icon: FolderOpen,
    title: "Evidence Collection with Dedicated Lawyer",
    duration: "3-6 weeks",
    description:
      "Get matched with an experienced O-1 attorney. You'll receive a personalized document checklist and access to our secure client portal. Upload materials showcasing your achievements with guidance from your attorney.",
  },
  {
    number: "4",
    icon: FileText,
    title: "Petition Drafting & Review",
    duration: "4-6 weeks",
    description:
      "Your O-1 visa attorney drafts the full petition, including letters, a personal statement, and a cover memo. Your case is reviewed to ensure it's strategically sound.",
  },
  {
    number: "5",
    icon: Send,
    title: "Final Payment & Submission",
    duration: "1-2 days",
    description:
      "Review the final petition, sign the documents, pay the final amount, and we'll file with USCIS on your behalf.",
  },
  {
    number: "6",
    icon: CheckCircle2,
    title: "Petition Decision",
    duration: "15 days (premium) or 2+ months",
    description:
      "After filing, processing times depend on USCIS. Premium processing guarantees a decision within 15 business days.",
  },
];

const ProcessTimeline = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your O-1 Visa Journey:{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">A Clear Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We know speed matters, especially when you have a job offer, project deadline, or looming immigration
            constraint. Here's your complete roadmap from day one.
          </p>
        </motion.div>

        {/* Visual Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 -translate-x-1/2 rounded-full" />

          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative mb-8 lg:mb-12"
              >
                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  {/* Left side */}
                  <div className={`${isEven ? 'pr-12 text-right' : 'pr-12 text-right opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-sm text-primary font-semibold">{step.duration}</p>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Right side */}
                  <div className={`${!isEven ? 'pl-12 text-left' : 'pl-12 text-left opacity-0 pointer-events-none'}`}>
                    {!isEven && (
                      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-sm text-primary font-semibold">{step.duration}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden flex gap-4">
                  {/* Timeline node and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                      {step.number}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-primary/20 mt-2" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card border border-border rounded-xl p-4 shadow-md">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold">{step.title}</h3>
                          <p className="text-xs text-primary font-semibold">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted-foreground text-center mt-8 max-w-4xl mx-auto"
        >
          *Disclaimer: Timelines may vary based on individual case complexity and USCIS processing times.
        </motion.p>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ProcessTimeline;
