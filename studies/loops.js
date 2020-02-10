/*
 * LOOPS:
 *
 * 0. Loops repeat a block of code a specific number of times.  There are three types of
 * loops:  while loop, for loop, and for-in loops.  They all test a condition to continue
 * executing the loop.  
 *
 * 1. The while loops are declared with the keyword 'while' followed by a condition. 
 * While the condition evaluates to true, the while loop will continue to execute 
 * the code block.  The condition must be manipulated within the update condition 
 * accordingly to avoid an infinite loop.
 *
 * 2. The for loops are declared with the keyword 'for' followed by an initial value, 
 * a condition, and a increment / decrement.  While the condition evaluates to true, 
 * the for loop will continue to execute the code.  If the condition never evaluates 
 * to false, the for loop can also get caught in an infinite loop.
 *
 * 3. The for-in loops are declared with the keyword 'for' followed by a declaration of 
 * of the key variable and object reference.  In the 'for-in' loop, the program tests 
 * if there are any keys left in the object to continue the loop.  No condition must be 
 * manipulates since it will continue the loop until all keys are exhausted.  There is no 
 * possibility of an infinite 'for-in' loop.
 */

var array = [1, 2, 3, 4, 5]

// 1. While loop //
var i = 0
while (i < array.length) {
    console.log(array[i]);  // prints the array element at the i-th index
    i += 1;                 // manipulate condition so loop doesn't get stuck in infinite loop
}

// NOTE:  The while loop can be rewritten into a for loop as shown below.

// 2. For loop //
for (var x = 0; x < array.length; x++) {
    console.log(array[x]);  // prints array element at the x-th index
}

// NOTE:  The previous for loop example loops over an array forwards since the indices are traversed in ascending order.

//  For loop over array backwards (indices are traversed in descending order)
for (var y = array.length - 1; y >= 0; y--) {
    console.log(array[y]);  // prints array element at the y-th index
}

// NOTE:  The previous for loop example loops over an array backwards since the indices are traversed in descending order.

// 3. For-in loop //

var contact = {
    id: 123,
    firstName: 'John',
    lastName: 'Smith'
}

for (var key in contact) {
    console.log(key);  // prints object key
}
