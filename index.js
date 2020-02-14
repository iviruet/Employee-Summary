const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your email address?",
            },
        {
            type: "input",
            name: "name",
            message: "What is your employee id?",
            },
        {
            type: "input",
            name: "name",
            message: "What is your email address?",
            },
    ])