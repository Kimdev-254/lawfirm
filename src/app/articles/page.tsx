"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SearchBar } from "@/components/search-bar"
import { ArticleCard } from "@/components/article-card"
import { FullArticle } from "@/components/full-article"

const articles = [
  {
    id: 1,
    title: "Understanding Corporate Law in East Africa",
    category: "Corporate Law",
    excerpt:
      "An in-depth look at the complexities of corporate law in the East African region...",
    date: "2024-03-15",
    content:
      "Corporate law in East Africa is a complex and evolving field. This article explores the key aspects of corporate governance, mergers and acquisitions, and regulatory compliance across countries like Kenya, Tanzania, and Uganda. We'll discuss recent changes in legislation and their impact on businesses operating in the region...",
  },
  {
    id: 2,
    title: "Family Law: Navigating Divorce Proceedings",
    category: "Family Law",
    excerpt:
      "A comprehensive guide to understanding and managing divorce proceedings in Kenya...",
    date: "2024-03-10",
    content:
      "Divorce can be a challenging and emotional process. This guide provides a step-by-step overview of divorce proceedings in Kenya, covering topics such as property division, child custody, and alimony. We'll also discuss the role of mediation and how to choose the right legal representation for your case...",
  },
  {
    id: 3,
    title: "Property Law: Recent Changes and Their Impact",
    category: "Property Law",
    excerpt:
      "Exploring the latest changes in property law and how they affect property owners and investors...",
    date: "2024-03-05",
    content:
      "Recent changes in property law have significant implications for both property owners and investors in East Africa. This article examines new regulations regarding land ownership, zoning laws, and property taxes. We'll also discuss how these changes may affect the real estate market and provide tips for navigating the new legal landscape...",
  },
  {
    id: 4,
    title: "The Rise of Legal Tech in African Law Firms",
    category: "Legal Tech",
    excerpt:
      "How technology is transforming the legal landscape in Africa and what it means for clients and lawyers...",
    date: "2024-02-28",
    content:
      "Legal technology is rapidly changing the way law firms operate in Africa. This article explores the adoption of AI, blockchain, and cloud-based solutions in legal practices across the continent. We'll discuss how these technologies are improving efficiency, reducing costs, and enhancing client services. Additionally, we'll look at the challenges and opportunities that legal tech presents for African law firms...",
  },
]

export default function ArticlesPage() {
  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [selectedArticle, setSelectedArticle] = useState<
    (typeof articles)[0] | null
  >(null)

  const handleSearch = (query: string) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredArticles(filtered)
  }

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-4xl font-playfair font-bold text-slate-800">
            Our Articles
          </h1>
          <Link href="/" passHref>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-800 hover:bg-slate-100"
            >
              <X className="h-6 w-6" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedArticle ? (
            <FullArticle
              key="full-article"
              article={selectedArticle}
              onClose={() => setSelectedArticle(null)}
            />
          ) : (
            <motion.div
              key="article-grid"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </motion.div>
  )
}
