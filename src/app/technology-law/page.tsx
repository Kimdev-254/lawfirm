import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

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
    image: "/images/mediation.jpg",
  },
  {
    title: "Arbitration",
    description:
      "Representing clients in binding arbitration proceedings across various industries.",
    image: "/images/arbitration.jpg",
  },
  {
    title: "Civil Litigation",
    description:
      "Comprehensive representation in civil disputes, from pre-trial negotiations to courtroom advocacy.",
    image: "/images/civil-litigation.jpg",
  },
  {
    title: "Criminal Litigation",
    description:
      "Skilled defense in criminal proceedings, protecting your rights at every stage of the legal process.",
    image: "/images/criminal-litigation.jpg",
  },
  {
    title: "Commercial Litigation",
    description:
      "Resolving complex business disputes with strategic legal approaches tailored to your objectives.",
    image: "/images/commercial-litigation.jpg",
  },
]

export default function LitigationADRPage() {
  return (
    <PracticeAreaLayout
      title="Litigation & Alternative Dispute Resolution"
      description="At Kenneth Waweru & Company Advocates, we offer comprehensive litigation and ADR services. Our experienced team provides skilled representation in mediation, arbitration, and all forms of litigation across East Africa."
      image="/images/litigation-adr-hero.jpg"
      caseTypes={caseTypes}
    >
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8"></div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
