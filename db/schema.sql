

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

  id INTEGER(25) AUTO_INCREMENT NOT NULL,
  
  burgername VARCHAR(40) NOT NULL,
  
  devoured BOOLEAN DEFAULT false,
  
  createdAt TIMESTAMP NOT NULL,
  
  PRIMARY KEY (id)
  
);