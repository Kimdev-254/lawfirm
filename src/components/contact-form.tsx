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
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    incidentLocation: "",
    subject: "",
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

      if (response.ok) {
        setResponseMessage("Success! Your request has been sent.");
        setMessageType("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          incidentLocation: "",
          subject: "",
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
      setResponseMessage("Network error! Please call us instead.");
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
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[99999]"
          >
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 border border-gray-200">
              <div className={`${messageType === "success" ? "bg-green-500" : "bg-red-500"
                } text-white rounded-full w-8 h-8 flex items-center justify-center`}>
                <CheckCircle size={20} />
              </div>
              <p className="text-black text-sm">{responseMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 md:p-8 shadow-2xl max-w-lg mx-auto text-slate-800"
        >
          <h2 className="text-3xl font-bold font-serif text-center mb-2 text-navy">
            Free Consultation
          </h2>
          <p className="text-center text-slate-500 text-sm mb-6">
            Available 24/7 to assist with your legal needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-slate-700">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-slate-700">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-700">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+254..."
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="incidentLocation" className="text-slate-700">Location</Label>
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, incidentLocation: value })
              }
            >
              <SelectTrigger className="bg-slate-50 border-slate-300 text-slate-900 focus:border-gold focus:ring-gold">
                <SelectValue placeholder="Select Country..." />
              </SelectTrigger>
              <SelectContent className="bg-white text-slate-900 border-slate-200">
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
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-slate-700">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Legal matter..."
              className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-slate-700">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Briefly describe your case..."
              className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-gold focus:ring-gold min-h-[100px]"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gold hover:bg-orange-600 text-white font-semibold py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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