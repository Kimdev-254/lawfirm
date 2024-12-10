"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArticlesCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className="relative h-[400px] overflow-hidden"
      initial={{ width: "60px" }}
      animate={{ width: isExpanded ? 300 : 60 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="absolute inset-0 bg-white rounded-lg shadow-lg">
        {!isExpanded && (
          <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-orange-100 to-orange-200">
            <ChevronRight className="w-6 h-6 text-orange-500 mb-5" />
            <span className="text-orange-800 font-semibold transform -rotate-90 origin-center whitespace-nowrap">
              Articles
            </span>
          </div>
        )}

        <motion.div
          className="absolute inset-0 p-6 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl font-playfair font-bold text-orange-800 mb-4">
            Our Articles
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Explore our collection of expert legal insights and stay informed on
            the latest developments in law.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 mb-6">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Corporate Law Updates
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Family Law Guides
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Property Law Analysis
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              Legal Tech Insights
            </li>
          </ul>
          <Link href="/articles" passHref>
            <Button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">
              Read More
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
