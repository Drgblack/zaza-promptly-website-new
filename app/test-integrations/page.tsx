import { StripeCheckoutButton } from "@/components/stripe-checkout-button"
import { BrevoForm } from "@/components/brevo-form"

export default function TestIntegrationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Integration <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Tests</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test Stripe checkout and Brevo email subscription integrations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Stripe Test */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stripe Checkout Test</h2>
            <p className="text-gray-600 mb-6">
              Test the Stripe checkout flow with test card: 4242 4242 4242 4242
            </p>
            <StripeCheckoutButton
              className="w-full"
              priceId="price_1OqX2X2X2X2X2X2X2X2X2X2X" // Test price ID
            >
              Test Stripe Checkout
            </StripeCheckoutButton>
          </div>

          {/* Brevo Test */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brevo Email Test</h2>
            <p className="text-gray-600 mb-6">
              Test email subscription to list ID: 5
            </p>
            <BrevoForm
              className="w-full"
              placeholder="Enter test email"
              buttonText="Test Email Subscription"
              listId="5"
            />
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Instructions</h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800">Stripe Test:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                              <li>Click &quot;Test Stripe Checkout&quot; button</li>
              <li>Should redirect to Stripe-hosted checkout</li>
              <li>Use test card: 4242 4242 4242 4242</li>
              <li>Any future expiry date and CVC</li>
              <li>Check console for &quot;Connected Successfully&quot; message</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Brevo Test:</h3>
              <ul className="list-disc list-inside ml-4 mt-2">
                              <li>Enter a test email address</li>
              <li>Click &quot;Test Email Subscription&quot;</li>
              <li>Should show success message</li>
              <li>Check Brevo dashboard for email in list ID 5</li>
              <li>Check console for API response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 