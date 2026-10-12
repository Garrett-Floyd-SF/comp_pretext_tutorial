var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-math",
  "level": "1",
  "url": "sec-math.html",
  "type": "Section",
  "number": "1.1",
  "title": "Math",
  "body": " Math  An example of using the math element to put math inside of text is . m is short for math. The way you tell pretext what math you want rendered in math type elements is by writing the math in latex. An example of using the math display element to put math on its own line is . md is short for math display.  What if we want to align multiple equations where each equation gets its own line. For the that we can use a math display element with additional children elements. Here's an example for a system of equations: . The mrow element tells pretext that its contents belong on thier own row. The \\amp command tells pretext where the alignment point for every row is. In our example we aligned the equations at the equal sign. we can also number our equations, and or give them xml:ids. Here's an example: .  Finally, pretext provides some useful elements for displaying important math results and examples. Here is an example of a theorem element:   Pythagorean Theorem   In a right-angled triangle, the square of the hypotenuse ( ) equals the sum of the squares of the other two sides.     This is were you would put the proof, but we don't have time in this tutorial.    Here is an example of an example element:   Quadratic Equation   Solve for : .    Try factoring the quadratic expression into two binomials.    or    Factor the expression as . Setting each factor to zero yields and .    Pretext also offers several other elements like the two above. For more info check out the pretext guide.  "
},
{
  "id": "sec-math-5",
  "level": "2",
  "url": "sec-math.html#sec-math-5",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "Pythagorean Theorem.",
  "body": " Pythagorean Theorem   In a right-angled triangle, the square of the hypotenuse ( ) equals the sum of the squares of the other two sides.     This is were you would put the proof, but we don't have time in this tutorial.   "
},
{
  "id": "sec-math-7",
  "level": "2",
  "url": "sec-math.html#sec-math-7",
  "type": "Example",
  "number": "1.1.2",
  "title": "Quadratic Equation.",
  "body": " Quadratic Equation   Solve for : .    Try factoring the quadratic expression into two binomials.    or    Factor the expression as . Setting each factor to zero yields and .   "
},
{
  "id": "ch-chapter-title-4",
  "level": "1",
  "url": "ch-chapter-title-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Other Pretext Features",
  "body": " Other Pretext Features  Let's say we want add a link to simple syllabus. Here's how we would do that: Link to Sante Fe's simple syllabus . Let's say we want to add a picture to our lecture. Here's how we would do that:   Your figure caption goes here.   Your alt text goes here.    Let's say there's a youtube video that would be perfect for explaining this topic. Here's how we would do that:  "
},
{
  "id": "ch-chapter-title-4-3",
  "level": "2",
  "url": "ch-chapter-title-4.html#ch-chapter-title-4-3",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Your figure caption goes here.   Your alt text goes here.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
