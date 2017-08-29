/*

Create js code based on version3.js file

==========================================
 - Todo V3 Requirements
==========================================

    + it should store the sandwichOptions array on an object
    + it should have a displaySandwich method
    + it should have a addToppings method
    + it should have a changeToppings method
    + it should have a deleteToppings method


*/
// + it should store the sandwichOptions array on an object

var sandwichOptions = {
  mySandwich: ['Ham', ' Pepperjack', ' Onion', ' Bacon'];
}

// + it should have a displaySandwich method

var sandwichOptions = {
  mySandwich: ['Ham', ' Pepperjack', ' Onion', ' Bacon'],
  displaySandwich: function() {
    console.log('I will have a ' + this.mySandwich + ' on Rye please.');
  }

}

//  + it should have a addToppings method

var sandwichOptions = {
  mySandwich: ['Ham', ' Pepperjack', ' Onion', ' Bacon'],
  displaySandwich: function() {
  console.log('I will have a ' + this.mySandwich + ' on Rye please.');
},
  addToppings: function(topping) {
    this.mySandwich.push(topping);
    this.displaySandwich();
  }

}

//  + it should have a changeToppings method

var sandwichOptions = {
  mySandwich: ['Ham', ' Pepperjack', ' Onion', ' Bacon'],
  displaySandwich: function() {
  console.log('I will have a ' + this.mySandwich + ' on Rye please.');
},
  addToppings: function(topping) {
    this.mySandwich.push(topping);
    this.displaySandwich();
  },
  changeToppings: function(position, newValue) {
    this.mySandwich[position] = newValue;
    this.displaySandwich();
  }

}

//  + it should have a deleteToppings method

var sandwichOptions = {
  mySandwich: ['Ham', ' Pepperjack', ' Onion', ' Bacon'],
  displaySandwich: function() {
  console.log('I will have a ' + this.mySandwich + ' on Rye please.');
},
  addToppings: function(topping) {
    this.mySandwich.push(topping);
    this.displaySandwich();
  },
  changeToppings: function(position, newValue) {
    this.mySandwich[position] = newValue;
    this.displaySandwich();
  },
  deleteToppings: function(position){
    this.mySandwich.splice(position, 1);
    this.displaySandwich();
  }

}
