-- Table: public.jersey_tags
CREATE TABLE public.jersey_tags (
  jersey_id uuid NOT NULL,
  tag_id uuid NOT NULL,
  PRIMARY KEY (jersey_id, tag_id),
  CONSTRAINT jersey_tags_jersey_id_fkey FOREIGN KEY (jersey_id) REFERENCES public.jerseys (id) ON DELETE CASCADE,
  CONSTRAINT jersey_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags (id) ON DELETE CASCADE
) TABLESPACE pg_default;
