CREATE DATABASE IF NOT EXISTS exercice04jointures
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;
	
USE exercice04jointures;

CREATE TABLE IF NOT EXISTS `clients` (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	ville VARCHAR(50) NOT NULL,
	created_at DATETIME DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS achats (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	produit VARCHAR(100) NOT NULL,
	clients_id INT,
	montant INT,
	FOREIGN KEY (clients_id) REFERENCES clients(id)	
);

INSERT INTO
	clients
	(first_name, first_name, ville, created_at)
VALUES
	('Jessica', 'Taylor', 'Berlin', NOW()),
    ('Christopher', 'Moore', 'Rome', NOW()),
    ('Olivia', 'Jackson', 'Moscow', NOW()),
    ('James', 'Doe', 'New York', NOW()),
    ('Sophia', 'Smith', 'London', NOW()),
    ('Emma', 'Johnson', 'Los Angeles', NOW()),
    ('Daniel', 'Brown', 'Paris', NOW()),
    ('David', 'Lee', 'Tokyo', NOW());
    
SELECT * FROM clients;

INSERT INTO
	achats
	(produit, clients_id, montant)
VALUES
	 ('Montre', 1,  2000),
    ('Veste', 5, 500),
    ('Pantalon', 6, 300),
    ('Sweat', 1,  400),
    ('Machine', 7, 540),
    ('The', 8, 50),
    ('Cafe', 4, 2500),
    ('Sac', 5, 300),
    ('Coucouette', 3, 300),
    ('Cuir', 2, 300);
    
SELECT * FROM achats;


SELECT 
	CONCAT(first_name, ' ', UPPER(last_name)) AS full_name,
	COUNT(*) AS nb_achat
FROM clients
INNER JOIN achats ON clients.id = achats.clients_id
GROUP BY
	clients.id
ORDER BY nb_achat DESC;

SELECT 
	CONCAT(first_name, ' ', UPPER(last_name)) AS full_name
FROM clients
LEFT JOIN achats ON clients.id = achats.clients_id
WHERE achats.clients_id IS NULL;