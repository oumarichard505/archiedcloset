import { SectionHeading } from '../common/sectionHeading'

export function ShopHero() {
  return (
    <section className="bg-[#F8F3EC] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Shop Collection"
          title="Luxury essentials curated for modern feminine elegance"
          description="Browse our premium selection of chic bags, signature perfumes, and gift-worthy sets designed to elevate your everyday style."
        />
      </div>
    </section>
  )
}