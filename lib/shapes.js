class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }

    // Shared text rendering function 
    renderText() {
        return `<text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fille=${this.textColor}">${this.text}</text>`;
    }
}

// Circle class
class Circle extends Shape {
    constructor(shapeColor, textColor, text, radius = 80) {
        super(shapeColor, textColor, text);
        this.radius = radius;
    }

    render() {
        // Defines the circle SVG element here
        return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.shapeColor}" />\n` + this.renderText();
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(shapeColor, textColor, text, points) {
        super(shapeColor, textColor, text);
        // Defualt points for an equilateral triangle if none provided
        this.points = points || ["100,10", "40,198", "190,78"];
    }

    render() {
        // Define the triangle SVG element here
        return `<polygon points="${this.points.join(' ')}" fill="${this.shapeColor}" />\n` + this.renderText();
    }
}

//Square class
class Square extends Shape {
    constructor(shapeColor, textColor, text, size = 100) {
        super(shapeColor, textColor, text);
        this.size = size; // The size of the square
    }

    render() {
        // Position the square to be centered by calculating the top-left corner
        const positions = (200 - this.size) / 2;
        return `<rect x="${positions}" y="${positions}" width="${this.size}" height="${this.size}" fill="${this.shapeColor}" />\n` + this.renderText();
    }
}

module.exports = { Circle, Triangle, Square };
