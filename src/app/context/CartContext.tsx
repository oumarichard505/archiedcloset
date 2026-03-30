import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../../data/products'

export type CartItem = {
  product: Product
  quantity: number
}

type CartContextType = {
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  increaseQuantity: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  cartCount: number
  cartSubtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id)

      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...prev, { product, quantity }]
    })
  }

  const increaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const decreaseQuantity = (productId: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartSubtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}