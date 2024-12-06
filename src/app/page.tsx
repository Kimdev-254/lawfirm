import Image from "next/image"
import { Check } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-law-firm">
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex justify-center">
          <div className="absolute inset-0 bg-[url('/images/scales-of-justice.jpg')] bg-cover bg-center opacity-10" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-12 items-start max-w-screen-xl">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Over $1 Billion Recovered
                </h1>
                <p className="text-2xl font-semibold text-law-firm-orange">
                  NO WIN. NO FEE. GUARANTEED.
                </p>
                <p className="text-xl text-slate-300 leading-relaxed">
                  The Omar Ochoa Law Firm represents clients in{" "}
                  <span className="text-white font-semibold">
                    all types of civil cases across Texas
                  </span>
                  . We've won on behalf of consumers, homeowners, business
                  owners, whistleblowers, the injured, and more.
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
              <div className="relative h-[600px] w-full">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Lead Attorney"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Omar Ochoa Law Firm</h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-law-firm-orange">
                    TEXAS TRIAL ATTORNEY
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    At the Omar Ochoa Law Firm, our mission is to be different
                    from other firms in all the ways that are important and
                    necessary. We are not a settlement mill, we treat our
                    clients like our family. We don't focus on settling cases as
                    quickly as possible, we focus on resolving cases as much as
                    possible.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Justice is the goal we seek, and we believe we will not
                    achieve our client's goals by taking shortcuts. We prepare
                    every case as if it will go to trial. Over $1 billion we
                    reach the best outcome. A testament to our method is each of
                    the verdicts and settlements we have obtained - many in
                    excess of $1 million.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    From our offices in McAllen, we handle cases throughout
                    Texas, including Austin, Dallas, San Antonio, and Houston.
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
