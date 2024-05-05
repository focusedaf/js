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
   // console.log("hello user");
}
user.greetingTwo = function(){
    //console.log(`hello user, ${this.name}`);
}
//console.log(user.greeting); // function execute nahi hua bas uska reference aaya hai
// console.log(user.greetingTwo); // function execute nahi hua bas uska reference aaya hai
// console.log(user.greeting());// always use parenthesis with methods
// console.log(user.greetingTwo());// always use parenthesis with methods


//singleton

//const tinderUser = new Object() //singleton
const tinderUser= {} //non- singleton

tinderUser.id ="abc123"
tinderUser.name ="joe"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const googleUser ={
  email:"abc@gmail.com",
  fullName:{
    userfullname:{
      firstname:"luard",
      lastname:"codes"
    }
  }
}
//console.log(googleUser.fullName.userfullname.firstname);

const obj1 ={1:"a", 2:"b", 3:"c"}
const obj2 ={4:"a", 5:"b", 6:"c"}
//const obj3 ={obj1 ,obj2 }
//const obj3 = Object.assign({},obj1,obj2) //assign() copies objects from target and source and assigns them to the target again its just like strcpy()
const obj3 ={...obj1,...obj2}
//console.log(obj3);

const users =[{
  id: 1,
  email: "abc@gmail.com"

},
{
  id: 2,
  email: "abc123@gmail.com"

},
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //key-value pair me output milta hai
// console.log(tinderUser.hasOwnProperty(' isLogged'));


//object de-structure and api

const course = {
  courseName: "js in hindi",
  price:"999",
  cousreInstructor:"hitesh"
}
//course.courseInstructor

const {courseName: name} = course //by using ":" you can destructure a particular attribute
//console.log(courseName);
//console.log(name);
