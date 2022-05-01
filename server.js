const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const inquirer = require('inquirer');
const db = require('./config/connection');
const showAllDepartments = require('./models/queries');


// Make queries async because MySQL exposes a .promise() function...
// on Connections to upgrade an existing non-Promise connection to...
// use Promises

const businessPrompts = () => {

    inquirer.prompt([

        {
            type: 'list',
            name: 'menuOptions',
            message: 'Select an option',
            choices: ['View All departments',
            'View All roles',
            'View All Employees',
            'Add a department',
            'Add a role',
            'Add an Employee',
            'Update an employee role',],
        },
    ]).then((promptChoice) => {

        let menuOption = promptChoice.menuOptions;

        console.log(promptChoice.menuOptions);
        db.query;
    });

};

businessPrompts();

// function viewAllDepartments

// function viewAllRoles

// function viewAllEmployees

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

