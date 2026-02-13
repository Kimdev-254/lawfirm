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
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FAQs } from "@/components/faqs"
import { Services } from "@/components/services"
import Blogs from "@/components/blogs"

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

          <div className="container mx-auto px-4 sm:px-6 relative grid lg:grid-cols-2 gap-8 items-start max-w-screen-2xl z-20">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
                  initial={{ opacity: 1, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Kenneth Waweru & Company Advocates
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl font-semibold text-gold font-cormorant h-8"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <i>{text}</i>
                  <Cursor cursorStyle="_" />
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl text-slate-300 leading-relaxed"
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
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.div
                  className="space-y-3 flex-grow"
                  initial={{ opacity: 1, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  {[
                    "Proven Track Record of Success",
                    "Highly Personalized Service",
                    "Top Rated Trial Attorney",
                  ].map((text, index) => (
                    <motion.div
                      key={text}
                      className="flex items-start gap-3 text-slate-300"
                      initial={{ opacity: 1, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-base md:text-lg">{text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Google Reviews - Now more compact */}
                <div className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-lg w-full md:w-auto">
                  <div className="flex flex-col">
                    <span className="font-bold text-xl md:text-2xl text-white">Google</span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 text-gold fill-gold"
                          strokeWidth={1.5}
                        />
                      ))}
                      <div className="relative w-4 h-4 md:w-5 md:h-5">
                        <Star
                          className="absolute top-0 left-0 w-4 h-4 md:w-5 md:h-5 text-gold"
                          fill="url(#partialFill)"
                          strokeWidth={1.5}
                        />
                        <Star
                          className="absolute top-0 left-0 w-4 h-4 md:w-5 md:h-5 text-gray-300 fill-gray-300"
                          strokeWidth={1.5}
                        />
                      </div>
                      <Star
                        className="w-4 h-4 md:w-5 md:h-5 text-gray-300 fill-gray-300"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs md:text-sm text-white ml-1">3.8</span>
                    </div>
                    <span className="text-xs md:text-sm text-white mt-1">31 reviews</span>
                  </div>
                </div>
              </motion.div>
              {/* Contact Form */}
              <div className="mt-4" id="consultation-form">
                <ContactForm />
              </div>
            </div>

            {/* Right Column */}
            <div className="relative space-y-6 lg:pl-8">
              <motion.div
                className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full"
                initial={{ opacity: 1, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/new1.webp"
                  alt="Lead Attorney"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Kenneth Waweru & Company Advocates
                </h2>
                <div className="space-y-3">
                  <motion.p
                    className="text-xl md:text-2xl font-semibold text-gold font-cormorant"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <i>Your Legal Partner</i>
                  </motion.p>
                  <div className="space-y-3 text-base md:text-lg font-sans text-slate-300 leading-relaxed">
                    <p>
                      We are a law firm committed to excellence and delivering
                      quality legal representation to our clients. We are
                      renowned for our client-focused service, strategic
                      counsel, problem-solving, and legal solutions in all areas
                      of law.
                    </p>
                  </div>
                </div>
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
