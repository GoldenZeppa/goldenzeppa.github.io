// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

/** 
 * Given a number id and two strings, nameFirst and nameLast, return a contact object.
 */
function makeContact(id, nameFirst, nameLast) {

    // Return contact object
    return {id: id, nameFirst: nameFirst, nameLast: nameLast};

} 


/** 
 * Return an object that manages contacts.
 */
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // Create array for contact-list
    var contacts = [];
    
    // Return object
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
            
        // Add given contact to contact-list 
        addContact: function(contact) {
            return contacts.push(contact);
        },
        
        // Find a contact by name in the contact-list
        findContact: function(fullName) {
            // Loop through contact-list
            for (var i = 0; i < contacts.length; i++) {
                // Check contact's name
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    // If fullName matches contact's name, return contact
                    return contacts[i];
                }
            }
            
            // Return undefined since no match found
            return undefined;
        },
        
        // Remove contact from contact-list
        removeContact: function(contact) {
            // Delete contact from contact-list
            contacts.splice( contacts.indexOf(contact), 1 );
        }, 
        
        // Print all contact names
        printAllContactNames: function() {
            var names = '';
            // Loop through contact-list
            for (var i = 0; i < contacts.length; i++) {
                // Add contact's name to string
                names += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                
                // Check if not last contact
                if (i !== contacts.length - 1) {
                    // If not last contact, then add new line character
                    names += '\n';
                }
            }
            
            // Return contact-list as a string
            return names;
        }
    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
