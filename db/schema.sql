
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (

  id INTEGER(25) AUTO_INCREMENT NOT NULL,
  
  burgername VARCHAR(40) NOT NULL,
  
  devoured BOOLEAN DEFAULT false,
  
  PRIMARY KEY (id)
  
);
