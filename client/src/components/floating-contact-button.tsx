import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "wouter";

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after 2 seconds
  useEffect(() => {
    const showButtonTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(showButtonTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
          {/* Pulse rings in background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-400/50"
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.5, 0.2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-400/30"
              animate={{
                scale: [1, 1.3, 1.8],
                opacity: [0.3, 0.1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
              }}
            />
          </div>
          
          {/* Main clickable button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative z-10"
          >
            <Link 
              href="/contact" 
              className="block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
            >
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <span className="text-xs font-bold text-gray-900 whitespace-nowrap bg-white px-3 py-1 rounded shadow-md">
                  CONTACT US
                </span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}