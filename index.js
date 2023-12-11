// require and include the packages needed for this application 
const inquirer = require('inquirer'); // For interactive command-line prompts
const { writeFile } = require('fs').promises; // For writing files using promises for async/await
const { Circle, Triangle, Square } = require('./lib/shapes.js'); // Custom shape modules from 'lib' folder 
const validateColor = require("validate-color").default; // For validating color inputs

// Main function to run the appliction 
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['circle', 'triangele', 'square',],
        validate: (shapeInput) => shapeInput ? true : 'Please choose a shape for you logo!'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please input text up to three characters for your logo:',
        validate: textInput => textInput.length <= 3 ? true : 'Provide the text for your logo with a max of 3 characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text (keyword or hex):',
        validate: textColorInput => validateColor(textColorInput) ? true : 'Please enter a valid color for the text.'

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape (keyword or hex):',
        validate: shapeColorInput => validateColor(shapeColorInput) ? true : 'Please enter a valid color for the shape.'
    },
];
