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
//exercise 4
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings =[...pizzaToppings]

console.log(controversialPizzaToppings)
// Your code here
//exercise 5

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  const myCar = {...car}
  myCar.model ='q7'

  console.log(myCar)
  console.log(myCar.model)

  // Your code here
  