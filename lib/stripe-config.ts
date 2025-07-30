// Stripe Configuration
// ===========================================
// 
// STEP 1: Add your Stripe credentials to .env.local:
// STRIPE_SECRET_KEY=sk_test_... or sk_live_...
// STRIPE_PUBLISHABLE_KEY=pk_test_... or pk_live_...
//
// STEP 2: Update the price IDs below with your actual Stripe price IDs
// Get these from: Stripe Dashboard > Products > Select Product > Pricing
//
// STEP 3: Update success/cancel URLs if needed
// ===========================================

export const STRIPE_CONFIG = {
  // ✅ Replace with your actual Stripe keys from .env.local
  SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'sk_test_your_test_key_here',
  PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_your_test_key_here',
  
  // ✅ Replace with your actual price IDs from Stripe dashboard
  // Go to: Stripe Dashboard > Products > Select Product > Pricing
  PRICE_IDS: {
    FREE_TRIAL: 'price_1OqX2X2X2X2X2X2X2X2X2X2X', // Replace with your actual price ID
    MONTHLY: 'price_1OqX2X2X2X2X2X2X2X2X2X2X2', // Replace with your actual price ID
    YEARLY: 'price_1OqX2X2X2X2X2X2X2X2X2X2X3', // Replace with your actual price ID
  },
  
  // ✅ Update these URLs if needed
  SUCCESS_URL: '/thank-you?session_id={CHECKOUT_SESSION_ID}',
  CANCEL_URL: '/pricing',
  
  // UTM parameters for tracking
  UTM_PARAMS: {
    source: 'zaza_promptly_website',
    utm_source: 'direct',
    utm_medium: 'web',
    utm_campaign: 'checkout'
  }
}

// Helper function to get secret key
export function getStripeSecretKey(): string {
  return STRIPE_CONFIG.SECRET_KEY
}

// Helper function to get publishable key
export function getStripePublishableKey(): string {
  return STRIPE_CONFIG.PUBLISHABLE_KEY
}

// Helper function to get price IDs
export function getStripePriceIds() {
  return STRIPE_CONFIG.PRICE_IDS
}

// Helper function to get UTM parameters
export function getStripeUtmParams() {
  return STRIPE_CONFIG.UTM_PARAMS
} 