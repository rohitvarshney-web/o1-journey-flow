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
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="relative"
            >
              {/* Close button */}
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Close consultation popup"
                className="absolute -top-3 -right-1 sm:-top-2 sm:-right-2 z-10 h-7 w-7 sm:h-6 sm:w-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
              >
                <X size={16} className="sm:w-3.5 sm:h-3.5" />
              </button>

              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer"
              >
                <div className="rounded-xl bg-gradient-to-r from-primary via-primary/80 to-accent p-[2px] shadow-2xl transition-all duration-300 hover:shadow-3xl">
                  <div className="rounded-[10px] bg-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
                      <div className="relative flex-shrink-0">
                        <div className="grid h-10 w-10 sm:h-12 sm:w-12 animate-bounce place-items-center rounded-full bg-gradient-to-r from-primary to-accent shadow-xl">
                          <Calendar size={20} className="sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="absolute -right-1 -top-1 animate-pulse">
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-ping rounded-full bg-accent"></div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="mb-0.5 sm:mb-1 flex items-center gap-2">
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-sm sm:text-base font-bold text-transparent truncate">
                            Free O-1 Visa Consultation
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs font-medium text-muted-foreground">
                          📞 Schedule a call with our experts
                        </p>

                        <div className="mt-0.5 sm:mt-1 flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-muted-foreground line-through">
                            $150
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-accent">
                            Free consultation
                          </span>
                        </div>
                      </div>

                      <div className="transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0">
                        <ArrowRight size={18} className="sm:w-5 sm:h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsExpanded(true)}
              aria-label="Open consultation popup"
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Calendar size={20} className="sm:w-6 sm:h-6 text-white animate-bounce" />
              <div className="absolute -right-1 -top-1 animate-pulse">
                <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 animate-ping rounded-full bg-accent"></div>
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
