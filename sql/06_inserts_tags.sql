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
