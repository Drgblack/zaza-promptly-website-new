# Brevo Email Form Setup Guide

## Overview
The Zaza Promptly website now includes fully functional Brevo email collection forms with validation, success handling, and optional redirect functionality.

## What's Been Implemented

### ✅ **Features**
- **Email Validation**: Real-time email format validation
- **Loading States**: Visual feedback during form submission
- **Success Messages**: Confirmation after successful signup
- **Error Handling**: Clear error messages for failed submissions
- **Optional Redirect**: Automatic redirect to thank you page
- **UTM Tracking**: Built-in UTM parameters for analytics
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 📍 **Form Locations**
1. **Hero Section**: "Get AI Teaching Tips Delivered"
2. **Final CTA Section**: "Stay Updated" newsletter signup

## Configuration Steps

### 1. Update Brevo Form Action URL
Edit `lib/brevo-config.ts` and replace the placeholder URL:

```typescript
export const BREVO_CONFIG = {
  // Replace with your actual Brevo form action URL from your dashboard
  FORM_ACTION: "https://app.brevo.com/forms/submit/YOUR-ACTUAL-FORM-ID",
  
  // Replace with your actual list ID
  DEFAULT_LIST_ID: "YOUR-ACTUAL-LIST-ID",
  
  // Optional: Customize redirect URL
  REDIRECT_URL: "/thank-you",
  
  // UTM parameters for tracking
  UTM_PARAMS: {
    source: "website",
    utm_source: "zaza_promptly",
    utm_medium: "web",
    utm_campaign: "email_signup"
  }
}
```

### 2. Get Your Brevo Form Action URL
1. Log into your Brevo dashboard
2. Go to **Forms** → **Your Form**
3. Click **Embed** or **Integration**
4. Copy the form action URL (looks like: `https://app.brevo.com/forms/submit/abc123def456`)

### 3. Get Your List ID
1. In Brevo dashboard, go to **Contacts** → **Lists**
2. Find your target list and copy the List ID
3. Update `DEFAULT_LIST_ID` in the config

### 4. Add Hidden Fields (Optional)
If your Brevo form requires additional hidden fields, add them to the form submission in `components/brevo-form.tsx`:

```typescript
// Add any additional hidden fields from your Brevo dashboard
formData.append("custom_field", "value")
formData.append("list_id", "additional_list_id")
```

## Form Customization

### Customizing Form Text
You can customize the form text by passing props:

```tsx
<BrevoForm 
  placeholder="Enter your email for AI teaching tips"
  buttonText="Get AI Tips"
  listId="2"
  className=""
/>
```

### Available Props
- `placeholder`: Input field placeholder text
- `buttonText`: Submit button text
- `listId`: Override default list ID
- `redirectUrl`: Override default redirect URL
- `className`: Additional CSS classes

## Testing

### 1. Test Form Submission
1. Fill out the email form with a valid email
2. Submit the form
3. Check for success message
4. Verify email is added to your Brevo list

### 2. Test Validation
1. Try submitting with invalid email format
2. Try submitting with empty field
3. Verify error messages appear

### 3. Test Redirect (Optional)
1. Submit form successfully
2. Wait 2 seconds for automatic redirect to `/thank-you`
3. Verify thank you page loads correctly

## Troubleshooting

### Form Not Submitting
- Check that `FORM_ACTION` URL is correct
- Verify `list_id` exists in your Brevo account
- Check browser console for errors

### Emails Not Arriving
- Check spam folder
- Verify email confirmation settings in Brevo
- Check Brevo dashboard for form submissions

### Redirect Not Working
- Ensure `/thank-you` page exists
- Check that `REDIRECT_URL` is set correctly
- Verify no JavaScript errors in console

## Files Modified

- `components/brevo-form.tsx` - Main form component
- `lib/brevo-config.ts` - Configuration file
- `components/email-signup-section.tsx` - Hero section form
- `components/final-cta-section.tsx` - Final CTA form
- `app/thank-you/page.tsx` - Thank you page

## Next Steps

1. **Update Configuration**: Replace placeholder values with your actual Brevo settings
2. **Test Forms**: Verify both forms work correctly
3. **Customize Styling**: Adjust colors and styling as needed
4. **Add Analytics**: Integrate with Google Analytics for form tracking
5. **Set Up Automation**: Configure Brevo workflows for new subscribers

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify Brevo dashboard settings
3. Test with a simple email address
4. Contact support if problems persist 