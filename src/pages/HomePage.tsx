import { BrandStatement } from '../components/home/BrandStatement'
import { CategoryHighlights } from '../components/home/CategoryHighlights'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { GiftSection } from '../components/home/GiftSection'
import { HeroSection } from '../components/home/HeroSection'
import { WhatsAppCTA } from '../components/home/WhatsAppCTA'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryHighlights />
      <FeaturedProducts />
      <BrandStatement />
      <GiftSection />
      <WhatsAppCTA />
    </>
  )
}