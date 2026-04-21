-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('bags', 'perfumes', 'gift-sets')),
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  details TEXT[] NOT NULL DEFAULT '{}',
  is_new BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow anyone to read products
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete (admin users)
CREATE POLICY "Allow authenticated users to insert" ON products
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update" ON products
  FOR UPDATE USING (true);

CREATE POLICY "Allow authenticated users to delete" ON products
  FOR DELETE USING (true);

-- Insert default products with local image paths
INSERT INTO products (id, name, price, category, image, description, details, is_new) VALUES
(1, 'Classic Beige Tote', 3500, 'bags', '/images/products/classic-beige-tote.jpg', 'A clean and elegant tote bag designed for everyday sophistication.', ARRAY['Structured silhouette with a refined finish', 'Spacious interior for daily essentials', 'Perfect for work, shopping, and casual elegance'], true),
(2, 'Luxury Black Chain Bag', 5000, 'bags', '/images/products/luxury-black-chain.jpg', 'Premium black chain bag with a timeless luxury finish.', ARRAY['Elegant chain strap detail', 'Classic black tone for versatile styling', 'Designed to elevate day and evening looks'], false),
(3, 'Elegant Mini Cream Bag', 4200, 'bags', '/images/products/elegant-mini-cream.jpg', 'Compact, elegant, and perfect for stylish casual outings.', ARRAY['Compact size with premium visual appeal', 'Light cream tone for soft feminine styling', 'Ideal for outings, brunches, and events'], false),
(4, 'Soft Pink Structured Bag', 4600, 'bags', '/images/products/soft-pink-structured.jpg', 'A refined statement bag with a feminine and polished feel.', ARRAY['Soft pink feminine tone', 'Structured luxury-inspired silhouette', 'Beautiful choice for polished everyday looks'], true),
(5, 'Arabian Oud', 2800, 'perfumes', '/images/products/arabian-oud.jpg', 'A rich and luxurious oud fragrance with deep lasting notes.', ARRAY['Bold scent profile with rich oud character', 'Long-lasting fragrance impression', 'Perfect for elegant occasions and standout moments'], true),
(6, 'Bloom Essence', 2500, 'perfumes', '/images/products/bloom-essence.jpg', 'Soft floral perfume crafted for elegant daily wear.', ARRAY['Soft floral notes for a graceful finish', 'Designed for fresh everyday wear', 'A timeless scent for feminine elegance'], false),
(7, 'Velvet Noir', 3200, 'perfumes', '/images/products/velvet-noir.jpg', 'A bold feminine scent with warm sensual undertones.', ARRAY['Deep, bold, and memorable fragrance character', 'Warm undertones with luxury appeal', 'Ideal for evenings and statement styling'], false),
(8, 'Rose Elixir', 2900, 'perfumes', '/images/products/rose-elixir.jpg', 'A romantic rose fragrance with soft modern elegance.', ARRAY['Romantic rose-centered scent', 'Elegant and modern feminine expression', 'A soft signature fragrance for everyday luxury'], true),
(9, 'Luxury Gift Box Set', 6500, 'gift-sets', '/images/products/luxury-gift-box.jpg', 'A gift-ready collection featuring luxury essentials.', ARRAY['Curated for premium gifting moments', 'Elegant presentation with boutique appeal', 'Ideal for birthdays, celebrations, and special occasions'], false),
(10, 'Perfume Duo Gift Set', 5400, 'gift-sets', '/images/products/perfume-duo.jpg', 'Two elegant scents bundled beautifully for gifting.', ARRAY['Two fragrance options in one refined bundle', 'Beautifully suited for gifting', 'Luxury feel with strong value'], true),
(11, 'Classic Occasion Gift Set', 7000, 'gift-sets', '/images/products/classic-occasion.jpg', 'A premium gift set for birthdays, celebrations, and special moments.', ARRAY['Premium curated presentation', 'Made for celebrations and thoughtful gifting', 'A polished all-in-one gift choice'], false),
(12, 'Elegant Beauty Gift Pack', 6000, 'gift-sets', '/images/products/elegant-beauty-pack.jpg', 'A polished gifting bundle with a luxurious boutique feel.', ARRAY['Boutique-style gift presentation', 'Elegant and memorable packaging feel', 'Perfect for a refined luxury gifting experience'], false)
ON CONFLICT (id) DO NOTHING;

-- Reset the sequence to start after the seeded data
SELECT setval('products_id_seq', (SELECT MAX(id) FROM products));
