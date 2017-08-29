//jscs:ignore validateLineBreaks
/*

==========================================
 - Todo V5 Requirements
==========================================

+ .saveAllToppings: If everything's true, make everything false
+ .saveAllToppings: Otherwise, make everything true


=====================================================
----------- Previous version code (v5) --------------
=====================================================

var sandwichOptions = {
  mySandwich: [],
  displaySandwich: function () {
    // display if empty
    if (this.mySandwich.length === 0) {
      console.log('That\'s not much of a Sandwich!');
    } else {
      for (var i = 0; i < this.mySandwich.length; i++) {
        if (this.mySandwich[i].saved === true) {
          console.log('(X) ', this.mySandwich[i].toppings);
        } else {
          console.log('( ) ', this.mySandwich[i].toppings);
        }
      }
    }
  },

  addToppings: function (toppings) {
    this.mySandwich.push({
      toppings: toppings,
      saved: false,
    });
    this.displaySandwich();
  },

  changeToppings: function (position, toppings) {
    this.mySandwich[position].toppings = toppings;
    this.displaySandwich();
  },

  deleteToppings: function (position) {
    this.mySandwich.splice(position, 1);
    this.displaySandwich();
  },

  toggleSaveTopping: function (position) {
    var lockTopping = this.mySandwich[position];
    lockTopping.saved = !lockTopping.saved;
    this.displaySandwich();
  },

};

==============================================================
------------------- Completed V6 Practice --------------------
==============================================================

*/

var sandwichOptions = {
  mySandwich: [],
  displaySandwich: function () {
    // display if empty
    if (this.mySandwich.length === 0) {
      console.log('That\'s not much of a Sandwich!');
    } else {
      for (var i = 0; i < this.mySandwich.length; i++) {
        if (this.mySandwich[i].saved === true) {
          console.log('(X) ', this.mySandwich[i].toppings);
        } else {
          console.log('( ) ', this.mySandwich[i].toppings);
        }
      }
    }
  },

  addToppings: function (toppings) {
    this.mySandwich.push({
      toppings: toppings,
      saved: false,
    });
    this.displaySandwich();
  },

  changeToppings: function (position, toppings) {
    this.mySandwich[position].toppings = toppings;
    this.displaySandwich();
  },

  deleteToppings: function (position) {
    this.mySandwich.splice(position, 1);
    this.displaySandwich();
  },

  toggleSaveTopping: function (position) {
    var lockTopping = this.mySandwich[position];
    lockTopping.saved = !lockTopping.saved;
    this.displaySandwich();
  },

  saveAllToppings: function () {
    var totalToppings = this.mySandwich.length;
    var savedToppings = 0;

    for (var i = 0; i < totalToppings; i++) {
      if (this.mySandwich[i].saved === true) {
        savedToppings++;
      }
    }

    if (savedToppings === totalToppings) {
      for (var i = 0; i < totalToppings; i++) {
        this.mySandwich[i].saved = false;
      }
    } else {
      for (var i = 0; i < totalToppings; i++) {
        this.mySandwich[i].saved = true;
      }
    }

    this.displaySandwich();
  },

};
