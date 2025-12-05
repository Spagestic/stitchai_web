-- Table: public.tags
CREATE TABLE public.tags (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL UNIQUE,
  description text NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT tags_name_length CHECK (char_length(name) > 0)
) TABLESPACE pg_default;
