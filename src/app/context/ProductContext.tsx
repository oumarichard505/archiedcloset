import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { products as initialProducts, type Product } from '../../data/products'

type ProductContextType = {
  products: Product[]
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>
  updateProduct: (id: number, updates: Partial<Product>) => Promise<void>
  deleteProduct: (id: number) => Promise<void>
  getProductById: (id: number) => Product | undefined
  uploadImage: (file: File, filename: string) => Promise<string | null>
  loading: boolean
  error: string | null
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

const STORAGE_KEY = 'achiedcloset-products-v1'

type ProductProviderProps = {
  children: ReactNode
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch (e) {
      console.error('Failed to load products from localStorage', e)
    }
    return initialProducts
  })
  const [loading, setLoading] = useState(false)
  const [error] = useState<string | null>(null)

  // Sync to localStorage whenever products change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    } catch (e) {
      console.error('Failed to save products to localStorage', e)
    }
  }, [products])

  const uploadImage = async (file: File, _filename: string): Promise<string | null> => {
    try {
      // In local mode, we use Object URLs. Note: These are session-based and won't persist after refresh.
      return URL.createObjectURL(file)
    } catch (err) {
      console.error('Error creating image URL:', err)
      return null
    }
  }

  const addProduct = async (newProduct: Omit<Product, 'id'>) => {
    setLoading(true)
    try {
      const id = Math.max(0, ...products.map(p => p.id)) + 1
      const product: Product = { ...newProduct, id }
      setProducts(prev => [...prev, product])
    } finally {
      setLoading(false)
    }
  }

  const updateProduct = async (id: number, updates: Partial<Product>) => {
    setLoading(true)
    try {
      setProducts(prev =>
        prev.map(product =>
          product.id === id ? { ...product, ...updates } : product
        )
      )
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (id: number) => {
    setLoading(true)
    try {
      setProducts(prev => prev.filter(product => product.id !== id))
    } finally {
      setLoading(false)
    }
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
        uploadImage,
        loading,
        error,
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
