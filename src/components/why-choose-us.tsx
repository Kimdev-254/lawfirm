"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, GraduationCap, Clock } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Personalized",
    description:
      "There's no one-size-fits all solution. Every client is individual and we tailor our services for their specific needs.",
  },
  {
    icon: GraduationCap,
    title: "Deep Experience",
    description:
      "We have years of experience under our belts and a proven track record of settlements and verdicts.",
  },
  {
    icon: Clock,
    title: "Available 24/7 for Consultation",
    description:
      "We pride ourselves on being a resource for our clients to turn to whenever they need it.",
  },
];

export function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bento Grid Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 grid-rows-2 gap-4 h-[350px] md:h-[450px] lg:h-[500px]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative row-span-2 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/lawyer.webp"
                alt="Lead Advocate"
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/mm.jpg"
                alt="Our Legal Team"
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/experience.jpg"
                alt="Our Office"
                fill
                className="object-cover transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Why Choose Kenneth Waweru & Company Advocates
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
