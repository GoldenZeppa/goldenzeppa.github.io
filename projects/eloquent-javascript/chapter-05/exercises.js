// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes an array of arrays and returns a single array
 * that has all elements of original arrays.
 *
 * Input: an array of arrays
 *
 * Output: an array
 */
function flatten(arrays) {
  // return new array with sub-array elements concatenated into it
  return arrays.reduce((flat, current) => flat.concat(current));
}

// Works and passes HTML test, but does not pass os test
// function flatten(arrays) {
//   // return new array with sub-array elements concatenated into it
//   return arrays.flat();
// }

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
 * Create a high-level function loop that takes a value, test function, update
 * function, and body function.  Each iteration, it first runs the test
 * function on current loop value and stops if that returns as false.  Then it
 * calls the body function, giving it the current value.  Finally it calls the
 * update function to create a new value and starts from the beginning.
 *
 * Input:  a value, a test function, an update function, and a function body
 */
function loop(value, test, update, body) {
  
  // Loop through
  // Declare variable for start value and assign it the input value
  // Define test statement as test function of current value
  // Define update statmeent as update function of current value
  // Define code block as body function of current value
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that takes an array and a predicate function.  It returns 
 * true when the predicate function returns true for every element in the array.
 *
 * Input:  an array and a test function
 *
 * Output:  Boolean.  True if test function returns true.
 */
function every(array, test) {
  // Loop through array
  for (let i = 0; i < array.length; i++) {
    // Does test function return false for current element of array?
    if (!test(array[i])) {
      // Yes, so return false
      return false;
    }
  }
    
  // Test function returned true for every element in array,
  // so return true
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that computes the dominant writing direction in a string
 * of text.  The dominant direction is the direction of the majority of the 
 * characters that have a script associated with them.
 * 
 * Each script object has a direction property;
 *  - 'ltr' (left-to-right)
 *  - 'rtl' (right-to-left)
 *  - 'ttb' (top-to-bottom)
 *
 * Input:  a string
 *
 * Output:  a script direction string ('ltr', 'rtl', 'ttb') or
 *          'scriptless' if characters of input string are scriptless, which
 *          have no direction property
 *
 * Edge case: Don't want to include symbols in our count
 */
function dominantDirection(text) {
  // Count of characters in text
  let arraysOfScripts = countBy(text, function(characterInText) {
    // Filter out script-less characters
    const objOfScripts = characterScript(characterInText.charCodeAt());
    
    // Check if character belongs to a writing direction . . . 
    // If it belong to a writing direction, return it
    // If it doesn't belong to a script, return string 'scriptless'
    if (objOfScripts !== null) {
      // Return dominant writing direction
      return objOfScripts.direction;
    }
    
    // Return 'scriptless' since no direction was determined 
    return 'scriptless';
  });
  
  // Find direction with highest character
  arraysOfScripts.sort(function(a, b) {
    return b.count - a.count;
  })
  
  // Return dominant direction
  return arraysOfScripts[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
