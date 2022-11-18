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
let areasRectangle = parseFloat(length) * parseFloat(width)
let perimeterRectangle = 2 * (parseFloat(length) + parseFloat(width))
console.log(`area = ${areasRectangle}`, `\nperimeter = ${perimeterRectangle}`)
//4
let r = prompt('radius: ');
let areaCircle = Math.PI * r * r
console.log(`area of the circle = ${areaCircle}`);
//5
let x  = 1
let y = 2 * x + 2
console.log(x, y);
//6
let p1 = [2, 2]
let p2 = [6, 10]
let m = (p2[1]-p1[1])/(p2[0]-p1[0])
console.log(m);
//8
let x8 = -3
let y8 = x ** 2 + 6 * x + 9
console.log(x, y);
//9
let Totalhour = parseFloat(prompt('Enter hours: '));
let PaymentRate = parseFloat(prompt('Enter rate per hour: '));
let WeeklyEarning = Totalhour * PaymentRate
console.log(`Enter hours: ${Totalhour}`, `\nEnter rate per hour: ${PaymentRate}`, `\nYour weekly earning is: ${WeeklyEarning}`);
//10
let MyName = 'Panhayuth'
MyName.length > 7
    ? console.log('My name is long')
    : console.log('My name is short')
//11
let LastName = 'Oeun'
MyName > LastName
    ? console.log(`Your first name, ${MyName} is longer than your family name, ${LastName}`)
    : console.log(`Your first name, ${MyName} is shorter than your family name, ${LastName}`)
//12
let myAge = 250
let yourAge = 25
myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you.`)
    : console.log(`You are ${yourAge - myAge} years older than me.`)
//13
let UserBirthYear = parseFloat(prompt('Enter birth year: '))
let Present = new Date()
let UserAge = Present.getFullYear() - UserBirthYear
UserAge > 18
    ? console.log(`You are ${UserAge}. You are old enough to drive`)
    : console.log(`You are ${UserAge}. You will be allowed to drive after ${18 - UserAge} years.`)
//14
let NumOfYear = parseFloat(prompt('Enter number of years you live: '))
let LiveInSec = NumOfYear * 31536000
console.log(`Enter number of years you live: ${NumOfYear} `, `\nYou lived ${LiveInSec} seconds.`)
//15
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()

console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)