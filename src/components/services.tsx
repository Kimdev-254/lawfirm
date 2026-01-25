"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  Gavel,
  Shield,
  Briefcase,
  Landmark,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Litigation & ADR",
    description: "We provide expert representation in court and alternative dispute resolution processes.",
    href: "/litigation-adr",
  },
  {
    icon: Shield,
    title: "Family Law",
    description: "Handling divorce, child custody, and other family legal matters with care and expertise.",
    href: "/family-law",
  },
  {
    icon: Gavel,
    title: "Personal Injury",
    description: "We fight for the rights of injury victims, ensuring they receive fair compensation.",
    href: "/personal-injury",
  },
  {
    icon: FileText,
    title: "Technology Law",
    description: "Protecting intellectual property and navigating legal issues in the tech industry.",
    href: "/technology-law",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Providing legal support for businesses, contracts, and corporate compliance.",
    href: "/corporate-law",
  },
  {
    icon: Scale,
    title: "Other Areas",
    description: "We cover various other legal domains, ensuring expert guidance across multiple sectors.",
    href: "/other-areas",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-12">
          Our Legal Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer hover:bg-orange-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-full">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mt-3">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
