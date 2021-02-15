/**
 * String is another primitive data type that is used to store text data.
 */
let employeeName:string = 'John Smith'; 
let employeeDept:string = "Finance"; 

/**
 * Template(mẫu) strings are used to embed(nhúng) expressions(biểu thức) into strings.
 */
// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 
// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 

/**
 * charAt()returns a character at the specified(cụ thể|chỉ định) index from a string.
 */
let strCharAt: string = "Hello world";
console.log(strCharAt.charAt(0));
console.log(strCharAt.charAt(4));

/**
 * concat() method concatenates(nối) two or more specified(chỉ định) strings.
 */
let str1: string = 'Hello';
let str2: string = 'TypeScript';
str1.concat(str2); // returns 'HelloTypeScript'
str1.concat(' ', str2); // returns 'Hello TypeScript'
str1.concat(' Mr. ', 'Bond'); // returns 'Hello Mr. Bond'

/**
 * indexOf() trả về vị tri đầu tiên của kí tự trong chuỗi
 */
let str: string = 'TypeScript';

console.log(str.indexOf('T')) // returns 0
console.log(str.indexOf('p')) // returns 2
console.log(str.indexOf('e')) // returns 3
console.log(str.indexOf('p', 1)) // returns 2
console.log(str.indexOf('t', 1)) // returns 9

/**
 * replace() replaces the matched(phù hợp) substring(chuỗi con) with the specified(chỉ định) string
 */
let str_1: string = 'Hello Javascript';
let str_2: string = 'TypeScript';

console.log(str1.replace('Java', 'Type')) // returns 'Hello TypeScript'
console.log(str1.replace('JavaScript', str2)) // returns 'Hello TypeScript'
console.log(str1.replace(/Hello/gi, 'Hi')) // returns 'Hi TypeScript'

/**
 * split() cắt chuỗi và trả về mảng con
 */
let str_3: string = 'Apple, Banana, Orange';
let str_4: string = ',';

str_3.split(str2) // returns [ 'Apple', ' Banana', ' Orange' ]
str_3.split(',') // returns [ 'Apple', ' Banana', ' Orange' ]
str_3.split(',', 2) // returns [ 'Apple', ' Banana' ]
str_3.split(',', 1) // returns [ 'Apple']

/**
 * toUpperCase() in hoa tất cả các kí tự trong chuỗi
 */
let strCase: string = 'Hello Typescript';
strCase.toUpperCase(); // returns 'HELLO TYPESCRIPT'
'hello typescript'.toUpperCase(); // returns 'HELLO TYPESCRIPT'

/**
 * toLowerCase() in thường tất cả các kí tự trong chuỗi
 */
let str_5: string = 'Hello Typescript';
str_5.toLowerCase(); // returns hello typescript
'HELLO TYPESCRIPT'.toLowerCase(); // returns hello typescript