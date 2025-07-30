import Link from 'next/link'

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Zaza Promptly and how it can help transform your teaching experience.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re compiling the most frequently asked questions to help you get the most out of Zaza Promptly. Check back soon for comprehensive answers.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 