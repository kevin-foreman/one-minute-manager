CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    name VARCHAR(30), --will hold department name

    description VARCHAR(50)

    --determine other properties of a department

    --share a foreign key with employee probably
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    title VARCHAR(30), --will hold role title

    salary DECIMAL(10, 2),

    department_id INTEGER, --holds ref. to department the role belongs to (foreign key)

    --decide which other properties, if any, the "role should have"
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,

    first_name VARCHAR(30),

    last_name VARCHAR(30),

    role_id INTEGER, --holds ref. to employee role

    manager_id INTEGER, --holds ref. to another emp. that is the manager of the current employee
    --manager_id can be NULL if employee has no manager
);