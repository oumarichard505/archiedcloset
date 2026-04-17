import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes'
import { CartProvider } from './app/context/CartContext'
import { ProductProvider } from './app/context/ProductContext'

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  )
}

export default App