"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto mb-8"
    >
      <Input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-10 pr-4 py-2 w-full bg-white text-slate-800 placeholder-slate-400 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold"
      />
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
        size={20}
      />
    </form>
  )
}
