import Link from 'next/link'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import { StripeCheckoutButton } from '@/components/stripe-checkout-button'
import { SEOHead } from '@/components/seo-head'

export default function ShopPage() {
  return (
    <>
      <SEOHead pageType="waitlist" />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Zaza <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Shop</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get access to Zaza Promptly and transform your teaching experience with AI-powered tools.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Free Trial */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Free Trial</h3>
                <p className="text-gray-600 mb-6">Try Zaza Promptly free for 14 days. No credit card required.</p>
                <StripeCheckoutButton 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                </StripeCheckoutButton>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro Plan</h3>
                <p className="text-gray-600 mb-6">Full access to all features. Cancel anytime.</p>
                <StripeCheckoutButton 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Pro Access
                </StripeCheckoutButton>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 