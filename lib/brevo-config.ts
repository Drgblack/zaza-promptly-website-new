// Brevo Configuration
// Update these values with your actual Brevo dashboard settings

export const BREVO_CONFIG = {
  // ✅ Replace with your actual Brevo API key from .env.local
  API_KEY: process.env.BREVO_API_KEY || '',
  
  // ✅ Replace with your actual list ID from .env.local
  DEFAULT_LIST_ID: process.env.BREVO_LIST_ID || "5",
  
  // Optional: Redirect URL after successful submission
  REDIRECT_URL: "/thank-you",
  
  // UTM parameters for tracking
  UTM_PARAMS: {
    source: "website",
    utm_source: "zaza_promptly",
    utm_medium: "web",
    utm_campaign: "email_signup"
  }
}

// Helper function to get API key
export function getBrevoApiKey(): string {
  return BREVO_CONFIG.API_KEY
}

// Helper function to get list ID
export function getBrevoListId(): string {
  return BREVO_CONFIG.DEFAULT_LIST_ID
}

// Helper function to get redirect URL
export function getBrevoRedirectUrl(): string {
  return BREVO_CONFIG.REDIRECT_URL
}

// Helper function to get UTM parameters
export function getBrevoUtmParams(): Record<string, string> {
  return BREVO_CONFIG.UTM_PARAMS
} 