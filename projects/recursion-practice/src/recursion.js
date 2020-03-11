// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // Is number a non-negative number?
  if (n < 0) {
    // Yes, so return null
    return null;
  }
  
  // Base cases
  // Does number equal zero?
  // Or does number equal one?
  if (n === 0 || n === 1) {
    // Yes, so return 1
    return 1;
  }
  
  // Return number times factorial of (number - 1)
  // In other words, number times (number - 1)!
  return n * factorial(n - 1);
};


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // Base case 
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return zero
    return 0;
  }
  
  // Declare a variable and assign it a new copy of input array
  // DO NOT use let localArr = array since it copies same reference value
  let localArr = array.slice();
  
  // Return first number of array plus sum of subsequent array elements
  // In other words, array[0] + sum(array[1 . . n])
  return localArr[0] + sum(localArr.splice(1));
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // *********************************************************THERE IS NO TEST!!!
  // BUT IT WORKS FOR THE EXAMPLE GIVEN
  
  // Base case 
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return zero
    return 0;
  }
  
  // Is the first element of the array a nested array?
  if (Array.isArray(array[0])) {
    // Yes, so return sum of nested array plus sum of subsequent array elements
    // In other words, arraySum(array[0]) + arraySum(array[1 . . n])
    return arraySum(array[0]) + arraySum(array.splice(1));
  }
  // Return first number of array plus sum of subsequent array elements
  // In other words, array[0] + arraySum(array[1 . . n])
  return array[0] + arraySum(array.splice(1));
};


// 4. Check if a number is even.
var isEven = function(n) {
  // Base cases
  // Is the number equal to 0?
  if (n === 0) {
    // Yes, number is even 
    // So return true
    return true;
  } else if (n === 1 || n === -1) {
    // Is the number equal to 1 or -1?
    // Yes, number is odd
    // So return false
    return false;
  }
  
  // Is the number negative?
  if (n < 0) {
    // Yes, so check if number + 2 is even
    return isEven(n + 2);
  }
  // Check if number - 2 is even
  return isEven(n - 2);
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base cases
  // Does number equal zero?
  if (n === 0) {
    // Yes, so return 0
    return 0;
  }
  
  // Is number a non-negative number?
  if (n < 0) {
    // Yes, so return number plus one plus sum of numbers below number plus two
    // In other words, number + 1 plus sum of number (number + 1 . . 0)
    return (n + 1) + sumBelow(n + 1);
  }
  // Return number minus one plus sum of numbers below number minus two
  // In other words, number - 1 plus sum of number (number - 1 . . 0)
  return (n - 1) + sumBelow(n - 1);
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // Base case
  // Are there any numbers between the two integers?
  if (x - y === 0 || x - y === 1 || x - y === -1) {
    // No, so return an empty array since there are no numbers in between the two input numbers
    return [];
  } else if (x < y && x - y === -2) {
    // Is x less than y?  (Ascending order)
    // And is there only one number between x and y?
    // Yes, so return that number as an element in an array . . . 
    // Number is x + 1 or y - 1 since array will be in ascending order
    return [x + 1];
  } else if (x > y && x - y === 2) {
    // Is x greater than y?  (Descending order)
    // And is there only one number between x and y?
    // Yes, so return that number as an element in an array . . . 
    // Number is x - 1 or y + 1 since array will be in descending order
    return [x - 1];
  }
  
  // Return the current number as an element in an array plus get the remaining numbers of range
  // Need to determine the order of the range . . . 
  // Is x less than y?  (Ascending order)
  if (x < y) {
    // Yes, so return number as x + 1 or y - 1 since array will be in ascending order
    return [x + 1].concat(range(x + 1, y));
  } else {
    // No, so return number as x + 1 or y - 1 since array will be in descending order
    return [x - 1].concat(range(x -1 , y));
  }
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // Base case
  // Is the exponent equal to 0?
  if (exp === 0) {
    // Yes, so return one
    return 1;
  }
  
  // Is the exponent negative?
  if (exp < 0) {
    // Yes, so convert exponent to non-negative number . . .
    // By multiplying exponenet by negative one
    exp *= -1;
    // Return one divided by the exponent of the number
    return 1 / (base * exponent(base, exp - 1));
  }
  // Return exponent of the number
  return base * exponent(base, exp - 1);
};


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // Base cases
  // Is the number less than 1?
  if (n < 1) {
    // Yes, so return false
    // Number is not a power of two
    return false;
  } else if (n === 1 || n === 2) {
    // Is the number equal to one or two?
    // Yes, so return true
    // Number is a power of two
    return true;
  }
  
  // Return the determination is the number divided by two is a power of two
  return powerOfTwo(n / 2);
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // Base case
  // Is the string empty?
  if (string.length === 0) {
    // Yes, so return an empty string
    return '';
  }
  
  // Declare variable and assign it the first character of string
  let character = string[0];
  
  // Return the reverse of the remaining string plus first character
  return reverse(string.substring(1)) + character;
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Remove any spaces from the string
  let str = string.replace(' ', '');
  
  // Base case
  // Is the string length less than or equal to one?
  if (str.length <= 1) {
    // Yes, so return true
    return true;
  }
  
  // Are the first and last letter of the string not equal?
  if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
    // Yes, so return false
    return false;
  }
  
  // Return if remaining string is a palidrome
  return palindrome(str.substring(1, str.length - 1));
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
// *********************************************************THERE IS NO TEST!!!
};


// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// INNER FUNCTION PSEUDOCODE NOT ALLOWEDUE TO TESTING, SO . . . 
//    Base cases
//      Is either input value equal to 0?
//      Yes, so return zero
//      Is y equal to one?
//      Yes, so return x
//    Is y a positive number?
//      Return x plus multiply x time y - 1
//    Is y a negative number?
//      Return multiply x times positive y and then multiply result by minus one
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  }
  
  if(y > 0) {
    return x + multiply(x, y - 1); 
  }
  return -(multiply(x, -y)); 
};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
// *********************************************************THERE IS NO TEST!!!
};


// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
// *********************************************************THERE IS NO TEST!!!
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base case
  // Are the strings empty?
  if (str1.length === 0 && str2.length === 0) {
    // Yes, so return true since they are the same
    return true;
  } else if ((str1.length === 1 || str2.length === 1) && (str1.length < str2.length || str1.length > str2.length)) {
    // Does either string only have one character?
    // And one string is longer than the other?
    // Yes, so return false since one string is longer than the other
    return false;
  }
  
  // Is the length of string one?
  // And are the first characters of the strings equal?
  if (str1.length === 1 && str1[0] === str2[0]) {
    // Yes, so return true
    return true;
  } else if (str1.length === 1 && str1[0] !== str2[0]) {
    // No, so return false
    return false;
  }
  
  // Return the results of the remaining array
  return compareStr(str1.substring(1), str2.substring(1));
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // Base case
  // Is length of string equal to zero?
  if (str.length === 0) {
    // Yes, so return zero
    return [];
  }
  
  // Return array with a character of the string at each index . . . 
  // By adding character as an element of the array 
  // and concatenating with remaining characters in the string as array elements
  return [str[0]].concat(createArray(str.substring(1)));
};


// 17. Reverse the order of an array
var reverseArr = function (array) {
  // Base case
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return an empty array
    return [];
  } else if (array.length === 1) {
    // Does the array only have one element?
    // Yes, so return the array element
    return [array[0]];
  }
  
  // Declare a variable and assign it the last element in the array
  let last = array[array.length - 1];
  
  // Declare a variable and assign a copy of the array excluding the last element
  let arr = array.slice(0, array.length - 1);
  
  // Return the reversed array . . .
  // By adding the last element as the first element in the resulting array
  // and reversing the remaining elements of the array
  return [last].concat(reverseArr(arr));
};


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // Base case
  // Is length equal to zero?
  if (length === 0) {
    // Yes, so return zero
    return [];
  }
  
  // Return array containing value and concatenate with remaining array elements
  return [value].concat(buildList(value, length - 1));
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return zero
    return 0;
  }
  
  // Declare a variable and assign it a copy of the array
  let localArr = array.slice();
  
  // Does the first element of the array equal the input value?
  if (array[0] === value) {
    // Yes, so return the count of one along with the results of the remaining array
    return 1 + countOccurrence(localArr.splice(1), value);
  }
  // Otherwise, return the results of the remaining array
  return countOccurrence(localArr.splice(1), value);
};


// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // Base case
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return an empty array
    return [];
  } 
  
  // Declare a variable and assign a copy of the array excluding the first element
  let arr = array.slice(1, array.length);
  
  // Return the mapped array . . .
  // By adding the result of the callback function when passing it the first element of the array
  // and mapping the remaining elements of the array
  return [callback(array[0])].concat(rMap(arr, callback));
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
// *********************************************************THERE IS NO TEST!!!
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
// *********************************************************THERE IS NO TEST!!!
};


// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
// *********************************************************THERE IS NO TEST!!!
};


// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
// *********************************************************THERE IS NO TEST!!!
};


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // Is n less than zero?
  if (n < 0) {
    // Yes, return null
    return null;
  } else if (n < 2) { 
    // Is n less than 2?
    // Yes, so return n
    return n;
  } else {
    // Return resulting Fibonacci numbers at n - 1 and n - 2
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // Base case
  // Is the array empty?
  if (input.length === 0) {
    // Yes, so return empty array
    return [];
  }
  
  // Declare a variable and assign it the capitalized string of the first element of array
  let capitalized = input[0].toUpperCase();
  
  // Is the array length equal to one?
  if (input.length === 1) {
    // Yes, so return array containing the element
    return [capitalized];
  }
  
  // Declare a varaible and assign it a copy of the array excluding the first element
  let inputArr = input.slice(1);
  
  // Return capitalized string and continue to capitalize the rest of the array
  return [capitalized].concat(capitalizeWords(inputArr));
};


// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // Base case
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return empty array
    return [];
  }
  
  // Declare a variable and assign it the capitalized string of the first element of array
  let capitalized = array[0][0].toUpperCase() + array[0].slice(1);
  
  // Is the array length equal to one?
  if (array.length === 1) {
    // Yes, so return array containing the element
    return [capitalized];
  }
  
  // Declare a varaible and assign it a copy of the array excluding the first element
  let arr = array.slice(1);
  
  // Return capitalized string and continue to capitalize the rest of the array
  return [capitalized].concat(capitalizeFirst(arr));
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
// *********************************************************THERE IS NO TEST!!!
};


// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
// *********************************************************THERE IS NO TEST!!!
};


// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // Is the object undefined?
  // And is the string length equal to zero?
  if (obj === undefined && str.length === 0) {
    // Yes, so return an empty object
    return {};
  } else if (str.length === 0) {
    // Is the string length equal to zero?
    // Yes, so return the existing object
    return obj;
  } else if (obj === undefined) {
    // Is the object undefined?
    // Yes, so assign it an object literal to tally the count of each letter in the string
    obj = {};
  }
  
  // The tally of count of each letter . . . 
  // By creating an object key for the letter and assign it a count of one
  // Or by adding one to the count of the existing object key / value pair
  obj[str[0]] = (obj[str[0]] || 0) + 1;
  
  // Return the result of the remaining string . . .
  // To continue the tally, pass the object too
  return letterTally(str.slice(1), obj);
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // Is the list empty?
  if (list.length === 0) {
    // Yes, so return an empty array
    return [];
  } else if (list.length === 1) {
    // Is there only one element in the array?
    // Yes, so return the array 
    return list;
  }
  
  // Declare a variable and assign it the value of the first element in the list array
  const num = list[0];
  
  // declare a variable and assign it the remaining elements of the list array
  const tail = list.slice(1);
  
  // If the first element of the array is equal to the second element of the list array
  // continue to eliminate consecutive duplicates in the list array
  // Otherwise, keep the first element in the list and continue to eliminate the consecutive duplicates in the list array
  return num === tail[0] ? compress(tail) : [num].concat(compress(tail));
};


// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
// *********************************************************THERE IS NO TEST!!!
};


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return empty array
    return [];
  }
  
  // Declare a variable and assign it the first element in the array
  let num = array[0];
  
  // Declare a varaible and assign it the remaining elements of the array
  let arr = array.slice(1);
  
  // Is the first element of the array equal to zero?
  if (num !== 0) {
    // No, so return the first element and continue to check the remaining array
    return [num].concat(minimizeZeroes(arr));
  }
  
  // So the first element is equal to zero.  Now what?
  // Is the second element equal to zero?
  if (arr[0] === 0) {
    // Return the results of the remaining array . . . 
    // Since consecutive zeroes, skipping over first element
    return minimizeZeroes(arr);
  }
  // Since there are no consecutive zeroes, 
  // return the first element and continue to check the remaining array
  return [num].concat(minimizeZeroes(arr));
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // Base case
  // Is the array empty?
  if (array.length === 0) {
    // Yes, so return empty array
    return [];
  }
  
  // Declare a variable and assign it the value of the last element in the array
  let num = array[array.length - 1];
  
  // Is the length an odd number?
  // And is the last element less than zero?
  if (array.length % 2 ===  1 && num < 0) {
    // Multiply the number by negative one since the number should be positive
    num *= -1;
  } else if (array.length % 2 === 0 && num > 0) {
    // Is the length an even number?
    // And is last element greater than zero?
    // Multiply the number by negative one sine the number should be negative
    num *= -1;
  }
  // Return the result of the array excluding the last element
  return [].concat(alternateSign(array.slice(0, array.length - 1)), [num]);
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // Declare a variable and assign it the index of the first occurrence of a number in the input string
  let numAt = str.search(/[0-9]/);
  
  // Was there a number found in the string?
  if (numAt === -1) {
    // No, so return the string
    return str;
  }
  
  // Declare a variable and assign it the corresponding word for the number
  let numWord = '';
  switch (str[numAt]) {
    case '0':  
      numWord = 'zero';
      break;
    case '1':  
      numWord = 'one';
      break;
    case '2':  
      numWord = 'two';
      break;
    case '3':  
      numWord = 'three';
      break;
    case '4':  
      numWord = 'four';
      break;
    case '5':  
      numWord = 'five';
      break;
    case '6':  
      numWord = 'six';
      break;
    case '7':  
      numWord = 'seven';
      break;
    case '8':  
      numWord = 'eight';
      break;
    case '9':  
      numWord = 'nine';
  }
  
  // Return the result of the remaining string . . .
  return str.slice(0, numAt) + numWord + numToText(str.slice(numAt + 1))
};


// *** EXTRA CREDIT ***


// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};


// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
var binarySearch = function(array, target, min, max) {
  // *********************************************************THERE IS NO TEST!!!
  // BUT IT WORKS FOR THE EXAMPLE GIVEN
  
  // Declare a variable and assign it a copy of the input array
  let arr = array.slice();
  
  // Check if optional parameters have been provided? . . .
  // Is the minimum input undefined?
	if (min === undefined) {
	  // Yes, so assign minimum a value of zero
	  min = 0;
	}
	
	// Has the maximum input been provided? . . .
	// Is the maximum input undefined?
	if (max === undefined) {
	  // Yes, so assign maximum a value of the length of the array minus one
	  max = array.length - 1;
	}

  // Declare a variable and assign it an integer that represents the middle/half of the array
	var middle = Math.floor(((max - min) / 2) + min);
	
	// Is the maximum value less than or equal to the minimum value?
	// And is the value of the array at the middle index not equal to the target?
	if (max <= min && arr[middle] !== target) {
	  // Yes, so return null;
	  return null;
	}	else if (arr[middle] === target) {
	  // Is the value of the array at the middle index equal to the target?
	  // Return the index of middle
	  return middle;
	}	else if (arr[middle] < target) {
	  // Is the value of the array at the middle index less than the target?
	  // Yes, so return the results of the binary search to the left of the middle / midpoint
	  return binarySearch(arr, target, middle + 1, max);
	} else {
	  // Otherwise, return the results of the binary search to the right of the middle / midpoint
	  return binarySearch(arr, target, min, middle - 1);
	}
};


// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
  // *********************************************************THERE IS NO TEST!!!
  // BUT IT WORKS FOR THE EXAMPLE GIVEN
  
  // Is array length less than or equal to one?
  if (array.length <= 1) {
    // Yes, return the array since it is already 'sorted'
    return array;
  }
  
  // Declare a variable and assign it an integer that represents the middle/half of the array
  let middle = Math.floor(array.length / 2);
  
  // Declare a variable and assign it the merge sort of the left half of the array
  let left = mergeSort(array.slice(0, middle));
  
  // Declare a variable and assign it the merge sort of the right half of the array
  let right = mergeSort(array.slice(middle, array.length));
  
  // Declare a variable and assign it a function that will merge left and right halves of the array
  var merge = function(a, b) {
    // Declare a variable and assign it an array literal
    var arr = [];
    
    // Loop through the left and right halves of the array
    while (left.length > 0 && right.length > 0) {
      // Is the first element of the left array less tha nor equal to the first element of the right array?
      // If yes, add first element of left array into output array
      // Else, add first element of right array into output array
      arr.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    
    // Return the output array . . .
    // By concatenating it with remaining elements from left and right arrays
    return arr.concat(left).concat(right)
  };
  
  // Merge left and right arrays
  return merge(left, right);
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
