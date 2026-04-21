# Supabase Setup Guide

This project uses Supabase as the backend for product management with image upload support via Supabase Storage.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Set project name: `achiedcloset`
5. Set database password (save this securely)
6. Choose region closest to your users
7. Click "Create new project"

### 2. Get Your API Keys

Once your project is ready:

1. Go to **Project Settings** → **API**
2. Copy these values:
   - `Project URL` (under Config → URL)
   - `anon` public API key

### 3. Set Up Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

### 4. Set Up Database Tables

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run**

### 5. Set Up Storage for Images

1. Go to **SQL Editor** → **New query**
2. Copy and paste the contents of `supabase-storage-setup.sql`:
   ```sql
   -- Create storage bucket for product images
   INSERT INTO storage.buckets (id, name, public)
   VALUES ('product-images', 'product-images', true)
   ON CONFLICT (id) DO NOTHING;

   -- Allow public read access to product-images bucket
   CREATE POLICY "Allow public read access" ON storage.objects
     FOR SELECT USING (bucket_id = 'product-images');

   -- Allow authenticated users to upload images
   CREATE POLICY "Allow authenticated uploads" ON storage.objects
     FOR INSERT WITH CHECK (bucket_id = 'product-images');

   -- Allow authenticated users to update/delete images
   CREATE POLICY "Allow authenticated updates" ON storage.objects
     FOR UPDATE USING (bucket_id = 'product-images');

   CREATE POLICY "Allow authenticated deletes" ON storage.objects
     FOR DELETE USING (bucket_id = 'product-images');
   ```
3. Click **Run**

**Alternative: Using the Dashboard UI**

If the SQL doesn't work, you can manually create the bucket:
1. Go to **Storage** in the left sidebar
2. Click **New bucket**
3. Name: `product-images`
4. Check **Public bucket**
5. Click **Save**
6. Go to **Policies** tab
7. Add policies for SELECT, INSERT, UPDATE, DELETE (allow public access for demo)

### 6. Install Dependencies

```bash
npm install
```

### 7. Run the App

```bash
npm run dev
```

## Features

- **Product Management**: Add, edit, delete products via `/admin/login`
- **Image Upload**: Upload product images directly in the admin panel
  - Images are stored in Supabase Storage
  - Automatic image compression and optimization
  - Public URLs stored in the database
- **Real-time sync**: Products update instantly across all users
- **Offline fallback**: Works even without Supabase configured

## Database Schema

```sql
table products {
  id: serial primary key
  name: text
  price: integer
  category: text (bags | perfumes | gift-sets)
  image: text (URL to Supabase Storage)
  description: text
  details: text[]
  is_new: boolean
  created_at: timestamp
}
```

## Storage Structure

Images are stored in the `product-images` bucket with filenames like:
- `1234567890-product-name.jpg`
- Format: `{timestamp}-{sanitized-filename}`

Public URL format:
```
https://txrzvxxpfdttuurnksmd.supabase.co/storage/v1/object/public/product-images/{filename}
```

## Security Notes

- Row Level Security (RLS) is enabled on the products table
- Storage bucket is public for image access
- Write access is open for demo purposes
- For production, consider:
  - Adding authentication requirement for admin operations
  - Creating admin-only policies
  - Adding file size limits and type validation
  - Setting up image optimization/resizing
