import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Product } from '../data/products'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

const isConfigured = supabaseUrl && supabaseAnonKey

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({
        select: () => ({
          order: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
        update: () => ({
          eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
        }),
        delete: () => ({
          eq: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
        }),
      }),
      channel: () => ({
        on: function() { return this },
        subscribe: () => ({ unsubscribe: () => {} }),
      }),
    } as unknown as SupabaseClient)

export const supabaseConfigured = isConfigured

export type DatabaseProduct = {
  id: number
  name: string
  price: number
  category: 'bags' | 'perfumes' | 'gift-sets'
  image: string
  description: string
  details: string[]
  is_new: boolean
  created_at: string
}

export function toProduct(dbProduct: DatabaseProduct): Product {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    price: dbProduct.price,
    category: dbProduct.category,
    image: dbProduct.image,
    description: dbProduct.description,
    details: dbProduct.details,
    isNew: dbProduct.is_new,
  }
}

export function toDatabaseProduct(product: Omit<Product, 'id'>): Omit<DatabaseProduct, 'id' | 'created_at'> {
  return {
    name: product.name,
    price: product.price,
    category: product.category,
    image: product.image,
    description: product.description,
    details: product.details,
    is_new: product.isNew || false,
  }
}
