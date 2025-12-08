import { useState } from "react";
import { Calendar, Clock, FileText, Globe, ArrowRight, CheckCircle } from "lucide-react";
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
    { icon: Clock, text: "Please be on time as the meeting link expires after the scheduled slot", important: false },
    { icon: Globe, text: "Ensure stable internet connection for video call", important: false },
    { icon: FileText, text: "Have your resume/CV ready to share if needed", important: false },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-0">
        <VisuallyHidden>
          <DialogTitle>Schedule Your Free Consultation</DialogTitle>
          <DialogDescription>Book a call with our O-1 visa experts</DialogDescription>
        </VisuallyHidden>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/20 p-3">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Schedule Your Free Consultation</h2>
              <p className="mt-1 text-white/80">Speak with our O-1 visa experts</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border bg-muted/30">
          <div className="flex">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 items-center justify-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary bg-background text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[500px] overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {activeTab === "prepare" && (
              <motion.div
                key="prepare"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <FileText size={32} className="text-accent" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">Prepare for Your Call</h3>
                  <p className="text-muted-foreground">Make the most of your consultation by having these ready</p>
                </div>

                <div className="rounded-xl bg-muted/50 p-6 space-y-4">
                  <h4 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <CheckCircle size={20} className="text-accent" />
                    Recommended to have ready:
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
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

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => setIsPrepared(true)}
                    className={`flex-1 ${isPrepared ? "bg-accent hover:bg-accent/90" : ""}`}
                  >
                    <CheckCircle size={20} className="mr-2" />
                    {isPrepared ? "Ready to Schedule!" : "I'm Ready"}
                  </Button>
                </div>

                {isPrepared && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-accent/30 bg-accent/10 p-6"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle size={24} className="text-accent" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">Great! You're all set</h4>
                        <p className="text-muted-foreground">Proceed to schedule your free consultation call.</p>
                      </div>
                      <Button onClick={() => setActiveTab("schedule")} size="sm">
                        Next <ArrowRight size={16} className="ml-2" />
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
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Calendar size={32} className="text-accent" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">Pick a Time That Works</h3>
                  <p className="text-muted-foreground">
                    Select a convenient time slot for your free consultation with our immigration experts.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-4">
                  <div className="overflow-hidden rounded-lg bg-background shadow-sm">
                    <iframe
                      src="https://cal.com/stampmyvisa/live-document-check"
                      width="100%"
                      height="450"
                      className="w-full border-0"
                      title="Schedule Consultation"
                    />
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Having trouble booking?{" "}
                  <a
                    href="https://cal.com/stampmyvisa/live-document-check"
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
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <Clock size={32} className="text-accent" />
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-foreground">Consultation Guidelines</h3>
                  <p className="text-muted-foreground">Important tips to ensure a smooth consultation</p>
                </div>

                <div className="grid gap-3">
                  {instructions.map((instruction, index) => {
                    const Icon = instruction.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-xl border-2 border-border bg-muted/30 p-4 transition-all duration-200 hover:shadow-md hover:bg-muted/50"
                      >
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <p className="font-medium text-foreground">{instruction.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/20 p-2">
                      <CheckCircle size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-foreground">What to expect during the call</h4>
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

                <Button onClick={handleClose} className="w-full">
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
