import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight
} from "lucide-react"

export function Footer() {
  const practiceAreas = [
    { name: "Litigation & ADR", href: "/litigation-adr" },
    { name: "Family Law", href: "/family-law" },
    { name: "Corporate Law", href: "/corporate-law" },
    { name: "Technology Law", href: "/technology-law" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "News & Insights", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <Image
                src="/kenneth-waweru-logo.png"
                alt="Kenneth Waweru & Company Advocates"
                width={60}
                height={60}
                className="h-14 w-auto"
              />
              <div className="flex flex-col font-serif font-bold leading-tight text-white">
                <span className="text-base">Kenneth Waweru &</span>
                <span className="text-sm text-gold">Company Advocates</span>
              </div>
            </Link>

            <p className="text-gold text-xl font-serif italic font-medium tracking-wide">
              Your Legal Partner
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: LinkedIn, href: "https://www.linkedin.com/in/kenneth-waweru-advocates-ab868533a/" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Practice Areas</h3>
            <ul className="space-y-4">
              {practiceAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-gold transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowUpRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-gold transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowUpRight size={12} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-sm text-slate-400">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Kimuchu Complex Building,<br />4th Floor Limuru, Kenya</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-400">
                <Phone size={18} className="text-gold shrink-0" />
                <a href="tel:+254714521136" className="hover:text-gold transition-colors">+254 714 521 136</a>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-400">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:wawerulawadvocates@gmail.com" className="hover:text-gold transition-colors">wawerulawadvocates@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-8 md:px-6 flex flex-col items-center gap-6">
          <p className="text-[12px] text-slate-500 uppercase tracking-widest text-center">
            &copy; {new Date().getFullYear()} Kenneth Waweru & Company Advocates. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
