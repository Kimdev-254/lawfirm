"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-slate-900">
          Request a Free Case Review
        </h2>
        <p className="text-center text-slate-600">
          We are available to assist you 24 hours a day!
        </p>
        <form className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name*</Label>
              <Input id="first-name" placeholder="First Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name*</Label>
              <Input id="last-name" placeholder="Last Name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              placeholder="info@gmail.com"
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="resident">Are you a Texas Resident?*</Label>
              <Select>
                <SelectTrigger id="resident">
                  <SelectValue placeholder="Choose..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Incident Location*</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Choose location..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mcallen">McAllen</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                  <SelectItem value="houston">Houston</SelectItem>
                  <SelectItem value="dallas">Dallas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your case..." />
          </div>
          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Submit
          </Button>
        </form>
        <div className="text-center text-sm text-slate-500">
          Need help right now? Call us!
          <div className="text-orange-600 font-semibold">(956) 420-6492</div>
        </div>
      </div>
    </div>
  )
}
