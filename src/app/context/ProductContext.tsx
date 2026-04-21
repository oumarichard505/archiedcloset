import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../../data/products'
import { supabase, toProduct, toDatabaseProduct } from '../../lib/supabase'

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

type ProductProviderProps = {
  children: ReactNode
}

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    // Try to load from localStorage immediately to avoid empty state
    try {
      const stored = localStorage.getItem('achiedcloset-products')
      if (stored) {
        return JSON.parse(stored)
      }
    } catch {
      // ignore
    }
    return []
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch products on mount
  useEffect(() => {
    let isMounted = true

    const loadProducts = async () => {
      try {
        setLoading(true)
        const { data, error: supabaseError } = await supabase
          .from('products')
          .select('*')
          .order('id', { ascending: true })

        if (!isMounted) return

        if (supabaseError) {
          console.error('Supabase error:', supabaseError)
          // Keep localStorage data, show error
          setError('Using offline mode - changes will not sync to cloud')
          return
        }

        if (data) {
          const products = data.map(toProduct)
          setProducts(products)
          localStorage.setItem('achiedcloset-products', JSON.stringify(products))
          setError(null)
        }
      } catch (err) {
        console.error('Error fetching products:', err)
        if (isMounted) {
          setError('Using offline mode - changes will not sync to cloud')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  // Subscribe to real-time changes
  useEffect(() => {
    const subscription = supabase
      .channel('products-changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'products' },
        async () => {
          // Refetch on changes
          try {
            const { data } = await supabase
              .from('products')
              .select('*')
              .order('id', { ascending: true })
            if (data) {
              const products = data.map(toProduct)
              setProducts(products)
              localStorage.setItem('achiedcloset-products', JSON.stringify(products))
            }
          } catch (err) {
            console.error('Error syncing products:', err)
          }
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const uploadImage = async (file: File, filename: string): Promise<string | null> => {
    try {
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(filename, file, {
          cacheControl: '3600',
          upsert: true,
        })

      if (error) {
        console.error('Error uploading image:', error)
        return null
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(data.path)

      return publicUrl
    } catch (err) {
      console.error('Error uploading image:', err)
      return null
    }
  }

  const addProduct = async (newProduct: Omit<Product, 'id'>) => {
    try {
      const dbProduct = toDatabaseProduct(newProduct)
      const { data, error } = await supabase
        .from('products')
        .insert([dbProduct])
        .select()
        .single()

      if (error) {
        console.error('Error adding product:', error)
        // Fallback: add locally
        const id = Math.max(...products.map(p => p.id), 0) + 1
        const product: Product = { ...newProduct, id }
        setProducts(prev => [...prev, product])
        localStorage.setItem('achiedcloset-products', JSON.stringify([...products, product]))
        return
      }

      if (data) {
        const product = toProduct(data)
        setProducts(prev => [...prev, product])
      }
    } catch (err) {
      console.error('Error adding product:', err)
      // Fallback: add locally
      const id = Math.max(...products.map(p => p.id), 0) + 1
      const product: Product = { ...newProduct, id }
      setProducts(prev => [...prev, product])
    }
  }

  const updateProduct = async (id: number, updates: Partial<Product>) => {
    try {
      const dbUpdates: Partial<{
        name: string
        price: number
        category: 'bags' | 'perfumes' | 'gift-sets'
        image: string
        description: string
        details: string[]
        is_new: boolean
      }> = {}

      if (updates.name !== undefined) dbUpdates.name = updates.name
      if (updates.price !== undefined) dbUpdates.price = updates.price
      if (updates.category !== undefined) dbUpdates.category = updates.category
      if (updates.image !== undefined) dbUpdates.image = updates.image
      if (updates.description !== undefined) dbUpdates.description = updates.description
      if (updates.details !== undefined) dbUpdates.details = updates.details
      if (updates.isNew !== undefined) dbUpdates.is_new = updates.isNew

      const { error } = await supabase
        .from('products')
        .update(dbUpdates)
        .eq('id', id)

      if (error) {
        console.error('Error updating product:', error)
        // Fallback: update locally
        setProducts(prev =>
          prev.map(product =>
            product.id === id ? { ...product, ...updates } : product
          )
        )
        return
      }

      // Optimistic update
      setProducts(prev =>
        prev.map(product =>
          product.id === id ? { ...product, ...updates } : product
        )
      )
    } catch (err) {
      console.error('Error updating product:', err)
      // Fallback: update locally
      setProducts(prev =>
        prev.map(product =>
          product.id === id ? { ...product, ...updates } : product
        )
      )
    }
  }

  const deleteProduct = async (id: number) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting product:', error)
        // Fallback: delete locally
        setProducts(prev => prev.filter(product => product.id !== id))
        return
      }

      // Optimistic update
      setProducts(prev => prev.filter(product => product.id !== id))
    } catch (err) {
      console.error('Error deleting product:', err)
      // Fallback: delete locally
      setProducts(prev => prev.filter(product => product.id !== id))
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
