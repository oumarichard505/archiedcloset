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
      'https://i.pinimg.com/736x/cc/39/bf/cc39bf71fda3204a3808b06e44d4a4ae.jpg',
    isNew: true,
  },
  {
    id: 2,
    name: 'Luxury Black Chain Bag',
    price: 5000,
    image:
      'https://i.pinimg.com/736x/85/19/d7/8519d705e31fce977536013a93509119.jpg',
  },
  {
    id: 3,
    name: 'Elegant Mini Cream Bag',
    price: 4200,
    image:
      'https://i.pinimg.com/736x/59/3c/4c/593c4c823a504049c1bb97cbf99a7004.jpg',
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