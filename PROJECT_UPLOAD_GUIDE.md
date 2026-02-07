# Project Upload Guide for Mercury Sols

To add a new project to your landing page, follow these steps:

## 1. Upload Assets

1.  **Thumbnail**: Upload a 16:9 image to the `project-assets` bucket in Supabase.
2.  **Gallery Images**: Upload any additional images to the same `project-assets` bucket.
3.  **ZIP File**: Upload the project source code ZIP to the `project-downloads` bucket.
4.  **Copy URLs**: Get the public URLs for these files.

## 2. Insert into Database

Run this SQL query in the Supabase SQL Editor for each project:

```sql
INSERT INTO projects (
  title,
  purpose,
  experience,
  description,
  thumbnail_url,
  zip_file_url,
  images
) VALUES (
  'My Awesome Project',
  'Frontend Development',
  'A deep dive into high-performance React applications.',
  'This project showcases the use of Vite and Tailwind for massive scalability.',
  'https://[YOUR_URL]/storage/v1/object/public/project-assets/thumb.jpg',
  'https://[YOUR_URL]/storage/v1/object/public/project-downloads/source.zip',
  ARRAY['https://[YOUR_URL]/storage/v1/object/public/project-assets/gallery1.jpg']
);
```

## 3. Deployment

If you are using Vite, run:

```bash
npm run build
```

Then deploy the `dist` folder to your favorite hosting service (Vercel, Netlify, etc.).
