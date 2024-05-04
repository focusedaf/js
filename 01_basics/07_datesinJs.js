//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 0 , 23) // months start from zero in js
// console.log(myCreatedDate.toDateString());

let newDate = new Date("2024-06-28")
//console.log(newDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); // to convert into seconds


let nDate = new Date()
// console.log(nDate);
// console.log(nDate.getMonth()+1);
// console.log(nDate.getDay());

// ` ${newDate.getDay()} and time `

console.log(newDate.toLocaleDateString('default', {weekday: "short",

}))