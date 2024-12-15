import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface ArticleCardProps {
  article: {
    id: number
    title: string
    category: string
    excerpt: string
    date: string
  }
  onClick: () => void
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <div className="p-6">
        <p className="text-orange-500 text-sm font-semibold mb-2">
          {article.category}
        </p>
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{article.date}</span>
          <Button
            variant="link"
            className="text-orange-600 hover:text-orange-800"
            onClick={onClick}
          >
            Read More
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
