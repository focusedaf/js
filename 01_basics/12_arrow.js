const user = {
    username : "luard",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
    
}
//"this" talks about the current context 
// user.welcomeMessage()
// user.username ="joey"
// user.welcomeMessage()

//console.log(this); //gives an empty object as an output

 function coffee(){
    let username = "luard"
//     console.log(this.username); //returns undefined
 }
 coffee()

//to create an arrow function remove the function keyword and use "=> "
const chai = ()=>{  
    let username ="morpheus"
   // console.log(this); //returns an empty brace
}
chai()

//explicit return uses the return keyword along with the curly braces
// const addTwo =(num1 ,num2) => {
//     return num1+num2
// }

//implicit return doesnt use the return keyword
//const addTwo =(num1 ,num2) =>  num1+num2

//returning an object implictly
const addTwo =(num1 ,num2) => ({username: "joe"})

console.log(addTwo(3,4));


