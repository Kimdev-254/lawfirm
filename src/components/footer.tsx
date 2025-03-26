import Link from "next/link"
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">About Us</h3>
            <p className="text-slate-300 font-serif">
              Kenneth Waweru & Company Advocates is a leading law firm providing
              expert legal services across East Africa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">
              Practice Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/litigation-adr"
                  className="text-slate-300 hover:text-orangee-600"
                >
                  Litigation & ADR
                </Link>
              </li>
              <li>
                <Link
                  href="/family-law"
                  className="text-slate-300 hover:text-orangee-600"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate-law"
                  className="text-slate-300 hover:text-orangee-600"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/technology-law"
                  className="text-slate-300 hover:text-orangee-600"
                >
                  Technology Law
                </Link>
              </li>
              <li>
                <Link
                  href="/other-legal-services"
                  className="text-slate-300 hover:text-orangee-600"
                >
                  Other Legal Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-serif mb-4">
              Contact Us
            </h3>
            <p className="text-slate-300">Kimuchu Building 4floor</p>
            <p className="text-slate-300">Limuru, Kenya</p>
            <p className="text-slate-300">Phone: 0714521136</p>
            <p className="text-slate-300">P.O BOX 14309-0400</p>
            <p className="text-slate-300">
              Email: wawerulawadvocates@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-orangee-600">
                <Facebook />
              </a>
              <a href="#" className="text-slate-300 hover:text-orangee-600">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/kenneth-waweru-advocates-ab868533a/" className="text-slate-300 hover:text-orangee-600">
                <LinkedIn />
              </a>
              <a href="#" className="text-slate-300 hover:text-orangee-600">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} Kenneth Waweru & Company
            Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
