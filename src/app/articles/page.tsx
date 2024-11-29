"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const articles = [
  {
    title: "Understanding Personal Injury Claims",
    excerpt:
      "Learn about the key elements of personal injury claims and how to protect your rights.",
    date: "2024-03-15",
  },
  {
    title: "The Importance of Estate Planning",
    excerpt:
      "Discover why estate planning is crucial for securing your family's future.",
    date: "2024-03-10",
  },
  {
    title: "Navigating Divorce Proceedings",
    excerpt: "A comprehensive guide to the divorce process and what to expect.",
    date: "2024-03-05",
  },
  {
    title: "Criminal Defense Strategies",
    excerpt: "Explore common defense strategies used in criminal cases.",
    date: "2024-02-28",
  },
  {
    title: "Business Law: Protecting Your Company",
    excerpt:
      "Essential legal considerations for business owners and entrepreneurs.",
    date: "2024-02-20",
  },
  {
    title: "Workers' Compensation: Know Your Rights",
    excerpt:
      "An overview of workers' compensation laws and how to file a claim.",
    date: "2024-02-15",
  },
]

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Legal Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                {article.excerpt}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{article.date}</span>
              <Button variant="outline" asChild>
                <Link href={`/articles/${index + 1}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
