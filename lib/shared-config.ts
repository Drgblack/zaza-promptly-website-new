// Shared Configuration for Zaza Apps
// This file contains shared configuration for header and footer components

export interface NavItem {
  label: string
  href?: string
  external?: boolean
  children?: NavItem[]
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  ariaLabel: string
}

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export const ZAZA_SHARED_CONFIG = {
  // Company Information
  company: {
    name: "Zaza Technologies UG",
    location: "Berlin, Germany",
    email: {
      support: "support@zazapromptly.com",
      privacy: "privacy@zazapromptly.com"
    },
    phone: "+1 (555) 123-4567",
    phoneHours: "Mon-Fri 9AM-6PM EST"
  },

  // Navigation Configuration
  navigation: {
    logo: {
      text: "Zaza Promptly",
      href: "/",
      image: "/zaza-logo.png"
    },
    
    mainNav: [
      {
        label: "Our Solutions",
        children: [
          { label: "All Products", href: "/products" },
          { label: "Zaza Teach", href: "https://zazateach.com", external: true },
          { label: "Zaza Inbox", href: "https://zazainbox.com", external: true }
        ]
      },
      { label: "Why Zaza Promptly?", href: "/why-zaza" },
      { label: "About Us", href: "/about-us" },
      {
        label: "Learning Centre",
        children: [
          { label: "Blog", href: "/blog" },
          { label: "Free Resources", href: "/free-resources" },
          { label: "FAQs", href: "/faqs" }
        ]
      }
    ] as NavItem[],

    ctaButtons: [
      {
        label: "Try Zaza Teach",
        href: "https://zazateach.com",
        external: true,
        variant: "secondary" as const
      },
      {
        label: "Join Waitlist",
        href: "/shop",
        variant: "primary" as const
      }
    ]
  },

  // Footer Configuration
  footer: {
    socialLinks: [
      {
        platform: "TikTok",
        url: "https://tiktok.com/@zazateach",
        icon: "tiktok",
        ariaLabel: "Follow us on TikTok"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/zaza-technologies/",
        icon: "linkedin",
        ariaLabel: "Follow us on LinkedIn"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/zazatechnologies",
        icon: "twitter",
        ariaLabel: "Follow us on X (Twitter)"
      }
    ] as SocialLink[],

    companyLinks: [
      { label: "Zaza Technologies", href: "https://zazatechnologies.com", external: true },
      { label: "Zaza Teach", href: "https://zazateach.com", external: true },
      { label: "Shop", href: "/shop" }
    ] as FooterLink[],

    legalLinks: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" }
    ] as FooterLink[]
  },

  // Theme Configuration
  theme: {
    colors: {
      primary: {
        from: "from-purple-500",
        to: "to-pink-500",
        hover: {
          from: "hover:from-purple-600",
          to: "hover:to-pink-600"
        }
      },
      secondary: {
        from: "from-green-500",
        to: "to-emerald-500",
        hover: {
          from: "hover:from-green-600",
          to: "hover:to-emerald-600"
        }
      }
    }
  }
}

// Helper functions for shared components
export function getNavigationConfig() {
  return ZAZA_SHARED_CONFIG.navigation
}

export function getFooterConfig() {
  return ZAZA_SHARED_CONFIG.footer
}

export function getCompanyInfo() {
  return ZAZA_SHARED_CONFIG.company
}

export function getThemeConfig() {
  return ZAZA_SHARED_CONFIG.theme
}

// Utility function to check if a link is external
export function isExternalLink(href: string): boolean {
  return href.startsWith('http://') || href.startsWith('https://')
}

// Utility function to get proper link props
export function getLinkProps(href: string, external?: boolean) {
  const isExternal = external || isExternalLink(href)
  
  return {
    href,
    ...(isExternal && {
      target: "_blank",
      rel: "noopener noreferrer"
    })
  }
} 