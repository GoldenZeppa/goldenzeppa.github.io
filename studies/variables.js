/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE the
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or
 * alias).
 *
 * 2. There are 2 phases of using variables:  declaration and initialization 
 * (or assignment).
 */

// 1. Declaration
// At the declaration phase, the variable myName is undefined because we have 
// NOT initialized it to anything

var myName;

console.log(myName);      // prints => undefined

// 1. Initialization or assignment
// At the initialization phase, the variable myName is assigned an initial value

myName = 'john';

console.log(myName);      // prints => john

// 1. Re-assignment
// Once the variable has a value, the value can be changed or updated 

myName = 'bob';    

console.log(myName);      // prints => bob

// 2. Variables - var statement
// The variable is considered to have a global scope if it is declared outside
// any function.  If the same variable name is re-declared inside a function,
// the global variable will not lose its value.

var myName = 0;

console.log(myName);      // prints => 0

// 2. Constants - const declaration
/*
Like variables, constants hold values in memory.  But unlike variables, 
constants cannot be reassigned.  The declaration and initialization must be 
done in the same statement.  
*/

const hours = '24';

console.log(hours);       // prints => 24

hours = 12;               // => TypeError: Assignment to constant variable.

// NOTE: We can assign and re-assign anything to a variable - we cannot do this 
// with constants

// 2. Let variables - let statement
/*
Variables can also be declared with the 'let' keyword.  Like regular variables, 
let variables hold a value in memory and can be reassigned.  Even though a let 
variable can be declared in the top level of the program, it does not create a 
global variable like var.  Their scope are limited to the block in which they 
are defined like constHowever, they are more limited in scope due to hoisting.
*/

let hour = 12;

console.log(hour);        // prints => 12


// 3. Hoisting
/*
Hoisting is the process by which variables declared with the var keyword and
function declarations are made available during runtime.  They are brought up 
to the top of their scope making them avaiable before or after their 
declaration.  However, the value of the variable is not affected by hoisting.
*/

console.log(greeter());   // prints => Good Afternoon!

function greeter() {
    let currentHour = hour + 3;
    
    if (currentHour >= 0 && currentHour <= 11) {
        console.log('Good Morning!');
    } else if (currentHour >= 12 && currentHour <= 16) {
        console.log('Good Afternoon!');
    } else if (currentHour >= 17 && currentHour <= 21) {
        console.log('Good Evening!');
    } else {
        console.log('Good Night!');
    }
}

console.log(greeter());   // prints => undefined

// NOTE:  Due to hoisting, variables and functions can be declared anywhere in 
// the code and will be available anywhere in it's scope.  However, it has no 
// value until it is assigned.