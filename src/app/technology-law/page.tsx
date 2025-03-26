import { Metadata } from "next"
import { PracticeAreaLayout } from "@/components/practice-area-layout"

export const metadata: Metadata = {
  title: "Technology Law | Kenneth Waweru & Company Advocates",
  description:
    "Expert technology law services across East Africa. We provide specialized legal solutions for tech companies, startups, and digital businesses.",
}

const caseTypes = [
  {
    title: "Data Privacy & Protection",
    description:
      "Ensuring compliance with data protection laws and regulations for your digital operations.",
    image: "/data-privacy.webp",
  },
  {
    title: "Intellectual Property",
    description:
      "Protecting your software, patents, trademarks, and other tech-related intellectual property.",
    image: "/ip-tech.webp",
  },
  {
    title: "Tech Contracts",
    description:
      "Drafting and reviewing SaaS agreements, licensing deals, and technology transfer agreements.",
    image: "/contract.webp",
  },
  {
    title: "Cybersecurity",
    description:
      "Legal guidance on cybersecurity frameworks, breach response, and compliance matters.",
    image: "/cybersecurity.webp",
  },
  {
    title: "E-Commerce",
    description:
      "Legal solutions for online businesses, including terms of service and consumer protection.",
    image: "/check.webp",
  },
]

export default function TechnologyLawPage() {
  return (
    <PracticeAreaLayout
      title="Technology Law"
      description="At Kenneth Waweru & Company Advocates, we specialize in technology law, providing cutting-edge legal solutions for tech companies, startups, and digital businesses across East Africa. Our expertise covers the full spectrum of legal issues in the digital economy."
      image="/images/technology-law-hero.webp"
      caseTypes={caseTypes}
    >
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Additional technology law content can be added here */}
          </div>
        </div>
      </section>
    </PracticeAreaLayout>
  )
}