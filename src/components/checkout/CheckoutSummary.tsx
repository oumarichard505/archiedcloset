import type { CartItem } from '../../app/context/CartContext'

function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(price)
}

type CheckoutSummaryProps = {
  items: CartItem[]
  subtotal: number
}

export function CheckoutSummary({ items, subtotal }: CheckoutSummaryProps) {
  return (
    <aside className="rounded-[1.5rem] bg-[#F8F3EC] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
      <h2 className="font-display text-3xl text-[#111111]">Order Summary</h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-start justify-between gap-4 border-b border-black/10 pb-4"
          >
            <div>
              <h3 className="text-sm font-semibold text-[#111111]">
                {item.product.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B28A2E]">
                Qty: {item.quantity}
              </p>
            </div>

            <p className="text-sm font-medium text-[#111111]">
              {formatCurrency(item.product.price * item.quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-[#5f5f5f]">
          <span>Delivery</span>
          <span>Calculated manually</span>
        </div>

        <div className="flex items-center justify-between text-base font-semibold text-[#111111]">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>
    </aside>
  )
}