const { Circle, Triangle, Square } = require('./shapes');

// Test suite for the Circle class
describe('Circle', () => {
    // Test case for validating the SVG creation of a circle with specific attributes
    test('should create correct SVG for a circle', () => {
        // Instantiate a Circle object with predefined attributes
        const circle = new Circle('red', 'blue', 'C', 80);
        // Render the circle to an SVG string
        const svg = circle.render();
        // Check if the SVG string contains the correct circle element
        expect(svg).toContain('<circle cx="100" cy="100" r="80" fill="red" />');
        // Check if the SVG string contains the correct text element
        expect(svg).toContain('<text x="50%" y="50%"');
    });

    // Test case for validating different color and text inputs for a circle
    test('should handle different colors and text', () => {
        // Instantiate a Circle object with different colors and text
        const circle = new Circle('#00ff00', '#ff0000', 'Hi', 50);
        // Render the circle to an SVG string
        const svg = circle.render();
        // Check if the SVG string contains the correct circle element with new attributes
        expect(svg).toContain('<circle cx="100" cy="100" r="50" fill="#00ff00" />');
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain('<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="#ff0000">Hi</text>');
    });

    // Additional tests for the Circle class can be added here
});

// Test suite for the Triangle class
describe('Triangle', () => {
    // Test case for validating the SVG creation of a triangle with specific attributes
    test('should create correct SVG for a triangle', () => {
        // Instantiate a Triangle object with predefined attributes
        const triangle = new Triangle('green', 'black', 'T', ["100,10", "40,198", "190,78"]);
        // Render the triangle to an SVG string
        const svg = triangle.render();
        // Check if the SVG string contains the correct polygon element for the triangle
        expect(svg).toContain('<polygon points="100,190 40,102 160,102" fill="green" />');
        // Check if the SVG string contains the correct text element
        expect(svg).toContain('<text x="50%" y="50%"');
    });

    // Test case for validating different colors, text, and point inputs for a triangle
    test('should handle different colors, text, and points', () => {
        // Define custom points for the triangle
        const points = ["50,15", "10,100", "90,100"];
        // Instantiate a Triangle object with the custom points
        const triangle = new Triangle('yellow', 'black', 'ABC', points);
        // Render the triangle to an SVG string
        const svg = triangle.render();
        // Check if the SVG string contains the correct polygon element with new attributes
        expect(svg).toContain('<polygon points="50,15 10,100 90,100" fill="yellow" />');
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain('<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="black">ABC</text>');
    });
});

// Test suite for the Square class
describe('Square', () => {
    // Test case for validating the SVG creation of a square with specific attributes
    test('should create correct SVG for a Square', () => {
        // Instantiate a Square object with predefined attributes
        const square = new Square('blue', 'white', 'S', 100);
        // Render the square to an SVG string
        const svg = square.render();
        // Check if the SVG string contains the correct rectangle element for the square
        expect(svg).toContain('<rect x="50" y="50" width="100" height="100" fill="blue" />');
        // Check if the SVG string contains the correct text element
        expect(svg).toContain('<text x="50%" y="50%"');
    });

    // Test case for validating different colors, text, and size inputs for a square
    test('should handle different colors, text, and size', () => {
        // Define a custom size for the square
        const size = 150;
        // Instantiate a Square object with the custom size
        const square = new Square('purple', 'white', 'Test', size);
        // Render the square to an SVG string
        const svg = square.render();
        // Calculate the expected position to ensure the square is centered
        const position = (200 - size) / 2;
        // Check if the SVG string contains the correct rectangle element with new attributes
        expect(svg).toContain(`<rect x="${position}" y="${position}" width="${size}" height="${size}" fill="purple" />`);
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain('<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">Test</text>');
    });
});
