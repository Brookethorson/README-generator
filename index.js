const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require('./util/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?" 
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Table of Contents" 
    },
    {
        type: "input",
        name: "installation",
        message: "What does the User need to install to run this application?"
    },
    {
        type: "input",
        name: "usage",
        message: "What information should Users know about the Repository?"
    },
    {
        type: "list",
        name: "license",
        message: "What kinds of license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        name: "contribution",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should in executed to run tests?"   
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })

}


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("generateREADME.md", generateMarkdown(data));
            console.log(data)

        })

}
init();