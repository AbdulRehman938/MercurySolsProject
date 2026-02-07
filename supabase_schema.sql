-- 1. Create the projects table
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

-- 2. Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access (Required for the landing page)
DROP POLICY IF EXISTS "Allow public read access" ON projects;
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT USING (true);

-- 4. Storage Policies (Run after creating buckets 'project-assets' and 'project-downloads')
-- These allow public access to objects within those specific buckets

DROP POLICY IF EXISTS "Public Access Assets" ON storage.objects;
CREATE POLICY "Public Access Assets" ON storage.objects
  FOR SELECT USING ( bucket_id = 'project-assets' );

DROP POLICY IF EXISTS "Public Access Downloads" ON storage.objects;
CREATE POLICY "Public Access Downloads" ON storage.objects
  FOR SELECT USING ( bucket_id = 'project-downloads' );
