import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { HomePage } from '../../pages/HomePage'
import { ShopPage } from '../../pages/ShopPage'
import { ProductDetailsPage } from '../../pages/ProductDetailsPage'
import { CartPage } from '../../pages/CartPage'
import { CheckoutPage } from '../../pages/CheckoutPage'
import { ContactPage } from '../../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'product/:id',
        element: <ProductDetailsPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
])