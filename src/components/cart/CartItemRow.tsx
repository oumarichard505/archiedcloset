import { Trash2 } from 'lucide-react'
import type { CartItem } from '../../app/context/CartContext'

function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(price)
}

type CartItemRowProps = {
  item: CartItem
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

export function CartItemRow({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemRowProps) {
  return (
    <article className="flex flex-col gap-5 rounded-[1.5rem] bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:flex-row">
      <div className="h-32 w-full overflow-hidden rounded-2xl sm:w-32">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B28A2E]">
            {item.product.category.replace('-', ' ')}
          </p>

          <h3 className="mt-2 font-display text-2xl text-[#111111]">
            {item.product.name}
          </h3>

          <p className="mt-2 text-sm leading-7 text-[#5f5f5f]">
            {formatCurrency(item.product.price)}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex items-center rounded-xl border border-black/10 bg-[#FAFAFA]">
            <button
              type="button"
              onClick={onDecrease}
              className="px-4 py-3 text-lg font-semibold text-[#111111] transition-colors hover:text-[#D4AF37]"
            >
              -
            </button>

            <span className="min-w-12 px-4 text-center text-sm font-semibold text-[#111111]">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={onIncrease}
              className="px-4 py-3 text-lg font-semibold text-[#111111] transition-colors hover:text-[#D4AF37]"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={onRemove}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#c14b4b] transition-colors hover:text-red-600"
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}