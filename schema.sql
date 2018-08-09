DROP DATABASE IF EXISTS similarProducts;

CREATE DATABASE similarProducts;

USE similarProducts;

CREATE TABLE products
(
  id int NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
url text,
name text NOT NULL,
rating int,
reviews int,
price real NOT NULL,
is_prime boolean NOT NULL,
similar_to int
);

  INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 2);
  INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 1);
  INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 4);
  INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 3);
  INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 2);
    INSERT INTO products
    (url, name, rating, reviews, price, is_prime, similar_to)
  VALUES
    ('Pioneer+DJ+Thumbnail.jpg', 'Pioneer DJ DDJ-SB3 DJ Controller', 4.3, 37, 243.45, false, 5);