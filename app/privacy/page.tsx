import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/seo-head'

export default function PrivacyPage() {
  return (
    <>
      <SEOHead pageType="privacy" />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Privacy <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
            
            <div className="space-y-6 text-gray-700">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h3>
                <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features and services.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Cookies and Tracking</h3>
                <p>We use cookies and similar tracking technologies to enhance your experience on our website and to analyze how our services are used.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Your Rights</h3>
                <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Children&apos;s Privacy</h3>
                <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Changes to This Policy</h3>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">9. Contact Us</h3>
                <p>If you have any questions about this privacy policy, please contact us at privacy@zazapromptly.com</p>
              </section>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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