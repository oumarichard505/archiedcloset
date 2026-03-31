import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/common/sectionHeading'

const values = [
  {
    title: 'Elegance',
    description:
      'We curate pieces that feel refined, feminine, and timeless, so every customer finds something that elevates their style.',
  },
  {
    title: 'Affordability',
    description:
      'Luxury should feel accessible. We focus on stylish bags and perfumes that look premium without being out of reach.',
  },
  {
    title: 'Personal Service',
    description:
      'From product questions to order support, we keep the shopping experience warm, simple, and customer-centered.',
  },
]

export function AboutPage() {
  return (
    <>
      <section className="bg-[#F8F3EC] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="About Us"
            title="Style, confidence, and elegance curated for modern women"
            description="AchieDCloset is a fashion-forward brand focused on elegant bags, beautiful scents, and a shopping experience that feels personal, simple, and premium."
          />
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="fade-up">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant fashion styling"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>

          <div className="fade-up-delay-1 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#B28A2E]">
              Who We Are
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#111111] md:text-5xl">
              More than fashion, we deliver a feeling
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5f5f5f] md:text-lg">
              At AchieDCloset, we believe fashion should make you feel confident,
              graceful, and seen. Our collection is built around stylish bags,
              signature perfumes, and carefully selected pieces that help women
              express beauty with ease.
            </p>

            <p className="mt-5 text-base leading-8 text-[#5f5f5f] md:text-lg">
              We are passionate about blending elegance and accessibility, giving
              our customers products that feel premium while still fitting everyday
              lifestyles. Whether you are shopping for yourself or choosing a gift,
              we want each order to feel special.
            </p>


          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our Values"
            title="What defines AchieDCloset"
            description="The foundation of our brand is built on quality presentation, thoughtful service, and a love for timeless feminine style."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => {
              const animationClass =
                index === 0
                  ? 'fade-up'
                  : index === 1
                    ? 'fade-up-delay-1'
                    : 'fade-up-delay-2'

              return (
                <article
                  key={value.title}
                  className={`rounded-[1.5rem] bg-[#FAFAFA] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] ${animationClass}`}
                >
                  <h3 className="font-display text-2xl text-[#111111]">{value.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f5f5f]">
                    {value.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] pb-20">
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-10">
          <div className="rounded-[2rem] bg-[#111111] px-6 py-14 text-center text-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
            <p className="fade-up text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37]">
              Discover Our Collection
            </p>

            <h2 className="fade-up-delay-1 mt-4 font-display text-4xl md:text-5xl">
              Ready to explore elegant pieces?
            </h2>

            <p className="fade-up-delay-2 mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              Browse our bags and perfumes, or reach out directly on WhatsApp for
              quick help with your order.
            </p>

            <div className="fade-up-delay-3 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#111111] transition-transform duration-300 hover:scale-[1.02]"
              >
                Visit Shop
              </Link>

              <a
                href="https://wa.me/254702691978"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}