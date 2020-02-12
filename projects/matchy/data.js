/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare variable animal and assign it an object literal
var animal = {};

// Use dot notation to add species property
animal.species = 'dog';

// Use bracket notation to add name property
animal['name'] = 'Zeus';

// Use dot notation to add noises property as empty array
animal.noises = [];

// Print animal object to console
console.log(animal);                     // Prints {species: 'dog', name: 'Zeus', noises: []} - Chrome actually displays 0-lenght array as Array(0).

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare varaible noises and assign it an empty array
var noises = [];

// Use bracket notation to assign a sound string to the noises array
noises[0] = 'bark';

// Use push method to add an element to end of noises array
noises.push('gassy');

// Use unshift to add element to beginning of noises array
noises.unshift('whine');

// Use bracket syntax to add element to end of noises array
noises[noises.length] = 'sneeze';

// Print length of noises array
console.log(noises.length);              // Prints 4

// Print last element of noises array
console.log(noises[noises.length - 1]);  // Prints 'whine'

// Print noises array
console.log(noises);                     // Prints ['whine', bark', 'gassy', 'sneeze']

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Use bracket syntax to assign noises array to animal's noises property
animal.noises = noises;

// Add another noise string to the animal's noises array 
animal.noises.push('snore');

// Print animal
console.log(animal);                     // Prints {species: 'dog', name: 'Zeus', noises: ['whine', bark', 'gassy', 'sneeze', 'snore']}

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Bracket notation
 * Dot notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 * Only bracket notation
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare variable animals and assign it an empty array
var animals = [];

// Push animal object to animals array
animals.push(animal);

// Print animals
console.log(animals);                    // Prints [{species: 'dog', name: 'Zeus', noises: ['whine', bark', 'gassy', 'sneeze', 'snore']}]

// Declare varaible duck and assign its given key/value pairs
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

// Push duck object to animals array
animals.push(duck);

// Print animals
console.log(animals);                    // Prints [{species: 'dog', name: 'Zeus', noises: ['whine', bark', 'gassy', 'sneeze', 'snore']}, 
                                         //         {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}]

// Declare variable bird and assign it key/value pairs for species, name, and noises properties
var bird = {
    species: 'bird',
    name: 'Tony',
    noises: ['chirp', 'tweet']
};

// Push bird object to animals array
animals.push(bird);

// Declare varaible cat and assign it key/value pairs for species, name, and noises properties
var cat = {
    species: 'cat',
    name: 'Tom',
    noises: ['pur', 'hiss']
};

// Push cat object to animals array
animals.push(cat);

// Print animals
console.log(animals);                    // Prints [{species: 'dog', name: 'Zeus', noises: ['whine', bark', 'gassy', 'sneeze', 'snore']}, 
                                         //         {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}
                                         //         {species: 'bird', name: 'Tony', noises: ['chirp', 'tweet']},
                                         //         {species: 'cat', name: 'Tom', noises: ['pur', 'hiss']}]

// Print length of animals array
console.log(animals.length);             // Prints 4        

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// For a list of friends, the appropriate data strucutre would be an Array.
// Arrays were choosen because they can hold or collect values and grow 
// indefinitely.  Additionally, the dat avalues can be accessed by using 
// indices.

// Declare variable friends and assign it an empty array literal
var friends = [];

// Create function getRandom
// Input: animals array
// Output: index of random element using Math.random()
function getRandom(object){
    // Return a random number from 0 to array length 
    return Math.floor(Math.random() * (object.length));  // Math.random() returns a number between 0 and 1 (1 being exclusive)
                                                         // Multiply by length of array to get number from 0 to array length
                                                         // Math.floor() returns an index number from 0 to array length - 1
}

// Call getRandom function to get a random number.  Use number as index to add animal name to friends arrar
friends.push(animals[getRandom(animals)].name);

// Print friends array
console.log(friends);                    // Prints one of the four animal names:  'Zeus', 'Jerome', 'Tony', or 'Tom'

// Add friends array as friends property to random animal object
animals[getRandom(animals)].friends = friends;

// Print animals
console.log(animals);                    // Prints all four animals. Only one will have a friends array with the previously logged animal name

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
