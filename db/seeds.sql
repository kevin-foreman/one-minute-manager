INSERT INTO department (name)
VALUES
    ('Electronics'),
    ('Finance'),
    ('Marketing'),
    ('Public Affairs');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 80000.00, 1),
    ('Manager', 80000.00, 2),
    ('Manager', 80000.00, 3),
    ('Manager', 80000.00, 4),
    ('Cashier', 35000.00, 2),
    ('Sales', 40000.00,4 ),
    ('Customer Service', 30000.00, 2),
    ('Customer Service', 30000.00, 1),
    ('Cashier', 35000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 5, 2),
    ('Jack', 'London', 5, 3),
    ('Robert', 'Bruce', 5, 4),
    ('Peter', 'Greenaway', 5, 3),
    ('Derek', 'Jarman', 1, 3),
    ('Paolo', 'Pasolini', 2, 1),
    ('Heathcote', 'Williams', 3, 2),
    ('Sandy', 'Powell', 4, 2),
    ('Emil', 'Zola', 6, 2), 
    ('Sissy', 'Coalpits', 6, 2),
    ('Antoinette', 'Capet', 7, 1),
    ('Samuel', 'Delany', 7, 1),
    ('Tony', 'Duvert', 9, 2);