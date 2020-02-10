/*
 * FUNCTIONS:
 *
 * 0. Functions hold reusable blocks of code that perform a particular task.  
 *
 * 1. To declare a function, the function keyword is used followed by a name, parameters, function
 * body, and return statement.
 *
 * 2. The two phases to using functions:  declaration and execution / invocation / calling.
 *
 * 3. The function parameters are space holders for the expected inputs.  The parameters are  
 * listed in the function declaration inside the parenthesis.  Parameters are optional.
 *
 * 4. When a function is invoked, the arguments of the function call represent the actual 
 * data being passed to the function.  The arguments are listed in the function call inside
 * the parenthesis.  Arguments are only necessary if the function is expceting input values; 
 * otherwise, JavaScript will ignore any extra arguments.
 *
 * 5. To invoke a function, type the name of the function followed by parenthesis.  If the 
 * function is expecting data, arguments will be included inside the parenthesis.
 *
 * 6. How do we assgin a function to a variable?
 *
 * 7. A function may return a value using the return keyword in an statement within the 
 * fucntion's code block.
 *
 * 8. A function has access to any global varaibles, any parent varaibles, and it's own local
 * variables.  However, a function does not have access to any variables in a nested or child
 * fucntions.
 *
 * 9. Closures:  Function forms closure by accessing variables outside thier local scope.  By 
 * this action, the varaible is kept alive in the scope of the function.
 */

// 1. declaration //

function print(value) {  // function keyword + name of function (print) + parameter (value)
  console.log(value);  // prints value to screen
}

// NOTE:  The statements contained in between the function's curly braces are considered to be the code block of the function.
  

// 2. Execution //
print('Hello World!');  // calls the fucntion print and passes the argument string 'Hello World'


// 9. Closures //
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

