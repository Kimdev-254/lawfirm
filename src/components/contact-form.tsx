"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const country = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "South Sudan",
  "Somalia",
  "Ethiopia",
  "Eritrea",
  "Djibouti",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Here you would typically send the form data to your server
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.7 }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-1 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold font-serif text-slate-950 mb-6 mr-5">
          Request a Free Case Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-slate-700">
              First Name*
            </Label>
            <Input
              id="firstName"
              className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400"
              placeholder="first name"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-slate-700">
              Last Name*
            </Label>
            <Input
              id="lastName"
              className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400"
              placeholder="last name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-700">
              Email*
            </Label>
            <Input
              id="email"
              type="email"
              className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-slate-700">
              Phone*
            </Label>
            <Input
              id="phone"
              type="tel"
              className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400"
              placeholder="Your phone number"
              required
            />
          </div>
          <div>
            <Label htmlFor="country" className="text-slate-700">
              Country
            </Label>
            <Select>
              <SelectTrigger className="bg-white border-slate-300 text-slate-800">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {country.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="text-slate-700">
            Message
          </Label>
          <Textarea
            id="message"
            className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400 min-h-[100px]"
            placeholder="How can we help you?"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-800 text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </motion.div>
  )
}
