'use client';

import Link from 'next/link';
import { BrevoForm } from './brevo-form';
import { StripeCheckoutButton } from './stripe-checkout-button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Zaza Promptly
                </Link>
              </li>
              <li>
                <a href="https://zazateach.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Zaza Teach
                </a>
              </li>
              <li>
                <a href="https://zazainbox.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Zaza Inbox
                </a>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/free-resources" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-zaza" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Why Zaza Promptly?
                </Link>
              </li>
              <li>
                <a href="https://zazatechnologies.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Zaza Technologies
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & CTA Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest AI teaching tips and updates delivered to your inbox.
            </p>
            <BrevoForm 
              placeholder="Enter your email"
              buttonText="Subscribe"
              listId="2"
              className="mb-6"
            />
            
            {/* CTA Button */}
            <div className="mt-6">
              <StripeCheckoutButton className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Free Trial
              </StripeCheckoutButton>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://tiktok.com/@zazateach" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Follow us on TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/zaza-technologies/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/zazatechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <Link 
            href="/terms"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            Terms of Service
          </Link>
          <Link 
            href="/privacy"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/support"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            Support
          </Link>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Zaza Technologies UG. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
