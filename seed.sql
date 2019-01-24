DROP DATABASE IF EXISTS blog;
CREATE DATABASE blog;

\c blog;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (100) UNIQUE NOT NULL,
  email VARCHAR (100) UNIQUE NOT NULL,
  password VARCHAR (250) NOT NULL,
  token VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author INT REFERENCES users(id) NOT NULL,
  title VARCHAR (100) NOT NULL,
  body TEXT NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  author INT REFERENCES users(id) NOT NULL,
  post_id INT REFERENCES posts(id) NOT NULL,
  title VARCHAR (100) NOT NULL,
  body TEXT NOT NULL
);

INSERT INTO users (username, email, password) VALUES
('John', 'john@email.com', 'abc'), ('Michelle', 'michelle@email.com', 'def');

INSERT INTO posts (author, title, body) VALUES
(1, 'bunny', 'Marshmello'), (2, 'dog', 'Chai'), (1, 'cat', 'Pixel');
