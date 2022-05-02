const mysql = require('mysql2');
const inquirer = require('inquirer');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
require('dotenv').config();
require('console.table');

// Establish a connection to the mysql server
const db = mysql.createConnection({

        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306

    })

db.connect(function (err) {

    if (err) throw err;
    console.log('Now connected to the small business database')
    businessPrompts();

});

// Try to make queries async because MySQL exposes a .promise() function...
// on Connections to upgrade an existing non-Promise connection to...
// use Promises

const businessPrompts = () => {

    inquirer.prompt([

        {
            type: 'list',
            name: 'menuOptions',
            message: 'Select an option',
            choices: ['View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',],
        },
    ]).then((response) => {

        switch (response.menuOptions) {
            case 'View All Departments':
            showAllDepartments();
            break;
            case 'View All Roles':
            showAllRoles();
            break;
            case  'View All Employees':
            showAllEmployees();
            break;
            case  'Add a Department':
            addDepartment();
            break;
            case 'Add a Role':
            addRole();
            break;
            
        }

        // let menuOption = promptChoice.menuOptions;

        // console.log(promptChoice.menuOptions);
        // db.query;
    });

};

// Make the first prompt the user will have access to
// function to allow user to viewAllDepartments
const showAllDepartments = () => {

    const sql = `SELECT * FROM department`;

    // include JOIN statements

    db.query(sql, (err, response) => {

        if (err) throw err;

        // console.log(rows);

        console.table(response);

        businessPrompts();
    });
};

// Second prompt option
// function viewAllRoles
const showAllRoles = () => {

    const sql = `SELECT role.*, department.name
    AS department_id
    FROM role
    LEFT JOIN department
    ON role.department_id = department.id`;

    db.query(sql, (err, response) => {

        if (err) throw err;

        // console.log(results);
        
        console.table(response);

        businessPrompts();
    });
};

// Third 'show' prompt option
// function viewAllEmployees

const showAllEmployees = () => {

    const sql = `SELECT * FROM employee`

    db.query(sql, (err, response) => {

        if (err) throw err;
            
        // console.log(results);
        console.table(response);

        businessPrompts();

        });
    
};

// function to addDepartment to the database
const addDepartment = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Department Name: '
        }
    ]).then((response) => {

        const query = `INSERT INTO department SET ?`;

        db.query(query, {name: response.name}, (err, response) => {
            if(err) throw err;

            console.table(response);

            businessPrompts();

        });
    });

}

// function to addRole to the database
// first function will call on the next function to complete the addition
const addRole = () => {

        const query = `SELECT department.id,
        department.name,
        role.salary
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON department.id = role.department_id
        GROUP BY department.id, department.name`

        db.query(query, (err, response) => {

            if(err) throw err;

            const department = response.map(({ id, name }) => ({

            value: id,

            name: `${id} ${name}`

            }));

            console.table(response);
            
            // call in the function to prompt the user to build out the role's attributes
            addRoleSections(department);

        });
    }

// secondary function to prompt the user to create the role
const addRoleSections = (department) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Role title: '
        },

        {
            type: 'input',
            name: 'salary',
            message: 'Role salary: '
        },
        {
            type: 'list',
            name: 'department',
            message: 'Role department: ',
            choices: department
        },
    ]).then((response) => {
    const query = `INSERT INTO role SET ?`;
    
    db.query(query, {

        title: response.title,
        salary: response.salary,
        department_id: response.department

    }, (err, response) => {

        if(err) throw err;

        businessPrompts();

        });
    });
}

// function to addEmployee to the database
const addEmployee = () => {

        const query = `SELECT department.id,
        department.name,
        role.salary
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON department.id = role.department_id
        GROUP BY department.id, department.name`

        db.query(query, (err, response) => {

            if(err) throw err;

            const department = response.map(({ id, name }) => ({

            value: id,

            name: `${id} ${name}`

            }));

            console.table(response);
            
            // call in the function to prompt the user to build out the role's attributes
            addRoleSections(department);

        });
    }

// function updateEmployeeRole in the database











