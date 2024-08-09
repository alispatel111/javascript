/* singleton (imp for interview point of view)
means JavaScript में, Singleton एक design pattern है जो किसी class या object की केवल एक instance (प्रतिलिपि) बनाने की अनुमति देता है। इसका मतलब यह है कि चाहे आप कितनी भी बार class की नई instance बनाने की कोशिश करें, आपको हमेशा वही एक instance मिलेगी */

// object literalls 

const mySym = Symbol("key1")// imp // symbol declare 
const jsuser = {
    name: "alis",
    "fullname": "alis patel",
    [mySym]: "key1",
    age: 21,
    city: "vadodara",
    email: "alispatel@google.com",
    isLoogedin: false,
    lastlogindays: ["monday", "friday"]

} 

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["fullname"])
console.log(typeof jsuser[mySym])

jsuser.email = "alispatel@parul.com"
//Object.freeze(jsuser) // .freeze this lock the value user can not change or we can say that can not modify the value//
jsuser.city = "vapi" // vapi canot print bcz we can use .freeze method

console.log(jsuser)

jsuser.greeting = function(){
    console.log("hell0 js user" )
}

jsuser.greetingTwo = function(){
    console.log(`hello js user ${this.name} ${this.email}` )

}

console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())





