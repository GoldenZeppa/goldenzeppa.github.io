/*
 * FUNCTIONS:
 *
 * 0. Functions hold reusable blocks of code that perform a particular task.  
 *
 * 1. The two phases to using functions:  declaration and execution / 
 * invocation / calling.
 */

// 1. Declaration, 2. Parameters, 3. Named Function, 5. Optional Inputs
/*
To declare a function, the function keyword is used followed by a name, 
parameters, function body, and return statement.  This function is known as
a named function.

The function parameters are space holders for the expected inputs.  The 
parameters are listed in the function declaration inside the parenthesis.  
Parameters are optional.
*/ 

function print(value) { 
    console.log(value);                     // When called, prints input value
}

function print2() {
    console.log('Hello again!')             // When called, prints string
}

// Note:  The statements contained in between the function's curly braces are 
// considered to be the code block of the function.

// Note:  The function print has a value parameter.  While the function print2, 
// does not have any parameters.
  

// 1. Execution and 2. Arguments
/*
To invoke a function, type the name of the function followed by parenthesis.  
If the function is expecting data, arguments will be included inside the 
parenthesis.

When a function is invoked, the arguments of the function call represent the
actual data being passed into the function.  The arguments are listed in the
function call inside the parenthesis.  Arguments are only necessary if the
function is expceting input values; otherwise, JavaScript will ignore any
extra arguments.
*/

print('Hello World!');                    // prints => Hello World!

print2();                                 // prints => Hello again!

// 4. Function Expression
/*
A function can also be assigned to a variable.  This type of function is known
as a function expression since it is stored in a variable.  A function 
expression utilizes the function keyword, but it does not have a name like a
named function.
*/

var area = function (a, b) { return a * b };

console.log(area(2, 3));                  // prints => 6

// 5. Optional Input and Optional Output
/*
In the declaration section, it was discussed that parameters and inputs are 
optional.  This is illustrated in the previous print2 function declaration and 
execution.  However, it was not mentioned that a function may or may not return 
a value using the return keyword statement within the function's code block. 
Both previous print function declarations do not return a value.  The area
function expression does return a value of a * b.
*/

function print2() {
    console.log('Hello again!')             // When called, prints string
}

var area = function (a, b) { return a * b };

// 6. Scope
/* 
Scope is the area of code in which values and expressions are visible.  The
top-most or highest level scope is global scope.  Any variable or expression 
declared in the global scope will be available in all other scopes.  Function 
declared variables and expressions are available to the function that contains 
it and any child functions, but they will not be available to the global scope.  
The function scope is also known as local scope.  (There is also block scope 
for variables that are declares in a block structure like an if statement or 
loop.  Only the block will have to access those variables.)
*/

scope();                                  // prints => 20\n16

function scope() {
    
    console.log(area(4, 5));             
    
    console.log(sq(4));              
    
    function sq(num) { return num * num };
    
}

sq(10);                  // Reference Error since sq function is not accessible

// 7. Closures
/*
Function forms closure by accessing variables outside their local scope.  By 
this action, the variable is kept alive in the scope of the function. 
*/ 

var hour = 13;

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

