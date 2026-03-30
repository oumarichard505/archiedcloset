import { Link, useParams } from 'react-router-dom'
import { ProductDetailsSection } from '../components/product/ProductDetailsSection'
import { RelatedProducts } from '../components/product/RelatedProducts'
import { products } from '../data/products'

export function ProductDetailsPage() {
  const { id } = useParams()
  const productId = Number(id)

  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="bg-[#FAFAFA] py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
          <h1 className="font-display text-4xl text-[#111111]">Product not found</h1>
          <p className="mt-4 text-base leading-8 text-[#5f5f5f]">
            The product you’re looking for does not exist or may have been removed.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <ProductDetailsSection product={product} />
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
        products={products}
      />
    </>
  )
}