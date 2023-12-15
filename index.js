// require and include the packages needed for this application 
const inquirer = require('inquirer'); // For interactive command-line prompts
const { writeFile } = require('fs').promises; // For writing files using promises for async/await
const { Circle, Triangle, Square } = require('./lib/shapes.js'); // Custom shape modules from 'lib' folder 
const validateColor = require("validate-color").default; // For validating color inputs

// Array of functions for user input
const questions = [
    {
        type: 'list', // Type 'list' shows a list of options to choose from
        name: 'shape', // The key that will be used to access the answer of this prompt
        message: 'Select a shape for your logo:', // The message shown to the user
        choices: ['circle', 'triangle', 'square',], // List of shapes you can choose from
        validate: (shapeInput) => shapeInput ? true : 'Please choose a shape for you logo!' // validation to ensure an option is selected
    },
    {
        type: 'input', // Type input allows for the user to type a response 
        name: 'text', // The key for the text the user inputs
        message: 'Please input text up to three characters for your logo:', // prompt message for the user
        validate: textInput => textInput.length <= 3 ? true : 'Provide the text for your logo with a max of 3 characters.' // Validation to restrict the input to three characters
    },
    {
        type: 'input', // Another 'input' for the text color 
        name: 'textColor', 
        message: 'Enter a color for the text (keyword or hex):',
        validate: textColorInput => validateColor(textColorInput) ? true : 'Please enter a valid color for the text.' // Validation using validate color package to chekc if the color is valid

    },
    {
        type: 'input', // And one more 'input' for the shape color
        name: 'shapeColor', // The key for the shape color input
        message: 'Enter a color for the shape (keyword or hex):',
        validate: shapeColorInput => validateColor(shapeColorInput) ? true : 'Please enter a valid color for the shape.' // SImilar validation for the shape color
    },
];

// Ask the user the prompt question
const promptUser = () => {
    return inquirer.prompt(questions)
};

// Function to construct and write the SVG file
const writeSVG = async (fileName, data) => { 
    // Start of the SVG file with the opening tag, including the namespace
    let svgFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="300px" width="200px">\n`;

    // Create the selected shape based on user input 
    // Switch staement to handle different shapes based on user inout 
    switch (data.shape) {
        case 'circle': // in case of a circle
        // Creating a new circle instance with the provided colors and text
            const circle = new Circle(data.shapeColor, data.textColor, data.text);
            // Adding the rendered SVG string from the Circle instance to the svgFile
            svgFile =+ circle.render();
            break;
        case 'traingle': // In case of triangle
      // Creating a new Triangle instance and doing the same as above
            const triangle = new Triangle(data.shapeColor, data.textColor, data.text);
            svgFile += triangle.render();
            break;    
        case 'square':  // In case of 'square'
         // Creating a new Square instance and doing the same as above
            const square = new Square(data.shapeColor, data.textColor, data.text);
            svgFile += square.render();
            break;    
        default: // If none of th eoptions match 
        // THrow an error indicating invalid shape selection
            throw new Error('Not a valid shape!');    
    }
    // Closing tag of the SVG file 

    svgFile += `\n</svg>`;

    // Write the constructed SVG content to a file with th eprovided fileName
    await writeFile(fileName, svgFile);
    console.log(`Generated ${fileName}`); // Logging to the console that the file was succesfully generated!
};

// Main async function to run the applicaton
const main = async () => {
    try {
        // Wait for the user inout
        const answers = await promptUser();
        // Once inout is recieved, write the SVG file
        await writeSVG('logo.svg', answers);
    } catch (error) {
        // IF any error occurs during the prompts or file writng, log it to the console
        console.error('An error occured:', error.message);
    }
};

// Run the main function
main();