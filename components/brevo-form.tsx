"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle, Mail } from "lucide-react"
import { BREVO_CONFIG } from "@/lib/brevo-config"

interface BrevoFormProps {
  className?: string
  placeholder?: string
  buttonText?: string
  listId?: string
  redirectUrl?: string
}

export function BrevoForm({ 
  className = "", 
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  listId = "2", // Default list ID - replace with your actual list ID
  redirectUrl = "/thank-you" // Optional redirect URL
}: BrevoFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Get Brevo configuration from environment variables

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setErrorMessage("Please enter your email address")
      setStatus("error")
      return
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address")
      setStatus("error")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      // Use Brevo API to add contact to list
      const response = await fetch('/api/brevo-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listId: listId || BREVO_CONFIG.DEFAULT_LIST_ID,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        
        // Optional: Redirect after successful submission
        const finalRedirectUrl = redirectUrl || BREVO_CONFIG.REDIRECT_URL
        if (finalRedirectUrl) {
          setTimeout(() => {
            window.location.href = finalRedirectUrl
          }, 2000)
        }
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (status === "error") {
      setStatus("idle")
      setErrorMessage("")
    }
  }

  if (status === "success") {
    return (
      <div className={`w-full max-w-[500px] mx-auto ${className}`}>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you for subscribing!</h3>
          <p className="text-green-600">
            We&apos;ve sent you a confirmation email. Please check your inbox.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full max-w-[500px] mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={placeholder}
            className={`pl-10 pr-4 py-3 text-base ${
              status === "error" 
                ? "border-red-300 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            }`}
            disabled={status === "loading"}
            aria-describedby={status === "error" ? "email-error" : undefined}
          />
        </div>
        
        {status === "error" && (
          <div className="flex items-center space-x-2 text-red-600 text-sm" id="email-error">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === "loading" ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Subscribing...</span>
            </div>
          ) : (
            buttonText
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By subscribing, you agree to receive marketing emails from Zaza Promptly. 
          You can unsubscribe at any time.
        </p>
      </form>
    </div>
  )
} 