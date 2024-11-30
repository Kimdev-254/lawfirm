import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kenneth Waweru Advocates",
  description: "Our practice is your solution",
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
              &copy; {new Date().getFullYear()} Kenneth Waweru Advocates. All
              rights reserved.
            </p>
            <p className="mt-2">
              Seniors Apartment Waiyaki way | (956) 253-3121 | Available 24/7
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
