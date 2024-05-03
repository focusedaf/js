// stack , heap

//primitive is for stack, non-primitive  uses heap

let myName ="luard"

let anotherName =myName
anotherName="focusedaf"
// console.log(anotherName);
// console.log(myName);

let plebOne={
    name: "johndoe",
    lives: 5

}


let  plebTwo = plebOne

plebTwo.lives = 20

console.log(plebOne.lives);
console.log(plebTwo.lives);
