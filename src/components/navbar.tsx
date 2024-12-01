"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10) // Change state if user scrolls down 10px or more
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black py-4"
          : "bg-blu text-white py-6"
      }`}
    >
      {!isScrolled && (
        <div className="border-b border-slate-800">
          <div className="container flex items-center justify-between h-10 text-sm">
            <div className="flex space-x-4 text-slate-400">
              <span>Seniors Apartment, Waiyaki Way | Nairobi</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white">
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
      <nav className="container mx-auto px-4 flex items-center justify-between max-w-10xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-orange-600 rounded-full" />
          <span
            className={`text-xl font-semibold ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Law Firm
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-5">
          {[
            "Insurance Litigation",
            "Personal Injury",
            "Civil Litigation",
            "Case Results",
            "Reviews",
            "Meet Our Team",
          ].map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`flex items-center gap-1 ${
                  isScrolled
                    ? "text-black hover:text-orange-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-slate-50 text-slate-950 rounded-lg shadow-lg mt-1 min-w-[200px]">
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-4 py-2 hover:bg-slate-200"
                >
                  {item}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <div
              className={`${
                isScrolled ? "text-orange-500" : "text-orange-500"
              }`}
            >
              0714521136
            </div>
            <div
              className={`text-sm ${
                isScrolled ? "text-gray-600" : "text-slate-400"
              }`}
            >
              Available 24/7
            </div>
          </div>
          <Button variant={`${isScrolled ? "outline" : ""}`}>
            Free Consultation
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {[
                "Insurance Litigation",
                "Personal Injury",
                "Civil Litigation",
                "Case Results",
                "Reviews",
                "Meet Our Team",
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-lg font-medium"
                >
                  {item}
                </Link>
              ))}
              <Button className="w-full">Free Consultation</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
