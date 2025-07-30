import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'
import { SEOHead } from '@/components/seo-head'

export default function TermsPage() {
  return (
    <>
      <SEOHead pageType="terms" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Terms of <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Service</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using Zaza Promptly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h2>
            
            <div className="space-y-6 text-gray-700">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h3>
                <p>By accessing and using Zaza Promptly, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of Zaza Promptly for personal, non-commercial transitory viewing only.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Disclaimer</h3>
                <p>The materials on Zaza Promptly are provided on an &apos;as is&apos; basis. Zaza Technologies makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Limitations</h3>
                <p>In no event shall Zaza Technologies or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Zaza Promptly.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Privacy Policy</h3>
                <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of Zaza Promptly, to understand our practices.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Revisions and Errata</h3>
                <p>The materials appearing on Zaza Promptly could include technical, typographical, or photographic errors. Zaza Technologies does not warrant that any of the materials on Zaza Promptly are accurate, complete or current.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Links</h3>
                <p>Zaza Technologies has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zaza Technologies of the site.</p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Modifications</h3>
                <p>Zaza Technologies may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
              </section>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
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