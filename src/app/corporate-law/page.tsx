import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Corporate Law | Kenneth Waweru & Company Advocates",
  description:
    "Expert in Corporate services across East Africa.We provide all kinds of legal services including Tax Law, Conveyancing, Debt Collection, Estate Planning, and Immigration Law across East Africa.",
}

const caseTypes = [
  {
    title: "Contract Law",
    description:
      "Expert guidance on contract law, including drafting, negotiation, and dispute resolution.",
    image: "/contract.webp",
  },
  {
    title: "Employment Law",
    description:
      "Expert guidance on employment law, including employment contracts, employee benefits, and discrimination.",
    image: "/employment.webp",
  },
  {
    title: "Business Information",
    description:
      "Expert guidance on business information, including company formation, incorporation, and corporate governance.",
    image: "/business-information.webp",
  },
  {
    title: "Corporate Governance",
    description:
      "Expert guidance on corporate governance, including board meetings, shareholder meetings, and corporate strategy.",
    image: "/corporate-governance.webp",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Expert guidance on mergers and acquisitions, including due diligence, due diligence reports, and transaction structuring.",
    image: "/merger.webp",
  },
]

export default function CorporateLawPage() {
  return (
    <PracticeAreaLayout
      title="Corporate Law Services"
      description="We specialize in delivering tailored corporate law solutions to businesses of all sizes. Our experienced team ensures compliance, strategic advisory, and comprehensive legal support for your corporate needs."
      image="/herobg.webp"
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
