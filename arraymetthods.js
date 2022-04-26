//push
//pop
//shift
//unshift
//concat
//join
//slice
//indexOf()
//includes
// find(function()) - return the first element fulfil the condition
//findIndex(function) - return the indexOf element fulfil the condition
// map(function) - return all the returning element
//filter(function) -- Return all the elements fulfil the condition
// reduce(function(n, g)) to sum all the array
// every(function) - every elements fulfil the condition
//some(function) - some element fulfiled the condition
// at() - return the element in the specified
// reverse() - Reverse the element
// Set()
// Methods
// - add
// -delete
// -
// Map()
// Set()

/*****   Join() *****/
// const names = ['SUnday', 'Omolewu', 'Opeyemi'];
// const namesstr = names.join('***');
// console.log(namesstr);

/******  - Includes() ******/

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = nums.includes(5);
// console.log(newArr);
/********  Find()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.find((n) => n % 2 == 0);

// console.log(newArr);

/********  findIndex()  ***** */

// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.findIndex((n) => {
//     return n > 8
// });

// console.log(newArr);

/********  map()  ***** */
// const names = ['Sunday', 'Opeyemi', 'Ade', 'Samuel'];
// const newArr = names.map(function (value, index, arr) {
//     let newName;
//     if (value == "Opeyemi") {
//         newName = "Is Middle Name";
//     }
//     else {
//         newName = value.toUpperCase();
//     }
//     return newName;
// });

// console.log(newArr);

/********  filter()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.filter((n) => {
//     return n > 4
// });
// console.log(newArr);

// /********  reduce()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.reduce((n, x) => {
//     return n + x
// });
// console.log(newArr);


// /********  every()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.every((n) => {
//     return n > 5
// });
// console.log(newArr);
// /********  some()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = nums.some((n) => {
//     return n > 9
// });
// console.log(newArr);
/********  at()  ***** */
// const nums = [1, 1, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums.at(5));

// const users = new Map([
//     ['name', 'Sunday Opeyemi'],
//     ['age', 23],
//     ['email', 'sunday@oichub.org']
// ]);

// /********  Map()  ***** */
// console.log(users.get('name'));
//  methods 
// has(), delete(), get(), keys(), values(), entries().  
// const details = new Map();
// details.set('name', 'Samuel');
// console.log(details.get('name'));

// /********  set()  ***** */

// const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

// Call Back function Example

// setTimeout(() => {
//     document.getElementById('demo').innerHTML = "Welcome to our Hub, Samuel";
// }, 3000)
// function welcome() {

//     // window.location.href = "https://goal.com";
// }
// setInterval(() => {
//     document.getElementById('demo').innerHTML = "Welcome to our Hub, Samuel";
// }, 3000)

// Web API

fetch("https://jsonplaceholder.typicode.com/users", {
    method: 'GET'
})
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))



