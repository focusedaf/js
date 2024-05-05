 function user(){
    //console.log("luard");
 }

 //user()



// function addTwoNumbers(num1,num2){
// console.log(num1+ num2);
//  }
function addTwoNumbers(num1,num2){
// let result = num1+num2
// return result
return num1+num2
 }
 const result = addTwoNumbers(4,3)

//console.log("result: ", result);

function loginUserMessage(username) {
    if(username === undefined){
   //console.log("please enter a username");
   return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("luard"));
//console.log(loginUserMessage()); // output me "undefined" aagaya instead of the username as koii value hi pass nahi ki hai

function calculateCartPrice(val1,val2,...num1){
    return num1  //"..." aka rest operator , spread operator depends mostly on its usecase. in this case it stores the values in an array
}
//console.log(calculateCartPrice(200,400,23,23456,4567,2876));
// when parameters are passed in the order val1,val2,...num1 the first two values will be stored in val1 and val2 respectively and the rest would be stored in an array

const user1 ={
    username: "luard",
    prices: 200
}
function handleObject(anyObject){ 
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
//handleObject(user1)
handleObject({
    username:"joey"
    
})

const myArr =[23,65, 345,2345]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myArr));
console.log(returnSecondValue([354,34,75643,456]));