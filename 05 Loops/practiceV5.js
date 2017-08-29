//jscs:ignore validateLineBreaks
/*

==========================================
 - Todo V5 Requirements
==========================================

    + .displaySandwich should show .todoText.
    + .displaySandwich should tell you if .toppings is empty.
    + .displaySandwich should show .saved.


=====================================================
----------- Previous version code (v4) --------------
=====================================================

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

==============================================================
------------------- Completed V Practice --------------------
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

};
