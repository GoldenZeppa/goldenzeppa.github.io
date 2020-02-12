////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function returns the minimum of two numbers.
 *
 * Inputs:  two numbers
 *
 * Output:  number
 */
function min(a, b) {
  
  // Is a smaller than b?
  if (a < b) {
    // Yes, so return a
    return a;
  } else {
    // No, so return b
    return b;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a recursive function that returns true if a positive number is even.
 * Otherwise, it returns false.
 *
 * Inputs:  number
 *
 * Output:  Boolean
 */
function isEven(number) {
console.log(number);
    // Is the number even?
    if (number === undefined) {
      return true;
    } else if (number === 0) {
      // Number equals 0, so return true
      return true;
    } else if (number === 1) {
      // Number equals 1, so return false
      return false;
    } else if (number < 0) {
      // Number is negative, so make it postive and try again
      return isEven(-number);
    } else {
      // Subtract 2 from number and check again
      return isEven(number - 2);
    }
  
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that counts how many times the input character appears in
 * a string and returns that number.
 *
 * Inputs:  string
 *
 * Output:  number
 */
function countChars(string, char) {
  // Declare varaible count and intitialize count to 0
  var count = 0;
  
  // Loop through string
  for (var i = 0; i < string.length; i++) {
    // Does string character match input character?
    if (string[i] === char)
      // Yes, so add 1 to count
      count += 1;
  }
  
  // Return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that counts how many uppercase B characters are in a
 * string and returns that number
 *
 * Inputs:  string
 *
 * Output:  number
 */
function countBs(string) {
  // Return number of B's in string
  return countChars(string, 'B');
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
