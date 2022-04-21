
// first way of defining an array
console.log("Hello Array");
let cars = ["BMW", "Audi", "Mercedes", "Toyota"];
console.log(cars);
console.log(cars[2]);
// Second way of defining an array
// const numbers = new Array(40); // this is an array with 40 elements
// console.log(numbers[0]);  // This will print undefined
// Third way of defining an array
// const fruits = [];
// fruits[0] = "Apple";
// fruits[1] = "Orange";
// fruits[2] = "Banana";
// fruits[3] = ["Mango", "Pineapple", ["Grapes", "Pears"]];
// console.log(fruits);
// console.log(fruits[3][2][1]);
const fruits = ["Apple", "Orange", "Banana", ["Mango", "Pineapple", ["Grapes", "Pears"]]];
fruits[0] = "Pineapple";
console.log(fruits);
console.log(fruits.length);
console.log(fruits[3].length);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// pop()
console.log(numbers.pop());
console.log(numbers);
// push()
numbers.push(11);
console.log(numbers);
// shift()
console.log(numbers.shift());
console.log(numbers);
// unshift()
numbers.unshift(0);
console.log(numbers);
delete numbers[0]; // this will delete the first element but it is  not advised to use this method
console.log(numbers);
//Concatenating arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const allArrays = num1.concat(num2, num3);
console.log(allArrays);
// Splice
const fruits1 = ["Apple", "Orange", "Banana", "Mango", "Pineapple", "Grapes", "Pears"];
// Array.Splice(start, number of elements to be removed, Values)
const newfruits1 = fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log(newfruits1);
console.log(fruits1);