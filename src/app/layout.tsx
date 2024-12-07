import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // Add this line to specify weights
})

export const metadata: Metadata = {
  title: "Kenneth Waweru & Company Advocates",
  description: "Expert legal services across East Africa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  )
}
