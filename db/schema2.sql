
USE bxibbbiojpvnpp3c;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (

  id INTEGER(25) AUTO_INCREMENT NOT NULL,
  
  burgername VARCHAR(40) NOT NULL,
  
  devoured BOOLEAN DEFAULT false,
  
  ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 
 dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  PRIMARY KEY (id)
  
);

