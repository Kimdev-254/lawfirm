"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Scale, Send, X, User, Bot } from "lucide-react"
import ErrorBoundary from "./error-boundary"

type Message = {
  text: string
  isUser: boolean
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() || isLoading) return

      const userMessage: Message = { text: input, isUser: true }
      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch("/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        if (data.error) {
          throw new Error(data.error)
        }
        const botMessage: Message = { text: data.reply, isUser: false }
        setMessages((prev) => [...prev, botMessage])
      } catch (error) {
        console.error("Error in chatbot:", error)
        const errorMessage: Message = {
          text:
            error instanceof Error
              ? error.message
              : "Sorry, I encountered an error. Please try again.",
          isUser: false,
        }
        setMessages((prev) => [...prev, errorMessage])
      } finally {
        setIsLoading(false)
      }
    },
    [input, isLoading]
  )

  if (!isClient) {
    return null
  }

  return (
    <ErrorBoundary>
      <div className="fixed bottom-4 right-4 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-16 h-16 bg-slate-800 hover:bg-slate-700 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            <Scale size={28} className="text-orange-500" />
          </Button>
        )}
        {isOpen && (
          <div className="bg-slate-900 rounded-lg shadow-xl w-80 sm:w-96 flex flex-col h-[500px] border border-slate-700">
            <div className="p-4 bg-slate-800 text-white rounded-t-lg flex justify-between items-center border-b border-slate-700">
              <h3 className="font-bold text-lg flex items-center">
                <Scale size={24} className="text-orange-500 mr-2" />
                Legal Assistant
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white hover:bg-slate-700 rounded-full"
              >
                <X size={20} />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[75%] ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 rounded-full p-2 ${
                        message.isUser ? "bg-orange-500" : "bg-slate-700"
                      }`}
                    >
                      {message.isUser ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.isUser
                          ? "bg-orange-500 text-white"
                          : "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-slate-700"
            >
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Ask a legal question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:ring-orange-500 focus:border-orange-500"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isLoading}
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}
