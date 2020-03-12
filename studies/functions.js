/*
 * FUNCTIONS:
 *
 * 0. Functions hold reusable blocks of code that perform a particular task.  
 *
 * 1. To declare a function, the function keyword is used followed by a name, 
 * parameters, function body, and return statement.  This function is known as
 * a named function.
 *
 * 2. The two phases to using functions:  declaration and execution / 
 * invocation / calling.
 *
 * 3. The function parameters are space holders for the expected inputs.  The 
 * parameters are listed in the function declaration inside the parenthesis.  
 * Parameters are optional.
 *
 * 4. When a function is invoked, the arguments of the function call represent 
 * the actual data being passed into the function.  The arguments are listed in 
 * the function call inside the parenthesis.  Arguments are only necessary if 
 * the function is expceting input values; otherwise, JavaScript will ignore 
 * any extra arguments.
 *
 * 5. To invoke a function, type the name of the function followed by 
 * parenthesis.  If the function is expecting data, arguments will be included 
 * inside the parenthesis.
 *
 * 6. A function can also be assigned to a variable.  This type of function is
 * known as a function expression since it is stored in a variable.  A function 
 * expression utilizes the function keyword, but it does not have a name like
 * a named function.
 *
 * 7. A function may return a value using the return keyword in an statement 
 * within the function's code block.
 *
 * 8. A function has access to any global variables, any parent variables, and 
 * it's own local variables.  However, a function does not have access to any 
 * variables in a nested or child functions.
 *
 * 9. Scope is the area of code in which values and expressions are visible.
 * The top-most or highest level scope is global scope.  Any variable or 
 * expression declared in the global scope will be available in all other 
 * scopes.  Function declared variables and expressions are available to the 
 * function that contains it and any child functions, but they will not be
 * available to the global scope.  The function scope is also known as local 
 * scope.  (There is also block scope for variables that are declares in a 
 * block structure like an if statement or loop.  Only the block will have 
 * to access those variables.)
 *
 * 10. Function forms closure by accessing variables outside their local scope.  
 * By this action, the variable is kept alive in the scope of the function.
 */

// 1. Declaration
// A named function has a name after the keyword function.  The function print
// has a value parameter.  While the function print2, does not have any 
// parameters.

function print(value) { 
    console.log(value);                     // When called, prints input value
}

function print2() {
    console.log('Hello again!')             // When called, prnts string
}

// NOTE:  The statements contained in between the function's curly braces are 
// considered to be the code block of the function.
  

// 2. Execution
// A function is executed by providing the function name followed by opening 
// and closing parenthesis.  If the function is expecting parameters include
// arguments inside the parenthesis like in the print call example.

print('Hello World!');                    // prints => Hello World!

print2();                                 // prints => Hello again!

// 3. Function Expression
// A function that is assigned to a variable.  This example has a return value.

var area = function (a, b) { return a * b };

console.log(area(2, 3));                  // prints => 6

// 4. Scope
// Global scope is a variable declared on the top-most level and is accessible 
// to the entire page.  Function scope is a variable declared inside a function
// and is accessible to that function and any child functions.  This example 
// uses function calls to demonstrate scope.

scope();                                  // prints => 20\n16

function scope() {
    
    console.log(area(4, 5));             
    
    console.log(sq(4));              
    
    function sq(num) { return num * num };
    
}

sq(10);                  // Reference Error since sq function is not accessible

// 5. Closures
// Closure is when a function access a variable that is not part of their local 
// scope. 
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

