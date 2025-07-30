import { StripeTest } from '@/components/stripe-test'
import { SEOHead } from '@/components/seo-head'

export default function StripeTestPage() {
  return (
    <>
      <SEOHead 
        title="Stripe Integration Test - Zaza Promptly"
        description="Test your Stripe checkout integration before going live"
        pageType="stripe_test"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <StripeTest />
      </div>
    </>
  )
} 