-- Table creation
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  updated_at timestamp with time zone NULL DEFAULT now(),
  created_at timestamp with time zone NULL DEFAULT now(),
  full_name text NULL,
  avatar_url text NULL,
  email text NULL,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users (id) ON DELETE CASCADE
) TABLESPACE pg_default;

-- Function creation
CREATE OR REPLACE FUNCTION public.handle_auth_user_created()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NULL),
    COALESCE(NEW.email, NEW.raw_user_meta_data ->> 'email'),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', NULL)
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$function$;

-- Trigger creation
CREATE TRIGGER auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_auth_user_created();

-- Tags table
CREATE TABLE public.tags (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL UNIQUE,
  description text NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT tags_name_length CHECK (char_length(name) > 0)
) TABLESPACE pg_default;

-- Initial tags data
INSERT INTO public.tags (name, description) VALUES
  ('Modern', 'Contemporary and up-to-date design style'),
  ('Bold', 'Strong, striking visual presence'),
  ('Festive', 'Celebratory and special occasion themed'),
  ('Elegant', 'Sophisticated and refined design'),
  ('Classic', 'Timeless and traditional style'),
  ('Retro', 'Vintage or nostalgic design elements'),
  ('Futuristic', 'Forward-thinking and innovative design'),
  ('Minimal', 'Minimalist design with essential elements only'),
  ('Chic', 'Stylish and fashionable'),
  ('National', 'Country or national pride themed'),
  ('Team', 'Team-based or group themed'),
  ('Legend', 'Iconic or legendary themed'),
  ('Abstract', 'Non-representational design'),
  ('Geometric', 'Shape and pattern-based design'),
  ('Gradient', 'Color gradient transitions'),
  ('Nature-inspired', 'Design inspired by natural elements')
ON CONFLICT (name) DO NOTHING;

-- Jerseys table
CREATE TABLE public.jerseys (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  name text NOT NULL,
  description text NULL,
  image_url text NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  is_community_featured boolean DEFAULT false,
  views_count integer DEFAULT 0,
  CONSTRAINT jerseys_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.profiles (id) ON DELETE CASCADE,
  CONSTRAINT jerseys_name_length CHECK (char_length(name) > 0)
) TABLESPACE pg_default;

-- Jersey tags junction table (many-to-many relationship)
CREATE TABLE public.jersey_tags (
  jersey_id uuid NOT NULL,
  tag_id uuid NOT NULL,
  PRIMARY KEY (jersey_id, tag_id),
  CONSTRAINT jersey_tags_jersey_id_fkey FOREIGN KEY (jersey_id) REFERENCES public.jerseys (id) ON DELETE CASCADE,
  CONSTRAINT jersey_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags (id) ON DELETE CASCADE
) TABLESPACE pg_default;

-- Indexes for better query performance
CREATE INDEX jerseys_user_id_idx ON public.jerseys(user_id);
CREATE INDEX jerseys_created_at_idx ON public.jerseys(created_at);
CREATE INDEX jerseys_is_community_featured_idx ON public.jerseys(is_community_featured);
CREATE INDEX jersey_tags_tag_id_idx ON public.jersey_tags(tag_id);

-- Enable RLS on tables
ALTER TABLE public.jerseys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jersey_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

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

-- Tags RLS policies
-- Everyone can read tags
CREATE POLICY "Tags are public" ON public.tags
  FOR SELECT
  USING (true);

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
