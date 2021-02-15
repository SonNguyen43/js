/**
 * All numbers are stored(lưu trữ) as floating point numbers(dạng số phẩy động).
 */
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number = 0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57


/**
 * toExponential()
 */

/**
 * toFixed() làm tròn số
 */
let numberToFixed: number = 10.8788

numberToFixed.toFixed(); // 10
numberToFixed.toFixed(1) // 10.9
numberToFixed.toFixed(2) // 10.88
numberToFixed.toFixed(3) // 10.879
numberToFixed.toFixed(4) // 10.8788

/**
 * toString() chuyển số thành chuỗi
 */
let myNumber: number = 123;

myNumber.toString(); // returns '123'
myNumber.toString(2); // returns '1111011'
myNumber.toString(4); // returns '1323'
myNumber.toString(8); // returns '173'
myNumber.toString(16); // returns '7b'
myNumber.toString(36); // returns '3f'

/**
 * valueOf() giá trị nguyên thủy của một số
 */

let myNumberValue = new Number(123);
console.log(myNumberValue); //Output: Number
console.log(myNumberValue.valueOf()); //Output: 123
console.log(typeof myNumberValue); //Output: object
let num2 = myNumberValue.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: Number