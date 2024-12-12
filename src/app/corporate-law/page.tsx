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
    image: "/images/contract-law.jpg",
  },
  {
    title: "Employment Law",
    description:
      "Expert guidance on employment law, including employment contracts, employee benefits, and discrimination.",
    image: "/images/employment-law.jpg",
  },
  {
    title: "Business Information",
    description:
      "Expert guidance on business information, including company formation, incorporation, and corporate governance.",
    image: "/images/business-information.jpg",
  },
  {
    title: "Corporate Governance",
    description:
      "Expert guidance on corporate governance, including board meetings, shareholder meetings, and corporate strategy.",
    image: "/images/corporate-governance.jpg",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Expert guidance on mergers and acquisitions, including due diligence, due diligence reports, and transaction structuring.",
    image: "/images/mergers-and-acquisitions.jpg",
  },
]

export default function CorporateLawPage() {
  return (
    <PracticeAreaLayout
      title="Corporate Law Services"
      description="At Kenneth Waweru & Company Advocates, we specialize in delivering tailored corporate law solutions to businesses of all sizes. Our experienced team ensures compliance, strategic advisory, and comprehensive legal support for your corporate needs."
      image="/herobg.jpg"
      caseTypes={caseTypes}
    >
      <Navbar />
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Our Approach to Corporate Law
            </h2>
            <div className="prose prose-lg text-black">
              <p>
                At Kenneth Waweru & Company Advocates, we understand the unique
                challenges faced by businesses in today’s dynamic environment.
                Our approach is centered on providing strategic and innovative
                legal solutions tailored to meet the evolving needs of our
                corporate clients.
              </p>
              <p>We offer a full range of corporate law services, including:</p>
              <ul>
                <li>
                  Company formation and registration to help you start your
                  business on a solid legal foundation.
                </li>
                <li>
                  Corporate compliance and governance to ensure your business
                  adheres to legal and regulatory requirements.
                </li>
                <li>
                  Drafting and reviewing contracts to protect your interests in
                  every transaction.
                </li>
                <li>
                  Mergers and acquisitions, providing due diligence and seamless
                  integration support.
                </li>
                <li>
                  Shareholder agreements and dispute resolution to maintain
                  harmony within your business.
                </li>
              </ul>
              <p>
                Our team combines deep legal expertise with a business-focused
                approach to deliver practical solutions that drive success.
                Whether you’re a startup or an established corporation, we are
                committed to supporting your growth and protecting your
                interests every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}
