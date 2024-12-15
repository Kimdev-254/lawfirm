import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Family Law | Kenneth Waweru & Company Advocates",
  description:
    "Compassionate and experienced family law services across East Africa. We handle divorce, adoption, succession, child custody, and matrimonial property matters.",
}

const caseTypes = [
  {
    title: "Divorce",
    description:
      "Guiding you through the divorce process with empathy and legal expertise.",
    image: "/images/divorce.jpg",
  },
  {
    title: "Adoption",
    description:
      "Helping families navigate the complex adoption process with care and precision.",
    image: "/images/adoption.jpg",
  },
  {
    title: "Succession",
    description:
      "Assisting with estate planning and succession matters to protect your family's future.",
    image: "/images/succession.jpg",
  },
  {
    title: "Child Custody",
    description:
      "Advocating for the best interests of children in custody disputes.",
    image: "/images/child-custody.jpg",
  },
  {
    title: "Matrimonial Property",
    description:
      "Ensuring fair division of assets in matrimonial property disputes.",
    image: "/images/matrimonial-property.jpg",
  },
]

export default function FamilyLawPage() {
  return (
    <PracticeAreaLayout
      title="Family Law"
      description="Kenneth Waweru & Company Advocates provides compassionate and experienced family law services across East Africa. We understand the sensitive nature of family matters and offer personalized legal solutions."
      image="/herobg.jpg"
      caseTypes={caseTypes}
    >
      <Navbar />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8"> </div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
