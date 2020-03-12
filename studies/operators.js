/*
 * OPERATORS:
 *
 * 0. Operators are used to assign values, perform arithmetic operations, 
 * compare values, determine logic and more.
 */

 // 1. Assignment operators 
 /*
 Assignment operators assign values to its left operand based on the value(s) 
 of the right operand.  The basic assignment operator is equal (=).
  =  - The principle assignment operator is the equal sign ('=').
  += - adds a value before assigning a resulting value
  -= - subtracts a value before assinging a resulting value
  *= - multiplies by a value before assinging a resulting value
  /= - divides by a value before assinging a resulting value
  %= - modulus of 
*/

var hour = 13;

console.log(hour);                       // prints => 13

hour += 2;

console.log(hour);                       // prints => 15

hour -= 5;

console.log(hour);                       // prints => 10

hour *= 4;

console.log(hour);                       // prints => 40

hour /= 8;

console.log(hour);                       // prints => 5

hour %= 6;

console.log(hour);                       // prints => 5

// 2. Arithmetic operator
/*
Arithmetic operators perform normal arithmetic on numbers.  The standard 
arithemetic operators are addition (+), subtractions (-), multiplication(*),
and division (/).
  +  - addition operator 
  -  - subtraction operator
  *  - multiplication opeator
  /  - division operator
  %  - modulus operator
  ++ - increment operator
  -- - decrement operator
*/

hour = 13 + 2;

console.log(hour);                       // prints => 15

hour++;

console.log(hour);                       // prints => 16

hour = hour - 5;

console.log(hour);                       // prints => 11

hour--; 

console.log(hour);                       // prints => 10

hour = hour * 4;

console.log(hour);                       // prints => 40

hour = hour / 8;

console.log(hour);                       // prints => 5

hour = hour % 6;

console.log(hour);                       // prints => 5

// 3. Comparison operator 
/*
Comparison operators compare two values and return a boolean.
  ==  - equal to operator (Value must match.  Type is not not checked.)
  === - strict equal to operator (Values must match in value and type.)
  !=  - not eqaul to operator (value must not match.  Tytpe is not checked.)
  !== - strict not equal tro operator (Values must not match in value or in type.)
  >   - greater than operator
  <   - less than operator
  >=  - greater than or equal to
  <=  - less than or equal to
*/

console.log(hour > 0);                   // prints => true

console.log(hour >= 0);                  // prints => true

console.log(hour < 5);                   // prints => false

console.log(hour <= 5);                  // prints => true

console.log(5 == '5');                   // prints => true

console.log(5 === '5');                  // prints => false

// 4. Logical operator 
/*
Logical operators are usually used with Boolean values.  If a value can be 
converted to true, the value is called truthy.  If a value can be converted to 
false, the value is called falsy.
  && - logical and operator
  || - logical or operator
  !  - logical not operator 
*/

console.log(hour >= 0 && hour <= 11);    // prints => true

console.log(hour >= 17 && hour <= 21);   // prints => false

console.log(hour >= 17 || hour <= 21);   // prints => true

// 5. Unary operators
/*
Unary operators only take on operand.
  !      - logical not operator
  typeof - returns the type of variable
  -      - 
*/

console.log(-hour);                    // prints => -5

console.log(!true);                    // prints => false

console.log(typeof [1, 2, 3]);         // prints => object

// 6. Ternary operator
/*
Ternary operator is a conditional operator that takes three operands.  It first 
list a condition followed by a question mark (?).  Second, it lists an 
expression to execute if the condition is truthy followed by a colon (:).  And
lastly, the expression to execute if the contition is falsy.  The ternary
operator is used as a substitution for the if statement.
  a ? b: c
*/

var check = true ? console.log(true) : console.log(false);   // prints => true
