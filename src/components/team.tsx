"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Abdullah Waweru",
    title: "Founding Attorney",
    image: "/image4.webp", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/kenneth-waweru-advocates-ab868533a/",
    email: "wawerulawadvocates@gmail.com",
  },
];

export function Team() {
  return (
    <section className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-96"
            >
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-orange-600 text-lg">{member.title}</p>
                <div className="mt-4 flex justify-center gap-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500 transition transform hover:scale-110"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-slate-100 hover:text-gray-400 transition transform hover:scale-110"
                  >
                    <Mail className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
