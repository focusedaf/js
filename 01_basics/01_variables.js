const accountId = 123456
let accountEmail ="abc@gmail.com"
var accountPassword ="2345678"
accountCity ="Mumbai"
let accountState;

// accountId = 2 //not allowed
//dont use var due to issue in functional scope
accountEmail="xyz@gmail.com"
accountPassword="87654"
accountCity="thane"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])