import Link from 'next/link'
import { SEOHead } from '@/components/seo-head'

export default function TestimonialsPage() {
  return (
    <>
      <SEOHead pageType="testimonials" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Success <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real teachers who have transformed their teaching experience with Zaza Promptly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re collecting inspiring stories from teachers across the country. Soon you&apos;ll be able to read detailed testimonials and see the real impact Zaza Promptly is making.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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