-- Tags RLS policies
-- Everyone can read tags
CREATE POLICY "Tags are public" ON public.tags
  FOR SELECT
  USING (true);
