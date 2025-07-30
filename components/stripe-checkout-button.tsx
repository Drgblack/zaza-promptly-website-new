"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"
import { handleStripeCheckout, StripeCheckoutOptions } from "@/utils/stripe-checkout"

interface StripeCheckoutButtonProps extends ButtonProps {
  children: React.ReactNode
  priceId?: string
  email?: string
  successUrl?: string
  cancelUrl?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
}

export function StripeCheckoutButton({ 
  children, 
  priceId,
  email,
  successUrl,
  cancelUrl,
  utm_source,
  utm_medium,
  utm_campaign,
  ...props 
}: StripeCheckoutButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    const options: StripeCheckoutOptions = {
      priceId,
      email,
      successUrl,
      cancelUrl,
      utm_source,
      utm_medium,
      utm_campaign,
    }
    
    handleStripeCheckout(e, options)
  }

  return (
    <Button
      {...props}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
} 