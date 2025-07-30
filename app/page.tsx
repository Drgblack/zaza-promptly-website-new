import { HeroSection } from "@/components/hero-section"
import { EmailSignupSection } from "@/components/email-signup-section"
import { PainRecognitionSection } from "@/components/pain-recognition-section"
import { TransformationSection } from "@/components/transformation-section"
import { FeaturesSection } from "@/components/features-section"
import { ComparisonSection } from "@/components/comparison-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DemoSection } from "@/components/demo-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { StickyCTA } from "@/components/sticky-cta"
import { MobileOptimizations } from "@/components/mobile-optimizations"
import { SkipLink } from "@/components/skip-link"
import { AccessibilityAnnouncer } from "@/components/accessibility-announcer"

export default function Home() {
  return (
    <>
      <SkipLink />
      <AccessibilityAnnouncer />
      {/* <PerformanceMonitor /> */}
      {/* Main Content */}
      <main className="min-h-screen">
        <HeroSection />
        <EmailSignupSection />
        <PainRecognitionSection />
        <TransformationSection />
        <FeaturesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <DemoSection />
        <FinalCTASection />
      </main>
      <MobileOptimizations />
      <StickyCTA />
    </>
  )
}
