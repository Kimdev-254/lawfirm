"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do consultations cost?",
    answer:
      "We offer a free initial consultation. For ongoing legal services, pricing depends on the complexity of your case.",
  },
  {
    question: "What areas of law do you specialize in?",
    answer:
      "Our expertise includes Corporate Law, Family Law, Real Estate, Criminal Defense, and Civil Litigation.",
  },
  {
    question: "How long does it take to resolve a legal case?",
    answer:
      "The timeline depends on the nature of the case. Some issues can be resolved within weeks, while others take months or years.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can call us directly, fill out our contact form, or visit our office for in-person assistance.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-200 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
