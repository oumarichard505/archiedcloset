import { ContactCTA } from '../components/contact/ContactCTA'
import { ContactHero } from '../components/contact/ContactHero'
import { ContactInfoGrid } from '../components/contact/ContactInfoGrid'

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <ContactCTA />
    </>
  )
}