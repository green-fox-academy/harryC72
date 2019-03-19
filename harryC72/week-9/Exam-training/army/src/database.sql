CREATE TABLE soldier(sold_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name VARCHAR(255) NOT NULL,
health INT NOT NULL DEFAULT 50,
armour INT NOT NULL DEFAULT 20);

CREATE TABLE platoon(plat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
sold_id INT NOT NULL,
FOREIGN KEY (sold_id) REFERENCES soldier(sold_id)
); 

grant all privileges on army to harryxenon@localhost identified by "loom55";

