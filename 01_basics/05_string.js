const name = "alispatel"

const repoCount = 50;

/* console.log(name + repoCount + " value") */

console.log(`my name is ${"alispatel"} and my repo count is ${50}`)

const gameName = new String("alis. patel.youtube.com") // string declare method//
console.log(gameName[3])
console.log(gameName.__proto__) // access prototype syntax //


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) // to find character position//
console.log(gameName.indexOf('i')) // to find index position//

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-11,4)
console.log(anotherString);

const   newStringOne = "          alispatel     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://alispatel.com/alis%20patel"

console.log(url.replace('%20' , '-'))

console.log(url.includes("ruchita"))

console.log(gameName.split('.'))

console.log(newStringOne.bold())