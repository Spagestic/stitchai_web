-- Jerseys RLS policies
-- Only authenticated users can read jerseys (no anonymous access)
-- Jerseys table: Public read, but only owners can modify
CREATE POLICY "Jerseys are publicly readable" ON public.jerseys
  FOR SELECT
  USING (true);

-- Only authenticated users can create jerseys
CREATE POLICY "Users can create their own jerseys" ON public.jerseys
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only update their own jerseys
CREATE POLICY "Users can update their own jerseys" ON public.jerseys
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own jerseys
CREATE POLICY "Users can delete their own jerseys" ON public.jerseys
  FOR DELETE
  USING (auth.uid() = user_id);
