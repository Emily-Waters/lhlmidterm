DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  cost INTEGER NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  is_vegan BOOLEAN DEFAULT false,
  is_vegetarian BOOLEAN DEFAULT false,
  is_gluten_free BOOLEAN DEFAULT false
);
