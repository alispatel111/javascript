const accountId = 123456
let accountEmail = "alispatel456@gmail.com"
var accountPassword = "123456789"
accountCity = "vadodara"

// accountId = 1245 // Not Allowed because it is a constant value it is permanent value
accountEmail = "patel@aa.com"
accountPassword = "789456"
accountCity = "vapi"
console.log("accountId");

/*
pls dont use var bcz of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity])