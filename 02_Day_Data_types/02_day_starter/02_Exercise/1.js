let challenge = '30 Days Of JavaScript'

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substring(0, 3));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(company.split(', '));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('Days'));
console.log(challenge.lastIndexOf('JavaScript'));

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('JavaScript'));
console.log(challenge.match('a'));
let a = ''
console.log(a.concat('30 Days of ', 'JavaScript'));
console.log(challenge.repeat(2));