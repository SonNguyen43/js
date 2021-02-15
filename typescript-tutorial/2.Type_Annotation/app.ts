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
var yourAge: number = 32;
var yourName: string = "John";
var isUpdate: boolean = true;

// function parameters
function display(id: number,name: string) {
    console.log("id = " + id + ", name = " + name);
}

// object properties
var employee : { 
  id: number; 
  name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}

/**If you try to assign (chỉ định) a string value to id then the TypeScript compiler will give the error. */
display(10, 'Son')
console.log(employee);
