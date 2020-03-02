// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-goldenzeppa');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */


var maleCount = function(array) {
    // Return number of male customers . . .
    // by creating a new array of customers passing male gender test
    // and then retrieving the length of the new array
    return _.filter(array, function(customerObj) {
        return customerObj.gender === 'male';
    }).length;
};


var femaleCount = function(array) {
    // Return number of female customers . . .
    // by accumulating a count of customers passing female gender test
    // Starting count at zero (seed)
    return _.reduce(array, function(previousSum, currentValue, currentIndex){ 
        return previousSum + (currentValue.gender === 'female')
    }, 0);
};

// THIS ONE WORKS TOO!!!
//
// var femaleCount = function(array) {
//     // Return number of female customers
//     // Start count at zero
//     return _.reduce(array, function(previousSum, currentValue, currentIndex){ 
//         // Is the customer female?
//         if (currentValue.gender === 'female') {
//             // Yes, so add 1 to previous sum
//             return previousSum + 1;
//         } else {
//             // No, so just return previous sum
//             return previousSum;
//         }
//     }, 0);
// };


var oldestCustomer = function(array) {
    // Declare varaible to hold the highest age
    let oldest = 0;
    // Return oldest customer's name . . . 
    // Start with empty string for customer's name (seed)
    return _.reduce(array, function(previous, current, currentIndex){ 
        // Is the current customer's age greater than oldest age found so far?
        if (current.age > oldest) {
            // Yes, so update oldest age with current customer's age
            oldest = current.age;
            // and return current customer's name
            return current.name;
        } 
        // Return previous since current customer is not oldest
        return previous;
    }, '');
};


var youngestCustomer = function(array) {
    // Declare varaible to hold the lowest age
    let youngest = Infinity;
    // Return youngest customer's name . . . 
    // Start with empty string for customer's name (seed)
    return _.reduce(array, function(previous, current, currentIndex){ 
        // Is the current customer's age less than youngest age found so far?
        if (current.age < youngest) {
            // Yes, so update youngest age with current customer's age
            youngest = current.age;
            // and return current customer's name
            return current.name;
        } 
        // Return previous since current customer is not youngest
        return previous;
    }, '');
};


var averageBalance = function(array) {
    // Return average balance of all customer accounts . . . 
    // by accumulating the sum of customer balances
    // and then dividing the resulting sum with the length of the customer array
    // Since customer balance is a string in currency format,
    // remove the dollar sign and commas,
    // and then convert string to number data type to add to sum
    // Start sum at zero (seed)
    return _.reduce(array, function(previousSum, currentCustomer, currentIndex){ 
        return previousSum + Number(currentCustomer.balance.replace(/[$,]/g, ""));
    }, 0) / array.length;
};


var firstLetterCount = function(array, letter) {
    // Return number of customers whose names begins with input letter . . .
    // by creating a new array of customers passing the first letter test
    // and then retrieving the length of the new array
    // Convert name character and input letter to same case
    return _.filter(array, function(customerObj) {
        return customerObj.name[0].toUpperCase() === letter.toUpperCase();
    }).length;
};


var friendFirstLetterCount = function(array, customer, letter) {
    // Loop through customer array
    for (let i = 0; i < array.length; i++) {
        // Does the customer have the same input name?
        if (array[i].name === customer) {
            // Yes, so return names of customer's friends 
            // whose names begin with input letter . . .
            return firstLetterCount(array[i].friends, letter);
        }
    }
};


var friendsCount = function(array, name) {
    // Declare a varaible and assign it an array literal
    let friends = [];
    // Has a name been provided?
    if (name === undefined) {
        // No, so return empty array
        return friends;
    }
    // Loop through customer array
    for (let i = 0; i < array.length; i++) {
        // Loop through customer's friend array
        for (let j = 0; j < array[i].friends.length; j++) {
            // Does the customer have the input name as a friend?
            if (array[i].friends[j].name === name) {
                // Yes, so add the customer name to the array
                friends.push(array[i].name);
            }
        }
    }
    // Return the customers' names that have the input customer in their friends list
    return friends;
};


var topThreeTags = function(array) {
    // Declare variable to concatenate all customer tags and assign it an array literal
    let tags = [];
    // Loop through the customers
    for (let i = 0; i < array.length; i++) {
        // Add customer tags to all tags list
        tags = tags.concat(array[i].tags);
    }
    
    // Declare variable to hold the occurrence count of each tag . . .
    // by accumulating the count of tag passing the test
    // Start with empty object literal (seed)
    let count = tags.reduce((collection, tag) => {
        // Does tag already exist as an object key?
        // If yes, use the prevous value and add one; 
        // otherwise, use zero and add one
        collection[tag] = (collection[tag] || 0) + 1;
        // Return object with tag / count pairs
        return collection;
    }, {});
    
    // Declare a variable and assign it a collection containing maximum occurence count
    // If there is a tie, it will list the same count several times
    let maxCount = Math.max(...Object.values(count));
    // Declare a variable and assign it an array containing key(s)
    // that have value equal to maximum count 
    let common = Object.keys(count).filter(k => count[k] === maxCount);
    // Does most common array contain top three tags?
    // Was it a three-way tie?
    if (common.length >= 3) {
        // Yes, so return array
        return common;
    }
    // Test happened to be three-way tie!!!
    // Solution not perfect . . .
    // Need to add for second most frquent 
        // Maybe by removing tags already contained in common - reject
        // Determine next maximum Count
        // Push next common tags
        // Consider maximum tag array length
    // Need to add for third most frequent
        // Maybe by removing tags already contained in common - reject
        // Determine last maximum Count
        // Push third common tag
        // Consider maximum tag array length
};


var genderCount = function(array) {
    // Declare a variable and assign it an object literal
    let count = {};
    // Declare array variable to hold unique customer gender values
    let gender = _.unique(_.pluck(customers, 'gender'));
    // Loop through gender array
    for (let i = 0; i < gender.length; i++) {
        // Count occurrence of gender in customers list . . .
        // by accumulating the count of gender passing the test,
        // and then add gender / count pair to count object
        // Start with a count of zero (seed)
        count[gender[i]] = _.reduce(array, function(previousSum, customer){ 
            return previousSum + (customer.gender === gender[i])
        }, 0);
    }
    // Return object containing summary of genders
    return count;
};;


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
