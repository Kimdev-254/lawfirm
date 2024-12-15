import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Other Legal Services | Kenneth Waweru & Company Advocates",
  description:
    "Comprehensive legal services including Tax Law, Conveyancing, Debt Collection, Estate Planning, and Immigration Law across East Africa.",
}

const legalServices = [
  {
    title: "Tax Law",
    description:
      "Expert guidance on tax compliance, planning, and dispute resolution.",
    image: "/images/tax-law.jpg",
    href: "#tax-law",
  },
  {
    title: "Conveyancing",
    description: "Smooth property transactions and title transfers.",
    image: "/images/conveyancing.jpg",
    href: "#conveyancing",
  },
  {
    title: "Debt Collection",
    description: "Effective strategies for recovering outstanding debts.",
    image: "/images/debt-collection.jpg",
    href: "#debt-collection",
  },
  {
    title: "Estate Planning",
    description: "Comprehensive estate planning and will creation services.",
    image: "/images/estate-planning.jpg",
    href: "#estate-planning",
  },
  {
    title: "Immigration Law",
    description:
      "Assistance with visas, work permits, and citizenship applications.",
    image: "/images/immigration-law.jpg",
    href: "#immigration-law",
  },
]

export default function OthersPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10" />
            <Image
              src="/images/other-legal-services-hero.jpg"
              alt="Other Legal Services"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                    Other Legal Services
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    At Kenneth Waweru & Company Advocates, we offer a wide range
                    of specialized legal services to meet your diverse needs.
                    From tax law to immigration, our experienced team is here to
                    provide expert guidance and representation.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Our Specialized Legal Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalServices.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-75" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-200 mb-4">
                      {service.description}
                    </p>
                    <Link href={service.href}>
                      <Button
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-slate-900"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto space-y-8"></div>
          </div>
        </section>
      </main>
    </div>
  )
}
