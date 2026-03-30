export type ProductCategory = 'bags' | 'perfumes' | 'gift-sets'

export type Product = {
  id: number
  name: string
  price: number
  category: ProductCategory
  image: string
  description: string
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Beige Tote',
    price: 3500,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    description: 'A clean and elegant tote bag designed for everyday sophistication.',
    isNew: true,
  },
  {
    id: 2,
    name: 'Luxury Black Chain Bag',
    price: 5000,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium black chain bag with a timeless luxury finish.',
  },
  {
    id: 3,
    name: 'Elegant Mini Cream Bag',
    price: 4200,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Compact, elegant, and perfect for stylish casual outings.',
  },
  {
    id: 4,
    name: 'Soft Pink Structured Bag',
    price: 4600,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    description: 'A refined statement bag with a feminine and polished feel.',
    isNew: true,
  },
  {
    id: 5,
    name: 'Arabian Oud',
    price: 2800,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
    description: 'A rich and luxurious oud fragrance with deep lasting notes.',
    isNew: true,
  },
  {
    id: 6,
    name: 'Bloom Essence',
    price: 2500,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80',
    description: 'Soft floral perfume crafted for elegant daily wear.',
  },
  {
    id: 7,
    name: 'Velvet Noir',
    price: 3200,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    description: 'A bold feminine scent with warm sensual undertones.',
  },
  {
    id: 8,
    name: 'Rose Elixir',
    price: 2900,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?auto=format&fit=crop&w=1200&q=80',
    description: 'A romantic rose fragrance with soft modern elegance.',
    isNew: true,
  },
  {
    id: 9,
    name: 'Luxury Gift Box Set',
    price: 6500,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    description: 'A gift-ready collection featuring luxury essentials.',
  },
  {
    id: 10,
    name: 'Perfume Duo Gift Set',
    price: 5400,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
    description: 'Two elegant scents bundled beautifully for gifting.',
    isNew: true,
  },
  {
    id: 11,
    name: 'Classic Occasion Gift Set',
    price: 7000,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    description: 'A premium gift set for birthdays, celebrations, and special moments.',
  },
  {
    id: 12,
    name: 'Elegant Beauty Gift Pack',
    price: 6000,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'A polished gifting bundle with a luxurious boutique feel.',
  },
]