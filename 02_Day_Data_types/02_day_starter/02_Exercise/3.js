//1
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(string.match(pattern))
//2
let string1 = 'You cannot end a sentence with because because because is a conjunction'
let pattern1 = /because/gi
console.log(string1.match(pattern1))
//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let regEx = /\$|%|@|&|#|!|\?|;|/g
console.log(sentence.replace(regEx, ''))

//4
const txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const arr = txt.match(/\d+/g)
const totalAnnualIncome = (+arr[0] + +arr[2]) * 12 + +arr[1];
console.log(totalAnnualIncome);