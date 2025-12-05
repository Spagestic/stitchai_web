-- Jersey tags RLS policies
-- Everyone can read jersey tags
CREATE POLICY "Jersey tags are publicly readable" ON public.jersey_tags
  FOR SELECT
  USING (true);

-- Only jersey owner can insert tags for their jerseys
CREATE POLICY "Users can add tags to their own jerseys" ON public.jersey_tags
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.jerseys
      WHERE id = jersey_id AND user_id = auth.uid()
    )
  );

-- Only jersey owner can delete tags from their jerseys
CREATE POLICY "Users can remove tags from their own jerseys" ON public.jersey_tags
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.jerseys
      WHERE id = jersey_id AND user_id = auth.uid()
    )
  );
