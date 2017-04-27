DROP DATABASE IF EXISTS `photo`;

CREATE DATABASE photo;

USE photo;

DROP TABLE IF EXISTS `photos`;
    
CREATE TABLE photos (
  id int UNIQUE AUTO_INCREMENT,
  title VARCHAR(200),
  url VARCHAR(200),
  rating int,
  PRIMARY KEY (ID)
);