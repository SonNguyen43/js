/**
 * where we can specify the type of the variables, function parameters and object properties.
 * Type annotations là các "chú thích Kiểu". Không bắt buộc phải có các "chú thích Kiểu".
 *
 * TypeScript includes all the primitive types of JavaScript - number, string and boolean.
 *
 * type annotations help the compiler in checking types and helps avoid errors dealing(xử lí) with data types
 *
 * We can still follow the JavaScript way of declaring variables and have the TypeScript compiler infer(suy ra) the data type of the variable.
 */
// type of the variables
var yourAge = 32;
var yourName = "John";
var isUpdate = true;
// function parameters
function display(id, name) {
    console.log("id = " + id + ", name = " + name);
}
// object properties
var employee;
employee = {
    id: 100,
    name: "John"
};
display(10, 'Son');
console.log(employee);
