-- Create a storage bucket for jersey images
insert into storage.buckets (id, name, public)
values ('jersey-images', 'Jersey Images', true)
on conflict (id) do nothing;

-- Allow public read access to jersey-images bucket
create policy "Public read for jersey images"
on storage.objects
for select
using (
  bucket_id = 'jersey-images'
);
