/**
 * An array is a special type of data type which can store multiple values of different data types sequentially(tuần tự) using a special syntax.
 */
// Using square brackets (sử dụng dấu ngoặc vuông)
var fruits_1 = ['Apple', 'Orange', 'Banana'];
// Using a generic array type (sử dụng kiểu mảng chung)
var fruits_2 = ['Apple', 'Orange'];
/**
 * An array in TypeScript can contain(chứa) elements(nhiều phần tử) of different data types using a generic array type syntax.
 */
var values_1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// or 
var values_2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
/**
 * The array elements can be accessed using the index of an element
 */
var fruits = ['Apple', 'Orange', 'Banana'];
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined
/**
 * Demo
 */
var demo = ['Apple', 'Orange', 'Banana'];
demo.sort();
console.log(demo); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(demo.pop()); //output: Orange
demo.push('Papaya');
console.log(demo); //output: ['Apple', 'Banana', 'Papaya']
demo = demo.concat(['Fig', 'Mango']);
console.log(demo); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
console.log(demo.indexOf('Papaya')); //output: 2
