// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/


/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    // Return value unchanged
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // Determine value type
    // False positives for objects include null and array
    if (value === null) {
        // Check for null since it returns an object false positive
        // Return string 'null'
        return 'null';
    } else if (Array.isArray(value)) {
        // Check for array since it returns an object false positive
        // Return string 'array'
        return 'array';
    } else {
        // Return a string indicating the value type
        return typeof value;
    }
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // Is array parameter not of array data type?
    // Is number not positive?
    if (!Array.isArray(array) || number < 0) {
        // Yes, so return an array literal 
        return [];
    }
    
    // Is number parameter not a number?
    if (typeof number !== 'number') {
        // Yes, so return first array element
        return array[0];
    }
    
    // Return array with specified number of elements from beginning of array
    return array.slice(0, number);
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    // Is array parameter not of array data type?
    // Is number not positive?
    if (!Array.isArray(array) || number < 0) {
        // Yes, so return an array literal 
        return [];
    }
    
    // Is number parameter not a number?
    if (typeof number !== 'number') {
        // Yes, so return last array element
        return array[array.length - 1];
    }
    
    // Is number parameter greater than array length?
    if (number > array.length) {
        // Yes, so return entire array
        return array;
    } else {
        // Return array with specified number of elements from end of array
        return array.slice(array.length - number , array.length);
    }
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // Is array parameter not of array data type?
    if (!Array.isArray(array)) {
        // Yes, so return -1
        return -1;
    }
    
    // Loop through array elements
    for (var i = 0; i < array.length; i++) {
        // Does array element equal value?
        if (array[i] === value) {
            // Yes, so return array index of value's first occurrence
            return i;
        }
    }
    
    // Return -1 since array does not include value
    return -1;
}

