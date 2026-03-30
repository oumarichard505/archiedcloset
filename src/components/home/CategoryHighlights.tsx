import { SectionHeading } from '../common/sectionHeading'
import { categoryHighlights } from '../../data/home'

export function CategoryHighlights() {
  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Shop By Category"
          title="Curated for elegance, gifting, and everyday luxury"
          description="Explore signature pieces across chic bags, elegant perfumes, and gift-ready selections designed for women who love refined style."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categoryHighlights.map((category, index) => (
            <article
              key={category.id}
              className={`group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] ${
                index === 0
                  ? 'fade-up'
                  : index === 1
                    ? 'fade-up-delay-1'
                    : 'fade-up-delay-2'
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-6 py-5">
                <h3 className="font-display text-3xl text-[#111111] transition-colors duration-300 group-hover:text-[#D4AF37]">
                  {category.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}