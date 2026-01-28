import { useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleCallModal from "./ScheduleCallModal";

const FloatingCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[calc(100vw-2rem)]">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Close consultation popup"
                className="absolute -top-2 -right-2 z-10 h-6 w-6 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors shadow-md"
              >
                <X size={12} />
              </button>

              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer"
              >
                <div className="bg-card border border-border rounded-sm shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative flex-shrink-0">
                      <div className="h-10 w-10 rounded-sm bg-primary flex items-center justify-center">
                        <Calendar size={18} className="text-primary-foreground" />
                      </div>
                      <div className="absolute -right-0.5 -top-0.5">
                        <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="mb-0.5 flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          Free O-1 Visa Consultation
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Schedule a call with our experts
                      </p>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground line-through">
                          $150
                        </span>
                        <span className="text-xs font-semibold text-accent">
                          Free consultation
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight size={16} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              aria-label="Open consultation popup"
              className="h-12 w-12 rounded-sm bg-primary shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <Calendar size={20} className="text-primary-foreground" />
              <div className="absolute -right-0.5 -top-0.5">
                <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <ScheduleCallModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingCTA;
