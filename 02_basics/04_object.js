//const tinderUser = new Object()// it is a singleton object

const tinderUser = {} // it is non single ton object

tinderUser.id = "alis1514"
tinderUser.name = "alis patel"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "abcd123456@gmail.com",
    fullname: {
        userfullname: {
            firstname: "alis",
            lastname: "patel"
        }

    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// assign means two object value are merged 
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2} // (...) we can use more time to merge the value
console.log(obj3)

const users = [     // array ke andar bhaut sara object  hai //
    {
        emailP: "alis@31122",
        nameP: "piyush"
    },
    {
        firstNameP: "wasde",
        lastNameP: "ewqasd"
    },
]

users[0].emailP
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

//keys Method: This method is part of the Object class in JavaScript. When you use Object.keys(), it returns an array of the keys (property names) of the given object.//
console.log(tinderUser.hasOwnProperty("name"))


const course = {

    course_name: "multithreading",
    course_price: "999",
    faculty_name: "alis piyush patel"

}

const {faculty_name: name} = course // this is called object destructure 
// console.log(faculty_name)
console.log(name) 

// const navbar = ({company}) => {  this is a object destructure method in react imp


// }                        

// navbar(company = "alispatel")