"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, PhoneCall, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col space-y-4 items-end"
          >
            <motion.div variants={itemVariants}>
              <FloatingOption
                icon={<MessageCircle size={20} className="text-white" />}
                text="Chatbot"
                bgColor="bg-blue-600 hover:bg-orange-600"
                onClick={() => {}}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FloatingOption
                icon={<PhoneCall size={20} className="text-white" />}
                text="WhatsApp"
                bgColor="bg-green-500 hover:bg-gorange-600"
                onClick={() => window.open('https://wa.me/254714521136', '_blank')}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FloatingOption
                icon={<Mail size={20} className="text-white" />}
                text="Email"
                bgColor="bg-red-500 hover:bgorange-600"
                onClick={() => window.location.href = 'mailto:wawerulawadvocates@gmail.com'}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-gray-900 hover:bg-orange-800 text-orange-600 shadow-xl transition-all duration-300 ease-in-out flex items-center justify-center transform hover:shadoworange"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronUp size={28} />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}

interface FloatingOptionProps {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  onClick: () => void;
}

function FloatingOption({ icon, text, bgColor, onClick }: FloatingOptionProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center space-x-2 cursor-pointer"
    >
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${bgColor} shadow-lg transition-all duration-300`}>
        {icon}
      </div>
      <span className="text-sm text-gray-300 font-medium bg-gray-800 px-3 py-1 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300">
        {text}
      </span>
    </motion.div>
  );
}
