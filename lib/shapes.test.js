const shapes = require('./shapes.js');


describe('Triangle', () => {
    it('should make a svg file with blue ABC text and a red Triangle', () => {
      const tri = new shapes.Triangle('ABC', 'blue', 'red')
      const svgFileContent = tri.createTriangle()
      expect(svgFileContent).toEqual(`
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="50,150 150,10 250,150" fill=red />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=blue>ABC</text>
</svg>`);
    });
});

describe('Circle', () => {
    it('should make a svg file with blue ABC text and a red Circle', () => {
      const cir = new shapes.Circle('ABC', 'blue', 'red')
      const svgFileContent = cir.createCircle()
      expect(svgFileContent).toEqual(`
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill=red />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=blue>ABC</text>
</svg>`);
    });
});

describe('Square', () => {
    it('should make a svg file with blue ABC text and a red Square', () => {
      const squ = new shapes.Square('ABC', 'blue', 'red')
      const svgFileContent = squ.createSquare()
      expect(svgFileContent).toEqual(`
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="25" width="150" height="150" fill=red />
<text x="150" y="125" font-size="60" text-anchor="middle" fill=blue>ABC</text>
</svg>`);
    });
});
