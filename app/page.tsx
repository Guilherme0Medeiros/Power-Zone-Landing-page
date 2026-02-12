import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SponsorsBar } from '@/components/sponsors-bar'
import { FeaturedSection } from '@/components/featured-section'
import { AboutSection } from '@/components/about-section'
import { WhyChooseUs } from '@/components/why-choose-us'
import { PricingSection } from '@/components/pricing-section'
import { NewsletterSection } from '@/components/newsletter-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SponsorsBar />
      <FeaturedSection />
      <AboutSection />
      <WhyChooseUs />
      <PricingSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
