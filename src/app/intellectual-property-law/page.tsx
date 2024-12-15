import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Intellectual Property Law| Kenneth Waweru & Company Advocates",
  description:
    "Expert litigation and alternative dispute resolution services across East Africa. We provide skilled representation in mediation, arbitration, and all forms of litigation.",
}

const caseTypes = [
  {
    title: "Patent Law",
    description:
      "Facilitating mutually beneficial resolutions through expert mediation services.",
    image: "/images/mediation.jpg",
  },
  {
    title: "Trademarks",
    description:
      "Representing clients in binding arbitration proceedings across various industries.",
    image: "/images/arbitration.jpg",
  },
  {
    title: "Trade Secrets",
    description:
      "Comprehensive representation in civil disputes, from pre-trial negotiations to courtroom advocacy.",
    image: "/images/civil-litigation.jpg",
  },
  {
    title: "Copyright Law",
    description:
      "Skilled defense in criminal proceedings, protecting your rights at every stage of the legal process.",
    image: "/images/criminal-litigation.jpg",
  },
  {
    title: "Data Protection",
    description:
      "Resolving complex business disputes with strategic legal approaches tailored to your objectives.",
    image: "/images/commercial-litigation.jpg",
  },
]

export default function IntellectualPropertyPage() {
  return (
    <PracticeAreaLayout
      title="Intellectual Property Law"
      description="At Kenneth Waweru & Company Advocates, we offer comprehensive intellectual property law services. Our experienced team provides skilled representation in protecting, managing, and enforcing intellectual property rights across East Africa."
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
