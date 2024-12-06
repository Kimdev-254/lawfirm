"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"

const navigationItems = [
  {
    title: "Litigation & ADR",
    items: [
      { title: "Civil Litigation", href: "/civil-litigation" },
      { title: "Criminal Litigation", href: "/criminal-litigation" },
      { title: "Commercial Litigation", href: "/commercial-litigation" },
      { title: "Alternative Dispute Resolution", href: "/adr" },
      {
        title: "Constitutional & Administrative Law",
        href: "/constitutional-law",
      },
    ],
  },
  {
    title: "Family Law",
    items: [
      { title: "Divorce & Separation", href: "/divorce-separation" },
      { title: "Child Custody & Support", href: "/child-custody" },
      { title: "Marriage & Cohabitation", href: "/marriage-law" },
      { title: "Estate Planning", href: "/estate-planning" },
      { title: "Adoption", href: "/adoption" },
    ],
  },
  {
    title: "Personal Injury",
    items: [
      { title: "Car Accidents", href: "/car-accidents" },
      { title: "Workplace Injuries", href: "/workplace-injuries" },
      { title: "Medical Malpractice", href: "/medical-malpractice" },
      { title: "Product Liability", href: "/product-liability" },
      { title: "Wrongful Death", href: "/wrongful-death" },
    ],
  },
  {
    title: "Technology Law",
    items: [
      { title: "Intellectual Property", href: "/intellectual-property" },
      { title: "Technology Contracts", href: "/technology-contracts" },
      { title: "Data Protection", href: "/data-protection" },
      { title: "Cybersecurity", href: "/cybersecurity" },
      { title: "Software Licensing", href: "/software-licensing" },
    ],
  },
  {
    title: "Corporate Law",
    items: [
      { title: "Business Formation", href: "/business-formation" },
      { title: "Mergers & Acquisitions", href: "/mergers-acquisitions" },
      { title: "Corporate Governance", href: "/corporate-governance" },
      { title: "Contract Law", href: "/contract-law" },
      { title: "Employment Law", href: "/employment-law" },
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
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
          ? "bg-white shadow-md text-black py-2"
          : "bg-slate-950 text-white py-3"
      }`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className={isScrolled ? "text-slate-900" : "text-white"} />
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`flex items-center gap-1 py-2 text-sm font-medium ${
                  isScrolled
                    ? "text-slate-800 hover:text-orange-500"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {item.title}{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-lg shadow-lg mt-1 w-56 py-2 transition-all duration-200 opacity-0 group-hover:opacity-100">
                {item.items.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-500"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="text-right">
            <div className="text-orange-500 text-sm font-medium">
              0714521136
            </div>
            <div
              className={`text-xs ${
                isScrolled ? "text-gray-600" : "text-slate-400"
              }`}
            >
              Available 24/7
            </div>
          </div>
          <Button
            className={`text-sm ${
              isScrolled
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            Free Consultation
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`lg:hidden ${
                isScrolled ? "border-slate-200" : "border-slate-700"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigationItems.map((section, index) => (
                <div key={index} className="space-y-3">
                  <div className="font-semibold text-lg">{section.title}</div>
                  <div className="pl-4 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block text-sm text-slate-600 hover:text-orange-500"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6 space-y-4">
                <div className="text-center">
                  <div className="text-orange-500 text-lg font-medium">
                    0714521136
                  </div>
                  <div className="text-sm text-slate-600">Available 24/7</div>
                </div>
                <Button className="w-full">Free Consultation</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
