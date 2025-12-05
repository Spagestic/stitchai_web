-- Table: public.jerseys
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
