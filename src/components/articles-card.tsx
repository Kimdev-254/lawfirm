"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ArticlesCard() {
  return (
    <motion.div
      className="w-[300px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-serif text-slate-950 font-bold">
          Our Articles
        </h3>
        <p className="text-sm text-gray-600">
          Explore our collection of expert legal insights and stay informed on
          the latest developments in law.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-sm text-gray-600">Corporate Law Updates</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-sm text-gray-600">Family Law Guides</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-sm text-gray-600">Property Law Analysis</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-sm text-gray-600">Legal Tech Insights</span>
          </li>
        </ul>
        <Link href="/articles">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">
            Read More
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
