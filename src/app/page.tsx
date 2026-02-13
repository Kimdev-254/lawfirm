"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Star } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { WhyChooseUs } from "@/components/why-choose-us"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { FAQs } from "@/components/faqs"
import { Services } from "@/components/services"
import Blogs from "@/components/blogs"

export default function Home() {

  return (
    <div className="min-h-screen bg-law-firm">
      <Navbar />
      <main>
        <section className="relative mx-auto w-full max-w-[1800px] pt-24 pb-12 md:pt-32 md:pb-24">
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

          <div className="container mx-auto px-4 sm:px-6 relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl z-20">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Kenneth Waweru & Company Advocates
                </motion.h1>

                <motion.p
                  className="text-2xl md:text-3xl font-semibold text-gold font-cormorant border-l-4 border-gold pl-4"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  Our Practice is Your Solution
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  The Law Firm represents clients in{" "}
                  <span className="text-white font-semibold">
                    all types of cases across the East African region.
                  </span>{" "}
                  We&apos;ve won on behalf of consumers, business owners, companies,
                  the injured, and more.
                </motion.p>
              </div>

              {/* Features List + Google Reviews */}
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <div className="space-y-4">
                  {[
                    "Proven Track Record of Success",
                    "Highly Personalized Service",
                    "Top Rated Trial Attorney",
                  ].map((text, index) => (
                    <motion.div
                      key={text}
                      className="flex items-center gap-3 text-slate-200 font-medium"
                      initial={{ opacity: 1, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-lg">{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Google Reviews - Clean Look */}
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 w-fit">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-navy flex items-center justify-center text-xs font-bold text-white">KW</div>
                    <div className="w-10 h-10 rounded-full bg-gold border-2 border-navy flex items-center justify-center text-xs font-bold text-navy">5.0</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-gold fill-gold"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-slate-300 mt-1">
                      <span className="font-bold text-white">5.0</span> based on 120+ reviews
                    </p>
                  </div>
                  <div className="h-8 w-px bg-white/20 mx-2" />
                  <span className="font-bold text-lg text-white tracking-tight">Google</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Form */}
            <div className="relative w-full">
              <motion.div
                initial={{ opacity: 1, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full"
                id="consultation-form"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        <Services />
        <WhyChooseUs />
        <LocationSection />
        <FAQs />
        <Blogs />
      </main>
      <Footer />
    </div>
  )
}
