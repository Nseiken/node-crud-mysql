CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    salary INT
);

DESCRIBE employee;

INSERT INTO employee (name, salary) values
	('John', 2000),
    ('Sam', 1500),
    ('Max', 1000),
    ('Joe', 2500);
    
SELECT * FROM employee;