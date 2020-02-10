/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3. Like variables, constants hold values in memory.  However, unlike variables, constants cannot 
 * be reassigned.
 *
 * 4. Variables can also be declared with the 'let' keyword.  Like regular variables, 'let' variables
 * hold a value in memeory and can be reassigned.  Hoever, they are more limited in scope due to hoisting.
 *
 * 5. Hoisting is the process by which variables declared with the var keyword and function declarations
 * are made available during runtime.  They are brought up to the top of their scope making them avaiable
 * before or after their declaration. 
 */

// 1. Declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. Initialization or assignment //
myName = 'john';     // assign a value to a variable, which was previously undefined
console.log(myName); // prints => john

// 2. Re-assignment //
myName = 'bob';      // assigns a new value to a varaible, which had a different value previously
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 3. Constants //
const hours = '24';
console.log(hours);  // prints 24

// 4. Let variables //
var hour = 13;

function greeter() {
    let currentHour = hour + 3;  // Declare let variable and give closure by accessing global variable hour 
    // Depending on the hour of the day, log the correct greeting
    if (currentHour >= 0 && currentHour <= 11) {
        // if hour is between 0 and 11, log morning greeting
        console.log('Good Morning!');
    } else if (currentHour >= 12 && currentHour <= 16) {
        // else if hour is between 12 and 16, log afternoon greeting
        console.log('Good Afternoon!');
    } else if (currentHour >= 17 && currentHour <= 21) {
        // else if hour is between 17 and 21, log evening greeting
        console.log('Good Evening!');
    } else {
        // else hour is between 22 and 24, log night greeting
        console.log('Good Night!');
    }
}

// NOTE:  Variable names declared with the var keyword are hoisted to the top of their scope at runtime.  
// As a result, variable can be declared anywhere and will be avialable anywhere in the scope.  It can
// happen before or after declaration ; however, it has no value until it is assigned.