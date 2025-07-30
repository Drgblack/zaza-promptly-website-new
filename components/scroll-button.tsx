"use client"

import { Button } from "@/components/ui/button"
import { ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function ScrollButton({ children, onClick, ...props }: ScrollButtonProps) {
  const handleClick = onClick || (() => document.getElementById('snippets')?.scrollIntoView({ behavior: 'smooth' }));
  
  return (
    <Button
      {...props}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
} 