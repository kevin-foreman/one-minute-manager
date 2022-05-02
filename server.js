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
const addRole = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Role Name: '
        }
    ]).then((response) => {

        const query = `INSERT INTO role SET ?`;

        db.query(query, {name: response.name}, (err, response) => {
            if(err) throw err;

            console.table(response);

            businessPrompts();

        });
    });

}

// function to addEmployee to the database

// function updateEmployeeRole in the database











