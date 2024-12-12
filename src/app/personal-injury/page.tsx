import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Personal Injury | Kenneth Waweru & Company Advocates",
  description:
    "Comprehensive personal injury legal services across East Africa. We provide expert representation for victims of accidents, negligence, and wrongful acts.",
}

const caseTypes = [
  {
    title: "Car Accident",
    description:
      "Helping victims of car accidents recover compensation for injuries and damages.",
    image: "/images/car-accident.jpg",
  },
  {
    title: "Wrongful Death",
    description:
      "Providing compassionate legal support to families seeking justice for wrongful death claims.",
    image: "/images/wrongful-death.jpg",
  },
  {
    title: "Product Liability",
    description:
      "Advocating for clients harmed by defective or unsafe products.",
    image: "/images/product-liability.jpg",
  },
  {
    title: "Workplace Injuries",
    description:
      "Securing fair compensation for employees injured on the job due to employer negligence.",
    image: "/images/workplace-injuries.jpg",
  },
  {
    title: "Medical Malpractice",
    description:
      "Holding healthcare providers accountable for injuries caused by medical negligence.",
    image: "/images/medical-malpractice.jpg",
  },
]

export default function PersonalInjuryPage() {
  return (
    <PracticeAreaLayout
      title="Personal Injury"
      description="At Kenneth Waweru & Company Advocates, we offer comprehensive legal representation for personal injury cases. Our experienced team provides skilled advocacy to ensure justice and fair compensation for victims of accidents and negligence."
      image="/herobg.jpg"
      caseTypes={caseTypes}
    >
      <Navbar />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Our Approach to Personal Injury Cases
            </h2>
            <div className="prose prose-lg text-black">
              <p>
                At Kenneth Waweru & Company Advocates, we understand the
                physical, emotional, and financial toll that personal injuries
                can have on victims and their families. Our approach focuses on
                compassionate yet aggressive advocacy to ensure our clients
                receive the compensation they deserve.
              </p>
              <p>We handle a wide range of personal injury cases, including:</p>
              <ul>
                <li>Car and motorcycle accidents</li>
                <li>Medical malpractice and negligence</li>
                <li>Workplace injuries and compensation claims</li>
                <li>Product liability and defective products</li>
                <li>Wrongful death and catastrophic injuries</li>
              </ul>
              <p>
                Our dedicated team of personal injury attorneys brings extensive
                experience and a client-focused approach to every case. Whether
                negotiating settlements or representing clients in court, we are
                committed to achieving the best possible outcomes for those we
                represent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
