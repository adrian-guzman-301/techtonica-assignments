CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  date DATE,
  description VARCHAR,
  category VARCHAR,
  isFavorite BOOLEAN
)