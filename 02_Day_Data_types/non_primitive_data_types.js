let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums1 = [1, 2, 3]
let numbers1 = [1, 2, 3]
console.log(nums1 == numbers1) // false

let UserOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let UserTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numbers = nums1
console.log(nums1 == numbers1)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true
console.log(typeof userOne);