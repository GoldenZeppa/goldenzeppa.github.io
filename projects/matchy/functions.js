/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * Create a function that searches an array of animal objects, and 
 * determines if an animal's name matches the input string.  If a 
 * match is found, an animal object is returned.  Otherwise, return
 * null.
 *
 * Inputs:  array of objects and a string 
 *
 * Output:  an object or null
 */
function search(animals, name) {
    // Loop through the array
    for(var i = 0; i < animals.length; i++){
        // Does object's name match the input string?
        if (animals[i].name === name){
            // Yes, so return object
            return animals[i];
        }
    }
    
    // No match found, so return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * Create a function that searches an array of animal objects, and 
 * determines if an animal's name matches the input string.  If a 
 * match is found, the animal object is replaced by the input animal 
 * object.
 *
 * Inputs:  an array of objects, a string, an object 
 *
 * Output:  none
 */
function replace(animals, name, animal) {
    // Loop thorugh the array
    for (var i = 0; i <= animals.length - 1; i++) {
        // Does object name equal input string?
        if (animals[i].name === name) {
            // Replace matching object with the input object
            animals.splice(i, 1, animal);         // splice(startingIndex, deleteCount, replacementItem(s))
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * Create a function that searches an array of animal objects, and 
 * determines if an animal's name matches the input string.  If a 
 * match is found, remove the animal object.
 *
 * Inputs:  an array of objects and a string
 *
 * Output:  none
 */
function remove(animals, name) {
    // Loop thorugh the array
    for (var i = 0; i < animals.length; i++) {
        // Does object name equal input string?
        if (animals[i] !== undefined && animals[i].name === name) {
            // Yes, so delete matching object
            animals.splice(i, 1);    // splice is preferred over delete since delete will leave an empty array element
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * Create a function that adds an animal object to an array of animal 
 * objects.
 *
 * Inputs:  an array of objects and object
 *
 * Output:  none
 */
function add(animals, animal) {
    // Loop through animal array
    for (let i = 0; i < animals.length; i++) {
        // Is object animal's name length < 0 or object's animal species length < 0 or array animal name = animal name
        if (animal.name.length < 0 || animal.species.length < 0 || animals[i].name === animal.name) {
            return;
        }
        
        // Add it to animals array
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
