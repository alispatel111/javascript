let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //interview question

// const myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate)

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString("default", {
    weekday:"long"
})
console.log(newDate)