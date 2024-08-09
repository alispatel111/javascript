//Array

const myArr = [45, 18, 63, 39]
const myHeros = ["rohitsharma", "viratkohli", "suryabhavu", "jaspritbumrah"]
// console.log(myArr[0])
// console.log(myHeros[0])

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])

//Array methods 

myArr.push(6)
myArr.push(10) // push means add the value 
myArr.pop() // pop means to remove the last value 

// console.log(myArr.includes(9)) // it is give a only bollean answer 
// console.log(myArr.indexOf(45))
// console.log(myArr)

// const myNewArr = myArr.join()
// console.log(typeof myArr)
// console.log(typeof myNewArr)

// slice , slice 

console.log("A",myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log('B', myArr)

const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2) 

//  imp question for interview purpose 
// slice print range between (1 to 4) and also note for not print 4 value in slice 
// splice give me original array
//  +++++++++++++++++++ interview question difference between slice and splice 

