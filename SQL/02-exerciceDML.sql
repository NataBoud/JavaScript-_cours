CREATE DATABASE exercice01
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;
	
USE exercice01;

CREATE TABLE etudiant (
	id INT NOT NULL,
	prenom VARCHAR(50) NOT NULL,
	nom VARCHAR(50) NOT NULL,
	age TINYINT(3),
	niveau VARCHAR(10),
	CONSTRAINT ck_age CHECK(age > 0)
);

ALTER TABLE etudiant
	ADD CONSTRAINT pk_etudiant_id PRIMARY KEY(exercice01id);
	
ALTER TABLE etudiant
	MODIFY age INT NOT NULL;
	
ALTER TABLE etudiant
	MODIFY id INT NOT NULL AUTO_INCREMENT;
	
CREATE TABLE IF NOT EXISTS cursus (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nom VARCHAR(30) NOT NULL,
	date_creation DATETIME DEFAULT NOW()cours_categorie
);

ALTER TABLE etudiant
	ADD COLUMN cursus_id INT,
	ADD CONSTRAINT fk_etudiant_cursus_id FOREIGN KEY(cursus_id) REFERENCES cursus(id);
	
	
	
	
CREATE TABLE IF NOT EXISTS cours (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nom VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS cours_etudiant (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

ALTER TABLE cours_etudiant
	ADD COLUMN cursus_id INT,
	ADD COLUMN etudiant_id INT,
	ADD CONSTRAINT fk_cursus_id FOREIGN KEY(cursus_id) REFERENCES cursus(id),
	ADD CONSTRAINT fk_etudiant_id FOREIGN KEY(etudiant_id) REFERENCES etudiant(id);
	
ALTER TABLE cours_etudiant
	ADD COLUMN date_debut_cours DATETIME DEFAULT NOW();

DROP TABLE cours_categorie;



CREATE DATABASE IF NOT EXISTS exercice02
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;

SHOW DATABASES;

USE exercice02;

CREATE TABLE Students (
student_id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
age INT,
grade VARCHAR(10)
);

SHOW TABLES;

SELECT * FROM Students;

INSERT INTO
	Students
	(first_name, last_name, age, grade)
VALUE
	('Maria', 'Rodriguez', '21', 'B'), 
	('Ahmed', 'Khan', '19', 'A'),
	('Emily', 'Baker', '22', 'C');

UPDATE
	Students
SET
	grade = 'A'
WHERE
	student_id = 1;

UPDATE
	Students
SET
	age + 1;
	
DELETE FROM
	Students
WHERE
	student_id = 3;
	
DELETE FROM
	Students
WHERE
	age < 20;
	
TRUNCATE TABLE
	Students;
	
	
	
CREATE DATABASE IF NOT EXISTS exercice03
	CHARACTER SET utf8mb4
	COLLATE UTF8MB4_GENERAL_CI;

USE exercice03;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    job VARCHAR(100),
    birth_date DATE,
    birth_location VARCHAR(100)
);

INSERT INTO Users (first_name, last_name, job, birth_date, birth_location)
VALUES
    ('John', 'Doe', 'Developer', '1995-05-12', 'New York'),
    ('Alice', 'Smith', 'Designer', '1988-09-28', 'London'),
    ('Michael', 'Johnson', 'Engineer', '1977-02-05', 'Los Angeles'),
    ('Emily', 'Brown', 'Teacher', '1992-04-18', 'Paris'),
    ('David', 'Lee', 'Doctor', '1985-11-30', 'Tokyo'),
    ('Sarah', 'Wilson', 'Lawyer', '1990-06-08', 'Sydney'),
    ('Daniel', 'Anderson', 'Developer', '1983-12-21', 'Toronto'),
    ('Jessica', 'Taylor', 'Engineer', '1991-10-15', 'Berlin'),
    ('Christopher', 'Moore', 'Designer', '1997-01-04', 'Rome'),
    ('Olivia', 'Jackson', 'Teacher', '1994-08-22', 'Moscow'),
    ('James', 'Doe', 'Engineer', '1987-03-12', 'New York'),
    ('Sophia', 'Smith', 'Developer', '1993-07-28', 'London'),
    ('Emma', 'Johnson', 'Designer', '1980-09-05', 'Los Angeles'),
    ('Daniel', 'Brown', 'Doctor', '1992-02-18', 'Paris'),
    ('David', 'Lee', 'Lawyer', '1985-11-30', 'Tokyo');

SELECT * FROM users;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE users
ADD COLUMN age INT,
ADD COLUMN salary INT NOT NULL DEFAULT 0;

UPDATE users
SET age = TIMESTAMPDIFF(YEAR, birth_date, CURDATE());

UPDATE users
SET salary = FLOOR(2000 + RAND() * (3500 - 2000));

SET SQL_SAFE_UPDATES = 1;
users
SELECT * FROM users;

SELECT first_name, last_name FROM users;

SELECT first_name, last_name, job FROM users WHERE job = 'developer';

SELECT * FROM users;

UPDATE users
SET salary = FLOOR(2000 + RAND() * (3500 - 2000));

SELECT first_name, last_name, job FROM users;

SELECT first_name, last_name, job FROM users WHERE job <> 'developer';

SELECT first_name, last_name, job FROM users WHERE first_name = 'John';

SELECT * FROM users WHERE salary >= 3000;

SELECT * FROM users WHERE age < 30 OR age >= 35;

SELECT * FROM users WHERE job = 'Teacher' AND salary > 2600;

SELECT * FROM users 
WHERE birth_location = 'New York' 
	AND (salary >= 3000 OR salary <= 3500) 
	AND 
	NOT (job = 'Doctor' OR job = 'Lawyer');
	

SELECT * FROM users WHERE job = 'Engineer';

SELECT first_name, last_name FROM users 
WHERE birth_location = 'New York' IN ('London', 'Paris', 'Berlin');

SELECT * FROM users 
WHERE age BETWEEN 25 AND 35;

SELECT * FROM users 
WHERE job = 'Developer' AND salary > 2500;

SELECT * FROM users 
ORDER BY first_name DESC;

SELECT * FROM users 
ORDER BY age DESC LIMIT 5;

SELECT * FROM users 
ORDER BY first_name DESC LIMIT 5 OFFSET 5;

SELECT * FROM users 
ORDER BY salary DESC LIMIT 3;

SELECT MIN(salary) AS salary_min_users
FROM users

SELECT MAX(age) AS engineer_max_age
FROM users
WHERE job = "Engineer";

SELECT AVG(salary) AS salary_average
FROM users
WHERE job = "Teacher";

SELECT SUM(salary) AS salary_sum_total
FROM users;

SELECT birth_location, SUM(salary)
FROM Users
GROUP BY birth_location
ORDER BY birth_location;

SELECT birth_location, AVG(salary)
FROM Users
GROUP BY birth_location
ORDER BY AVG(salary) DESC;


SELECT birth_location, AVG(salary) AS average_salary
FROM Users
GROUP BY birth_location
HAVING AVG(salary) > 3000;

SELECT birth_location, SUM(salary) AS total_salary
FROM Users
WHERE salary > 3000
GROUP BY birth_location;

SELECT first_name
FROM Users
WHERE birth_location NOT LIKE 'S%';

SELECT first_name
FROM Users
WHERE first_name LIKE '_o%';


SELECT DISTINCT first_name 
FROM users 
WHERE first_name LIKE 'd%';

SELECT last_name
FROM Users
WHERE last_name LIKE '%son';

SELECT first_name
FROM Users
WHERE first_name LIKE '_____';

SELECT *
FROM Users
WHERE job LIKE 'Docto%';