  'use client';

  import Link from 'next/link';
  import Image from 'next/image';
  import { useState, useEffect } from 'react';
  import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
  import { useTheme } from 'next-themes';
  import { StripeCheckoutButton } from './stripe-checkout-button';

  export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!mounted) {
      return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-20">
              {/* Logo Skeleton */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="hidden sm:block">
                  <div className="h-6 bg-gray-200 rounded w-32 animate-pulse mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                </div>
              </div>

              {/* Navigation Skeleton */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="h-8 bg-gray-200 rounded w-16 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>

              {/* Mobile Menu Button Skeleton */}
              <div className="lg:hidden w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </header>
      );
    }

    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg 
  group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <Image 
                    src="/zaza-logo.png" 
                    alt="Zaza Technologies Logo" 
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse 
  shadow-sm"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold">
                  <span className="text-gray-800 dark:text-white">Zaza </span>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Promptly</span>
                </div>
                <div className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-medium">AI for Educators</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 
  dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200 flex items-center 
  space-x-1">
                  <span>Our Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 
  dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Zaza Products</div>
                    </div>
                    <Link href="/products" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 
  dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      <div className="flex items-center justify-between">
                        <span>Zaza Promptly</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Active</span>
                      </div>
                    </Link>
                    <a href="https://zazateach.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm 
  text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      <div className="flex items-center justify-between">
                        <span>Zaza Teach</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Live</span>
                      </div>
                    </a>
                    <a href="https://zazainbox.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-sm 
  text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      <div className="flex items-center justify-between">
                        <span>Zaza Inbox</span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Coming Soon</span>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 
  dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      <div className="flex items-center justify-between">
                        <span>Zaza Analytics</span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Coming Soon</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <Link 
                href="/why-zaza" 
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
  hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
              >
                Why Zaza Promptly?
              </Link>

              <Link 
                href="/about-us" 
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
  hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
              >
                About Us
              </Link>

              <div className="relative group">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 
  dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200 flex items-center 
  space-x-1">
                  <span>Learning Centre</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 
  dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 
  dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      Blog
                    </Link>
                    <Link href="/free-resources" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 
  dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      Free Resources
                    </Link>
                    <Link href="/faqs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 
  dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400">
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side - Dark Mode Toggle and CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* CTA Buttons */}
              <a 
                href="https://zazateach.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
  hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200"
              >
                Try Zaza Teach
              </a>

              <StripeCheckoutButton className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 
  hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Free Trial
              </StripeCheckoutButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-100 
  dark:border-gray-700 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="space-y-4">
                  {/* Our Solutions Section */}
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Our
  Solutions</div>
                    <div className="space-y-2 ml-4">
                      <Link 
                        href="/products" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Zaza Promptly
                      </Link>
                      <a 
                        href="https://zazateach.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Zaza Teach
                      </a>
                      <a 
                        href="https://zazainbox.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Zaza Inbox
                      </a>
                    </div>
                  </div>

                  {/* Learning Centre Section */}
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Learning
  Centre</div>
                    <div className="space-y-2 ml-4">
                      <Link 
                        href="/blog" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link 
                        href="/free-resources" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Free Resources
                      </Link>
                      <Link 
                        href="/faqs" 
                        className="block text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        FAQs
                      </Link>
                    </div>
                  </div>

                  {/* Direct Links */}
                  <Link 
                    href="/why-zaza" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
  py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Zaza Promptly?
                  </Link>

                  <Link 
                    href="/about-us" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 
  py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 
  dark:hover:text-purple-400 py-2"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="w-4 h-4" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 space-y-3">
                    <a 
                      href="https://zazateach.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
  hover:text-purple-600 dark:hover:text-purple-400 border border-gray-300 dark:border-gray-600 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Try Zaza Teach
                    </a>

                    <StripeCheckoutButton className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 
  hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200">
                      Start Free Trial
                    </StripeCheckoutButton>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }