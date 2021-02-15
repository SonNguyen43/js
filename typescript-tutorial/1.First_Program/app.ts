function addNumber(a: number, b:number) {
    return a + b
}

/**
 * TypeScript does not compile the code if you pass a string to a function that is expecting a number!
 */
var sum: number = addNumber(10,25)
console.log('Sum of the two numbers is: ' + sum)
