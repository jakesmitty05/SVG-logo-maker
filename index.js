const inquirer = require('inquirer')
const fs = require('fs');

const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');


const getInfo = ({text, textColor, shape, shapeColor}) => 
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
        if (res.shape = 'Triangle') {
            const svgFileContent = new Triangle(res)

        } else if (res.shape = 'Circle') {
            const svgFileContent = new Circle(res)

        } else {
            const svgFileContent = new Square(res)

        }

        fs.writeFile('logo.svg', svgFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );

    })