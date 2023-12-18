const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('should create correct SVG for a circle', () => {
        const circle = new Circle('red', 'blue', 'C', 50);
        const svg = circle.render();
        expect(svg).toContain('<circle cx="50%" cy=50% r="50" fill="red" />');
        expect (svg).toContain('<text x ="50%" y="50%" r="50" fill="red" />')
    });

    // Aditional tests for Circle can go here

    describe('Triangle', () => {
        test('should create correct SVG for a triangle', () => {
                const triangle = new Triangle('green', 'black', 'T' ["50 15,", "10,100", "90,100"]);
                const svg = triangle.render();
                expect(svg).toContain('<polygon points="50,15 10,100 90,100" fill="green" />');
                expect(svg).toContain('<text x="50%" y="50%"');
        });
    })
    describe('Square', () => {
        test('should create correct SVG for a Square', () => {
                const square = new Square('blue', 'white', 'S', 80);
                const svg = square.render();
                expect(svg).toContain('<rect x="60" y="60" width="80" fill="blue" />');
                expect(svg).toContain('<text x="50%" y="50%"');
        });
    })
})