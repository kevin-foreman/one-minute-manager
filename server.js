const mysql = require('mysql2');
const inquirer = require('inquirer');
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
            choices: ['View All departments',
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

    db.query(sql, (err, results) => {

        if (err) throw err;

        // console.log(results);

        console.table(results);

        businessPrompts();
    });
};

// Second prompt option
// function viewAllRoles
const showAllRoles = () => {

    const sql = `SELECT * FROM role`;

    db.query(sql, (err, results) => {

        if (err) throw err;

        // console.log(results);
        
        console.table(results);

        businessPrompts();
    });
};

// Third 'show' prompt option
// function viewAllEmployees

const showAllEmployees = function() {

    const sql = `SELECT * FROM employee`

    db.query(sql, (err, results) => {

        if (err) throw err;
            
        // console.log(results);
        console.table(results);

        });
    
};

// function addDepartment

// function addRole

// function addEmployee

// function updateEmployeeRole













// init():

           // Create the routes in this file to connect:
           // app.get for a route to the index.html
           // app.get for a route to the notes.html

           // app.post and/or app.use to handle a user's input
           // user's input must add the note data to the pre-existing JSON file (db.json)

// console application

// Display logo text, load main prompts
// function init() {
// const logoText = logo({ name: "Employee Manager" }).render();
// is there a need to include a "seed" reference, or dependency in package.JSON?

// 


// Example prompts
// 1. What would you like to do? (Use arrow keys)
// 2. View all employees
// --> if I select an employee then determine what department they work in
// --> if I want to delete an employee, what else do I need to delete? (anything?)
// 3. View all employees by department
// 4. View all employees by manager

// }

