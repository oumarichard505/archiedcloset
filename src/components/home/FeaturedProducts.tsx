import { Link } from 'react-router-dom'
import { SectionHeading } from '../common/sectionHeading'
import { featuredBags, featuredPerfumes, type ProductItem } from '../../data/home'

function ProductCard({
  product,
  animationClass,
}: {
  product: ProductItem
  animationClass: string
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 ${animationClass}`}
    >
      <div className="relative overflow-hidden">
        {product.isNew && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#111111] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            New
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-5 py-5">
        <h3 className="font-display text-2xl text-[#111111] transition-colors duration-300 group-hover:text-[#D4AF37]">
          {product.name}
        </h3>
      </div>
    </article>
  )
}

function ProductSection({
  id,
  eyebrow,
  title,
  description,
  products,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  products: ProductItem[]
}) {
  const animationClasses = ['fade-up', 'fade-up-delay-1', 'fade-up-delay-2']

  return (
    <div id={id}>
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Link
          to="/shop"
          className="inline-flex w-fit items-center justify-center rounded-xl border border-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#B28A2E] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
        >
          View All
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            animationClass={animationClasses[index % animationClasses.length]}
          />
        ))}
      </div>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="mx-auto w-full max-w-7xl space-y-20 px-6 lg:px-10">
        <ProductSection
          id="featured-bags"
          eyebrow="Best Sellers"
          title="Featured Bags"
          description="Statement bags that balance elegance, quality, and everyday sophistication."
          products={featuredBags}
        />

        <ProductSection
          id="featured-perfumes"
          eyebrow="Signature Picks"
          title="Featured Perfumes"
          description="Luxury scents and lasting impressions for women who love timeless fragrance."
          products={featuredPerfumes}
        />
      </div>
    </section>
  )
}