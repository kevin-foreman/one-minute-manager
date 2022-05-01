const db = require('./config/connection.js');
const cTable = require('console.table');

// create classes to hold various sections of the business
// constructor function

// using variables to represent each table
// variables can also return select bits of a table
// example: SELECT * FROM db WHERE X = Y

// Need a function for each of the responses
// 
const showAllDepartments = function() {
    return await db.query(
        'SELECT * FROM `small_business_id.department`',

        // use JOIN statements to define the table

        // use console.table to display correctly

    )

};

const showAllRoles = function() {
    return await db.query(
        `SELECT * FROM 'small_business_id.roles'`
    )
};

const showAllEmployees = function() {
    return await db.query(

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
        (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table
            
            // return;

        // add JOIN statments to structure
    )
};

module.exports = { showAllDepartments, showAllEmployees, showAllRoles }