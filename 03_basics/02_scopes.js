let a = 300
// const b = 400

if (true) {
    let a = 10
    const b = 20
    // console.log("inner:", a)
    // console.log("inner:", b)

    
}
// console.log(a)
// console.log(b)
// console.log(a)
// console.log(b)

function one (){
    const username = "alis"

    function two(){
        const website = "youtube"
        console.log(username)
        // console.log(website)
    }
    // console.log(website)
    // console.log(username)
    two()
}

// one()

if (true) {
    const username = "alispatel"

    if (username === "alispatel") {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website)    
        }

// console.log(username)

// ++++++++++++ intresting ++++++++++++ this method is said to be hoisting

console.log(addOne(5))

function addOne (num1){
    return num1 + 1

}
// addOne(5)


console.log(addTwo(6))
const addTwo = function(num1){
    return num1 + 2
}

addTwo(6)
