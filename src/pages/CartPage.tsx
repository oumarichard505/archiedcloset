import { Link } from 'react-router-dom'
import { CartItemRow } from '../components/cart/CartItemRow'
import { CartSummary } from '../components/cart/CartSummary'
import { useCart } from '../app/context/CartContext'
import { SectionHeading } from '../components/common/sectionHeading'

export function CartPage() {
  const {
    cartItems,
    cartSubtotal,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart()

  if (cartItems.length === 0) {
    return (
      <section className="bg-[#FAFAFA] py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
          <SectionHeading
            eyebrow="Your Cart"
            title="Your cart is empty"
            description="Looks like you haven’t added any products yet. Explore our collection and find something elegant."
            align="center"
          />

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#111111] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Your Cart"
            title="Review your selected items"
            description="Update quantities, remove items, and proceed when you’re ready."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            {cartItems.map((item, index) => (
              <div
                key={item.product.id}
                className={
                  index === 0
                    ? 'fade-up'
                    : index === 1
                      ? 'fade-up-delay-1'
                      : index === 2
                        ? 'fade-up-delay-2'
                        : 'fade-up-delay-3'
                }
              >
                <CartItemRow
                  item={item}
                  onIncrease={() => increaseQuantity(item.product.id)}
                  onDecrease={() => decreaseQuantity(item.product.id)}
                  onRemove={() => removeFromCart(item.product.id)}
                />
              </div>
            ))}
          </div>

          <div className="fade-up-delay-1">
            <CartSummary subtotal={cartSubtotal} itemCount={cartCount} />
          </div>
        </div>
      </div>
    </section>
  )
}