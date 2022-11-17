//1
let base = prompt('Enter base:');
let height = prompt('Enter height:');
let area = base * height * 0.5
console.log(`Enter base: ${base}`, 
    `\nEnter height: ${height}`, 
    `\nThe area of the triangle is ${area}`);
//2
let a = prompt('Enter side a:')
let b = prompt('Enter side b: ')
let c = prompt('Enter side c: ')
let perimeter = parseFloat(a) + parseFloat(b) + parseFloat(c)
console.log(`Enter side a: ${a}`, `\nEnter side b: ${b}`, `\nEnter side c: ${c}`, `\nThe perimeter of the triangle is ${perimeter}`)
//3
let length = prompt('length: ');
let width = prompt('length: ');
let areasRectangle = length * width
let perimeterRectangle = 2 * (length + width)
console.log(`area = ${areasRectangle}`, `\nperimeter = ${perimeterRectangle}`)
//4
let r = prompt('radius: ');
let areaCircle = Math.PI * r * r
console.log(`area of the circle = ${areaCircle}`);
//5
let x  = prompt('Enter value of x: ');
let y = 2 * x + 2