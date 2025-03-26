import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Other Legal Services | Kenneth Waweru & Company Advocates",
  description:
    "Comprehensive legal services including Tax Law, Conveyancing, Debt Collection, Estate Planning, and Immigration Law across East Africa.",
}

const caseTypes = [
  {
    title: "Tax Law",
    description:
      "Expert guidance on tax compliance, planning, and dispute resolution.",
    image: "/tax-law.webp",
  },
  {
    title: "Conveyancing",
    description: "Smooth property transactions and title transfers.",
    image: "/conveyancing.webp",
  },
  {
    title: "Debt Collection",
    description: "Effective strategies for recovering outstanding debts.",
    image: "/debt-collection.webp",
  },
  {
    title: "Estate Planning", 
    description: "Comprehensive estate planning and will creation services.",
    image: "/estate-planning.webp",
  },
  {
    title: "Immigration Law",
    description:
      "Assistance with visas, work permits, and citizenship applications.",
    image: "/immigration-law.webp",
  },
]

export default function OthersPage() {
  return (
       <PracticeAreaLayout
          title="Other Areas of Practice"
          description="
Our firm provides expert legal services across diverse specialized areas, including tax law, conveyancing, debt recovery, estate planning, and immigration. Our seasoned attorneys deliver strategic, client-focused solutions tailored to your unique needs, ensuring comprehensive protection and seamless transactions. Trust us for precise, results-driven representation.  "
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
