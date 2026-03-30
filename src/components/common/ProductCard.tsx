import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(price)
}

type ProductCardProps = {
  product: Product
  animationClass?: string
}

export function ProductCard({ product, animationClass = '' }: ProductCardProps) {
  return (
    <article
      className={`group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 ${animationClass}`}
    >
      <Link to={`/product/${product.id}`} className="block">
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B28A2E]">
            {product.category.replace('-', ' ')}
          </p>

          <h3 className="font-display text-2xl text-[#111111] transition-colors duration-300 group-hover:text-[#D4AF37]">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-7 text-[#5f5f5f]">
            {product.description}
          </p>

          <p className="mt-4 text-base font-semibold text-[#111111]">
            {formatCurrency(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}