/*
 * STRING MANIPULATION:
 *
 * 0. Strings are a collection of characters.  Strings can be manipulated with 
 * built-in string methods and properties.
 *
 * 1. With string operators include:
 * '=' operator, which assign or re-assigns values to a variable
 * '+' operator, which adds or concatenates characters to a string
 * '+=' operator, which adds or concatenates characters to a string without having to name the variable twice
 *
 * 2. Methods are JavaScript pre-defined functions.  The following methods help 
 * to manipulate strings:
 *     - toLowerCase(), which converts all alphabetic characters in a string to lowercase
 *     - toUpperCase(), which converts all alphabetic character in a string to uppercase
 *     - split(), which converts a string to an array by 'splitting' up the string when a specified character is found
 *     - join(), which joins an array of string with the given character
 */

// 1. Operators //

var string = 'Hello';              // assigns 'Hello' to the variable 'string'

string = 'Hello' + ' ' + 'World';  // reassigns and added/concatenated string of 'Hello World'

string += '!';                     // adds or concatenates '!' to the previous variable value of 'Hello World'


// 2. String Methods //

console.log(string.length);                // prints 12

console.log(string.toLowerCase());         // prints 'hello world!'

console.log(string.toUpperCase());         // prints 'HELLO WORLD!'

console.log(string.split(' '));            // prints ['HELLO', 'WORLD!']
