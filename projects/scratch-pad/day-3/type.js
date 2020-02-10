// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // Return true if value is an Array
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

    // Return true if value is an Object
    // 
    return (value !== null && typeof(value) === 'object' && value.constructor === Object);
    
    // // These two options also work . . .
    // // Return true if value is an Object
    // return (value !== null && typeof(value) === 'object' && value.constructor === Object);
    // // OR . . .
    // return (Object.prototype.toString.call(value) === '[object Object]');
    // // OR . . . 
    // return (value instanceof Object && value.constructor === Object);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    // Return true if value is either an Array or an Object
    return (Array.isArray(value) || (value !== null && typeof(value) === 'object' && value.constructor === Object));
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // Check the data type of value and return appropriate string
    if (Array.isArray(value)) {
        // If value is an array, return the string 'array'
        return 'array';
    } else if (value === null) {
        // Else if value is null, return the string 'null'
        return 'null';
    } else if (value instanceof Date) {
        // Else if value is a Date, return the string 'date'
        return 'date';
    } else {
        // Else return the type of string
        return typeof(value);
    }
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
