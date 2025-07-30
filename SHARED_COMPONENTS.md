# Shared Zaza Header and Footer Components

## Overview
This document describes the shared header and footer components implemented for Zaza Promptly, designed to be reusable across different Zaza applications.

## Features Implemented

### ✅ **Header Features**
- **Logo + Branding**: Zaza logo with "Zaza Promptly" text linked to `/`
- **Navigation Menu**: 
  - "Our Solutions" (dropdown with All Products, Zaza Teach, Zaza Inbox)
  - "Why Zaza Promptly?" → `/why-zaza`
  - "About Us" → `/about-us`
  - "Learning Centre" (dropdown with Blog, Free Resources, FAQs)
- **CTA Buttons**: 
  - "Try Zaza Teach" → `https://zazateach.com`
  - "Join Waitlist" → `/shop`
- **Dark Mode Toggle**: Fully functional theme switching
- **Mobile Responsive**: Collapsible mobile menu with all features

### ✅ **Footer Features**
- **Follow Us Section**: Social media icons for TikTok, LinkedIn, and Twitter
- **Company Links**: Zaza Technologies, Zaza Teach, Shop
- **Legal Links**: Terms, Privacy, Contact
- **Responsive Design**: Works on all device sizes

## File Structure

```
components/
├── Header.tsx              # Main header component
├── footer.tsx              # Main footer component
└── stripe-checkout-button.tsx  # CTA button wrapper

lib/
├── shared-config.ts        # Shared configuration
├── brevo-config.ts         # Brevo email form config
└── stripe-checkout.ts      # Stripe checkout utilities

app/
├── shop/page.tsx           # Shop page with Stripe integration
├── terms/page.tsx          # Terms of service page
├── privacy/page.tsx        # Privacy policy page
├── contact/page.tsx        # Contact page with Brevo form
└── thank-you/page.tsx      # Email signup confirmation page
```

## Configuration

### Shared Configuration (`lib/shared-config.ts`)
The shared configuration file contains all the navigation, footer, and company information that can be easily modified:

```typescript
export const ZAZA_SHARED_CONFIG = {
  company: {
    name: "Zaza Technologies UG",
    location: "Berlin, Germany",
    email: {
      support: "support@zazapromptly.com",
      privacy: "privacy@zazapromptly.com"
    },
    phone: "+1 (555) 123-4567"
  },
  
  navigation: {
    logo: { text: "Zaza Promptly", href: "/" },
    mainNav: [...],
    ctaButtons: [...]
  },
  
  footer: {
    socialLinks: [...],
    companyLinks: [...],
    legalLinks: [...]
  }
}
```

### Customization Options

#### 1. **Navigation Links**
Update the `mainNav` array in `shared-config.ts`:

```typescript
mainNav: [
  {
    label: "Our Solutions",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Zaza Teach", href: "https://zazateach.com", external: true }
    ]
  },
  { label: "About Us", href: "/about-us" }
]
```

#### 2. **CTA Buttons**
Modify the `ctaButtons` array:

```typescript
ctaButtons: [
  {
    label: "Try Zaza Teach",
    href: "https://zazateach.com",
    external: true,
    variant: "secondary"
  },
  {
    label: "Join Waitlist",
    href: "/shop",
    variant: "primary"
  }
]
```

#### 3. **Footer Links**
Update social media and company links:

```typescript
footer: {
  socialLinks: [
    {
      platform: "TikTok",
      url: "https://tiktok.com/@zazateach",
      icon: "tiktok",
      ariaLabel: "Follow us on TikTok"
    }
  ],
  companyLinks: [
    { label: "Zaza Technologies", href: "https://zazatechnologies.com", external: true }
  ]
}
```

## Usage Across Apps

### For Other Zaza Applications

1. **Copy Components**: Copy `Header.tsx`, `footer.tsx`, and `stripe-checkout-button.tsx`
2. **Copy Configuration**: Copy `lib/shared-config.ts` and modify as needed
3. **Update Branding**: Change the logo text and links in the config
4. **Customize Colors**: Update the theme configuration for different brand colors

### Example for Zaza Teach
```typescript
// In shared-config.ts for Zaza Teach
navigation: {
  logo: { text: "Zaza Teach", href: "/" },
  mainNav: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" }
  ],
  ctaButtons: [
    { label: "Start Free Trial", href: "/trial", variant: "primary" }
  ]
}
```

## Integration Points

### 1. **Stripe Checkout**
- All "Join Waitlist" and purchase buttons use `StripeCheckoutButton`
- Configured to use placeholder Stripe URL: `https://buy.stripe.com/test_a1b2c3d4e5f6g7h8ii`
- Easy to update to live Stripe integration

### 2. **Brevo Email Forms**
- Contact page uses `BrevoForm` component
- Configured in `lib/brevo-config.ts`
- Supports email validation and success handling

### 3. **Dark Mode**
- Uses `next-themes` for theme management
- Automatically detects system preference
- Persists user choice in localStorage

## Responsive Design

### Mobile Navigation
- Hamburger menu for mobile devices
- Collapsible dropdown menus
- Touch-friendly button sizes
- Optimized spacing for mobile screens

### Footer Layout
- Grid layout that adapts to screen size
- Social icons remain accessible on mobile
- Links stack vertically on smaller screens

## Accessibility Features

- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support for navigation
- **Focus Management**: Proper focus indicators and management
- **Screen Reader Support**: Semantic HTML and proper heading structure
- **Color Contrast**: Meets WCAG accessibility standards

## Performance Optimizations

- **Static Generation**: All pages are statically generated
- **Image Optimization**: Logo uses Next.js Image optimization
- **Code Splitting**: Components are properly code-split
- **Bundle Size**: Minimal impact on overall bundle size

## Testing

### Manual Testing Checklist
- [ ] Header navigation works on desktop and mobile
- [ ] Dark mode toggle functions correctly
- [ ] All external links open in new tabs
- [ ] Footer links navigate to correct pages
- [ ] Social media icons link to correct profiles
- [ ] CTA buttons trigger Stripe checkout
- [ ] Contact form submits successfully
- [ ] Responsive design works on all screen sizes

### Build Verification
```bash
pnpm run build
```
All pages should build successfully without errors.

## Future Enhancements

### Potential Improvements
1. **Multi-language Support**: Add i18n configuration
2. **Analytics Integration**: Add tracking for navigation clicks
3. **A/B Testing**: Support for different header/footer variants
4. **Dynamic Content**: CMS integration for navigation items
5. **Search Functionality**: Add search bar to header
6. **User Authentication**: Add login/logout functionality

### Maintenance
- Regular updates to social media links
- Monitoring of external link validity
- Performance monitoring and optimization
- Accessibility audits and improvements

## Support

For questions or issues with the shared components:
1. Check the configuration in `lib/shared-config.ts`
2. Verify all required pages exist
3. Test the build process
4. Review browser console for errors
5. Contact the development team 