/*
 * DATA TYPES:
 *
 * 0. Variables can point to values of a particular type, like a Number,  
 * String, Boolean, Array, Object or another data-type.  Without data types
 * a computer would not know how to solve or evaluate program expressions 
 * during the execution of code.
 */

// 1. Number 
/*
Numbers have numerical values.  They can be whole numbers or decimals.  They 
can also be positive or negative.
*/

var number = 15;

console.log(number);                      // prints => 15

// 2. String
/*
Strings are a collection of characters.  They are encapsulated with quotes.  
Either single or double quotes can be used; however, they must match. String 
values can be accessed using bracket notation.  The first element is accessed 
using 0 since strings are zero-based.
*/

var string = 'Hello World!';

console.log(string);                      // prints => Hello World!

// 3. Boolean
/*
Boolean data types only have two possible values:  true or false.
*/

var boolean = true;

console.log(boolean);                     // prints => true

// 4. Array
/*
Arrays are a collection of data.  Each data element in an array can be of a 
different data type.  Arrays are declared with square brackets, and each 
element in an array is separated by a comma.  Array values can be accessed by 
using index values.  The first element is accessed using 0 since arrays are 
zero-based, like strings.  Arrays are considered to be an ordered list due to 
the ascending value of its indices.
*/

var array = [1, 2, 3, 4, 5];

console.log(array);                       // prints => [1, 2, 3, 4, 5]

// 5. Object
/*
Objects are a collection of key/value pairs.  Objects help simplify the 
representation of real-world objects, such as a student, class, or contact 
list.  Objects are declared with curly braces.  Inside the curly braces, each
property of the object is called a key.  Each key must be a string and have an
associated value.  Object values can be accessed using bracket notation or dot 
notation.  Since objects do not use indices like arrays, objects are considered 
to be an unordered list.
*/

var contact = { id: 123, 
                nameFirst: 'John',
                nameLast: 'Smith'};
                
console.log(contact);                     // prints => {id: 123, nameFirst: 'John', nameLast: 'Smith'} 
                
// 6. Function
/*
Functions hold reusable blocks of code that perform a particular task. 
*/

string = 'Hello!';

var startsWith = function(char) { 
    return (string[0].toLowerCase() === char.toLowerCase()); 
};

console.log(startsWith('X'));             // prints => false

// 7. Undefined
/*
The Undefined data type results when a variable has been declared without a
value.  Both the value and type of the variable are undefined.  A variable can
also be assigned a value of undefined by using the keyword 'undefined' to clear
out any previous value and type.
*/

var notInitiated;

console.log(notInitiated);                // prints => undefined

notInitiated = 'initiated';

console.log(notInitiated);                // prints => initiated

notInitiated = undefined;

console.log(notInitiated);                // prints => undefined

// 8. Null
/*
The Null data type represents the absence of any value.  Just like undefined,
the keywork 'null' can be assinged to a variable to clear out a variable.  Null 
is considered to be an object in JavaScript.
*/

var noValue = null;

console.log(noValue);                     // prints => null

noValue = false;

console.log(noValue);                     // prints => false

noValue = null;

console.log(noValue);                     // prints => null

// 9. NaN
/* 
NaN indicates that the value is Not-A-Number (NaN).  It is usually returned as
a value when Math functions fail.  For example, division by zero would result 
in a NaN value since it is a mathematical expression that has no meaning.
*/

var notNumber = NaN;

console.log(notNumber);                   // prints => NaN

console.log(Math.sqrt(-1));               // prints => NaN

console.log(0/0);                         // prints => NaN

// 10. Infinity and -Infinity
/*
Infinity is a numer that repressent positive infinite, and -Infinity is a
number that represents negative infinity.  The corresponding infinity is 
displayed when the numerical limitation has been exceeded.  If a positive 
number, then 1.7976931348623157E+10308 may be displayed.  Otherwise, 
-1.7976931348623157E+10308 may display if a negative limitation has been 
exceeced.
*/

console.log(Infinity);                    // prints => Infinity

console.log(-Infinity);                   // prints => -Infinity

console.log(Math.pow(2, 20000));          // prints => Infinity


// 11. 
/*
The primitive, simple, or basic data types include Numbers, Strings, and 
Booleans. While the complex data types are Arrays and Objects.
*/

// 12. Copy by value
/*
Primitive values are copied by value.  So when they are used as arguments, they 
are passed to a function by copying the value of those arguments into memory.  
If any manipulation of primitive data types happens in the function, nothing 
changes the value to argument unless a new value is returned from the function 
and reassigned to the argument.
*/

var a = 8;
var b = a;

console.log(a);                            // prints => 8
console.log(b);                            // prints => 8

a = 3;

console.log(a);                            // prints => 3
console.log(b);                            // prints => 8

// 12. Copy by reference
/*
Complex values are not copied into memeory, instead they are accessed by 
reference.  In other words, the values are not copied into memory again.  
Instead, the memory address of the arguments is passed to the function, so 
the function can access it by its address in memory.
*/

var a = {name: 'John Smith'};
var b = a;

console.log(a);                            // prints => {name: 'John Smith'}
console.log(b);                            // prints => {name: 'John Smith'}

a.name = 'Jane Doe';

console.log(a);                            // prints => {name: 'Jane Doe'}
console.log(b);                            // prints => {name: 'Jane Doe'}
