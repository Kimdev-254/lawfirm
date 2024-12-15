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
          <div className="max-w-3xl mx-auto space-y-8"></div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
