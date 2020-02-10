/*
 * DATA TYPES:
 *
 * 0. 
 *
 * 1. Numbers are a just numbers.  They can be whole numbers or decimals.  
 * They can also be positive or negative.
 *
 * 2. Strings are a collection of characters.  They are encapsulated with quotes.  
 * Either single or double quotes can be used; however, they must match.
 *
 * 3. Boolean data types only  have two possible values:  true or false.
 *
 * 4. Arrays are a collection of data.  Each data element in an array can be 
 * of a different data type.  Arrays are declared with square brackets, and 
 * each element in an array is separated by a comma.  Array values can de accessed 
 * by using index values.  The first element is access using 0 since arrays are 
 * zero-based.  Arrays are considered to be an ordered list to die to the ascending 
 * value of its indices.
 *
 * 5. Objects are a collection of key/value pairs.  Objects help simplify the 
 * representation or real-world objects, such as a student, class, or contact list.
 * Objects are declared with curly braces.  Inside the curly braces, each property 
 * of the object is called a key.  each key must be a string and have an associated 
 * value.  Object values can be accessed using bracket notation or dot notation.  
 * Since objects do not use indices like arrays, objects are considered to be an 
 * unordered list.
 *
 * 6. Functions hold reusable blocks of code that perform a particular task.  
 *
 * 7. The Undefined data type results when a varaible has been declared without a value.
 * Both the value and type of the variable are undefined.  A variable can also be
 * assigned a value of undefined by using the key work 'undefined' to clear out 
 * any previous value and type.
 *
 * 8. The Null data type is something that does not exist.  Just like undefined, 
 * the key work 'null' can be assinged to a variable to clear out an variable.  
 * Null is considered to be an object in JavaScript.
 *
 * 9. NaN indicates that the value is Not a Number (NaN).
 *
 * 10. Infinity is a numer that repressent positive infinite, and -Infinity is a 
 * number that represents negative infinity.  They are properties.  The corresponding 
 * infinity is displayed when the numberical limitation has been exceeded.  If a 
 * positive number, then 1.7976931348623157E+10308 may be displayed.  Otherwise, 
 * -1.7976931348623157E+10308 may display if a negative limitation has been exceeced.-
 *
 * 11. The primitive, simple, or basic data types include Numbers, Strings, and Booleans. 
 * While the complex data types are arrays and objects.
 *
 * 12. Primitive values when used as arguments are passed to a funciton by 
 * copying the value of those arguments into memory.  If any manipulation of
 * primitive data types happens in the function, nothing changes the value to
 * arrument unless the a new value is retruend from the fucntion and reassigned
 * to the arguemnt.  
 *
 * Complex values are not compied into memeory instead they are accessed by reference.
 * In other words, the values are not copied into memory again.  Instead, the address 
 * of the arguments place in memeory is passed to the fucntion, so the fucntion can access
 * it by its address in memory.
 */

// 1. Number //
var number = 15;
console.log(number);  // prints 15

// 2. String //
var string = 'Hello World!'
console.log(string);  // prints 'Hello World!'

// 3. Boolean //
var boolean = true;
console.log(true);  // prints true

// 4. Array //
var array = [1, 2, 3, 4, 5]
console.log(array);  // prints [1, 2, 3, 4, 5]

// 5. Object //
var contact = { id: 123, 
                nameFirst: 'John',
                nameLast: 'Smith'};
console.log(contact);  // prints {id: 123, nameFirst: 'John', nameLast: 'Smith'} 
                
// 6. Function //
var startsWith = function(char) { return (string[0].toLowerCase() === char.toLowerCase()); };
console.log(startsWith('X'));  // prints false

// 7. Undefined //
var notInitiated;
console.log(notInitiated);  // prints undefined

notInitiated = 'initiated';
console.log(notInitiated); // prints 'initiated'

notInitiated = undefined;
console.log(notInitiated); // prints undefined

// 8. Null //
var noValue = null;
console.log(noValue);  // prints null

noValue = false;
console.log(noValue); // prints false

noValue = null;
console.log(noValue); // prints null
