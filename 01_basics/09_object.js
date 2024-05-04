// an object made using constructor is a singleton

//object literals
const Sym = Symbol("hello")
const user = {
  name:"luard",
  "fullName": "luardcodes",
  [Sym]: "hello",
  age: 18,
  location: "thane",
  email:"luard@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday", "Saturday"]
}
// console.log(user.email);
// console.log(user["email"]); //another way of printing an object attribute using  square notations
// console.log(user["fullName"]);
// console.log(user[Sym]);

//to include the symbol within the object use square notation if it's declared in a normal way the datatype that will be returned would be string and not symbol. it will return the same value in this case hello if i dont use square notations and while printing it no need to use 

user.email ="abc@google.com"
///Object.freeze(user) //freezes the obejct so that it can't be changed
user.email = "abc@yahoo.com"
//console.log(user);


user.greeting = function(){
    console.log("hello user");
}
user.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(user.greeting); // function execute nahi hua bas uska reference aaya hai
console.log(user.greetingTwo); // function execute nahi hua bas uska reference aaya hai
console.log(user.greeting());// always use parenthesis with methods
console.log(user.greetingTwo());// always use parenthesis with methods