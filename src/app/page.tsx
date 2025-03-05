"use client"

import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Newspaper, Star } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { WhyChooseUs } from "@/components/why-choose-us"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
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
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/100 via-gray-950/90 to-gray-950/30 z-10" />
            <Image
              src="/herobg.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative grid lg:grid-cols-2 gap-2 items-start max-w-screen-2xl z-20">
            <div className="space-y-10">
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Kenneth Waweru & Company Advocates LTD
                </motion.h1>
                <motion.p
                  className="text-2xl font-semibold text-orange-500 font-cormorant h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <i>{text}</i>
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
                {/* Google Reviews */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-white font-medium">Google Reviews</span>
                </div>

                {/* Articles Link */}
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale slightly on hover
                  whileTap={{ scale: 0.95 }} // Reduce size on click
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:bg-white/20 transition-colors duration-300"
                >
                  <Link
                    href="/articles"
                    className="flex items-center gap-2 text-white"
                  >
                    <Newspaper className="w-5 h-5 text-orange-600" />
                    <span className="font-medium font-serif">
                      Read Our Articles
                    </span>
                    <span className="font-medium text-white">&gt;</span>
                  </Link>
                </motion.div>
              </motion.div>
              <div>
                <ContactForm />
              </div>
            </div>
            <div className="relative space-y-10 lg:pl-8">
              <motion.div
                className="relative h-[800px] w-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/new1.webp"
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
                <h2 className="text-4xl font-serif font-bold">
                  Kenneth Waweru & Company Advocates
                </h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-600">
                    <motion.p
                      className="text-2xl font-semibold text-orange-600 font-cormorant h-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <i>Your Legal Partner</i>
                    </motion.p>
                  </h3>
                  <div className="space-y-6 text-lg font-sans text-slate-300 leading-relaxed text-justify">
                    <p>
                      We are a law firm committed to excellence and delivering
                      quality legal representation to our clients. We are
                      renowned for our client-focused service, strategic
                      counsel, problem-solving, and legal solutions in all areas
                      of law. The firm prides itself on maintaining the highest
                      professional standards, integrity and a track record of
                      successful legal outcomes.
                    </p>
                    <p>
                      Contact us today to discuss how we can assist you in
                      achieving your legal goals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <WhyChooseUs />

        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
