// declaration of the object
// let details = {
//     name: "Sunday",
//     age: 18,
//     id: 20,
// };
// const person = {};
// person.name = "Sunday";
// person.age = 50;
// console.log(person);
// let name = 'name';
// const person = {};
// person[name] = "Sunday";
// person['age'] = 50;
// console.log(person);

// console.log(users.name);
// let name = users.name;
// const person = users;
// person.name = "Sunday Omolewu";
// console.log(person);
// console.log(users);

// const errors ={};
// if(! name){
//     errors.name = "Name is required";
// }
// if(! email){
//     errors.email = "Email is required";
// }

const users = {
    Firsname: "Sunday",
    Lastname: "Omolewu",
    age: 18,
    id: 20,
    email: "sunday@oichub.org",
    password: "12345678",
    isAdmin: true,
    isLoggedIn: true,
    fullname: function () {
        let retirement = 65 - this.age;
        let fullname = this.Firsname + " " + this.Lastname;
        return ` ${fullname} your retirement years remain  ${retirement} years`;
    }.toString(),
}
console.log(users)
alert(JSON.stringify(users));
// if (Object.keys(users).includes('isAdmin')) {
//     console.log("Admin");
// }
// if ('isAdmin' in users) {
//     console.log("Admin");
// }
// else {
//     console.log("Not Admin");
// }
// const mykey = Object.keys(users);
// const myvalues = Object.values(users);
// console.log(mykey);
// console.log(myvalues);
// users.Lastname or users['Lastname'];
// console.log(users.fullname());

// Loop
