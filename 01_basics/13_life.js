// IIFE  immediately invoked function expression

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //; is a must to end iife 

//()() //first parenthesis is where we write the function definition and the second is for its execution call

( () => {
    console.log(`luard has logged in`);
})();

( (userName) => {
    console.log(`${userName} has logged in`);
})('joe');