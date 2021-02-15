/**
 *  Tuple can contain (lưu trữ) two values of different data types.
 */
var employee = [1, "Steve"];
var employee_2 = [1, "Steve"];
employee_2.push(2, "Bill");
console.log(employee_2);
/** example */
var person = [1, "Steve", true];
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
/** */
var employees;
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
console.log(employees[0]);
// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']
