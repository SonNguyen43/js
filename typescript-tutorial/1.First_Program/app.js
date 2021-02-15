function addNumber(a, b) {
    return a + b;
}
/**
 * TypeScript does not compile the code if you pass a string to a function that is expecting a number!
 */
var sum = addNumber(10, 25);
console.log('Sum of the two numbers is: ' + sum);
