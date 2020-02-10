// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    // Loop through the number 1 to 100
    for (var i = 1; i <= 100; i++) {
        // Is the number a multiple of three and/or five?
        if (i % 3 === 0 && i % 5 === 0) {
            // If the number is multiples of both three and five, log "FizzBuzz"
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            // Else if the number is a multiple of three, log "Fizz"
            console.log('Fizz');
        } else if (i % 5 === 0) {
            // Else if the number is a multiple of five, log "Buzz"
            console.log('Buzz');
        } else {
            // log the number
            console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}