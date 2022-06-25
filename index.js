const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('Engineer');
const Intern = require('Intern');
const Manager = require('Manager');

const addEmployee = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's id number: ",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a valid ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter a valid email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's GitHub username: ",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a valid GitHub username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the name of the school the intern attends: ",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter a valid school name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number: ",
            when: (input) => input.role === "Manager",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter a valid office number!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to enter another employee's information?",
            default: false
        }
    ])
    
    .then(employeeData => {
        
    })
};