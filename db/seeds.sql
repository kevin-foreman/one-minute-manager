INSERT INTO department (id, name)
VALUES
    (1, 'Electronics'),
    (2, 'Finance'),
    (3, 'Marketing'),
    (4, 'Public Affairs');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'Manager', 80000.00, 1),
    (2, 'Manager', 80000.00, 2),
    (3, 'Manager', 80000.00, 3),
    (4, 'Manager', 80000.00, 4),
    (5, 'Cashier', 35000.00, 2),
    (6, 'Sales', 40000.00, 2),
    (7, 'Customer Service', 30000.00, 3),
    (8, 'Customer Service', 30000.00, 4),
    (9, 'Cashier', 35000.00, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'James', 'Fraser', 5, 2),
    (2, 'Jack', 'London', 5, 3),
    (3, 'Robert', 'Bruce', 5, 4),
    (4, 'Peter', 'Greenaway', 5, 1),
    (5, 'Derek', 'Jarman', 1, NULL),
    (6, 'Paolo', 'Pasolini', 2, NULL),
    (7, 'Heathcote', 'Williams',3, NULL),
    (8, 'Sandy', 'Powell', 4, NULL),
    (9, 'Emil', 'Zola', 6, 3), 
    (10, 'Sissy', 'Coalpits', 6, 4),
    (11, 'Antoinette', 'Capet', 7, 3),
    (12, 'Samuel', 'Delany', 7, 4),
    (13, 'Tony', 'Duvert', 9, 4);