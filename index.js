// require and include the packages needed for this application 
const inquirer = require('inquirer'); // For interactive command-line prompts
const { writeFile } = require('fs').promises; // For writing files using promises for async/await
const { Circle, Triangle, Square } = require('./lib/shapes.js'); // Custom shape modules from 'lib' folder 
const validateColor = require("validate-color").default; // For validating color inputs

// Main function to run the appliction 
const questions = [
    {
        type: 'list',
        message: 'Select a shape.',
        name: 'shape',
        choices: [
            'circle',
            'triangele',
            'square',
        ],
        validate: (shapeInput) => {
            if (shapeInput) {
                return true;
            } else {
                console.log('Now choose a shape for the logo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please input text up to three characters',
        name: 'text',
        validate: (textInput) => {
            if (textInput.length <= 3) {
                return true;
            } else {
                console.log('/nProvide the text for your logo with a max of 3 characters');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Include a text color.',
        name: 'textColor',
        validate: (textColorInput) => {
            if (validateColor(textColorInput)) {
                return true;
            } else {
                console.log('Choose a color for text on your Logo!');
                return false;
            }
        }

    },
    {
        type: 'list',
        message: 'Save the generated SVG.',
        name: 'save',
        choices: [
            'save',
        ],
        validate: (saveInput) => {
            if (saveInput) {
                return true;
            } else {
                console.log('Please save your SVG Logo to a .svgfile');
                return false;
            }
        }
    }
];
