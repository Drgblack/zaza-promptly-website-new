import Link from 'next/link'
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/seo-head'

export default function ThankYouPage() {
  return (
    <>
      <SEOHead 
        title="Thank You for Subscribing - Zaza Promptly"
        description="Welcome to the Zaza Promptly community! Get ready for AI-powered teaching insights and tips."
        pageType="waitlist"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Thank You for <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Subscribing!</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Welcome to the Zaza Promptly community! We&apos;re excited to share AI-powered teaching insights with you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Mail className="w-16 h-16 text-green-500" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What&apos;s Next?</h2>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Check Your Email</h3>
                  <p className="text-gray-600">We&apos;ve sent you a confirmation email. Please check your inbox and click the confirmation link to activate your subscription.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Weekly AI Insights</h3>
                  <p className="text-gray-600">You&apos;ll receive our weekly newsletter with AI teaching tips, strategies, and exclusive access to new features.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Join Our Community</h3>
                  <p className="text-gray-600">Connect with other educators who are transforming their teaching with AI-powered tools.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 space-y-4">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              
              <p className="text-sm text-gray-500">
                Didn&apos;t receive the email? Check your spam folder or contact us at support@zazapromptly.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 