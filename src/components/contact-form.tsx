"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  incidentLocation: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    incidentLocation: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage("Success! Your request has been sent.");
        setMessageType("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          incidentLocation: "",
          message: "",
        });
      } else {
        setResponseMessage("Error! Please try again.");
        setMessageType("error");
      }

      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setResponseMessage("❌ Network error! Please call us instead.");
      setMessageType("error");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]"
          >
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 border border-gray-200">
              <div className={`${
                messageType === "success" ? "bg-green-500" : "bg-red-500"
              } text-white rounded-full w-8 h-8 flex items-center justify-center`}>
                <CheckCircle size={20} />
              </div>
              <p className="text-black text-sm">{responseMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            Get Free Consultation
          </h2>
          <p className="text-center text-sm mb-4">
            We are available to assist you 24 hours a day!
          </p>

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

          <div>
            <Label htmlFor="incidentLocation">Country*</Label>
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

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-800 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </motion.div>
    </>
  );
}