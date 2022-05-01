const db = require('../config/connection.js');
const cTable = require('console.table');
const businessPrompts = require('../server')
// create classes to hold various sections of the business
// constructor function

// using variables to represent each table
// variables can also return select bits of a table
// example: SELECT * FROM db WHERE X = Y

// Need a function for each of the responses

// Make the first prompt the user will have access to
const showAllDepartments = function() {
    db.query(
        'SELECT * FROM `table` WHERE `name` = "department"',

        function(err, results) {
            console.log(results);
        }

        // use JOIN statements to define the table

        // use console.table to display correctly

    )

};

// Second prompt option
const showAllRoles = function() {
    db.query(
        'SELECT * FROM `table` WHERE `name` = "role"',

        function(err, results) {
            console.log(results);
            console.table(results);
        }
    
    
    );
};

// Third 'show' prompt option
const showAllEmployees = function() {
    db.query(

        `SELECT E.id,
        E.first_name,
        E.last_name,
        R.title,
        D.name AS department,
        R.salary,
        FROM employee E,
        JOIN role R ON E.role_id = R.id,
        JOIN department D ON R.department_id = D.id,
        LEFT OUTER JOIN employee M ON E.manager_id = M.id;`,
        function(err, results) {
            
                console.log(results);
                console.table(results);
            }

        // add JOIN statments to structure
        );
    
};

module.exports = { showAllDepartments, showAllEmployees, showAllRoles }