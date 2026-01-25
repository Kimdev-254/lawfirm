"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneCall, MapPin, Clock, Copy, Navigation } from "lucide-react";

export function LocationSection() {
  const position = "-1.108732132958032,36.63725937038771"; 
  const address = "Kimuchu Complex Building, 4th Floor";
  const phoneNumber = "0714521136";
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="our-office-location" className="py-16 bg-slate-200 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-slate-900 mb-12">
          Our Office Location
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Call Us */}
              <div className="flex items-center space-x-4">
                <PhoneCall size={24} className="text-gold" />
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">{phoneNumber}</p>
                  <button
                    onClick={copyPhoneNumber}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                  >
                    <Copy size={16} className="mr-1" />
                    {copied ? "Copied!" : "Copy Number"}
                  </button>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold text-gold">Call us for an appointment</span>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-gold" />
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-600">{address}</p>
                  <Link
                    href={`https://maps.google.com/?q=${position}`}
                    target="_blank"
                    className="text-gold hover:underline text-sm"
                  >
                    View on Google Maps
                  </Link>
                  <Link
                    href={`https://www.google.com/maps/dir/?api=1&destination=${position}`}
                    target="_blank"
                    className="mt-2 bg-gold text-white text-sm px-3 py-1.5 rounded-md hover:bg-gold transition flex items-center w-max"
                  >
                    <Navigation size={16} className="mr-1" /> Get Directions
                  </Link>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center space-x-4">
                <Clock size={24} className="text-gold" />
                <div>
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: <span className="font-semibold">8 AM - 4 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="overflow-hidden shadow-lg rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0713255475653!2d36.63725937038771!3d-1.108732132958032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2773dd82ed11%3A0x92f4c2e4fd88ea33!2sKimuchu%20Complex%20Building!5e0!3m2!1sen!2ske!4v1742847869421!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
