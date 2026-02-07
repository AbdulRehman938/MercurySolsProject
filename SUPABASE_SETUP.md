# Mercury Sols - Supabase Setup Guide

The error you encountered was likely due to copying the Markdown text (like headers) into the SQL editor. You must **only** copy the SQL code blocks.

## Step 1: Initialize the Database

Copy the contents of `supabase_schema.sql` or copy the block below and paste it into the **SQL Editor** in your Supabase Dashboard.

```sql
-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  purpose TEXT,
  experience TEXT,
  description TEXT,
  thumbnail_url TEXT,
  zip_file_url TEXT,
  images TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access
DROP POLICY IF EXISTS "Allow public read access" ON projects;
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);
```

## Step 2: Configure Storage Buckets

1. Go to **Storage** in your Supabase Sidebar.
2. Create two buckets with these **exact names**:
   - `project-assets`
   - `project-downloads`
3. Make sure to toggle **"Public bucket"** to ON for both.

## Step 3: Storage Access Policies

Once the buckets are created, run this SQL to allow the website to read the files:

```sql
CREATE POLICY "Public Access Assets" ON storage.objects
  FOR SELECT USING ( bucket_id = 'project-assets' );

CREATE POLICY "Public Access Downloads" ON storage.objects
  FOR SELECT USING ( bucket_id = 'project-downloads' );
```

## Step 4: Adding Data

See `PROJECT_UPLOAD_GUIDE.md` for instructions on how to insert your first project.
