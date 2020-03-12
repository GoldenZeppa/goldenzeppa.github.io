/*
 * STRING MANIPULATION:
 *
 * 0. Strings are a collection of characters.  Strings can be manipulated with 
 * built-in string methods and properties.
 */

// 1. Operators
/*
String operators include:
  =  - The assignment operator, which assign or re-assigns values to a variable
  +  - The addition operator, which adds or concatenates characters to a string
  += - The assignment operator, which adds or concatenates characters to a 
       string without having to name the variable twice
*/

var string = 'Hello';              // assigns Hello to the variable 'string'

string = 'Hello' + ' ' + 'World';  // reassigns the variable the value of the concatenated string Hello World

string += '!';                     // Adds ! to the previous variable value of Hello World


// 2. String Methods
/*
Methods are JavaScript pre-defined functions.  The following methods help to
manipulate strings:
    - includes() determines whether a string is found inside another string.
      It returns a value of true or false.
    - indexOf() returns the index of a string in which the first occurrence
      of the value is found.  If no match is found, a -1 is returned.
    - join() joins an array of string values with the given character
    - split() converts a string to an array by 'splitting' up the string 
      when a specified character is found
    - substring() returns part of the string between the start and end 
      indexes.  If no end index is provided, then it will provide between the 
      start to the end of the string.
    - toLowerCase() returns a string with all contained alphabetic characters 
      in the string to lowercase. 
    - toUpperCase() returns a string with all contained alphabetic character 
      in a string to uppercase.
*/

console.log(string.includes('hello'));   // prints => false

console.log(string.indexOf('!'));        // prints => 11

console.log(string.split(' '));          // prints => ['HELLO', 'WORLD!']

console.log(string.substring(0, 5));        // prints => Hello

console.log(string.toLowerCase());       // prints => hello world!

console.log(string.toUpperCase());       // prints => HELLO WORLD!
