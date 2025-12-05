-- Indexes for better query performance
CREATE INDEX jerseys_user_id_idx ON public.jerseys(user_id);
CREATE INDEX jerseys_created_at_idx ON public.jerseys(created_at);
CREATE INDEX jerseys_is_community_featured_idx ON public.jerseys(is_community_featured);
CREATE INDEX jersey_tags_tag_id_idx ON public.jersey_tags(tag_id);
