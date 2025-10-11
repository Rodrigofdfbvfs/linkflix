import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import BenefitsSection from '@/components/landing/benefits-section';
import HowItWorksSection from '@/components/landing/how-it-works-section';
import BonusSection from '@/components/landing/bonus-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PricingSection from '@/components/landing/pricing-section';
import FaqSection from '@/components/landing/faq-section';
import Footer from '@/components/landing/footer';
import DateBanner from '@/components/landing/date-banner';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <DateBanner />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <BonusSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
