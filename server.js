const express = require('express');
const route = require('./routes');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes an express feature to modularize the code and make it scalable
app.use(routes);

// Make queries async because MySQL exposes a .promise() function...
// on Connections to upgrade an existing non-Promise connection to...
// use Promises

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ${PORT}'));
});

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


// Example prompts for Mod 12 challenge
// 1. What would you like to do? (Use arrow keys)
// 2. View all employees
// --> if I select an employee then determine what department they work in
// --> if I want to delete an employee, what else do I need to delete? (anything?)
// 3. View all employees by department
// 4. View all employees by manager

// }

