-- Profiles RLS policies
-- Anyone can read profiles (needed to see jersey creators)
CREATE POLICY "Profiles are public" ON public.profiles
  FOR SELECT
  USING (true);

-- Users can only update their own profile
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
