"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function Home() {
  const [text] = useTypewriter({
    words: ["Our practice is your solution"],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
  })

  return (
    <div className="min-h-screen bg-law-firm">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex justify-between">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/90 to-black/60 z-10" />
            <Image
              src="/herobg.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative grid lg:grid-cols-2 gap-4 items-start max-w-screen-2xl z-20">
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  Kenneth Waweru & Company Advocates
                </motion.h1>
                <motion.p
                  className="text-2xl font-semibold text-orange-600 text-law-firm-orange font-cormorant h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {text}
                  <Cursor cursorStyle="_" />
                </motion.p>
                <motion.p
                  className="text-xl text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  The Law Firm represents clients in{" "}
                  <span className="text-white font-semibold">
                    all types of cases across the East African region.
                  </span>{" "}
                  We've won on behalf of consumers, business owners, companies,
                  the injured, and more.
                </motion.p>
              </div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                {[
                  "Highly Personalized Service",
                  "Proven Track Record of Success",
                  "Top Rated Trial Attorney",
                ].map((text, index) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3 text-slate-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.1 }}
              >
                <Image
                  src="/images/google-reviews.png"
                  alt="Google Reviews"
                  width={200}
                  height={80}
                  className="rounded-lg"
                />
              </motion.div>
              <ContactForm />
            </div>
            <div className="relative space-y-10 lg:pl-8">
              <motion.div
                className="relative h-[700px] w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/new1.png"
                  alt="Lead Attorney"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h2 className="text-4xl font-playfair font-bold">
                  Kenneth Waweru & Company Advocates
                </h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-600 text-law-firm-orange">
                    YOUR ATTORNEY
                  </h3>
                  <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                    <p>
                      At Kenneth Waweru & Company Advocates, we provide expert
                      legal services across corporate law, conveyancing,
                      litigation, intellectual property, family law, personal
                      injury, debt collection, and dispute resolution. Committed
                      to excellence, we deliver high-quality representation
                      tailored to your needs.
                    </p>
                    <p>
                      Kenneth Waweru & Company Advocates is renowned for
                      client-focused service, strategic counsel, and expertise
                      in Kenyan and international law. Serving corporations,
                      small businesses, and individuals, we provide tailored,
                      innovative legal solutions.
                    </p>
                    <p>
                      The firm prides itself on maintaining the highest
                      professional standards, integrity, and a track record of
                      successful legal outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
