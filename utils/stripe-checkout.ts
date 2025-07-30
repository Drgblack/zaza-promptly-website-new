import { getStripePriceIds } from '@/lib/stripe-config';

// Stripe checkout configuration
export const STRIPE_PRICE_IDS = getStripePriceIds();

export interface StripeCheckoutOptions {
  priceId?: string;
  email?: string;
  successUrl?: string;
  cancelUrl?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export async function createStripeCheckoutSession(options: StripeCheckoutOptions = {}) {
  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: options.priceId || STRIPE_PRICE_IDS.FREE_TRIAL,
        email: options.email,
        successUrl: options.successUrl,
        cancelUrl: options.cancelUrl,
        utm_source: options.utm_source || 'direct',
        utm_medium: options.utm_medium || 'web',
        utm_campaign: options.utm_campaign || 'checkout',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Stripe checkout error:', error);
    throw error;
  }
}

export async function redirectToStripeCheckout(options: StripeCheckoutOptions = {}) {
  try {
    const { url } = await createStripeCheckoutSession(options);
    if (url) {
      window.location.href = url;
    } else {
      throw new Error('No checkout URL received');
    }
  } catch (error) {
    console.error('Failed to redirect to Stripe checkout:', error);
    // Fallback to a generic checkout page or show error
    alert('Unable to start checkout. Please try again later.');
  }
}

export function handleStripeCheckout(e?: React.MouseEvent, options: StripeCheckoutOptions = {}) {
  e?.preventDefault();
  redirectToStripeCheckout(options);
} 