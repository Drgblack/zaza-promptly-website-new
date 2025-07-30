'use client'

import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  description: string
  className?: string
}

export function ShareButton({ title, description, className }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <Button 
      variant="outline" 
      className={`border-orange-200 text-orange-600 hover:bg-orange-50 ${className || ''}`}
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share Article
    </Button>
  )
} 