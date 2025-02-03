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

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  incidentLocation: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    incidentLocation: "",
    message: "",
  })
  const [status, setStatus] = useState<string>("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Submitting...")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.status === 200) {
        alert("Your message has been sent successfully!")
        setStatus("")
      } else {
        alert("Error: " + result.error)
        setStatus("")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your form.")
      setStatus("")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto text-slate-700"
      >
        <h2 className="text-2xl font-semibold font-serif text-center mb-2">
          {/* Request a Free Case Review */}
          Get Free Consultation
        </h2>
        <p className="text-center text-sm mb-4">
          We are available to assist you 24 hours a day!
        </p>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name*</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name*</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Phone*</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="info@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Location Row */}
        <div>
          <Label htmlFor="incidentLocation">Location*</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, incidentLocation: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose location..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kenya">Kenya</SelectItem>
              <SelectItem value="uganda">Uganda</SelectItem>
              <SelectItem value="tanzania">Tanzania</SelectItem>
              <SelectItem value="rwanda">Rwanda</SelectItem>
              <SelectItem value="burundi">Burundi</SelectItem>
              <SelectItem value="southSudan">South Sudan</SelectItem>
              <SelectItem value="somalia">Somalia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-800 text-white text-lg py-2"
        >
          Submit
        </Button>

        {/* Contact Info */}
        <div className="text-center mt-4">
          <p className="text-sm text-slate-700">
            Need help right away? Call us!
          </p>
          <p className="font-bold text-blue-600 text-lg">0714521136</p>
        </div>
      </form>
    </motion.div>
  )
}
