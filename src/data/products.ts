export type ProductCategory = 'bags' | 'perfumes' | 'gift-sets'

export type Product = {
  id: number
  name: string
  price: number
  category: ProductCategory
  image: string
  description: string
  details: string[]
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
    details: [
      'Structured silhouette with a refined finish',
      'Spacious interior for daily essentials',
      'Perfect for work, shopping, and casual elegance',
    ],
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
    details: [
      'Elegant chain strap detail',
      'Classic black tone for versatile styling',
      'Designed to elevate day and evening looks',
    ],
  },
  {
    id: 3,
    name: 'Elegant Mini Cream Bag',
    price: 4200,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Compact, elegant, and perfect for stylish casual outings.',
    details: [
      'Compact size with premium visual appeal',
      'Light cream tone for soft feminine styling',
      'Ideal for outings, brunches, and events',
    ],
  },
  {
    id: 4,
    name: 'Soft Pink Structured Bag',
    price: 4600,
    category: 'bags',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    description: 'A refined statement bag with a feminine and polished feel.',
    details: [
      'Soft pink feminine tone',
      'Structured luxury-inspired silhouette',
      'Beautiful choice for polished everyday looks',
    ],
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
    details: [
      'Bold scent profile with rich oud character',
      'Long-lasting fragrance impression',
      'Perfect for elegant occasions and standout moments',
    ],
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
    details: [
      'Soft floral notes for a graceful finish',
      'Designed for fresh everyday wear',
      'A timeless scent for feminine elegance',
    ],
  },
  {
    id: 7,
    name: 'Velvet Noir',
    price: 3200,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    description: 'A bold feminine scent with warm sensual undertones.',
    details: [
      'Deep, bold, and memorable fragrance character',
      'Warm undertones with luxury appeal',
      'Ideal for evenings and statement styling',
    ],
  },
  {
    id: 8,
    name: 'Rose Elixir',
    price: 2900,
    category: 'perfumes',
    image:
      'https://images.unsplash.com/photo-1622618991746-fe6004db3a47?auto=format&fit=crop&w=1200&q=80',
    description: 'A romantic rose fragrance with soft modern elegance.',
    details: [
      'Romantic rose-centered scent',
      'Elegant and modern feminine expression',
      'A soft signature fragrance for everyday luxury',
    ],
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
    details: [
      'Curated for premium gifting moments',
      'Elegant presentation with boutique appeal',
      'Ideal for birthdays, celebrations, and special occasions',
    ],
  },
  {
    id: 10,
    name: 'Perfume Duo Gift Set',
    price: 5400,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3f?auto=format&fit=crop&w=1200&q=80',
    description: 'Two elegant scents bundled beautifully for gifting.',
    details: [
      'Two fragrance options in one refined bundle',
      'Beautifully suited for gifting',
      'Luxury feel with strong value',
    ],
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
    details: [
      'Premium curated presentation',
      'Made for celebrations and thoughtful gifting',
      'A polished all-in-one gift choice',
    ],
  },
  {
    id: 12,
    name: 'Elegant Beauty Gift Pack',
    price: 6000,
    category: 'gift-sets',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'A polished gifting bundle with a luxurious boutique feel.',
    details: [
      'Boutique-style gift presentation',
      'Elegant and memorable packaging feel',
      'Perfect for a refined luxury gifting experience',
    ],
  },
]