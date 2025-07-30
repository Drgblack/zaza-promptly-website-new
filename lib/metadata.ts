import { Metadata } from 'next'

interface SEOContent {
  title: string
  description: string
  url: string
  keywords: string
}

const seoContent: Record<string, SEOContent> = {
  home: {
    title: "AI Comment Generator for Teachers | Zaza Promptly - Save Hours on Report Writing",
    description: "Save hours with Zaza Promptly – the AI-powered tool that helps teachers write student comments and parent messages faster, better, and stress-free. Trusted by thousands of educators worldwide.",
    url: "https://zazapromptly.com",
    keywords: "AI comment generator, artificial intelligence for teachers, student report writing tool, teacher productivity software, AI for teachers, teacher feedback tool, automated student comments, AI-powered education, ChatGPT alternative for teachers, machine learning education tools, natural language processing for teachers, AI report card generator, teacher time saver, educational AI software, AI teaching assistant, automated feedback generation, AI student assessment, teacher workflow automation, AI-powered grading, intelligent tutoring system",
  },
  features: {
    title: "AI Teacher Tools & Features | Zaza Promptly - Boost Your Teaching Efficiency",
    description: "Discover how Zaza Promptly helps teachers generate report comments, translate messages, and personalize tone — all in seconds. Boost your teaching efficiency with AI-powered tools.",
    url: "https://zazapromptly.com/features",
    keywords: "teacher features, AI comment generation, report writing tools, teacher productivity, educational AI, student feedback tools, teacher software, artificial intelligence features, machine learning tools, AI-powered feedback, natural language processing, automated report writing, AI teaching tools, educational technology features, AI assessment tools, intelligent feedback system, AI grading assistance, teacher automation features, AI communication tools, educational AI features",
  },
  pricing: {
    title: "Affordable Plans for Teachers | Zaza Promptly Pricing - Start Free Today",
    description: "Choose a flexible plan that fits your teaching style. Start free and upgrade anytime. Save time every term with Zaza Promptly's AI-powered tools. No hidden fees.",
    url: "https://zazapromptly.com/pricing",
    keywords: "teacher pricing, affordable education tools, teacher plans, AI tool pricing, education technology cost, teacher software pricing, free trial, AI software pricing, artificial intelligence pricing, machine learning tool cost, AI education pricing, teacher AI subscription, educational technology pricing, AI tool plans, teacher software cost, AI-powered tool pricing, artificial intelligence subscription, machine learning software pricing, AI education cost, teacher automation pricing",
  },
  about: {
    title: "About Zaza Promptly | AI Tools Built by Teachers, for Teachers",
    description: "Zaza Promptly was created by Dr. Greg Blackburn to help teachers thrive — not burn out. Discover the mission behind our AI-powered teaching tools and our commitment to education.",
    url: "https://zazapromptly.com/about",
    keywords: "about Zaza, teacher-founded, Dr. Greg Blackburn, education mission, teacher tools history, AI education company, artificial intelligence company, machine learning education, AI startup, educational technology company, teacher entrepreneur, AI education founder, artificial intelligence mission, machine learning for education, AI teaching company, educational AI startup, teacher technology company, AI education innovation, artificial intelligence education, machine learning teaching tools",
  },
  contact: {
    title: "Contact Zaza Promptly | Get in Touch - Teacher Support Team",
    description: "Have questions about Zaza Promptly? Contact our team of educators and AI experts. We're here to help you succeed and improve your teaching experience.",
    url: "https://zazapromptly.com/contact",
    keywords: "contact Zaza, teacher support, education contact, AI education help, teacher software support, artificial intelligence contact, machine learning support, AI tool contact, artificial intelligence help, machine learning contact, AI education contact, artificial intelligence education support, machine learning education contact, AI teaching contact, educational AI support, artificial intelligence teaching contact, machine learning teaching support, AI tool support, artificial intelligence education contact, machine learning tool help",
  },
  privacy: {
    title: "Privacy Policy | Zaza Promptly - Your Data Security Matters",
    description: "Learn how Zaza Promptly protects your privacy and student data. Our comprehensive privacy policy ensures GDPR and FERPA compliance for educational institutions.",
    url: "https://zazapromptly.com/privacy",
    keywords: "privacy policy, teacher data protection, student privacy, GDPR compliance, FERPA compliance, education privacy, AI privacy, artificial intelligence privacy, machine learning privacy, AI data protection, artificial intelligence data security, machine learning privacy policy, AI education privacy, artificial intelligence education security, machine learning education privacy, AI tool privacy, artificial intelligence tool security, machine learning tool privacy, AI teaching privacy, artificial intelligence teaching security",
  },
  terms: {
    title: "Terms of Service | Zaza Promptly - Fair Terms for Teachers",
    description: "Read our terms of service for Zaza Promptly. Clear, fair terms designed for educators with transparent pricing and usage policies.",
    url: "https://zazapromptly.com/terms",
    keywords: "terms of service, teacher software terms, education software terms, AI tool terms, artificial intelligence terms, machine learning terms, AI education terms, artificial intelligence education terms, machine learning education terms, AI tool service terms, artificial intelligence tool terms, machine learning tool terms, AI teaching terms, artificial intelligence teaching terms, machine learning teaching terms, AI education service terms, artificial intelligence education service, machine learning education service, AI tool service agreement, artificial intelligence tool agreement",
  },
  faqs: {
    title: "Frequently Asked Questions | Zaza Promptly FAQ - Teacher Answers",
    description: "Find answers to common questions about Zaza Promptly. Comprehensive FAQ covering features, pricing, security, and how to get started with AI-powered teaching tools.",
    url: "https://zazapromptly.com/faqs",
    keywords: "teacher FAQ, AI tool questions, education software FAQ, teacher software help, artificial intelligence FAQ, machine learning FAQ, AI education questions, artificial intelligence education FAQ, machine learning education FAQ, AI tool FAQ, artificial intelligence tool questions, machine learning tool FAQ, AI teaching FAQ, artificial intelligence teaching questions, machine learning teaching FAQ, AI education FAQ, artificial intelligence education questions, machine learning education questions, AI tool help, artificial intelligence tool FAQ",
  },
  blog: {
    title: "Teacher Resources & Tips | Zaza Promptly Blog - Education Insights",
    description: "Discover teaching tips, AI education insights, and productivity hacks for educators. Stay updated with the latest in educational technology and teaching best practices.",
    url: "https://zazapromptly.com/blog",
    keywords: "teacher blog, education tips, teaching resources, AI education, teacher productivity, educational technology blog, artificial intelligence blog, machine learning education, AI teaching blog, educational AI insights, artificial intelligence tips, machine learning teaching, AI education resources, artificial intelligence education blog, machine learning for teachers, AI teaching tips, educational technology insights, artificial intelligence teaching, machine learning education blog, AI education best practices",
  },
  freeResources: {
    title: "Free Teacher Resources | Zaza Promptly - Download Templates & Guides",
    description: "Download free teacher resources including AI prompt templates, assessment guides, and productivity tools. Enhance your teaching with our free educational materials.",
    url: "https://zazapromptly.com/free-resources",
    keywords: "free teacher resources, AI prompt templates, assessment guides, teacher productivity tools, free educational materials, teacher templates, AI education resources, free teaching tools, educational downloads, teacher guides, AI templates, free assessment tools, teacher productivity resources, educational templates, free AI tools, teacher downloads, educational resources, free teaching materials, AI education templates, teacher productivity guides",
  },
}

export function generateMetadata(pageType: string = 'home', customTitle?: string, customDescription?: string): Metadata {
  const seo = seoContent[pageType] || seoContent.home
  const title = customTitle || seo.title
  const description = customDescription || seo.description

  return {
    title,
    description,
    keywords: seo.keywords,
    authors: [{ name: 'Zaza Technologies' }],
    creator: 'Zaza Technologies',
    publisher: 'Zaza Technologies',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://zazapromptly.com'),
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: seo.url,
      title,
      description,
      siteName: 'Zaza Promptly',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Zaza Promptly - AI for Teachers',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
      creator: '@zazateach',
      site: '@zazateach',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
} 