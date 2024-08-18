

function SayMyNam (){
    console.log("A")
    console.log("L")
    console.log("I")
    console.log("S")
   
}
//SayMyNam()   // here saymyname is a reference or () its a execution {} pranthesis

function addTwoNumbers(number1, number2){
    // console.log(number1 + number2)
}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return  number1 + number2
}
//const result = addTwoNumbers(5,4)

// console.log("result:",result)

function userMessage(username){
    if (!username ) {   // ! work same syntax is (!username) ! = true convert false
        console.log("Enter the username")
        return
        
    }
    return `${username} just logged in`
}

// console.log(userMessage())

function calculateCartPrice (...num1){  //... is a rest and spread opreator 

    return num1
}

// function calculateCartPrices (val1,val2 ,...num1){  //... is a rest and spread opreator 

//     return num1 // +++++ imp for interview //
// }

// console.log(calculateCartPrices(200, 400, 500,2000))

const user = {
    username: "alis",    //  object se fuction kaise banaye 
    price: 1999
}

function objectHandle (anyobject) {
    console.log(`username is ${anyobject.username} user price is ${anyobject.price}`)

}
//  objectHandle(user)

objectHandle({
    username: "alis patel",
    price: 399
})

const myNewArray = [200, 500, 600, 400]

function returnSecondValue (getArray){

    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,800,600,100]))

