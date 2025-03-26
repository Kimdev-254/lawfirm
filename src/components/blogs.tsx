"use client";

import Link from "next/link";

const articles = [
    {
      category: "Finance & Law",
      title: "Unclaimed Financial Assets: What You Need to Know",
      date: "11/27/24",
      author: "Kenneth Waweru Advocates",
      href:"/articles"
    },
    {
      category: "Property Law",
      title: "Understanding Land Ownership and Title Deeds in Kenya",
      date: "10/15/24",
      author: "Kenneth Waweru Advocates",
      href:"/articles"
},
    {
      category: "Employment Law",
      title: "Employment Law in Kenya: Your Rights & Responsibilities",
      date: "09/05/24",
      author: "Kenneth Waweru Advocates",
      href:"/articles"},
  ];

export default function Blogs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-12">
          Related Articles, Guides, And News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} href={article.href} passHref>
              <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer">
                <p className="text-sm font-semibold text-orange-600 uppercase mb-2">
                  {article.category}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 hover:underline">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Updated {article.date}
                </p>
                <p className="text-gray-500 text-sm">By {article.author}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="text-orange-600 text-lg font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
