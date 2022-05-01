const db = require('./config/connection.js');

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

        `SELECT employee.id,
        employee.first_name,
        employee.last_name`

        // add JOIN statments to structure
    )
};

module.exports = { showAllDepartments, showAllEmployees, showAllRoles }