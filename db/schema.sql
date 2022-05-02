DROP DATABASE IF EXISTS small_business_db;

CREATE DATABASE small_business_db;

USE small_business_db;

SET FOREIGN_KEY_CHECKS=0;

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
    INDEX role_id (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),

    manager_id INTEGER,
    INDEX man_ind (manager_id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);