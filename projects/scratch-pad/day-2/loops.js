// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop over array 
  for (var i = 0; i < array.length; i++) {
    // log array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop over array backwards
  for (var i = array.length - 1; i >= 0; i--) {
    // log array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Return an array of object keys 
  return Object.keys(object);
  
  // // Reinventinig the wheel . . . it works but it is the long way
  // // Declare array variable
  // var array = [];
  
  // // Loop through object keys
  // for (var key in object) {
  //   // Add object key to array
  //   array.push(key);
  // }
  
  // // Return array containing object keys
  // return object;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // Loop through object keys
  for (var key in object) {
    // Log object key
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare array variable
  var array = [];
  
  // Loop through object keys
  for (var key in object) {
    // Add object value to array
    array.push(object[key]);
  }
  
  // Return array containing object keys
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // Loop through object keys
  for (var key in object) {
    // Log object value
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // Return the length of the object's key/value pairs
  return Object.keys(object).length;
  
  // // Reinventinig the wheel . . . it works but it is the long way
  // // Declare length variable
  // var length = 0;
  
  // // Loop through object keys
  // for (var key in object) {
  //   // Add 1 to length value
  //   length ++;
  // }
  
  // // Return length of object keys
  // return length;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // Declare array variable
  var array = [];
  
  // Loop through object keys
  for (var key in object) {
    // Add object value to array
    array.push(object[key]);
  }
  
  // Loop through array in reverse
  for (var i = array.length - 1; i >= 0; i--) {
    // Log array value
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
