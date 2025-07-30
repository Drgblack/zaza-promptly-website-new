# Stripe Setup Guide

## Step 1: Get Your Stripe Credentials

### 1.1 Get API Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to **Developers > API Keys**
3. Copy your **Secret key** and **Publishable key**
4. For testing, use keys that start with `sk_test_` and `pk_test_`
5. For production, use keys that start with `sk_live_` and `pk_live_`

### 1.2 Create Products and Prices
1. Go to **Products** in your Stripe Dashboard
2. Click **Add Product**
3. Create products for:
   - **Zaza Promptly Monthly** ($X/month)
   - **Zaza Promptly Annual** ($X/year) 
   - **Zaza Promptly Free Trial** (if applicable)
4. For each product, note the **Price ID** (starts with `price_`)

## Step 2: Configure Environment Variables

### 2.1 Create .env.local file
Create a file called `.env.local` in your project root:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Optional: Brevo API Key (if using Brevo forms)
BREVO_API_KEY=your_brevo_api_key_here
```

### 2.2 Update lib/stripe-config.ts
Replace the placeholder price IDs with your actual ones:

```typescript
PRICE_IDS: {
  FREE_TRIAL: 'price_1ABC123...', // Your actual free trial price ID
  MONTHLY: 'price_1DEF456...',    // Your actual monthly price ID
  YEARLY: 'price_1GHI789...',     // Your actual yearly price ID
},
```

## Step 3: Deploy to Vercel (if using Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings > Environment Variables**
3. Add the same environment variables:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
   - `BREVO_API_KEY` (if applicable)

## Step 4: Test the Checkout Flow

1. Start your development server: `pnpm dev`
2. Navigate to your site
3. Click any "Start Free Trial" or "Buy Now" button
4. You should be redirected to Stripe's checkout page
5. Complete a test payment using Stripe's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **Requires Authentication**: `4000 0025 0000 3155`

## Test Card Numbers

Use these test card numbers for testing:

| Card Number | Description |
|-------------|-------------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Declined payment |
| `4000 0025 0000 3155` | Requires authentication |
| `4000 0000 0000 9995` | Insufficient funds |

**Expiry Date**: Any future date (e.g., 12/25)  
**CVC**: Any 3 digits (e.g., 123)  
**ZIP**: Any 5 digits (e.g., 12345)

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Check that your `STRIPE_SECRET_KEY` is correct
   - Ensure you're using test keys for development

2. **"Price not found" error**
   - Verify your price IDs in `lib/stripe-config.ts`
   - Check that the price exists in your Stripe dashboard

3. **Checkout page not loading**
   - Check your `STRIPE_PUBLISHABLE_KEY`
   - Ensure your domain is allowed in Stripe settings

4. **Environment variables not working**
   - Restart your development server after adding `.env.local`
   - Check that the variable names match exactly

## Security Notes

- ✅ Never commit `.env.local` to version control
- ✅ Use test keys for development
- ✅ Use live keys only in production
- ✅ Keep your secret key secure and private
- ✅ The publishable key is safe to expose in client-side code 