"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import {
  ArrowRight,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
  Users,
  Briefcase,
  Scale,
} from "lucide-react"

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="px-4 lg:px-8 h-16 flex items-center border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center justify-center">
            <Scale className="h-6 w-6 mr-2" />
            <span className="font-bold text-xl">KW LAW</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/practice-areas"
            >
              Practice Areas
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Switch
              checked={darkMode}
              onCheckedChange={toggleDarkMode}
              aria-label="Toggle dark mode"
            />
            {darkMode ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/herobg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Optional overlay for contrast */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Law Firm</h1>
            <p className="text-xl mb-8">
              Delivering exceptional legal services with dedication and
              expertise.
            </p>
            <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Practice Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Injury",
                  icon: Users,
                  description:
                    "We fight for fair compensation for your injuries.",
                },
                {
                  title: "Family Law",
                  icon: Briefcase,
                  description:
                    "Compassionate support for family legal matters.",
                },
                {
                  title: "Criminal Defense",
                  icon: Scale,
                  description:
                    "Protecting your rights in criminal proceedings.",
                },
                {
                  title: "Civil and Criminal Litigation",
                  icon: Briefcase,
                  description: "Legal solutions for your business needs.",
                },
                {
                  title: "Estate Planning",
                  icon: Users,
                  description:
                    "Secure your family's future with proper planning.",
                },
                {
                  title: "Employment Law",
                  icon: Scale,
                  description: "Advocating for fair workplace practices.",
                },
              ].map((area) => (
                <Card
                  key={area.title}
                  className="flex flex-col items-center text-center"
                >
                  <CardHeader>
                    <area.icon className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Choose Us?
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  At Kenneth Waweru Law Firm, we combine expertise, dedication,
                  and a client-first approach to deliver exceptional legal
                  services.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Over 15 years of legal experience</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Personalized attention to every case</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Committed to client satisfaction</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
                <Image
                  src="/image3.jpg"
                  alt="Kenneth Waweru in his office"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&aposre here to help. Contact us today for a free
                consultation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+254 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@kennethwawerulaw.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>123 Legal Street, Nairobi, Kenya</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 Kenneth Waweru Law Firm. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/terms"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
