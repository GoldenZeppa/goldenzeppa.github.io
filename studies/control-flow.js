/*
 * CONTROL FLOW:
 *
 * 0. To control the flow of the execution of code, conditions are used.  Each 
 * condition is an expression that evaluates to a Boolean value, either true or 
 * false.  One condition must evaluate to true for a code block to run.
 *
 */

// 1. If
/* 
The If statement is declared with the keyword 'if' followed by a condition.  If 
the if condition is true, then the code will execute.  Otherwise, it will 
continue to next possible option (if available).
*/

var hour = 15;

if (hour >= 0 && hour <= 11) {
    console.log('Good Morning!');
}


// 2. Else-if
/*
The Else-if statement is declared with the keywords else if followed by a 
condition.  If the if condition is false and an else if exists, the condition 
of the else-if will be evaluated.  If the condition of the else-if evaluates to 
true, then that code will execute.  Otherwise, it will continue to the next 
possible option.  If more than on else-if statement exists, the program will 
continue to evaluate the subsequent else-if statements hoping to find one that 
evaluates to true.  If none evaluate to true, the program continues with the 
else statement (if available). 
*/

var hour = 15;

if (hour >= 0 && hour <= 11) {
    console.log('Good Morning!');
} else if (hour >= 12 && hour <= 16) {   // prints => Good Afternoon!
    console.log('Good Afternoon!');
} else if (hour >= 17 && hour <= 21) {
    console.log('Good Evening!');
}


// 3. Else
/*
The Else statement is declared with the keyword else.  If all previous 
conditions are false, the else code block will execute by default.  The else 
statement does not have a condition to evaluate.
*/

var hour = 15;

if (hour >= 0 && hour <= 11) {
    console.log('Good Morning!');
} else {
    console.log('Good Night!');
}

// Note:  The statement is executed if the specified condition is truthy.  If
// the condition is falsy, another statement will evaluated to determine if the 
// corresponding statements will be executed.  Else does not have a condition,
// so if all previous conditions are falsy, the else code block will always run.
// Since default is the last option, no break is needed.

var hour = 15;

if (hour >= 0 && hour <= 11) {
    console.log('Good Morning!');
} else if (hour >= 12 && hour <= 16) {   // prints => Good Afternoon!
    console.log('Good Afternoon!');
} else if (hour >= 17 && hour <= 21) {
    console.log('Good Evening!');
} else {
    console.log('Good Night!');
}

// 4. Switch

/*
The Switch statement is declared with the keyword switch followed by a 
condition.  The condition will be tested against each case listed.  If the 
condition matches a case, then the corresponding code block will be executed.
It will continue to execute until the end  of the switch statement or until a
break is reached causing the block execution to cease.  Just like the else of
an if block, the switch block has a default case.  If a default case is 
provided, it will execute is the expression does not match any of the case 
clauses.
*/

hour = 23;

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
       console.log('Good Morning!');  
       break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Good Afternoon!');  
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
        console.log('Good Evening!');  
        break;
    default:
        console.log('Good Night!');      // prints => Good Night!
}

// Note:  The statement evaluates an expression, then it matches the 
// expression's resulting value to a case, and executes the associated 
// statements.  It will execute the code until the end or a break is executed.  
// If no match is found, the default case will run.  No break is necessary for 
// the default statements since there are no more possibilities remaining.