import { Link } from 'react-router-dom'
import { SectionHeading } from '../common/sectionHeading'

export function GiftSection() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="fade-up overflow-hidden rounded-[2rem]">
            <img
              src="https://i.pinimg.com/736x/ae/bf/34/aebf343bbc78ebd41c49ab993a51ceb3.jpg"
              alt="Elegant woman holding a stylish handbag"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="fade-up-delay-1 overflow-hidden rounded-[2rem]">
            <img
              src="https://i.pinimg.com/736x/54/05/a0/5405a0799b20851923424c6ab29294d8.jpg"
              alt="Luxury perfume bottle on display"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#F8F3EC] px-6 py-14 text-center lg:px-12">
          <SectionHeading
            eyebrow="Gift Ideas"
            title="Perfect Gifts for Every Occasion"
            description="Thoughtfully curated bags, perfumes, and gift-worthy pieces designed to make every celebration feel special."
            align="center"
          />
          <Link
            to="/shop"
            className="btn-gold-force mt-8 inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#111111]"
          >
            Shop Gift Sets
          </Link>
        </div>
      </div>
    </section>
  )
}