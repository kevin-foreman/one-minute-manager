DROP DATABASE IF EXISTS small_business_db;

CREATE DATABASE small_business_db;

USE small_business_db;

DROP TABLE IF EXISTS department;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    name VARCHAR(30)

);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    title VARCHAR(30),

    salary DECIMAL(10, 2),

    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)

);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    first_name VARCHAR(30),

    last_name VARCHAR(30),

    role_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),

    manager_id INTEGER,
    CONSTRAINT fk_employee FOREIGN KEY (manager_id) REFERENCES employee(id)
);