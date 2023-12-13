class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    createDocument (text, textColor, shapeColor) {
        return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,150 150,10 250,150" fill=${shapeColor} />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
      </svg>`
      }
}

class Circle extends Shape{
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    createDocument (text, textColor, shapeColor) {
        return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill=${shapeColor} />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
      </svg>`
      }
}

class Square extends Shape{
    constructor(text, textColor, shapeColor) {
       super(text, textColor, shapeColor)
    }
    createDocument (text, textColor, shapeColor) {
        return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="75" y="25" width="150" height="150" fill=${shapeColor} />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill=${textColor}>${text}</text>
      </svg>`
      }
}



module.exports = Triangle
module.exports = Circle
module.exports = Square