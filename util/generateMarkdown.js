// function to generate markdown for README

function generateMarkdown(data) {
    console.log(data)
    console.log(data.title, data.email)
    return `
# ${data.title}
https://github.com/${data.username}/${data.title}

## Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact](#contact)

## Installation
To install the necessary dependancies, run the following in console: ${data.installation}

## Usage
${data.usage}

## License
The projects is licensed under: ${data.license}  

# Contribution
​Contributors: ${data.contributing}

# Tests
To perform necessary tests, run the following in the console: ${data.tests}

# Questions
Please reach out at [GitHub](https://github.com/${data.username}) 
or 
Contact ${data.username} at ${data.email} with questions.
`
}

module.exports = generateMarkdown;