"use client"

import { useState } from 'react'
import { StripeCheckoutButton } from './stripe-checkout-button'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export function StripeTest() {
  const [testStatus, setTestStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const testStripeConnection = async () => {
    setTestStatus('loading')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'GET',
      })
      
      if (response.ok) {
        const data = await response.json()
        console.log('Stripe API response:', data)
        setTestStatus('success')
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Stripe test error:', error)
      setTestStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Stripe Integration Test
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your Stripe checkout integration before going live
        </p>
      </div>

      {/* Connection Test */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            API Connection Test
          </CardTitle>
          <CardDescription>
            Verify that your Stripe API keys are working correctly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button 
              onClick={testStripeConnection}
              disabled={testStatus === 'loading'}
              className="flex items-center gap-2"
            >
              {testStatus === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
              Test Stripe Connection
            </Button>
            
            {testStatus === 'success' && (
              <Badge variant="default" className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Connected Successfully
              </Badge>
            )}
            
            {testStatus === 'error' && (
              <Badge variant="destructive">
                <AlertCircle className="w-3 h-3 mr-1" />
                Connection Failed
              </Badge>
            )}
          </div>
          
          {testStatus === 'error' && errorMessage && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800 font-medium">Error:</p>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Checkout Test Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Checkout Flow Tests</CardTitle>
          <CardDescription>
            Test different checkout scenarios with Stripe test cards
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Free Trial</h4>
              <StripeCheckoutButton 
                priceId="price_1OqX2X2X2X2X2X2X2X2X2X2X"
                utm_campaign="test_free_trial"
                className="w-full"
              >
                Start Free Trial
              </StripeCheckoutButton>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Monthly Plan</h4>
              <StripeCheckoutButton 
                priceId="price_1OqX2X2X2X2X2X2X2X2X2X2X2"
                utm_campaign="test_monthly"
                className="w-full"
              >
                Subscribe Monthly
              </StripeCheckoutButton>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Annual Plan</h4>
              <StripeCheckoutButton 
                priceId="price_1OqX2X2X2X2X2X2X2X2X2X2X3"
                utm_campaign="test_annual"
                className="w-full"
              >
                Subscribe Annual
              </StripeCheckoutButton>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Card Information */}
      <Card>
        <CardHeader>
          <CardTitle>Test Card Numbers</CardTitle>
          <CardDescription>
            Use these test card numbers to simulate different payment scenarios
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-green-700">Successful Payment</h4>
              <code className="block p-2 bg-gray-100 rounded text-sm">
                4242 4242 4242 4242
              </code>
              <p className="text-xs text-gray-600">Any future expiry date, any CVC</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-red-700">Declined Payment</h4>
              <code className="block p-2 bg-gray-100 rounded text-sm">
                4000 0000 0000 0002
              </code>
              <p className="text-xs text-gray-600">Simulates a declined card</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-yellow-700">Requires Authentication</h4>
              <code className="block p-2 bg-gray-100 rounded text-sm">
                4000 0025 0000 3155
              </code>
              <p className="text-xs text-gray-600">Triggers 3D Secure flow</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-red-700">Insufficient Funds</h4>
              <code className="block p-2 bg-gray-100 rounded text-sm">
                4000 0000 0000 9995
              </code>
              <p className="text-xs text-gray-600">Simulates insufficient funds</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Status */}
      <Card>
        <CardHeader>
          <CardTitle>Configuration Status</CardTitle>
          <CardDescription>
            Check if your Stripe configuration is complete
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Environment Variables</span>
              <Badge variant={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? "default" : "secondary"}>
                {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? "Configured" : "Missing"}
              </Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">Price IDs</span>
              <Badge variant="secondary">Check lib/stripe-config.ts</Badge>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm">API Endpoint</span>
              <Badge variant="default">/api/stripe/checkout</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 