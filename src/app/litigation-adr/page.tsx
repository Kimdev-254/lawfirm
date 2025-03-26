import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Litigation & ADR | Kenneth Waweru & Company Advocates",
  description:
    "Expert litigation and alternative dispute resolution services across East Africa. We provide skilled representation in mediation, arbitration, and all forms of litigation.",
}

const caseTypes = [
  {
    title: "Mediation",
    description:
      "Facilitating mutually beneficial resolutions through expert mediation services.",
    image: "/mediation.webp",
  },
  {
    title: "Arbitration",
    description:
      "Representing clients in binding arbitration proceedings across various industries.",
    image: "/arbitration.webp",
  },
  {
    title: "Civil Litigation",
    description:
      "Comprehensive representation in civil disputes, from pre-trial negotiations to courtroom advocacy.",
    image: "/civil-litigation.webp",
  },
  {
    title: "Criminal Litigation",
    description:
      "Skilled defense in criminal proceedings, protecting your rights at every stage of the legal process.",
    image: "/criminal-litigation.webp",
  },
  {
    title: "Commercial Litigation",
    description:
      "Resolving complex business disputes with strategic legal approaches tailored to your objectives.",
    image: "/commercial-litigation.webp",
  },
]

export default function LitigationADRPage() {
  return (
    <PracticeAreaLayout
      title="Litigation & Alternative Dispute Resolution"
      description="At Kenneth Waweru & Company Advocates, we offer comprehensive litigation and ADR services. Our experienced team provides skilled representation in mediation, arbitration, and all forms of litigation across East Africa."
      image="/herobg.webp"
      caseTypes={caseTypes}
    >
      <Navbar />
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8"></div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
