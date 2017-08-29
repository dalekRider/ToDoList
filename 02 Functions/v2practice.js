/*

Create js code based on version2.js file

==========================================
 - Todo V2 Requirements
==========================================

    + it should have a function to display sandwich
    + it should have a function to add toppings
    + it should have a function to change toppings
    + it should have a function to delete toppings


*/

var myToppings = ['Ham ', 'Pepperjack ', 'Bacon ', 'Mayo '];

// + it should have a function to display todos

function displaySandwich() {
  console.log('I will have a ' + myToppings + 'on rye please.');
}

// + it should have a function to add toppings

function addTopping(topping) {
  myToppings.push(topping);
  displaySandwich();
}

// + it should have a function to change toppings
function changeTopping(position, newValue) {
  myToppings[position] = newValue;
  displaySandwich();
}

// + it should have a function to delete toppings
function deleteTopping(position) {
  myToppings.splice(position, 1);
  displaySandwich();
}
