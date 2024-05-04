// js arrays are resizeable, cannot be accesed using arbitary strings, creates shallow copies of an object (basically a copy whose properties share the same reference to those of the soure object),deep copy(properties do not share the reference)


const myArr = [0,1,2,3,4,5]
const myHeros =["superman","batman"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0]);

// Array methods

//push is basically used to add new values 
myArr.push(6)
//console.log(myArr);
myArr.pop() //pop removes the last element from the array
//console.log(myArr);


myArr.unshift(7) //add elements to the first index by shifting the entire array totally not worth it
//console.log(myArr);
myArr.shift()
//console.log(myArr);//removes the element that was inserted by unshift

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(10));
// console.log(myArr);

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice,splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);

//splic manipulates the original array whereas slice doesn't


const marvel =["thor","ironman","spiderman"]
const dc =["superman","flash","batman"]

//marvel.push(dc)
//console.log(marvel);
//this basically merges the array in 2d way as in it is taking the array dc here as an element so the indexing for this dc array would 3 and to access it's elements you need to follow the syntax of 2D arrays

const allHeros=marvel.concat(dc)
//console.log(allHeros);
//concatenates the array and returns a new array

//another way of merging the 2 arrays `...` is the spread operator
const all_Heros = [...marvel,...dc]
//console.log(all_Heros);

//another way of merging arrays using flat()
const another_array =[1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("Luard"));
console.log(Array.from("Luard"));
console.log(Array.from({name: "Luard"})); //gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));