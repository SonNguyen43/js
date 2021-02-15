/**
 * All numbers are stored(lưu trữ) as floating point numbers(dạng số phẩy động).
 */
var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57
/**
 * toExponential()
 */
/**
 * toFixed() làm tròn số
 */
var numberToFixed = 10.8788;
numberToFixed.toFixed(); // 10
numberToFixed.toFixed(1); // 10.9
numberToFixed.toFixed(2); // 10.88
numberToFixed.toFixed(3); // 10.879
numberToFixed.toFixed(4); // 10.8788
/**
 * toString() chuyển số thành chuỗi
 */
var myNumber = 123;
myNumber.toString(); // returns '123'
myNumber.toString(2); // returns '1111011'
myNumber.toString(4); // returns '1323'
myNumber.toString(8); // returns '173'
myNumber.toString(16); // returns '7b'
myNumber.toString(36); // returns '3f'
/**
 * valueOf() giá trị nguyên thủy của một số
 */
var myNumberValue = new Number(123);
console.log(myNumberValue); //Output: Number
console.log(myNumberValue.valueOf()); //Output: 123
console.log(typeof myNumberValue); //Output: object
var num2 = myNumberValue.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: Number
