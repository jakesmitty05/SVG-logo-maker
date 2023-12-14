class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    createTriangle () {
        const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="50,150 150,10 250,150" fill=${this.shapeColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
</svg>`
            return svgTemplate;
      }
}

class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    createCircle() {
        const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill=${this.shapeColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
</svg>`
            return svgTemplate;
    }
}

class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    createSquare () {
        const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="25" width="150" height="150" fill=${this.shapeColor} />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
</svg>`
            return svgTemplate;
      }
}

module.exports = {
    Triangle,
    Circle,
    Square
}