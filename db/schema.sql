
DROP DATABASE IF EXISTS burgersdb;

CREATE DATABASE burgersdb;

USE burgersdb;

CREATE TABLE burgers (

  id INTEGER(25) AUTO_INCREMENT NOT NULL,
  
  burgername VARCHAR(40) NOT NULL,
  
  devoured BOOLEAN DEFAULT false,
  
  PRIMARY KEY (id)
  
);
