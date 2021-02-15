/**
 * Variables in TypeScript can be declared using var keyword, same as in JavaScript.
 * The scopin(phạm vi) rules(qui tắc) remains the same as in JavaScript.
 */

/**
 * To solve(gỡ rối) problems with var declarations, ES6 introduced two new types of variable declarations in JavaScript, using the keywords let and const
 * variables declared with let have a block-scope. This means that the scope of let variables is limited(giới hạn) to their containing block (trong khối chứa chúng)
 */
let employee: string = "Son";

/**
 * Consider(xem xét) the following example
 */
let num1: number = 1;
function letDeclaration() {
  let num2: number = 2;

  if (num2 > num1) {
    let num3: number = 3;
    num3++;
  }

  while (num1 < num2) {
    let num4: number = 4;
    num1++;
  }

  console.log(num1); //OK
  console.log(num2); //OK
  // console.log(num3); //Compiler Error: Cannot find name 'num3'
  // console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letDeclaration();

/**
 * Hoisting xảy ra với var nhưng không xảy ra với let & const
 * Block-scoped let variables cannot be read or written to before they are declared.
 * whereas(trong khi) it won't give an error when using variables before declaring them using var.
 */
// console.log(letVariable);
// let letVariable: number = 10;

console.log(varVariable); // undefined
var varVariable: number = 5;

/**
 * Let variables cannot be re-declared(ghi đè)
 * the TypeScript compiler treats variable names as case sensitive(phân biệt chữ hoa chữ thường). num is different than Num
 * However, it will give an error for the variables with the same name and case(trùng tên và loại)
 */
// var num:number = 1;
// let num:number = 6;

/**
 * Variables with the same name and case can be declared in different blocks
 */
let num:number = 1; 
function demo() {
    let num:number = 2;
    if(true) { 
        let num:number = 3;
        console.log(num); //Output: 3
    }
    console.log(num); //Output: 2
}
console.log(num); //Output: 1
demo();

/**
 * Similarly (tương tự), the compiler will give an error if we declare a variable that was already passed(đã được thông qua) in as an argument(đối số) to the function
 */

// function letDemo(a: number ) { 
//     let a:number = 10 ; //Compiler Error: TS2300: Duplicate identifier 'a'
//     let b:number = 20 ; 

//     return a + b ;
// }

/**
 * Variables can be declared using const similar(giống) to var or let declarations. 
 * The const makes a variable a constant(không thay đổi) where its value cannot be changed. 
 * Const variables have the same scoping rules as let variables.
 */
// const num:number = 100;
// num = 200;
