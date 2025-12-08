import { useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleCallModal from "./ScheduleCallModal";

const FloatingCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
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
                className="absolute -top-2 -right-2 z-10 h-6 w-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
              >
                <X size={14} />
              </button>

              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer"
              >
                <div className="rounded-xl bg-gradient-to-r from-primary via-primary/80 to-accent p-[2px] shadow-2xl transition-all duration-300 hover:shadow-3xl">
                  <div className="rounded-[10px] bg-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5">
                    <div className="flex items-center gap-4 p-4">
                      <div className="relative">
                        <div className="grid h-12 w-12 animate-bounce place-items-center rounded-full bg-gradient-to-r from-primary to-accent shadow-xl">
                          <Calendar size={24} className="text-white" />
                        </div>
                        <div className="absolute -right-1 -top-1 animate-pulse">
                          <div className="h-3 w-3 animate-ping rounded-full bg-accent"></div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-base font-bold text-transparent">
                            Free O-1 Visa Consultation
                          </span>
                        </div>
                        <p className="text-xs font-medium text-muted-foreground">
                          📞 Schedule a call with our immigration experts
                        </p>

                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-sm font-semibold text-muted-foreground line-through">
                            $150
                          </span>
                          <span className="text-sm font-bold text-accent">
                            Free consultation
                          </span>
                        </div>
                      </div>

                      <div className="transform transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                        <ArrowRight size={20} className="text-primary" />
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
              className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Calendar size={24} className="text-white animate-bounce" />
              <div className="absolute -right-1 -top-1 animate-pulse">
                <div className="h-3 w-3 animate-ping rounded-full bg-accent"></div>
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
