let x = -3
let y = x ** 2 + 6 * x + 9
console.log(x, y);
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
//16
hours < 10 && minutes < 10
    ? console.log(`${year}-${month}-${date} 0${hours}:0${minutes}`)
    : console.log(`${year}-${month}-${date} ${hours}:${minutes}`)