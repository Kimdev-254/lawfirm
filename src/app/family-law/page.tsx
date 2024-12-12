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
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Our Family Law Services
            </h2>
            <div className="prose prose-lg text-black">
              <p>
                Family law matters require a delicate balance of legal expertise
                and emotional intelligence. At Kenneth Waweru & Company
                Advocates, we provide comprehensive family law services with a
                focus on protecting your interests and those of your loved ones.
              </p>
              <p>
                Our family law practice covers a wide range of services,
                including:
              </p>
              <ul>
                <li>Divorce and separation proceedings</li>
                <li>Child custody and support arrangements</li>
                <li>Adoption legal services</li>
                <li>Succession planning and estate administration</li>
                <li>Matrimonial property disputes</li>
                <li>Prenuptial and postnuptial agreements</li>
                <li>Domestic violence protection</li>
              </ul>
              <p>
                We understand that family law issues can be emotionally
                challenging. Our team is committed to providing compassionate,
                discreet, and effective legal representation to help you
                navigate these difficult times and achieve the best possible
                outcomes for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
