"use client"

import React, { ErrorInfo } from "react"
import { AlertTriangle } from "lucide-react"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-900 border border-red-700 text-red-100 rounded-lg flex items-start space-x-2">
          <AlertTriangle className="flex-shrink-0 w-5 h-5 mt-0.5" />
          <div>
            <h2 className="text-lg font-bold mb-2">
              Oops, there was an error!
            </h2>
            <p>{this.state.error?.message || "Something went wrong."}</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
