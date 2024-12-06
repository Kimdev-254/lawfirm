import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kenneth Waweru & Company Advocates",
  description:
    "Providing expert legal solutions with professionalism and dedication in Kenya.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-law-firm text-white`}>
        <Navbar />
        {children}
        <footer className="bg-slate-900 py-8">
          <div className="container text-center text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} KW & Company Advocates Firm. All
              rights reserved.
            </p>
            <p className="mt-2">
              Seniors Apartment, Waiyaki way | 0714521136 | Available 24/7
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
