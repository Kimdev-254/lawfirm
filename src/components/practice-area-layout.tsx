"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "./navbar"

interface PracticeAreaLayoutProps {
  title: string
  description: string
  image?: string // Added image prop as optional
  caseTypes: {
    title: string
    description: string
    image: string
  }[]
  children?: React.ReactNode
}

export function PracticeAreaLayout({
  title,
  description,
  image = "/herobg.webp", // Default image
  caseTypes,
  children,
}: PracticeAreaLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar/>
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10" />
            <Image
              src={image} // Use the passed image prop
              alt="area background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                    {title}
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    {description}
                  </p>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-4 rounded-lg w-fit">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">
                      Google Reviews
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:sticky lg:top-24"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Cases We Handle
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseTypes.map((caseType, index) => (
                <motion.div
                  key={caseType.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={caseType.image}
                      alt={caseType.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-75" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {caseType.title}
                    </h3>
                    <p className="text-sm text-slate-200">
                      {caseType.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content */}
        {children}
      </main>
    </div>
  )
}