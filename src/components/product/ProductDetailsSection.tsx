import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Product } from '../../data/products'
import { useCart } from '../../app/context/CartContext'

function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(price)
}

type ProductDetailsSectionProps = {
  product: Product
}

export function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate('/cart')
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Achie D Closet, I want to order ${quantity} x ${product.name} for ${formatCurrency(
      product.price,
    )} each.`,
  )

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div className="fade-up">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[500px] w-full object-cover md:h-[620px]"
            />
          </div>
        </div>

        <div className="fade-up-delay-1 flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#B28A2E]">
            {product.category.replace('-', ' ')}
          </p>

          <h1 className="mt-4 font-display text-4xl leading-tight text-[#111111] md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-[#111111]">
            {formatCurrency(product.price)}
          </p>

          <p className="mt-6 text-base leading-8 text-[#5f5f5f]">{product.description}</p>

          <div className="mt-8">
            <h2 className="font-display text-2xl text-[#111111]">Product Details</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5f5f5f]">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-[10px] h-2 w-2 rounded-full bg-[#D4AF37]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="mb-3 text-sm font-medium text-[#111111]">Quantity</p>

            <div className="flex w-fit items-center rounded-xl border border-black/10 bg-white">
              <button
                type="button"
                onClick={decreaseQuantity}
                className="px-4 py-3 text-lg font-semibold text-[#111111] transition-colors hover:text-[#D4AF37]"
              >
                -
              </button>

              <span className="min-w-12 px-4 text-center text-sm font-semibold text-[#111111]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                className="px-4 py-3 text-lg font-semibold text-[#111111] transition-colors hover:text-[#D4AF37]"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
            >
              Add to Cart
            </button>

            <a
              href={`https://wa.me/254702691978?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[#25D366] px-8 py-4 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}