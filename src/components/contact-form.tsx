"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.4 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-md"
    >
      <form className="space-y-4">
        <div className="space-y-1.5">
          <Input
            placeholder="Your Name*"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11"
          />
        </div>
        <div className="space-y-1.5">
          <Input
            type="email"
            placeholder="Your Email*"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11"
          />
        </div>
        <div className="space-y-1.5">
          <Input
            type="tel"
            placeholder="Phone Number*"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-11"
          />
        </div>
        <div className="space-y-1.5">
          <Textarea
            placeholder="How can we help you?*"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px] resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  )
}
