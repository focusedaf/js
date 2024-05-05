let a = 200
if(true){let a = 10
    const b = 20
    var c = 30 //avoid using var in blockscope
}
// console.log(c);
// console.log(a);

function one() {
    const username = "luard"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username= "morpheus"
    if(true){
        const website =" facebook"
        // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//interesting stuff


function addOne(num){
return num + 1
}
addOne(5)
//console.log(addOne(5));

//expression
const addTwo = function(num){
    return num + 2
}
addTwo(5)