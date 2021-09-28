//Function to generate README markdown


function generateMarkdown(data) {
    console.log(data)
    console.log(data.title, data.email)
return `

<h1 align="center">${data.title}</h1>

![badge](https://img.shields.io/badge/license-${data.license}-blue)
<br />

## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install the necessary dependancies, run the following in console: ${data.installation}

## Usage
${data.usage}

## License
The projects is licensed under: ${data.license}  
![badge](https://img.shields.io/badge/license-${data.license}-blue)
<br />


## Contribution
​Contributors: ${data.contributing}

## Tests
To perform necessary tests, run the following in the console: ${data.tests}

## Questions
Please reach out at [GitHub](https://github.com/${data.username}) 
or 
Contact ${data.username} at ${data.email} with questions.
`
}

module.exports = generateMarkdown;