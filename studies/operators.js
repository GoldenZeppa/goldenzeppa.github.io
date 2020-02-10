/*
 * OPERATORS:
 *
 * 0. 
 *
 * 1. Assignment operators:  
 * '=' - The principle assignment operator is the equal sign ('=').
 * '+=' - adds a value before assigning a resulting value
 * '-=' - subtracts a value before assinging a resulting value
 * '*=' - multiplies by a value before assinging a resulting value
 * '/=' - divides by a value before assinging a resulting value
 * '%=' - modulus of 
 *
 * 2. Arithmetic operators perform normal arithmetic on numbers.
 * '+' - addition operator
 * '-' - subtraction operator
 * '*' - multiplication opeator
 * '/' - division operator
 * '%' - modulus operator
 * '++' - increment operator
 * '--' - decrement operator
 *
 * 3. Comparison operators compare two values and return a boolean.
 * '==' - equal to operator (Value must match.  Type is not not checked.)
 * '===' - strict equal to operator (Values must match in value and type.)
 * '!=' - not eqaul to operator (value must not match.  Tytpe is not checked.)
 * '!==' - strint not equal tro operator (Values must not match in value or in type.)
 * '>' - greater than operator
 * '<' - less than operator
 * '>=' - greater than or equal to
 * '<=' - less than or equal to
 *
 * 4. Logical operators
 * '&&' - logical and operator
 * '||' - logical or operator
 * '!' - logical not operator 
 *
 * 5. Unary operators (!, typeOf, -)
 * '!' - logical not operator
 * typeof - returns the type of variable
 *
 * 6. Ternary operators (a ? b: c)
 */

// 1. Assignment operator //
var hour = 13;
console.log(hour);  // prints 13

// 2. Arithmetic operator //
hour = 13 + 3;
console.log(hour);  // prints 16

// 3. Comparison operator //
console.log(hour >= 0);  // prints true

// 4. Logical operator //
console.log(hour >= 0 && hour <= 11);  // prints false

// 5. Unary operator //
console.log(!true);  // prints false

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
