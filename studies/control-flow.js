/*
 * CONTROL FLOW:
 *
 * 0. To control the flow of the execution of code, conditions are used.  Each condition 
 * is an expression that evaluates to a Boolean value, either true or false.  One condition
 * must evaluate to true for a code block to run.
 *
 * 1. The If statement is declared with the keyword 'if' followed by a condition.  If the 'if'
 * condition is true, then the code will execute.  Otherwise, it will continue to next 
 * the possible option (if available).
 *
 * 2. The Else-if statement is declared with the keywords 'else if' followed by a condition.  
 * If the 'if' condition is false and an 'else if' exists, the condition of the 'else-if' will
 * be evaluated.  If the condition of the 'else-if' evaluates to true, then that code will 
 * execute.  Otherwise, it will continue to the next possible option.  If more than on 
 * 'else-if' statement exists, the program will continue to evaluate the subsequent
 * 'else-if' statements hoping to find one that evaluates to true.  If none evaluate to true,
 * the program continues with the 'else' statement (if available). 
 *
 * 3. The Else statement is declared with the keyword 'else'.  If all previous conditions are 
 * false, the 'else' code block will execute by default.  The 'else' statement does not have a condition
 * to evaluate.
 *
 * 4. The Switch statement is declared with the keyword 'switch' followed by a condition.
 * The condition will be tested against each case listed.  If the condition matches a case,
 * then the corresponding code block will be executed.
 */

var hour = 15;

// 1. If, Else-if, Else//

// Depending on the hour of the day, log the correct greeting
if (hour >= 0 && hour <= 11) {
    // if hour is between 0 and 11, log morning greeting
    console.log('Good Morning!');
} else if (hour >= 12 && hour <= 16) {
    // else if hour is between 12 and 16, log afternoon greeting
    console.log('Good Afternoon!');
} else if (hour >= 17 && hour <= 21) {
    // else if hour is between 17 and 21, log evening greeting
    console.log('Good Evening!');
} else {
    // else hour is between 22 and 24, log night greeting
    console.log('Good Night!');
}

// NOTE: Else does not have a condition, so if all previous conditions are false, the else code block will always run. //

// 4. Switch //

/*
 * This is the same example as above; however, it is represented in a switch statement.
 */

// Depending on the hour of the day, log the correct greeting
switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
       console.log('Good Morning!');  // prints 'Good morning!' since hour is between 0 and 11, inclusively
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Good Afternoon!');  // prints 'Good Afternoon!' since hour is between 12 and 16, inclusively
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
        console.log('Good Evening!');  // prints 'Good Evening!' since hour is between 17 and 21, inclusively
    case 22:
    case 23:
    case 24:
        console.log('Good Night!');  // prints 'Good Night!' since hour is between 22 and 24, inclusively
}