// THIS WORKS TOO, BUT USES BUILT-IN findIndex()!!!
// Does not use built-in indexOf, uses built-in findIndex() instead . . .
//
// _.indexOf = function(array, value) { 
//     // Is array parameter not of array data type?
//     if (!Array.isArray(array)) {
//         // Yes, so return -1
//         return -1;
//     }
//  
//     // Return array index of value's first occurrence
//     return array.findIndex(element => element === value);
// }


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // Is value undefined or null?
    if (value === undefined || value === null) {
        // Yes, so return false
        return false;
    }
    
    // Check if array includes value
    // If array contains value, return true
    // Otherwise, return false
    return (array.includes(value) ? true : false);
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function (collection, action) {
    // Determine the type of collection
    // Is collection argument an array?
    if(Array.isArray(collection)) {
        // Yes, so loop though array elements
        for(var i = 0; i < collection.length; i++) {
            // Call action function
            action(collection[i], i, collection);
        }
    } else {
        // Since collection is not an array, collection argument is an object
        // Loop through collection / object keys
        for (var key in collection) {
            // Call action function
            action(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // Return a new array with duplicates removed
    return array.filter((item, index) => array.indexOf(item) === index);
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test) {
    // Declare a variable and assign it an array literal
    let filtered = [];
    
    // For each element of the array. . . 
    _.each(array, (element, index, collection) => {
        // Does the element pass the test?
        if (test(element, index, collection)) {
            // Yes, so add element to new array
            filtered.push(element);
        };
    });
    
    // Return new array of elements
    return filtered;
}

// THIS WORKS TOO - USES EACH - HIGH ORDER FUNCTION THAT INCLUDES FUNCTION KEYWORD!!!
//
// _.filter = function(array, test) {
//    // Declare a variable and assign it an array literal
//     let filtered = [];
//
//    // For each element of the array. . . 
//     _.each(array, function (element, index, collection) {
//        // Does the element pass the test?
//         if (test(element, index, collection)) {
//            // Yes, so add element to new array
//             filtered.push(element);
//         };
//     });
//
//     // Return new array of elements
//     return filtered;
// }

// THIS WORKS, BUT DOES NOT USE EACH FUNCTION!!!
//
// _.filter = function(array, test) {
//     // Declare a variable and assign it an array literal
//     let filtered = [];
//
//     // Loop through array
//     for (let i = 0; i < array.length; i++) {
//         // Does test function return true?
//         if (test(array[i], i, array)) {
//             // Yes, so add array element
//             filtered.push(array[i]);
//         }
//     }
//
//     // Return new array of elements
//     return filtered;
// }


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test) {
    // Return a new array with duplicates removed
    return array.filter((element, index, collection) => !test(element, index, collection));
}


// THIS ALSO WORKS, BUT DOES NOT USE FILTER FUNCTION!!!
// 
// _.reject = function(array, test) {
//     // Declare variable and assign it an array literal
//     let rejected = [];
// 
//     // Loop through array
//     for (let i = 0; i < array.length; i++) {
//         // Does test function return false?
//         if (!test(array[i], i, array)) {
//             // Yes, so add to array
//             rejected.push(array[i]);
//         }
//     }
//
//     // Return new array of elements
//     return rejected;
// }


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, test) {
    // Declare variable for elements that retrun true and assign an array literal
    let truthy = [];
    
    // Declare variable for elements that retrun false and assign an array literal
    let falsy = [];
    
    // Loop through array
    for (let i = 0; i < array.length; i++) {
        // Does the test function return true?
        if (test(array[i], i, array)) {
            // Yes, so add it to truthy array
            truthy.push(array[i]);
        } else {
            // No, so add it to falsy array
            falsy.push(array[i]);
        }
    }
    
    // Return an array containing both truthy and falsy arrays
    return [truthy, falsy];
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, test) {
    // Declare a variable and assing it an array literal
    let result = [];
    
    // Is the collection an array?
    if (Array.isArray(collection)) {
        // Yes, so . . . 
        // Loop through array
        for (let i = 0; i < collection.length; i++) {
            // Add result of test to array
            result.push(test(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        // No, the collection is an object
        // Loop through object keys
        for (let key in collection) {
            // Add result of test to array
            result.push(test(collection[key], key, collection));
        }
    }
    
    // Return new array of test results
    return result;
}

// THIS ALSO WORKS!!!
//
// _.map = function(collection, test) {
//     let result = [];
//     _.each(collection, (element, index, collection) => result.push(test(element, index, collection)));
//     return result;
// }


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property) {
    // Return an array containing property value for every element
    return _.map(array, (element, index, list) => element[property]);
}

// THIS ALSO WORKS - HIGH ORDER FUNCTION WITH FUNCTION KEYWORD!!!
//
// _.pluck = function(array, property) {
//    // Return an array containing property value for every element
//     return _.map(array, function(element, index, array) {
//       return element[property];
//     })
// }

// THIS ALSO WORKS, BUT DOES NOT USE MAP FUNCTION!!!
//
// _.pluck = function(array, property) {
//     // Declare a variable and assign it an array literal
//     let values = [];
//
//     // Loop through array
//     for (let i = 0; i < array.length; i++) {
//         // Add property value to array
//         values.push(array[i][property]);
//     }
//
//     // Return array containing property values for each element
//     return values;
// }


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collection, test) {
    // Is test argument not a function?
    if (typeof test != 'function') {
        // Yes, so . . . 
        // Loop through each element of the collection
        for (let element of collection) {
            // Is element equal to false?
            if (!element) {
                // Yes, so return false since one false element was found
                return false;
            }
        }
        
        // Return true since all elements equal true
        return true;
    }
    
    // Declare variable and set array to values of resulting test function on collection
    let array = _.map(collection, (element, position, collectiton) => test(element, position, collection));
    
    // Loop through each element
    for (let element of array) {
        // Is element equal to false
        if (!element) {
            // Yes, so return false since one false element was found
            return false
        }
    }
    
    // Return true since all elements equal true
    return true;
}

// NEEDS WORK -- PASSES 3 OUT OF 4
// _.every = function(collection, test) {
//    // Is the collection an array?
//     if (Array.isArray(collection)) {
//        // Yes, so . . . 
//        // Loop through array
//         for (let i = 0; i < collection.length; i++) {
//             // Does element equal to false after calling test function?
//             if (!test(collection[i], i, collection)) {
//                 // Yes, so return false since one false element was found
//                 return false;
//             }
//         }
//     } else if (typeof collection === 'object' && typeof test === 'function') {
//         // No, the collection is an object
//         // Loop through object keys
//         for (let key in collection) {
//             // Does key value equal to false after calling test function?
//             if (!test(collection[key], key, collection)) {
//                 // Yes, so return false since one false element was found
//                 return false;
//             }
//         }
//     }
//
//     // Return true since all values evaluated to true
//     return true;
// }


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, test) {
    // Is test argument not a function?
    if (typeof test != 'function') {
        // Yes, so . . . 
        // Loop through each element of the collection
        for (let element of collection) {
            // Is element equal to true?
            if (element) {
                // Return true since at least one element equals true
                return true;
            }
        }
        
        // Return false since all elements equal false
        return false;
    }
    // Declare variable and set array to values of resulting test function on collection
    let array = _.map(collection, (element, position, collectiton) => test(element, position, collection));
    
    // Loop through array
    for (let element of array) {
        // Is element equal to true?
        if (element) {
            // Return true since at least one element equals true
            return true;
        }
    }
    
    // Return false since all elements equal false
    return false;
}


// THIS ONE NEEDS WORKS!!!!
// _.some = function(collection, test) {
//     // Is test argument not a function?
//     if (typeof test != 'function') {
//        // Yes, so . . . 
//        // Loop through each element of the collection
//         for (let element of collection) {
//             // Is element equal to true?
//             if (element) {
//                 // Return true since at least one element equals true
//                 return true;
//             }
//         }
//
//         // Return false since all elements equal false
//         return false;
//     }
//
//     // Is the collection an array?
//     if (Array.isArray(collection)) {
//         // Yes, so . . . 
//         // Loop through array
//         for (let i = 0; i < collection.length; i++) {
//             // Does element equal to true?
//             if (test(collection[i], i, collection)) {
//                 // Return true since at least one element equals true
//                 return true;
//             }
//         }
//     } else if (typeof collection === 'object') {
//         // No, the collection is an object
//         // Loop through object keys
//         for (let key in collection) {
//             // Does key value equal to true?
//             if (test(collection[key], key, collection)) {
//                 // Return true since at least one element equals true
//                 return true;
//             }
//         }
//     }
//
//     // Return false since all elements equal false
//     return false;
// }

// PARTIAL WORKS - NEED TO ADDRESS FOR OBJECTS!!!!
// _.some = function(collection, test) {
//     let tester = test || _.identity;
//
//     // Loop through collection
//     for (let i = 0 ; i < collection.length; i++) {
//         // Does value evaluate to true?
//         if (tester(collection[i])) {
//             // Yes, so return ture since at least one value evaluated to true
//             return true;
//         }
//     }
//
//     // Return false since entire collection evualated to false
//     return false;
// }


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, test, seed) {
    // Declare a variable for previous value
    let previous;
    
    // Declare a variable for array start value
    let start;
    
    // Does seed exist?
    // Is the array empty?
    if (seed === undefined && array.length - 1 > 0) {
        // Yes, so . . .
        // Set previous to first element in array
        previous = array[0];
        // Set loop start value to 1
        start = 1;
    } else {
        // No, so . . . 
        // Set previous to seed
        previous = seed;
        // Set loop start value to 0
        start = 0;
    }
    
    // Loop through array
    for (let i = start; i < array.length; i++) {
        // Update previous 
        previous = test(previous, array[i], i);
    }
    
    // Return last previous value
    return previous;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function() {
    // Declare varaible and assign it arguments of function
    let args = arguments;
    
    // Loop through arguments
    for (let i = 1; i < args.length; i++) {
        // Loop through keys in object
        for (let key in args[i]) {
            // Add or update first object's key value with current object key/value pair
            args[0][key] = args[i][key]
        }
    }
    
    // Return updated first object
    return args[0];
}

// Partially passes test.  STILL NEEDS WORK!!!
//
// _.extend = function(...objects) {
//     // Return updated first object 
//     return _.reduce(objects, (current, obj) => Object.assign(current, obj));
// }


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
