//jscs:ignore validateLineBreaks
/*

==========================================
 - Todo V5 Requirements
==========================================

    + There should be a "Display Todos" button and a "Toggle All" button in the app.
    + Clicking "Display Todos" should run todoList.displayTodos();.
    + Clicking "Toggle All" should run todoList.toggleAll();.


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

==============================================================
------------------- Completed V7 Practice --------------------
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

var displaySandwichButton = document.getElementById('displaySandwichButton');
var saveAllToppingsButton = document.getElementById('saveAllToppingsButton');

displaySandwichButton.addEventListener('click', function () {
  sandwichOptions.displaySandwich();
});

saveAllToppingsButton.addEventListener('click', function () {
  sandwichOptions.saveAllToppings();
});
