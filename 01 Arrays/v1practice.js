/*

Create js code based on version1.js file

==========================================
 - Sandwich V1 Requirements
==========================================

 + It should have a place to store toppings
 + It should have a way to display toppings
 + It should have a way to add new toppings
 + It should have a way to change a toppings
 + It should have a way to to delete a topping

*/

// + It should have a place to store toppings
var mySandwich = ['Ham ', 'Swiss ', 'Mustard' ];

// + It should have a way to display toppings
console.log('I will have ' + mySandwich  + ' on rye please');

// + It should have a way to add new toppings
mySandwich.push('newTopping');

// + It should have a way to change a toppings
mySandwich[0] = 'diffTopping';

// + It should have a way to to delete a topping
mySandwich.splice(index to start at, number of items to delete);
mySandwich.splice(2, 1);
