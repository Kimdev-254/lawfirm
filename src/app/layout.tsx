import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google"
import "leaflet/dist/leaflet.css"
import "./globals.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingActions from "@/components/floating-actions"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// })

export const metadata: Metadata = {
  title: "Kenneth Waweru & Company Advocates",
  description: "Expert legal services across East Africa",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/new-logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/new-logo.png' },
    ],
  },
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
      <body className="bg-background text-foreground antialiased font-montserrat">
        {children}
        <ToastContainer
          position="top-center"  // ⬅ Centers the pop-up
          autoClose={4000}       // ⏳ Disappears after 4s
          hideProgressBar
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
          toastStyle={{
            fontSize: "14px", // 🔹 Smaller font
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            animation: "fadeSlideIn 0.5s ease-in-out", // ✨ Smooth animation
          }}
        />
        <FloatingActions />
      </body>
    </html>
  )
}
