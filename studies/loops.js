/*
 * LOOPS:
 *
 * 0. Loops repeat a block of code a specific number of times.  There are three 
 * types of loops:  while loop, for loop, and for-in loops.  They all test a 
 * condition to continue executing the loop.  
 */

var array = [1, 2, 3, 4, 5]

// 1. While loop 
/*
The while loops are declared with the keyword while followed by a condition.
While the condition evaluates to true, the while loop will continue to execute 
the code block.  The condition must be manipulated within the loop to update 
condition accordingly.  If not coded correctly, the code can thrown into an 
infinite loop.
*/

var i = 0
while (i < array.length) {
    console.log(array[i]);   // final print results => 1\n2\n3\n4\n5 
    i += 1;                 
}

// NOTE:  The while loop can be rewritten into a for loop as shown below.

// 2. For loop
/*
The for loops are declared with the keyword for followed by an initial value,
a condition, and a increment / decrement.  While the condition evaluates to
true, the for loop will continue to execute the code.  If the condition never 
evaluates to false, the for loop can also get caught in an infinite loop.
*/

for (var x = 0; x < array.length; x++) {
    console.log(array[x]);   // final print results => 1\n2\n3\n4\n5 
}

// NOTE:  The previous for loop example loops over an array forwards since the 
// indices are traversed in ascending order.

//  For loop over array backwards (indices are traversed in descending order)

for (var y = array.length - 1; y >= 0; y--) {
    console.log(array[y]);  // final print results => 5\n4\n3\n2\n1 
}

// NOTE:  The previous for loop example loops over an array backwards since the
// indices are traversed in descending order.

// 3. For-in loop
/* 
The for-in loops are declared with the keyword for followed by a declaration
of the key variable and object reference.  In the for-in loop, the program 
tests if there are any keys left in the object to continue the loop.  No 
condition must be manipulates since it will continue the loop until all keys 
are exhausted.  There is no possibility of an infinite for-in loop.
*/

var contact = {
    id: 123,
    firstName: 'John',
    lastName: 'Smith'
}

// For-in loop that prints the object keys.

for (var key in contact) {
    console.log(key);      // final print results => id\nfirstName\nlastName
}

// For-in loop that prints the object key values.

for (var key in contact) {
    console.log(contact[key]);   // final print results => 123\nJohn\nSmith
}
