export type CategoryHighlight = {
  id: number
  title: string
  image: string
}

export type ProductItem = {
  id: number
  name: string
  price: number
  image: string
  isNew?: boolean
}

export const categoryHighlights: CategoryHighlight[] = [
  {
    id: 1,
    title: 'Chic Bags',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Elegant Perfumes',
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Gift Sets',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
  },
]

export const featuredBags: ProductItem[] = [
  {
    id: 1,
    name: 'Classic Beige Tote',
    price: 3500,
    image:
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80',
    isNew: true,
  },
  {
    id: 2,
    name: 'Luxury Black Chain Bag',
    price: 5000,
    image:
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Elegant Mini Cream Bag',
    price: 4200,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
  },
]

export const featuredPerfumes: ProductItem[] = [
  {
    id: 4,
    name: 'Arabian Oud',
    price: 2800,
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
    isNew: true,
  },
  {
    id: 5,
    name: 'Bloom Essence',
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: 'Velvet Noir',
    price: 3200,
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
  },
]