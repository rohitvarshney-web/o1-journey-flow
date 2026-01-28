import { useState } from "react";
import { Calendar, Clock, FileText, Globe, ArrowRight, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Tab = "prepare" | "schedule" | "instructions";

interface ScheduleCallModalProps {
  open: boolean;
  onClose: () => void;
}

const ScheduleCallModal = ({ open, onClose }: ScheduleCallModalProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("prepare");
  const [isPrepared, setIsPrepared] = useState(false);

  const handleClose = () => {
    onClose();
    setIsPrepared(false);
    setActiveTab("prepare");
  };

  const tabs = [
    { id: "prepare" as Tab, label: "Prepare", icon: FileText },
    { id: "schedule" as Tab, label: "Schedule Call", icon: Calendar },
    { id: "instructions" as Tab, label: "Instructions", icon: Clock },
  ];

  const instructions = [
    { icon: Clock, text: "Please be on time as the meeting link expires after the scheduled slot" },
    { icon: Globe, text: "Ensure stable internet connection for video call" },
    { icon: FileText, text: "Have your resume/CV ready to share if needed" },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border border-border rounded-sm">
        <VisuallyHidden>
          <DialogTitle>Schedule Your Free Consultation</DialogTitle>
          <DialogDescription>Book a call with our O-1 visa experts</DialogDescription>
        </VisuallyHidden>
        
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground">
          <div className="flex items-center gap-4">
            <div className="rounded-sm bg-primary-foreground/20 p-3">
              <Calendar size={22} />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold">Schedule Your Free Consultation</h2>
              <p className="mt-1 text-primary-foreground/80 text-sm">Speak with our O-1 visa experts</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border bg-muted">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary bg-background text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[450px] overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {activeTab === "prepare" && (
              <motion.div
                key="prepare"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10">
                    <FileText size={28} className="text-accent" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Prepare for Your Call</h3>
                  <p className="text-muted-foreground text-sm">Make the most of your consultation by having these ready</p>
                </div>

                <div className="rounded-sm bg-muted p-5 space-y-4">
                  <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Check size={16} className="text-accent" />
                    Recommended to have ready:
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Your resume or LinkedIn profile
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      List of notable achievements, awards, or publications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Current visa status (if applicable)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      Any questions about the O-1 visa process
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={() => setIsPrepared(true)}
                  className={`w-full rounded-sm ${isPrepared ? "bg-accent hover:bg-accent/90" : ""}`}
                >
                  <Check size={16} className="mr-2" />
                  {isPrepared ? "Ready to Schedule!" : "I'm Ready"}
                </Button>

                {isPrepared && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-sm border border-accent/30 bg-accent/10 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <Check size={20} className="text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-foreground">Great! You're all set</h4>
                        <p className="text-muted-foreground text-sm">Proceed to schedule your free consultation call.</p>
                      </div>
                      <Button onClick={() => setActiveTab("schedule")} size="sm" className="rounded-sm">
                        Next <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {activeTab === "schedule" && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
              >
                <div className="text-center mb-5">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10">
                    <Calendar size={28} className="text-accent" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Pick a Time That Works</h3>
                  <p className="text-muted-foreground text-sm">
                    Select a convenient time slot for your free consultation with our immigration experts.
                  </p>
                </div>

                <div className="rounded-sm border border-border bg-background">
                  <iframe
                    src="https://cal.com/ashish-teleport/initial-call"
                    width="100%"
                    height="420"
                    className="w-full border-0"
                    title="Schedule Consultation"
                  />
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  Having trouble booking?{" "}
                  <a
                    href="https://cal.com/ashish-teleport/initial-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    Open in new tab
                  </a>
                </p>
              </motion.div>
            )}

            {activeTab === "instructions" && (
              <motion.div
                key="instructions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5"
              >
                <div className="text-center mb-5">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10">
                    <Clock size={28} className="text-accent" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">Consultation Guidelines</h3>
                  <p className="text-muted-foreground text-sm">Important tips to ensure a smooth consultation</p>
                </div>

                <div className="space-y-3">
                  {instructions.map((instruction, index) => {
                    const Icon = instruction.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-sm border border-border bg-muted p-4"
                      >
                        <div className="rounded-sm bg-primary/10 p-2">
                          <Icon size={18} className="text-primary" />
                        </div>
                        <p className="text-sm text-foreground">{instruction.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-sm border border-primary/20 bg-primary/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-sm bg-primary/10 p-2">
                      <Check size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-sm text-foreground">What to expect during the call</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Review of your qualifications for O-1 visa</li>
                        <li>• Discussion of your career achievements</li>
                        <li>• Assessment of evidence strength</li>
                        <li>• Personalized strategy recommendations</li>
                        <li>• Q&A with our immigration expert</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button onClick={handleClose} className="w-full rounded-sm">
                  Got It
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleCallModal;
