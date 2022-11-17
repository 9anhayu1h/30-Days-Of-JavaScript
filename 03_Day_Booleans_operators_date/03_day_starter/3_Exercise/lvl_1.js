//1
let firstName = 'panhayuth'
    lastName = 'oeun'
    country = "Cambodia"
    city = 'Phnom Penh'
    age = 19
    isMarried = false
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried)
//2
console.log(typeof '10' == 10)
//3
console.log(parseInt('9.8' == 10))
//4
let true1 = 'isverytrue'
    true2 = 25
    true3 = true
let false1 = NaN
    false2 = null
    false3 = 0
//5
console.log(4 > 3,
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4',
    'Python'.length !== 'jargon'.length)
//6
console.log(4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'))
console.log('dragon'.includes(!('on')),'python'.includes(!('on')))
//7
const year = new Date()
console.log(year.getFullYear())
const month = new Date()
console.log(month.getMonth())
const ngai = new Date()
console.log(ngai.getDate())
const hour = new Date()
console.log(hour.getHours())
const minute = new Date()
console.log(minute.getMinutes())
console.log(Date.now())