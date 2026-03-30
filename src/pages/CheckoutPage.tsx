import { Link } from 'react-router-dom'
import { CheckoutForm, type CheckoutFormValues } from '../components/checkout/CheckoutForm'
import { CheckoutSummary } from '../components/checkout/CheckoutSummary'
import { useCart } from '../app/context/CartContext'
import { SectionHeading } from '../components/common/sectionHeading'

export function CheckoutPage() {
  const { cartItems, cartSubtotal, clearCart } = useCart()

  const handleSubmit = (values: CheckoutFormValues) => {
    const orderLines = cartItems
      .map(
        (item) =>
          `- ${item.product.name} x ${item.quantity} = KES ${item.product.price * item.quantity}`,
      )
      .join('\n')

    const rawMessage = `Hello Achie D Closet, I would like to place an order.

Full Name: ${values.fullName}
Phone: ${values.phone}
Location: ${values.location}
Note: ${values.note || 'N/A'}

Order Items:
${orderLines}

Subtotal: KES ${cartSubtotal}`

    const encodedMessage = encodeURIComponent(rawMessage)

    window.open(`https://wa.me/254700000000?text=${encodedMessage}`, '_blank')
    clearCart()
  }

  if (cartItems.length === 0) {
    return (
      <section className="bg-[#FAFAFA] py-20">
        <div className="mx-auto w-full max-w-4xl px-6 text-center lg:px-10">
          <SectionHeading
            eyebrow="Checkout"
            title="Your cart is empty"
            description="Add products to your cart before proceeding to checkout."
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
            eyebrow="Checkout"
            title="Complete your order"
            description="Fill in your details below and place your order through WhatsApp."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="fade-up">
            <CheckoutForm onSubmit={handleSubmit} />
          </div>

          <div className="fade-up-delay-1">
            <CheckoutSummary items={cartItems} subtotal={cartSubtotal} />
          </div>
        </div>
      </div>
    </section>
  )
}