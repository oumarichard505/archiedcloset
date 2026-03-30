import { Link } from 'react-router-dom'

function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(price)
}

type CartSummaryProps = {
  subtotal: number
  itemCount: number
}

export function CartSummary({ subtotal, itemCount }: CartSummaryProps) {
  return (
    <aside className="rounded-[1.5rem] bg-[#F8F3EC] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
      <h2 className="font-display text-3xl text-[#111111]">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-sm text-[#5f5f5f]">
          <span>Items</span>
          <span>{itemCount}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-[#5f5f5f]">
          <span>Delivery</span>
          <span>Calculated at checkout</span>
        </div>

        <div className="h-px bg-black/10" />

        <div className="flex items-center justify-between text-base font-semibold text-[#111111]">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
      >
        Proceed to Checkout
      </Link>
    </aside>
  )
}