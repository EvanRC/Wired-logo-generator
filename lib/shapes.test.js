const { Circle, Triangle, Square } = require('./shapes');

// Test suite for the Circle class
describe('Circle', () => {
    test('should create correct SVG for a circle', () => {
        const circle = new Circle('red', 'blue', 'C', 80);
        circle.fontSize = circle.radius * 0.25; // Ensure this matches whatever is set in the actual class
        const svg = circle.render();
        expect(svg).toContain('<circle cx="100" cy="100" r="80" fill="red" />');
        expect(svg).toContain(`<text x="50%" y="50%" dy="-45px" text-anchor="middle" dominant-baseline="central" fill="blue" font-size="${circle.radius * 0.25}px">C</text>`)
    
    });

    // Test case for validating different color and text inputs for a circle
    test('should handle different colors and text', () => {
        // Instantiate a Circle object with different colors and text
        const circle = new Circle('#00ff00', '#ff0000', 'Hi', 50);
        const expectedFontSize = circle.radius * 0.25;
        // Render the circle to an SVG string
        const svg = circle.render();
        // Check if the SVG string contains the correct circle element with new attributes
        expect(svg).toContain( "<circle cx=\"100\" cy=\"100\" r=\"50\" fill=\"#00ff00\" />" );
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain('<text x=\"50%\" y=\"50%\" dy=\"-45px\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"#ff0000\" font-size=\"12.5px\">Hi</text>');
    });

    // Additional tests for the Circle class can be added here
});

// Test suite for the Triangle class
describe('Triangle', () => {
    test('should create correct SVG for a triangle', () => {
        const triangle = new Triangle('green', 'black', 'T');
        const svg = triangle.render();
        expect(svg).toContain('<polygon points="100,190 40,102 160,102" fill="green" />');
        expect(svg).toContain(`<text x="50%" y="50%" dy="-20px" text-anchor="middle" dominant-baseline="central" fill="black" font-size="${triangle.fontSize}px">T</text>`);
    });

    // Test case for validating different colors, text, and point inputs for a triangle
    test('should handle different colors, text, and points', () => {
        // Define custom points for the triangle
        const points = ["50,15", "10,100", "90,100"];
        // Instantiate a Triangle object with the custom points
        const triangle = new Triangle('yellow', 'black', 'ABC', points);

        const expectedFontSizeTriangle = 20;
        
        // Render the triangle to an SVG string
        const svg = triangle.render();
        // Check if the SVG string contains the correct polygon element with new attributes
        expect(svg).toContain("<polygon points=\"50,15 10,100 90,100\" fill=\"yellow\" />");
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain("<text x=\"50%\" y=\"50%\" dy=\"-20px\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"black\" font-size=\"20px\">ABC</text>" );
    });
});

// Test suite for the Square class
describe('Square', () => {
    test('should create correct SVG for a Square', () => {
        const square = new Square('blue', 'white', 'S', 100);
        const squareFontSize = square.size * 0.2; // 20% of size, as per the Square class logic
        const svg = square.render();
        const position = (200 - square.size) / 2;
        expect(svg).toContain(`<rect x="${position}" y="${position}" width="100" height="100" fill="blue" />`);
        expect(svg).toContain(`<text x="50%" y="50%" dy="-50px" text-anchor="middle" dominant-baseline="central" fill="white" font-size="${square.fontSize}px">S</text>`);
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
        expect(svg).toContain( "<rect x=\"25\" y=\"25\" width=\"150\" height=\"150\" fill=\"purple\" />" );
        // Check if the SVG string contains the correct text element with new attributes
        expect(svg).toContain("<text x=\"50%\" y=\"50%\" dy=\"-50px\" text-anchor=\"middle\" dominant-baseline=\"central\" fill=\"white\" font-size=\"30px\">Test</text>" );
    });
});
