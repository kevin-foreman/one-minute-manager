INSERT INTO department (name, description)
VALUES
    ('Electronics', 'placeholder'),
    ('Furniture', 'placeholder'),
    ('Outdoor', 'placeholder'),
    ('Hardware', 'placeholder');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 80000.00, 1),
    ('Manager', 80000.00, 2),
    ('Manager', 80000.00, 3),
    ('Manager', 80000.00, 4),
    ('Cashier', 35000.00, 2),
    ('Sales Person', 40000.00, 2),
    ('Customer Service', 30000.00, 3),
    ('Customer Service', 30000.00, 4),
    ('Cashier', 35000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 5, 2),
    ('Jack', 'London', 5, 3),
    ('Robert', 'Bruce', 5, 4),
    ('Peter', 'Greenaway', 5, 1),
    ('Derek', 'Jarman', 1),
    ('Paolo', 'Pasolini', 2),
    ('Heathcote', 'Williams',3),
    ('Sandy', 'Powell',4),
    ('Emil', 'Zola', 6, 3) 
    ('Sissy', 'Coalpits', 6, 4),
    ('Antoinette', 'Capet', 7, 3),
    ('Samuel', 'Delany', 7, 4),
    ('Tony', 'Duvert', 9, 4);