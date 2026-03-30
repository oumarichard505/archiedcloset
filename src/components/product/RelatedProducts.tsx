import { ProductCard } from '../common/ProductCard'
import type { Product } from '../../data/products'
import { SectionHeading } from '../common/sectionHeading'

type RelatedProductsProps = {
  currentProductId: number
  category: Product['category']
  products: Product[]
}

export function RelatedProducts({
  currentProductId,
  category,
  products,
}: RelatedProductsProps) {
  const related = products
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 3)

  if (related.length === 0) {
    return null
  }

  const animationClasses = ['fade-up', 'fade-up-delay-1', 'fade-up-delay-2']

  return (
    <section className="bg-[#FAFAFA] pb-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10">
          <SectionHeading
            eyebrow="You May Also Like"
            title="Related Products"
            description="More curated picks in the same collection."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              animationClass={animationClasses[index % animationClasses.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}