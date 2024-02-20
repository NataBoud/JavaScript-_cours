CREATE DATABASE exercice01

USE exercice01
CREATE TABLE etudiant (
	id INT,
	prenom VARCHAR(50),
	nom VARCHAR(50),
	age INT,
	niveau INT
);

ALTER TABLE etudiant
	ADD CONSTRAINT pk_etudiant_id PRIMARY KEY(id);
	
ALTER TABLE etudiant
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;