//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object and returns its values in 
 * an array.
 *
 * Input:  an object
 *
 * Output:  an array containing input object's values
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function objectValues(object) {
    // Declare variable array and assign it array literal
    let array = [];
    // Loop through object's keys
    for (let key in object) {
        // Add object's key value to array
        array.push(object[key]);
    }
    // Return array of object's values
    return array;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object and returns all of its keys
 * in a string each separated by a space.
 *
 * Input:  an object
 *
 * Output:  a string containing object keys separated by a space
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function keysToString(object) {
    // Declare variable array and assign an array literal
    let array = [];
    // Loop through object's keys
    for (let key in object) {
        // Add object's key to array
        array.push(key);
    }
    // Retun string of keys each separated by a space
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object and returns all of its
 * string values in a string each separated by a space.
 *
 * Input:  an object
 *
 * Output:  a string containing input keys separated by a space
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function valuesToString(object) {
    // Declare variable array and assign it array literal
    let array = [];
    // Loop through object's keys
    for (var key in object) {
        // Is object's key value a string?
        if (typeof object[key] === 'string') {
            // Add string value to array
            array.push(object[key]);
        }
    }
    // Return string containing key values each separated by space
    return array.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a collection argument and returns 
 * string 'array' if it is an array or string 'object' if it is an 
 * object.
 *
 * Input:  either an array or an object
 *
 * Output:  a string (either 'array' or 'object')
 *
 * Constraints:  argument must be either an array or an object
 *
 * Edge cases:  none
 */
function arrayOrObject(collection) {
    // Is collection an array?
    if (Array.isArray(collection) === true) {
        // Yes, so return string 'array'
        return 'array';
    } else {
        // No, so return string 'object'
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a string of one word and returns it
 * with its first letter capitalized. 
 *
 * Input:  string
 *
 * Output:  string with first letter capitalized
 *
 * Constraints:  string must beginning with a letter
 *
 * Edge cases:  none
 */
function capitalizeWord(string) {
    // Return a string with word with its first letter capitalized
    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a string and returns a string with
 * all of its word capitalized.
 *
 * Input:  a string
 *
 * Output:  a string with all words capitalized
 *
 * Constraints:  Each word in the string must start with a letter
 *
 * Edge cases:  none
 */
function capitalizeAllWords(string) {
    // Convert string into an array of strings
    let splitString = string.toLowerCase().split(' ');
    // Loop throught array
    for (let i = 0; i < splitString.length; i++) {
        // Capitalize first letter of string
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    // Return single string with each first letter of all words capitalized
    return splitString.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object with a name property and  
 * return 'Welcome <name>!'.
 *
 * Input:  an object
 *
 * Output:  a string
 *
 * Constraints:  object must have a name property
 *
 * Edge cases:  none
 */
function welcomeMessage(object) {
    // Return personalized welcome message with first letter of name capitalized
    return "Welcome" + " " + capitalizeWord(object.name) + "!"; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object with a name and a species 
 * property and return '<Name> is a <Species>'
 *
 * Input:  an object
 *
 * Output:  a string
 *
 * Constraints:  object must have a name and a species property
 *
 * Edge cases:  none
 */
function profileInfo(object) {
    // Return message with object's name and species capitalized
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object.  If the object has a noise 
 * array, return them as a string each separated by a space.  If there
 * is no noise array, return the string 'there are no noises'.
 *
 * Input:  an object
 *
 * Output:  a string
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function maybeNoises(object) {
    // Does object have a noise property and does corresponding array contain at least one noise?
    if(object.hasOwnProperty("noises") && object.noises.length > 0) {
        // Yes, so return string of noises separated each by a space
        return object.noises.join(" ");
    } else {
        // No, so return a string stating that there are no noises
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a string of words and a word.  If word
 * is contained in string of words, return true.  Otherwise, return
 * false.
 *
 * Input:  two strings, a word and a string of words
 *
 * Output:  a boolean
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function hasWord(string, word) {
    // Does string contain word?
    if (string.search(word) > 0) {
        // Yes, so return true
        return true;
    } else {
        // No, so return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a name and an object.  It adds name
 * to object's friends array and returns the object.
 *
 * Input:  a string and an object
 *
 * Output:  an object
 *
 * Constraints:  object must have a friends property
 *
 * Edge cases:  none
 */
function addFriend (name, object) {
    // Add name to object's friends array
    object.friends.push(name);
    // Return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a name and an object.  If name is a
 * friend of object, return true.  Otherwise, return false.
 *
 * Input:  a string and an object
 *
 * Output:  a boolean
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function isFriend(name, object) {
    // Does object have a friends property and is name contained in friends array?
    if (object.hasOwnProperty('friends') && object.friends.indexOf(name) > 0) {
        // Yes, return true
        return true;
    } else {
        // No, return false
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes a name and a list of people and return 
 * a list of all names that name is not friends with.
 *
 * Input:  a string and an array
 *
 * Output:  an array
 *
 * Constraints:  Input array must contain objects with name and
 *               friends properties
 *
 * Edge cases:  none
 */
function nonFriends(name, array) {
    // Declare variable strangers and assign array literal
    let strangers = [];
    // Loop through people array
    for (let i = 0; i < array.length; i++) {
        // Does name exist in object's friends array?
        // Also check if name is not equal object's name.
        if (array[i].name !== name && array[i].friends.indexOf(name) === -1) {
            // Add name to strangers array
            strangers.push(array[i].name);
        }
    }
    // Return strangers array
    return strangers;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object, a key, and a value.
 * Update the object's key property with new value.  If key does not 
 * exist in object, create it.  Return object.
 *
 * Input:  an object, a key string, and a value
 *
 * Output:  an object
 *
 * Constraints:  key must be a string
 *
 * Edge cases:  none
 */
function updateObject(object, key, value) {
    // Update or add object's key/value pair
    object[key] = value;
    // Return updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an object and an array of strings.
 * It should remove any properties from object that are listed in 
 * array.
 *
 * Input:  an object and an array of strings
 *
 * Output:  none
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function removeProperties(object, array) {
    // Loop through array of strings
    for (let i = 0; i < array.length; i++) {
        // Does object have property equal to array string?
        if (object.hasOwnProperty(array[i])) {
            // Yes, so delete property
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
 * Create a function that takes an array and returns an array with 
 * all duplicates removed.
 *
 * Input:  an array
 *
 * Output:  an array
 *
 * Constraints:  none
 *
 * Edge cases:  none
 */
function dedup(array) {
    // Return array with duplicates removed
    return array.filter((item, index) => array.indexOf(item) === index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}