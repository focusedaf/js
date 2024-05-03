// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);

// === it checks the datatype along with the value

console.log("2" === 2);
console.log(null === undefined);
console.log("luard" === "Luard");
console.log("luard" === "LUARD");

// js is a dynamically typed language 

// primitive(7 types) and non primitive data tpyes
// primitive(call by value waale datatypes): string, number, boolean, null,undefined, symbol,bigint

// non primitive aka reference type (call by reference)
// array ,objects, functions

//symbol

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId);