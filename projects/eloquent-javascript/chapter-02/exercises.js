
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that makes a triangle with a specific number of lines.  The
 * number of lines is determined by the input number.
 *
 * If the number 7 is passed to the function, the console will show:
 *
 *  #
 *  ##
 *  ###
 *  ####
 *  #####
 *  ######
 *  #######
 *
 * Input:  number
 *
 * Output:  No return statement; however, the function will log a triangle of
 *          #'s.
 */
function triangles(number) {
  // Declare a variable for output line and assign it a pound sign
  let line = '#';
  // Loop to make a triangle with input number of lines
  for (let i = 1; i <= number; i++) {
    // Log line to console
    console.log(line);
    // Increment pound sign for next line
    line += '#';
  }
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that logs a range of numbers with two exceptions.  For
 * numbers divisible by 3, log 'fizz' instead of the number, and for numbers 
 * divisible by 5, log 'buzz' instead.  If the number is divisible by both 3
 * and 5, then log 'fizzbuzz'.  
 *
 * The starting and ending numbers are determined by the input numbers.
 *
 * If the given start number is 1 and the ending number is 15, the console will 
 * show:
 *
 *  1
 *  2
 *  fizz
 *  4
 *  buzz
 *  fizz
 *  7
 *  8
 *  fizz
 *  buzz
 *  11
 *  fizz
 *  13
 *  14
 *  fizzbuzz
 *
 * Input:  two numbers, starting and ending values
 *
 * Output:  No return statement; however, the function will log a number if not 
 *          divisible by neither 3 nor 5, 'fizz' is the number is divisible by 
 *          3, 'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both 3 
 *          and 5.
 */
function fizzBuzz(start, end) {
  // Loop through number range from start to end
  for (var i = start; i <= end; i++) {
    // Declare output variable and assign it an empty string
    let output = '';
    
    // Is the number divisible by 3?
    if (i % 3 === 0) {
      // Yes, so add 'fizz' to output string
      output += 'fizz';
    } 
    
    // Is the number divisible by 5?
    if (i % 5 === 0) {
      // Yes, so add 'buzz' to output string
      output += 'buzz';
    } 
    
    // Is the string still empty?
    if (output === '') {
      // Yes, then assign current number to ouptut value
      output = i
    }
    
    // Log output value (number, 'fizz', 'buzz', 'fizzbuzz')
    console.log(output);
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
 * Create a function that logs a string to form a grid.  At each position of  
 * the grid, there is either a space or a # character.  Use a new line character
 * to separate the lines.  The string should form a chessboard.
 *
 * The size of the gird is determined by the input number.
 *
 * If the given number is 8, the console will show:
 *
 *   # # # #
 *  # # # # 
 *   # # # #
 *  # # # # 
 *   # # # # 
 *  # # # # 
 *   # # # #
 *  # # # #
 *
 * Input:  number, determining the size of the grid
 *
 * Output:  No return statement; however, the function will log a string with 
 *          only spaces, #'s, and new line characters.
 */
function drawChessboard(number) {
  // Declare output string and assign it an empty string
  let grid = ''; 
  
  // Loop through rows of grid
  for (var row = 0; row < number; row++) {
    // Loop through columns of grid
    for (var col = 0; col < number; col++) {
      // Is the sum of row and col divisible by 2?
      if ((row + col) % 2 === 0) {
        // Yes, then add a space to string grid
        grid += ' ';
      } else {
        // No, add a # character to string grid
        grid += '#';
      }
    }
    
    // Add a new line character to string grid
    grid += '\n';
  }
  
  // Return grid string
  console.log(grid);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
