const accountId = 11223344
let accountEmail = "Prottoy@gamil.com"
var accountPassword = "3Ab3#54"
accountCity = "Gazipur"
let accountState;

// accountId = 23556; //not allowed because the variable is declared as constant  

console.log(accountId); 

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
