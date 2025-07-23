import { motion } from "@motionone/react";
import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface ModalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalOverlay({ isOpen, onClose, children }: ModalOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    // AnimatePresence removed for @motionone/react migration
    isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 modal-backdrop"
          onClick={onClose}
        />

        <button
          onClick={onClose}
          className="fixed top-4 sm:top-6 left-4 sm:left-6 z-50 glass-strong text-white w-12 h-12 rounded-2xl hover:bg-white/20 transition-all duration-300 hover-lift group"
        >
          <X className="w-5 h-5 mx-auto group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="fixed inset-0 z-40 flex items-center justify-center p-6 sm:p-8">
          <motion.div
            initial={{
              scale: 0.85,
              opacity: 0,
              y: 80,
              rotateX: -15,
              filter: "blur(10px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20 gpu-accelerated"
          >
            {children}
          </motion.div>
        </div>
      </>
    )
    // AnimatePresence removed for @motionone/react migration
  );
}
