// if
const isUserLoggedIn = true
const temp = 35
if(2 === "2"){
//console.log("executed");
}
if(temp<50){
//console.log("sunny");
}
//console.log("sunny");

const score = 400

if(score> 100){
    const power ="fly"
   // console.log(`user power :${power}`);
}
//console.log(`user power: ${power}`);

 const balance = 1000

// if(balance > 500) console.log("test"),
// console.log("test2");

// if(balance>500){
//     console.log("greater than");
// }else if(balance<750){
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true 
const debitCard = true
if(userLoggedIn && debitCard && 2==3){
   // console.log("allowed to buy coures");
}

//switch

const month = 3

switch (month) {
    case 1:
      //  console.log("jan");
        break;
    case 2:
        //console.log("feb");
        break;

    default:
       // console.log("default case match");
        break;
}

const userEmail ="abc@gmai.com"

if (userEmail) {
    console.log("got the email");
}else{
    console.log("didnt get the email" );
}

//falsy values : false, 0, -0 , BigInt 0n, "", null,undefined, NaN
//truthy values : "0", 'false'," ",[], {}, function(){}

let val1;
// val1 = 5 ?? 3
// val1 = null ?? 10
// val1 = undefined ?? 13
val1 = null ?? 10 ?? 23