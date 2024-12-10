import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FullArticleProps {
  article: {
    id: number
    title: string
    category: string
    content: string
    date: string
  }
  onClose: () => void
}

export function FullArticle({ article, onClose }: FullArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            {article.title}
          </h2>
          <p className="text-orange-500 text-sm font-semibold">
            {article.category}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-slate-500 hover:text-slate-700"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{article.date}</p>
      <div className="prose prose-slate max-w-none">
        {article.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  )
}
