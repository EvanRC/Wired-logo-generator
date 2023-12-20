const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('should create correct SVG for a circle', () => {
        const circle = new Circle('red', 'blue', 'C', 80);
        const svg = circle.render();
        expect(svg).toContain('<circle cx="100" cy="100" r="80" fill="red" />');
        expect (svg).toContain('<text x="50%" y="50%"')
    });

    // Aditional tests for Circle can go here

    describe('Triangle', () => {
        test('should create correct SVG for a triangle', () => {
                const triangle = new Triangle('green', 'black', 'T', ["100,10", "40,198", "190,78"]);
                const svg = triangle.render();
                expect(svg).toContain('<polygon points="100,10 40,198 190,78" fill="green" />');
                expect(svg).toContain('<text x="50%" y="50%"');
        });
    })
    describe('Square', () => {
        test('should create correct SVG for a Square', () => {
                const square = new Square('blue', 'white', 'S', 100);
                const svg = square.render();
                expect(svg).toContain('<rect x="50" y="50" width="100" height="100" fill="blue" />');
                expect(svg).toContain('<text x="50%" y="50%"');
        });
    })
})