const user = {
    username: "alis",
    price: 999,
        // what is meant by this = this means refer to current context
    welcomeMessage: function(){
        console.log(`${this.username},welcome to our website` )
        // console.log(this)
    }


}
// user.welcomeMessage()
// user.username = "piyush "
// user.welcomeMessage()
// console.log(this)

// function one(){
//     let username = "alis patel"
//     console.log(this.username)
    
// }
// one()

// const chai = function(){
//     let username = "alis patel"
//     console.log(this.username)
// }
// chai()

const chai = () => {    //this is a arrow function syntax
    let username = "alis patel"
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1+num2)
    
const addTwo = (num1, num2) => ({username:"alis"})

console.log(addTwo(5, 6))