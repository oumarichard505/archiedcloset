import { SectionHeading } from '../common/sectionHeading'


export function ContactHero() {
  return (
    <section className="bg-[#F8F3EC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact Us"
          title="We’d love to help you find your next elegant piece"
          description="Reach out for orders, product inquiries, gift recommendations, or general support. We’re here to make your shopping experience smooth and personal."
        />
      </div>
    </section>
  )
}