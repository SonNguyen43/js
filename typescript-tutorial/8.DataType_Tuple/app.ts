/**
 *  Tuple can contain (lưu trữ) two values of different data types.
 */
let employee: [number, string] = [1, "Steve"];
employee.push(2,"John")

/** example */
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

/** */
var employees: [number, string][];
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employees[0]);


// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'Steve Jobs']
