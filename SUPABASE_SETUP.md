# Supabase Setup Guide

This project now uses Supabase as the backend for product management. Products are stored in a PostgreSQL database with real-time sync across all users.

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Set project name: `achiedcloset`
5. Set database password (save this securely)
6. Choose region closest to your users (e.g., `ap-south-1` for India)
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

### 4. Create the Database Table

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **New query**
3. Copy and paste the contents of `supabase-setup.sql`
4. Click **Run**

This will:
- Create the `products` table
- Enable Row Level Security
- Set up policies for read/write access
- Insert the default products

### 5. Install Dependencies

```bash
npm install
```

### 6. Run the App

```bash
npm run dev
```

## Features

- **Real-time sync**: Products update instantly across all browsers
- **Offline fallback**: If Supabase is unavailable, app falls back to localStorage
- **Loading states**: Clear feedback during API operations
- **Error handling**: Graceful degradation with user notifications

## Database Schema

```sql
table products {
  id: serial primary key
  name: text
  price: integer
  category: text (bags | perfumes | gift-sets)
  image: text
  description: text
  details: text[]
  is_new: boolean
  created_at: timestamp
}
```

## Security Notes

- Row Level Security (RLS) is enabled on the products table
- Currently allows public read access for all users
- Write access (create/update/delete) is also open for demo purposes
- For production, consider:
  - Adding authentication requirement for write operations
  - Creating admin-only policies
  - Adding API rate limiting
