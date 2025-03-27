"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Logo } from "@/components/ui/logo"

const navigationItems = [
  {
    title: "Litigation & ADR",
    href: "/litigation-adr",
    items: [
      { title: "Mediation", href: "/litigation-adr#mediatation" },
      { title: "Arbitration", href: "/litigation-adr#arbitration" },
      { title: "Civil Litigation", href: "/litigation-adr#civil-litigation" },
      { title: "Criminal Litigation", href: "/litigation-adr#criminal-litigation" },
      { title: "Commercial Litigation", href: "/litigation-adr#commercial-litigation" },
    ],
  },
  {
    title: "Family Law",
    items: [
      { title: "Divorce", href: "/family-law#divorce" },
      { title: "Adoption", href: "/family-law#adoption" },
      { title: "Succession", href: "/family-law#succession" },
      { title: "Child Custody", href: "/family-law#child-custody" },
      { title: "Matrimonial Property", href: "/family-law#matrimonial-property" },
    ],
  },
  {
    title: "Personal Injury",
    items: [
      { title: "Car Accidents", href: "/personal-injury#car-accidents" },
      { title: "Wrongful Death", href: "/personal-injury#wrongful-death" },
      { title: "Product Liability", href: "/personal-injury#product-liability" },
      { title: "Workplace Injuries", href: "/personal-injury#workplace-injuries" },
      { title: "Medical Malpractice", href: "/personal-injury#medical-malpractice" },
    ],
  },
  {
    title: "Technology Law",
    items: [
      { title: "Data Privacy", href: "/technology-law#patent-law" },
      { title: "E-Commerce", href: "/technology-law#copyright-law" },
      { title: "Cyber Security", href: "/technology-law#data-protection" },
      { title: "Intellectual Property", href: "/technology-law#intellectual-property" },
      { title: "Technology Contracts", href: "/technology-law#technology-contracts" },
    ],
  },
  {
    title: "Corporate Law",
    items: [
      { title: "Contract Law", href: "/corporate-law#contract-law" },
      { title: "Employment Law", href: "/corporate-law#employment-law" },
      { title: "Business Formation", href: "/corporate-law#business-formation" },
      { title: "Corporate Governance", href: "/corporate-law#corporate-governance" },
      { title: "Mergers & Acquisitions", href: "/mergers-acquisitions" },
      { title: "Construction & Infrastructure Law", href: "/corporate-law#construction-infrastructure" },
    ],
  },
  {
    title: "Other Areas",
    items: [
      { title: "Tax Law", href: "/other-areas#tax-law" },
      { title: "Conveyancing", href: "/other-areas#conveyancing" },
      { title: "Debt Collection", href: "/other-areas#debt-collection" },
      { title: "Estate Planning", href: "/other-areas#estate-planning" },
      { title: "Immigration Law", href: "/other-areas#immigration-law" },
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

  const position = {
    lat: "-1.108732132958032",
    lng: "36.63725937038771"
  };
  const address = "Kimuchu Complex Building, 4th Floor";

  const handleViewMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}&destination_place_id=${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black py-2"
          : "bg-slate-950 text-white py-3"
      }`}
    >
      <nav className="container mx-auto px-1 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className={isScrolled ? "text-slate-900" : "text-white"} />
        </Link>
        <div className="hidden lg:flex items-center space-x-3">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href || `/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`flex items-center gap-1 py-2 text-sm font-medium whitespace-nowrap ${
                  isScrolled
                    ? "text-slate-800 hover:text-orange-600"
                    : "text-slate-200 hover:text-orange-600"
                }`}
              >
                {item.title}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white rounded-lg shadow-lg mt-1 w-72 py-2 transition-all duration-200 opacity-0 group-hover:opacity-100">
                <div className="absolute h-4 -top-4 left-0 right-0" />
                <div className={`${item.items.length > 4 ? "grid grid-cols-1 gap-x-2" : ""}`}>
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-1.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600 whitespace-nowrap"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <Button
                variant="ghost"
                size="icon"
                className={`${
                  isScrolled
                    ? "text-slate-800 hover:text-orange-600"
                    : "text-white hover:text-orange-600"
                } h-8 w-8`}
              >
                <MapPin className="w-8 h-8" />
              </Button>
              <div className="absolute right-0 top-full bg-white rounded-lg shadow-lg mt-1 w-80 py-2 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <div className="p-4 border-b">
                  <h4 className="font-semibold text-black">Our Location</h4>
                  <p className="text-sm text-slate-800">
                    Kimuchu Complex Building 4floor
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleViewMap}
                    className="block w-full p-2 text-left text-sm text-slate-950 hover:bg-orange-600 rounded-md transition-colors"
                  >
                    View on map
                  </button>
                  <button
                    onClick={handleGetDirections}
                    className="block w-full p-2 text-left text-sm text-slate-950 hover:bg-orange-600 rounded-md transition-colors"
                  >
                    Get directions
                  </button>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className={`text-xs ${
                isScrolled
                  ? "text-slate-600 hover:text-orange-600"
                  : "text-slate-400 hover:text-white"
              } transition-colors`}
            ></Link>
          </div>
          <div className="text-right">
            <div className="text-orange-600 text-sm font-medium">
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
                ? "bg-orange-600 hover:bg-orange-600 text-white"
                : "bg-orange-600 hover:bg-orange-600 text-white"
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
                isScrolled 
                  ? "border-slate-300 bg-white text-slate-950" 
                  : "border-slate-700 text-white hover:bg-slate-800"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] overflow-y-auto max-h-screen"
          >
            <SheetTitle className="text-xl font-bold text-slate-500 mb-6">
              Areas of Practice
            </SheetTitle>
            <nav className="flex flex-col gap-4">
              {navigationItems.map((section, index) => (
                <div key={index} className="border-b border-slate-200 pb-4 last:border-0">
                  <Link
                    href={section.href || `/${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-semibold text-lg text-orange-800 hover:text-orange-600 transition-colors block mb-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.title}
                  </Link>
                  <div className="grid gap-1">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="px-2 py-1.5 text-sm text-slate-300 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <div className="mt-8 border-t border-slate-200 pt-4">
              <div className="text-sm font-medium text-orange-600 mb-1">
                Need Assistance?
              </div>
              <div className="text-sm text-slate-600 mb-4">
                Call us 24/7: 0714521136
              </div>
              <Link
                href="/#consultation-form"
                className="w-full bg-orange-600 text-white hover:bg-orange-700 inline-block text-center py-2 rounded-md transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById('consultation-form');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Free Consultation
              </Link>
            </div>
          </SheetContent> 
        </Sheet>
      </nav>
    </header>
  )
}