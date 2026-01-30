import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, FolderOpen, FileText, CheckCircle2, FileCheck, Send } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

const timelineSteps = [
  {
    number: "1",
    icon: ClipboardCheck,
    title: "Check if you qualify (Free)",
    duration: "1-3 days",
    description:
      "Take a short assessment and a free consult. We'll tell you which O-1 criteria you likely meet and what evidence you'll need.",
  },
  {
    number: "2",
    icon: FileCheck,
    title: "Build your case plan",
    duration: "1-2 days",
    description:
      "Get matched with a US licensed immigration lawyer. Together we'll choose the best O-1 approach for you and map the evidence and recommendation letters needed.",
  },
  {
    number: "3",
    icon: FolderOpen,
    title: "Gather your evidence",
    duration: "3-6 weeks",
    description:
      "You upload documents that prove your achievements. We provide a checklist, templates, and guidance to help fill gaps.",
  },
  {
    number: "4",
    icon: FileText,
    title: "Draft and review the petition",
    duration: "4-6 weeks",
    description:
      "Your lawyer drafts the full petition package, including recommendation letters, supporting statements, and the final petition narrative. You review for accuracy and clarity.",
  },
  {
    number: "5",
    icon: Send,
    title: "File with USCIS",
    duration: "1-2 days",
    description:
      "You e-sign, fees are paid, and your lawyer submits the petition to USCIS using standard or premium processing.",
  },
  {
    number: "6",
    icon: CheckCircle2,
    title: "USCIS decision and next steps",
    duration: "15 business days (premium) or 2+ months (standard)",
    description:
      "If USCIS issues an RFE, we respond. If approved, we guide you on next steps based on where you are.",
    note: "If you are outside the US: After approval, you will attend a US consular interview for visa stamping. We will prep you so you know what to expect and how to answer common questions.",
  },
];

const ProcessTimeline = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Your O-1 Visa Journey:{" "}
            <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We know speed matters, especially when you have a job offer, project deadline, or looming immigration
            constraint. Here's your complete roadmap from day one.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.05 + index * 0.08 }}
                className="relative"
              >
                {/* Desktop layout */}
                <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-start mb-12">
                  {/* Left side */}
                  <div className={`${isEven ? 'text-right pr-8' : 'opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <div className="bg-card border border-border rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-end gap-4 mb-3">
                          <div className="text-right">
                            <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                            <p className="text-sm text-primary font-medium">{step.duration}</p>
                          </div>
                          <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed text-right">{step.description}</p>
                        {step.note && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-muted-foreground text-sm leading-relaxed text-right italic">{step.note}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-base z-10">
                      {step.number}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-px h-24 bg-border mt-2" />
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`${!isEven ? 'text-left pl-8' : 'opacity-0 pointer-events-none'}`}>
                    {!isEven && (
                      <div className="bg-card border border-border rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="font-serif text-lg font-semibold text-foreground">{step.title}</h3>
                            <p className="text-sm text-primary font-medium">{step.duration}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        {step.note && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-muted-foreground text-sm leading-relaxed italic">{step.note}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden flex gap-4 mb-6">
                  {/* Timeline node and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm flex-shrink-0 z-10">
                      {step.number}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-4">
                    <div className="bg-card border border-border rounded-sm p-5 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-serif text-base font-semibold text-foreground">{step.title}</h3>
                          <p className="text-xs text-primary font-medium">{step.duration}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                      {step.note && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-muted-foreground text-sm leading-relaxed italic">{step.note}</p>
                        </div>
                      )}
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm text-muted-foreground text-center mt-12 max-w-3xl mx-auto"
        >
          *Disclaimer: Timelines may vary based on individual case complexity and USCIS processing times.
        </motion.p>
      </div>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default ProcessTimeline;
