DROP TABLE IF EXISTS department;

DROP TABLE IF EXISTS role;

DROP TABLE IF EXISTS employees;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    name VARCHAR(30),

    description VARCHAR(50)

);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    title VARCHAR(30),

    salary DECIMAL(10, 2),

    department_id INTEGER

);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    first_name VARCHAR(30),

    last_name VARCHAR(30),

    role_id INTEGER,

    manager_id INTEGER
);