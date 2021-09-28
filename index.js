//Modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown");

//Array of questions for User input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a breif description of your project:",
        name:"description"
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "Table of Contents"
    },
    {
        type: "input",
        message: "What does the User need to install to run this application?",
        name: "installation"
    },
    {
        type: "input",
        message: "What information should Users know about the Repository?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kinds of license does you project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
        name: "license"
        
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What command should be executed to run tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "username",
        name: "What is your GitHub username?"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]

//function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
}

//initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("generateREADME.md", generateMarkdown(data));
    })
}

init();