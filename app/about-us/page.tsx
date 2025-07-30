import Link from 'next/link'
import { SEOHead } from '@/components/seo-head'

export default function AboutUsPage() {
  return (
    <>
      <SEOHead pageType="about" />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission to empower educators with AI-powered tools that make teaching more joyful and effective.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re crafting our story to share with you. Learn about our team, mission, and the journey that led us to create Zaza Promptly.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 