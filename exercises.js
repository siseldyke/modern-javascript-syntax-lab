// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
//exercise 1
// Your code here
//node exercises.js
// const multipliedNums = nums.map((num) =>{
//     return num *2
// })

// console.log(multipliedNums)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
//exercise 2
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// // Your code here

// const [firstTopping, secondTopping, thirdTopping] = pizzaToppings

// console.log(firstTopping)
// console.log(secondTopping)
// console.log(thirdTopping)

// console.log(pizzaToppings[0])

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
//exercise 3
// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Your code here
// const {make, model} = car  

// console.log(make)
// console.log(model)

// console.log(car.make)
// console.log(car.model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
// //exercise 4
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// const controversialPizzaToppings =[...pizzaToppings]

// console.log(controversialPizzaToppings)
// Your code here
//exercise 5

// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
//   // Change the `model` property of `myCar` to 'q7'. Log both objects.
//   const myCar = {...car}
//   myCar.model ='q7'

//   console.log(myCar)
//   console.log(myCar.model)

//   // Your code here


  //exercise 6
  // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

// const userProfile = {username : 'siseldyke'}
// const propertyName = 'username'
//     const fullUserProfile = { [propertyName] : true}

// console.log(fullUserProfile)

// exercise 7

//seems like its working

// exercise 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function fullSentence(noun = 'cat', adjective = 'white'){
    return `the ${noun} is ${adjective}`
    }

fullSentence( )
console.log(fullSentence)
//exercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'; //changes it to yuck if i put something else here
let access = pizza  ? 'Yes' : 'No';
if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}
console.log(access)
// Your code here


//exercise 10
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = '' || 'en';  // Change to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig
// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result
console.log('Language setting:', LANG);

const userSavedTheme = '' || 'light'
const USER_THEME = userSavedTheme

console.log('User theme setting:', USER_THEME);
//exercise 11

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age; // Your code here

console.log(cat);
