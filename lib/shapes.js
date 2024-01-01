class Shape { // Base class for all shapes
    constructor(shapeColor, textColor, text) { // Constructer to initialize the shape with color and text properties
        this.shapeColor = shapeColor; // Fill color of the shape
        this.textColor = textColor; // Color of the text
        this.text = text; // Text to display on the shape
    }

    // Method to render text within SVG
    renderText() {
        return `<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text>`;
    } // Returns SVG text element with attributes for positioning and styling
    // Text is also horizontally and vertically centered within the SVG canvas
}

// Circle class
class Circle extends Shape {
    constructor(shapeColor, textColor, text, radius = 80) { // Circle constructer with default radius provided
        super(shapeColor, textColor, text); // Calls base class constructor
        this.radius = radius; // Radius of the circle
    }

    renderText() {
        let yOffset = -45;

        return `<text x="50%" y="50%" dy="${yOffset}px" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-size="${this.fontSize}px">${this.text}</text>`;
    }


    render() { // Method to render circle SVG element
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.shapeColor}" />\n` + this.renderText();
    } // Returns SVG circle element with attributes to define it's position, radus, and fill color
    // The text is rendered on top of the circle by calling renderText
}

// Triangle class
class Triangle extends Shape {
    constructor(shapeColor, textColor, text, points) { // Triangle constructor with default points for equilateral triangle
        super(shapeColor, textColor, text); // Calls base class constructor
        // Defualt points for an equilateral triangle if none provided
        this.points = points || ["100,190", "40,102", "160,102"];
    }

    renderText() {
        let yOffset = -20;

        return `<text x="50%" y="50%" dy="${yOffset}px" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-size="${this.fontSize}px">${this.text}</text>`;
    }


    render() { //Method to render triangle SVG element
        return `<polygon points="${this.points.join(' ')}" fill="${this.shapeColor}" />\n` + this.renderText();
    } // // Returns SVG polygon element with attributes to define the vertices and fill color
    // The text is rendered on top of the triangle by calling renderText
}

//Square class
class Square extends Shape {
    constructor(shapeColor, textColor, text, size = 100) { // Constructor for square, with default size provided
        super(shapeColor, textColor, text); // Call the base class constructor
        this.size = size; // The size of each side of the square
        this.fontSize = this.size * 0.2; // sets text font size to be 20% of the square's size
    }

    renderText() {
        let yOffset = -50;

        return `<text x="50%" y="50%" dy="${yOffset}px" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}" font-size="${this.fontSize}px">${this.text}</text>`;
    }

    render() { // Method to render the square SVG element
       // Calculate the top-left corner position to center the square within the SVG canvas
        const positions = (200 - this.size) / 2;
        return `<rect x="${positions}" y="${positions}" width="${this.size}" height="${this.size}" fill="${this.shapeColor}" />\n` + this.renderText();
        // Returns SVG rectangle element with attributes to define the position, size, and fill color
        // The text is rendered on top of the square by calling renderText
    }

}

module.exports = { Circle, Triangle, Square };
 // Exporting the classes to make them available for import in other modules
