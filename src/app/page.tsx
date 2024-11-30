import Image from "next/image"
import { Check } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-law-firm">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex justify-between">
          <div className="absolute inset-0 bg-[url('/herobg.jpg')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-4 items-start max-w-screen-2xl">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight">
                  Kenneth Waweru & Company Advocates
                </h1>
                <p className="text-2xl font-semibold text-law-firm-orange">
                  <i>Our practice is your solution</i>
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  The Law Firm represents clients in{" "}
                  <span className="text-white font-semibold">
                    all types of cases across the East African region.
                  </span>
                  We’ve won on behalf of consumers, business owners, companies,
                  the injured, and more.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  Highly Personalized Service
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  Proven Track Record of Success
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  Top Rated Trial Attorney
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Image
                  src="/images/google-reviews.png"
                  alt="Google Reviews"
                  width={200}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <ContactForm />
              <div className="flex items-center justify-center gap-6 pt-10">
                <Image
                  src="/images/badge-1.png"
                  alt="Legal Badge"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/badge-2.png"
                  alt="Legal Badge"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/badge-3.png"
                  alt="Legal Badge"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/badge-4.png"
                  alt="Legal Badge"
                  width={80}
                  height={80}
                />
                <Image
                  src="/images/badge-5.png"
                  alt="Legal Badge"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div className="relative space-y-10">
              <div className="relative h-[800px] w-full">
                <Image
                  src="/new1.png?height=600&width=500"
                  alt="Lead Attorney"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6 text-indent">
                <h2 className="text-4xl font-bold">
                  Kenneth Waweru & Company Advocates
                </h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-law-firm-orange">
                    YOUR ATTORNEY
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    At the Kenneth Waweru & Company Advocates firm, we
                    specialize in comprehensive legal services across multiple
                    practice areas. Established with a commitment to providing
                    high-quality legal representation, the firm offers expertise
                    in corporate law, conveyancing, litigation, intellectual
                    property, family law, personal injury, debt collection and
                    dispute resolution.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    The firm is known for its client-focused approach, strategic
                    legal counsel, and deep understanding of both Kenyan and
                    international legal frameworks. With a team of experienced
                    lawyers and support staff, Kenneth Waweru & Company
                    Advocates serves a diverse clientele including corporations,
                    small businesses, and individual clients, delivering
                    pragmatic and innovative legal solutions tailored to meet
                    the unique needs of each client.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    The firm prides itself on maintaining the highest
                    professional standards, integrity, and a track record of
                    successful legal outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
