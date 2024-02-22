CREATE DATABASE IF NOT EXISTS exercice05Ville
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;
	
USE exercice05Ville;

SELECT * FROM villes_france_free
LIMIT 40;

-- 1. Obtenir la liste des 10 villes les plus peuplées en 2012

SELECT ville_nom_reel, ville_population_2012
FROM villes_france_free
ORDER BY ville_population_2012 DESC LIMIT 10;

-- 2. Obtenir la liste des 50 villes ayant la plus faible superficie

SELECT ville_nom_reel, ville_surface
FROM villes_france_free
ORDER BY ville_surface ASC LIMIT 50;

SELECT * FROM departement;

-- 3. Obtenir la liste des départements d’outre-mer, c’est-à-dire ceux dont le numéro de département commençant par “97”
SELECT * FROM departement
WHERE departement_code LIKE '97%';

-- 4. Obtenir le nom des 10 villes les plus peuplées en 2012, ainsi que le nom du département associé
SELECT ville_nom_reel, departement_nom
FROM villes_france_free
LEFT JOIN departement ON villes_france_free.ville_departement = departement.departement_code
ORDER BY 
	ville_population_2012 
	DESC LIMIT 10;

-- 5. Obtenir la liste des 10 plus grands départements, en termes de superficie

SELECT 
	departement_nom, 
	SUM(ville_surface) AS ville_surface_total
FROM 
	villes_france_free
LEFT JOIN departement ON villes_france_free.ville_departement = departement.departement_code
GROUP BY 
	departement_nom
ORDER BY 
	ville_surface_total DESC LIMIT 10;

-- 7. Compter le nombre de villes dont le nom commence par “Saint”
SELECT 
	COUNT(*) AS nb_villes_commence_par_saint 
FROM villes_france_free
WHERE ville_nom_reel LIKE 'Saint%';
