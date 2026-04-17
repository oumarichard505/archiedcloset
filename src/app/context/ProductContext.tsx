import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../../data/products'
import { products as defaultProducts } from '../../data/products'

type ProductContextType = {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (id: number, updates: Partial<Product>) => void
  deleteProduct: (id: number) => void
  getProductById: (id: number) => Product | undefined
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

const PRODUCT_STORAGE_KEY = 'achiedcloset-products'

type ProductProviderProps = {
  children: ReactNode
}

function getInitialProducts(): Product[] {
  try {
    const storedProducts = localStorage.getItem(PRODUCT_STORAGE_KEY)
    if (storedProducts) {
      return JSON.parse(storedProducts) as Product[]
    }
  } catch (error) {
    console.error('Error loading products from localStorage:', error)
  }

  return defaultProducts
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => getInitialProducts())

  useEffect(() => {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products))
  }, [products])

  useEffect(() => {
    const syncProducts = () => {
      const storedProducts = localStorage.getItem(PRODUCT_STORAGE_KEY)
      if (storedProducts) {
        try {
          const parsed = JSON.parse(storedProducts) as Product[]
          setProducts(parsed)
        } catch (error) {
          console.error('Error parsing products from localStorage sync:', error)
        }
      }
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === PRODUCT_STORAGE_KEY) {
        syncProducts()
      }
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        syncProducts()
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', syncProducts)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', syncProducts)
    }
  }, [])

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const id = Math.max(...products.map(p => p.id), 0) + 1
    const product: Product = { ...newProduct, id }
    setProducts(prev => [...prev, product])
  }

  const updateProduct = (id: number, updates: Partial<Product>) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id ? { ...product, ...updates } : product
      )
    )
  }

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id))
  }

  const getProductById = (id: number) => {
    return products.find(product => product.id === id)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}