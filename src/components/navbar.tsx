"use client"

import Link from "next/link"
import { ChevronDown, Menu, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-blu">
      <div className="border-b border-slate-800">
        <div className="container flex items-center justify-between h-10 text-sm">
          <div className="container flex space-x-4 text-slate-400">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span className="text-white">
              Seniors Apartment, Waiyaki Way | Nairobi
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Link href="/" className="text-slate-400 hover:text-white">
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 flex items-center justify-between h-20 max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-orange-600 rounded-full" />
          <span className="text-xl font-semibold">Law Firm</span>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-slate-300 hover:text-white">
              Insurance Litigation <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Auto Insurance</DropdownMenuItem>
              <DropdownMenuItem>Property Insurance</DropdownMenuItem>
              <DropdownMenuItem>Life Insurance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-slate-300 hover:text-white">
              Personal Injury <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Car Accidents</DropdownMenuItem>
              <DropdownMenuItem>Workplace Injuries</DropdownMenuItem>
              <DropdownMenuItem>Medical Malpractice</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/civil-litigation"
            className="text-slate-300 hover:text-white"
          >
            Civil Litigation
          </Link>
          <Link
            href="/case-results"
            className="text-slate-300 hover:text-white"
          >
            Case Results
          </Link>
          <Link href="/reviews" className="text-slate-300 hover:text-white">
            Reviews
          </Link>
          <Link href="/team" className="text-slate-300 hover:text-white">
            Meet Our Team
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <div className="text-orange-500">(956) 253-3121</div>
            <div className="text-sm text-slate-400">Available 24/7</div>
          </div>
          <Button>Free Consultation</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link
                href="/insurance-litigation"
                className="text-lg font-medium"
              >
                Insurance Litigation
              </Link>
              <Link href="/personal-injury" className="text-lg font-medium">
                Personal Injury
              </Link>
              <Link href="/civil-litigation" className="text-lg font-medium">
                Civil Litigation
              </Link>
              <Link href="/case-results" className="text-lg font-medium">
                Case Results
              </Link>
              <Link href="/reviews" className="text-lg font-medium">
                Reviews
              </Link>
              <Link href="/team" className="text-lg font-medium">
                Meet Our Team
              </Link>
              <Button className="w-full">Free Consultation</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
