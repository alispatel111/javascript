// primitive

// 7 types : string, number, boolean, null, undefined, symbol,BigInt

// javascript is a dynamically typed language 

// preference (non primitive)

// Array, Objects, Functions

const id = Symbol ("123")

const anotherId = Symbol  ("123")

console.log(id === anotherId);

//const bigNumber = 123456789123456n*/

const heros = ["shaktiman", "alis", "dad"]

let myObj= {
    name : "alis",
    age : 21
}

const myFunction = function(){
    console.log("hello world ")
}

console.log(typeof bigNumber)


// memory use//

//stact (primitive) or heap (reference non primitive)

let myCarname = "ritz"

let anotherName = myCarname
anotherName = "swift"
console.log(myCarname);

console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@axl"
}
