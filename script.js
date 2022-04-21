// Outpu methos
// document.write("<h1>Hello Javascript</h1>");
// document.write(2 + 4)
// alert(3)
// prompt("What is your name?")
// console.log("Hello World")
// let firstName = "John"
// let lastName = "Doe"
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// let a = 10 + 3 + "10";
// let b = "10" + 3 + 10;
// console.log(b);

//  Function
// function Sytax

// function greeting() {
//     document.getElementById('welcome').innerHTML = "Welcome to our official site";

// }

// greeting()

// function sum(a, b, ) {
//     console.log(a + b)
// }
// let age = 18;
// let id = 20;
// sum(age, id)

// function fullname(firstName = "Sunday", lastName = "Omolewu") {
//     let fullName = firstName + " " + lastName;
//     let getName = document.getElementById('fullname');
//     getName.innerHTML = fullName;
// }
// fullname("John", "Doe");
// fullname();

// function div(a, b) {
//     let d;
//     d = a / b;
//     return d
//     console.log(d);
// }
// let age = 18;
// let id = 20;
// console.log(div(age, id))
// let firstName = "Sunday"
// switch (firstName) {
//     case "Monday":
//         console.log(" Today is Monday");
//         break;
//     case "Tuesday":
//         console.log(" Today is Tuesday");
//         break;
//     case "Sunday":
//         console.log("Your name is Sunday");
//         break;
//     default:
//         console.log("Your name is not Sunday");
//         break;
// }

//--------String ---------
// let id = "Sunday123@dbdbd.\"comm\"";
let fullname = "John Doe";
//  let firstName= new String("Sunday");

document.getElementById('heading').innerHTML = `Welcome to OIC Hub ${fullname}`;
// console.log(id);
// String properties and methods
console.log(fullname.length);
// Methods
let fruits = "Orange, Apple, Banana, Mango";
// slice(start, end
// console.log(fruits.slice(8, 13));
// console.log(fruits.slice(0));
console.log(fruits.slice(-6, -1));


