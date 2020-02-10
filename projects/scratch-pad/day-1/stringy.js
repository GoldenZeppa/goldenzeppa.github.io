// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    // Return length of string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    // Return lowercase string
    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
    // Return uppercase string
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    // Return dash-case string by . . . 
    // splitting the string, 
    // joining the resulting array with dashes, 
    // and converting string to lowercase
     return string.split(' ').join('-').toLowerCase();
    
    // // A more advaned way to do it . . . it may also looks cleaner
    // // Return dash-case string by . . .
    // // replacing spaces with dashes,
    // // and converting string to lowercase
    // return string.replace(/\s+/g, '-').toLowerCase();  // Using regex with global flag

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    // Return if string begins with character by comparing them in same case
    return (string[0].toLowerCase() === char.toLowerCase());
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    // Return if string ends with character by comparing them in same case
    return (string[string.length - 1].toLowerCase() === char.toLowerCase());

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Return concatenated string 
    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    
    // Return a joined string
    return args.join('');
    
    // // Reinventinig the wheel . . . it works but it is the long way
    // // Declare variable for resulting concatenated string
    // var joined = '';
    
    // // Concatenate each string in args array
    // for (var i = 0; i < args.length; i++) {
    //     joined += args[i];
    // }
    
    // // Return resulting concatenated string
    // return joined;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Check if length of stringOne is longer than length of stringTwo,
    // else if length of stringTwo is longer than length of stringOne
    if (stringOne.length > stringTwo.length) {
        // Return stringOne since it is longer
        return stringOne;
    } else if (stringOne.length < stringTwo.length) {
        // Return stringTwo since it is longer
        return stringTwo;
    } else {
        // Nothing was defined in case the length of both strings equal
        return;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    // Check if stringOne is higher in alphabetical order than stringTwo,
    // else if stringTwo is higher in alphabetical order than stringOne,
    // else stringOne and stringTwo are equal
    if (stringOne < stringTwo) {
        // Return 1 since stringOne is higher in alphabetical order
        return 1;
    } else if (stringOne > stringTwo) {
        // Return -1 since stringTwo is higher in alphabetical order
        return -1;
    } else {
        // Return 0 since stringOne and stringTwo are equal
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // Check if stringOne is lower in alphabetical order than stringTwo,
    // else if stringTwo is lower in alphabetical order than stringOne,
    // else stringOne and stringTwo are equal
    if (stringOne > stringTwo) {
        // Return 1 since stringOne is lower in alphabetical order
        return 1;
    } else if (stringOne < stringTwo) {
        // Return -1 since stringTwo is lower in alphabetical order
        return -1;
    } else {
        // Return 0 since stringOne and stringTwo are equal
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
