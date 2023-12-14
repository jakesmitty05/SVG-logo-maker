const inquirer = require('inquirer')
const fs = require('fs');

const shapes = require('./lib/shapes.js');

inquirer
    .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Input 3 letters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Input a text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Triangle','Circle','Square',],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Input a shape color',
    },
    ])
    .then((res) => {
        console.log(res.shape)
        const choseShape = res.shape
        if (choseShape === 'Triangle') {
            const tri = new shapes.Triangle(res.text, res.textColor, res.shapeColor)
            const svgFileContent = tri.createTriangle()
            makeSVG(svgFileContent)
        } else if (choseShape === 'Circle') {
            const cir = new shapes.Circle(res.text, res.textColor, res.shapeColor)
            const svgFileContent = cir.createCircle()
            makeSVG(svgFileContent)
        } else {
            const squ = new shapes.Square(res.text, res.textColor, res.shapeColor)
            const svgFileContent = squ.createSquare()
            makeSVG(svgFileContent)
        }

        function makeSVG(inp) {
          fs.writeFile('logo.svg', inp, (err) =>
            err ? console.log(err) : console.log('Successfully created logo.svg!')
         );
        }
    })