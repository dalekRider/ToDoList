/*

Create js code based on version3.js file

==========================================
 - Todo V3 Requirements
==========================================

    + sandwichOptions.addToppings should add objects
    + sandwichOptions.changeToppings should change the toppings property
    + sandwichOptions.toggleSubmitted should change the submitted property


*/

/*
VERSION 3

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

*/

//  + sandwichOptions.addToppings should add objects

var sandwichOptions = {
  mySandwich: [],
  displaySandwich: function() {
  console.log(this.mySandwich);
},
  addToppings: function(toppings) {
    this.mySandwich.push({
      toppings: toppings,
      saved: false
    });
    this.displaySandwich();
  },

// + sandwichOptions.changeToppings should change the toppings property

  changeToppings: function(position, toppings) {
    this.mySandwich[position].toppings = toppings;
    this.displaySandwich();
  },
  deleteToppings: function(position){
    this.mySandwich.splice(position, 1);
    this.displaySandwich();
  },

// + sandwichOptions.toggleSubmitted should change the submitted property
  toggleSaveTopping: function(position) {
  var lockTopping = this.mySandwich[position];
  lockTopping.saved = !lockTopping.saved;
  this.displaySandwich();
  }

}


==============================================================
------------------- Completed V4 Practice --------------------
==============================================================

var sandwichOptions = {
  mySandwich: [],
  displaySandwich: function() {
  console.log(this.mySandwich);
},
  addToppings: function(toppings) {
    this.mySandwich.push({
      toppings: toppings,
      saved: false
    });
    this.displaySandwich();
  },
  changeToppings: function(position, toppings) {
    this.mySandwich[position].toppings = toppings;
    this.displaySandwich();
  },
  deleteToppings: function(position){
    this.mySandwich.splice(position, 1);
    this.displaySandwich();
  },
  toggleSaveTopping: function(position) {
  var lockTopping = this.mySandwich[position];
  lockTopping.saved = !lockTopping.saved;
  this.displaySandwich();
  }

}
