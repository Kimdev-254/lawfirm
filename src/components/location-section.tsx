"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
})

export function LocationSection() {
  const [isMounted, setIsMounted] = useState(false)
  const position: [number, number] = [-1.2636, 36.7172] // Coordinates for PPV8+938 Seniors Apartments uthiru cooperation, Rungiri
  const address = "PPV8+938 Seniors Apartments uthiru cooperation, Rungiri"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add form submission logic here
  }

  const handleViewLargerMap = () => {
    window.open(
      `https://www.openstreetmap.org/?mlat=${position[0]}&mlon=${position[1]}#map=15/${position[0]}/${position[1]}`,
      "_blank"
    )
  }

  const handleGetDirections = () => {
    window.open(
      `https://www.openstreetmap.org/directions?engine=osrm_car&route=;${position[0]}%2C${position[1]}`,
      "_blank"
    )
  }

  return (
    <section id="visit-our-office" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Visit our Office
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Map */}
          <div className="space-y-6">
            <div className="h-[300px] md:h-[400px] rounded border border-slate-200 overflow-hidden">
              {isMounted && (
                <MapContainer
                  center={position}
                  zoom={15}
                  style={{ height: "100%", width: "100%" }}
                  zoomControl={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      Kenneth Waweru & Company Advocates
                      <br />
                      {address}
                    </Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
            <p className="text-sm text-slate-600">{address}</p>
            <div className="flex space-x-4">
              <Button
                onClick={handleViewLargerMap}
                variant="outline"
                className="flex-1"
              >
                View Larger Map
              </Button>
              <Button
                onClick={handleGetDirections}
                variant="outline"
                className="flex-1"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Get in touch!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="sr-only">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full min-h-[100px] md:min-h-[150px] border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
