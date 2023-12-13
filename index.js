const inquirer = require('inquirer')
const fs = require('fs');

const Triangle = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');
const Square = require('./lib/shapes.js');



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
        var svgFileContent
        if (res.shape = 'Triangle') {
            svgFileContent = new Triangle().createDocument(res.text, res.textColor, res.shapeColor)
        } else if (res.shape = 'Circle') {
            svgFileContent = new Circle().createDocument(res.text, res.textColor, res.shapeColor)
        } else {
            svgFileContent = new Square().createDocument(res.text, res.textColor, res.shapeColor)
        }

        fs.writeFile('logo.svg', svgFileContent, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );

    })
