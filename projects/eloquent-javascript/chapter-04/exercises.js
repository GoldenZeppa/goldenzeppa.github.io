////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes two arguments, start and end, and returns
 * an array containing all numbers from the start to end values.
 *
 * Inputs:  two numbers, start and end
 *
 * Output:  array of numbers
 *
 * Constraints: If no step argument is given, increment/step defaults to 1.
 *              If step is positive, start number must be less than end number.
 *              If step is negative, start number must be greater than end
 *              number.
 */
function range(start, end, step) {
  // Was step argument provided?
  if (step === undefined) {
    // No, so assign 1 to step
    step = 1;
  }
  
  // Declare an array for range
  let array = [];
  
  // Will array be in ascending or descending order?
  if (step > 0 && start < end) {
    // Step is positive and start is less than end
    // Loop through number range in ascending order
    for (var i = start; i <= end; i += step) {
      // Add number to array
      array.push(i);
    }
  } else if (start > end){
    // Start is greater than end
    // Loop through number range in descending order
    for (var i = start; i >= end; i += step) {
      // Add number to array
      array.push(i);
    }
  }
  
  // Return array containing number range
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes an array of numbers and returns the sum of
 * these numbers.
 *
 * Inputs:  array of numbers
 *
 * Output:  sum of numbers
 */
function sum(array) {
  // Declare a variable for sum and initialize it to 0
  let total = 0;
  
  // Loop through number range
  for (var i = 0; i < array.length; i++) {
    // Add number element to variable total
    total += array[i];
  }
  
  // Return total sum of array
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes an array of numbers and returns an array with
 * elements in revese order.
 *
 * Inputs:  array of numbers
 *
 * Output:  array of numbers
 */
function reverseArray(array) {
  // Declare an array and assign it an array literal
  let reversed = [];
  // Loop through array in reverse order
  for (var i = array.length - 1; i >= 0; i--) {
    // Add number element
    reversed.push(array[i]);
  }
  // Return new reversed array
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes an array of numbers and returns the modified 
 * array with its elements reversed.
 *
 * Inputs:  array of numbers
 *
 * Output:  array of numbers
 */
function reverseArrayInPlace(array) {
  // Loop over half of the array
  // Math.floor rounds down
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // Declare variable to temporarily hold array element
    let temp = array[i];
    // Assign array element at index array length - 1 - i to array element at index i
    array[i] = array[array.length - 1 - i];
    // Assign array element at index i to array element at index array length - 1 - i
    array[array.length - 1- i] = temp;
  }
  
  // Return original array in reversed order
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


/*
 * Create a function that takes an array and builds a list structure.
 *
 * List is a nested set of objects, with the first holding a reference to the
 * second, the second to the third, and so on.  The resulting objects form a
 * chain.
 *
 * Input:  an array 
 *
 * Output:  a list (nested set of objects)
 *
 * Edge case:  List will be null if array argument is empty or is list of last
 * element
 */
function arrayToList(array) {
  // Declare a varaible for list
  let list = null;
  // Loop through array in reverse to build list
  for (let i = array.length - 1; i >= 0; i--) {
    // For each element, add list object to list
    // Assignment list = {value: x, rest: list} will to add element to beginning of list
    // Variable list holds part of list that has already been created from from array[i + 1] to array[array.length - 1]
    list = {value: array[i], rest: list};
  }
  // Return resulting list
  return list;
}

// Recursive version - It works but book suggested method above!!!
// function arrayToList(array) {
//   // Declare a varaible object
//   // (list will be null if array argument is empty or is list of last element
//   if (!array.length) {
//     return null;
//   } else if (array.length === 1) {
//     return {value: array[0], rest: null};
//   } else {
//     return {value: array[0], rest: arrayToList(array.slice(1))};
//   }
// }

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes a list structure and returns an array.
 *
 * List is a nested set of objects.
 *
 * Input:  a list
 *
 * Output: an array
 *
 * Constraints: Name keys value and rest.  Rest will contain the nested object 
 *              value
 *
 * Edge case:  List will be null if array argument is empty or is list of last
 * element
 */
function listToArray(list) {
  // Declare variable array and assign it array literal
  let array = [];
  // Traverse through list chain from front to back
  // At beginning of iteration, node contains list.  During remaining iterations, node contains sublist.  
  // When node is null, end of list has been reached and loop ends.
  for (let node = list; node; node = node.rest) {
    // For each list object. add list value to array
    array.push(node.value);
  }
  // Return resulting array 
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function which takes an element and a list.  It then creates a new
 * list that adds element to front of input list.
 *
 * List is a nested set of object
 *
 * Input: an list element and a list
 *
 * Output:  a list 
 */
function prepend(element, list) {
  // Add element to front of list
  return {value: element, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function which takes a list and a number.  It returns element at 
 * given position in list (with zero referring to first element) or undefined 
 * when there is no such element.
 *
 * List is a nested set of objects
 *
 * Input:  a list and a number
 *
 * Output:  a list element if one exists at the n-th position of the list or
 *          undefined if element does not exist
 */
function nth(list, number) {
  // Declare variable for position
  let position = 0;
  // Traverse through list chain from front to back
  for (let node = list; node; node = node.rest) {
    // Does variable position equal input number?
    if (position === number) {
      // Yes, so return node value
      return node.value;
    }
    // Increment list position counter
    position += 1;
  }
  // Return resulting array 
  return undefined;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function which takes two values and returns true only if they are
 * same value or are objects with same properties, where values of properties
 * are equal.
 *
 * Input:  two values
 *
 * Output:  Boolean.  True if they are the same value or if they are objects
 *          with same properties and their corresponding values equal.
 */
function deepEqual(value1, value2) {
  // Check if value one and value two are identical objects
  if (value1 === value2) {
    // Return true since object value one equals object value two
    return true;
  } else if (value1 === null || typeof value1 !== 'object' ||  
             value2 === null || typeof value2 !== 'object') {
    // Return false since value one or value two is not an object
    return false;
  } else {
    // Loop to check each key in value one
    for (let key in value1) {
      // Does value one key exist in value two and are their values equal?
      if (!value2.hasOwnProperty(key) || !deepEqual(value1[key], value2[key])) {
        // No, return false since either value two does not have same key or the values of key property do not equal
        return false;
      }
    }
    // Return true since both objects are identical
    return true;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
