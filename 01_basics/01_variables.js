const accountId = 14563
let accountEmail = "ayush@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
//accountId = 2
/* Prefer not to use var because of issue in block scope and functional scope */ 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])