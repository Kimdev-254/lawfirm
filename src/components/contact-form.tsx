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

const kenyanCounties = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Machakos",
  "Kisii",
  "Thika",
  "Malindi",
  "Kitale",
  "Garissa",
  "Kakamega",
  "Nyeri",
  "Meru",
  "Lamu",
  "Nanyuki",
  "Kilifi",
  "Voi",
  "Naivasha",
  "Embu",
  "Bungoma",
  "Athi River",
  "Bomet",
  "Kericho",
  "Ol Kalou",
  "Ngong",
  "Kitui",
  "Limuru",
  "Isiolo",
  "Kerugoya",
  "Kikuyu",
  "Ruiru",
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
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Get a Free Consultation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name" className="text-slate-700">
              Name
            </Label>
            <Input
              id="name"
              className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-700">
              Email
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
              Phone
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
            <Label htmlFor="county" className="text-slate-700">
              County
            </Label>
            <Select>
              <SelectTrigger className="bg-white border-slate-300 text-slate-800">
                <SelectValue placeholder="Select your county" />
              </SelectTrigger>
              <SelectContent>
                {kenyanCounties.map((county) => (
                  <SelectItem key={county} value={county.toLowerCase()}>
                    {county}
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
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  )
}
