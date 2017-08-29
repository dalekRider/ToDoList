/*

Create js code based on version5.js file

==========================================
 - Todo V5 Requirements
==========================================

    + .displayTodos should show .todoText.
    + .displayTodos should tell you if .todos is empty.
    + .displayTodos should show .completed.


=====================================================
----------- Previous version code (v4) --------------
=====================================================

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
*/

// + .displayTodos should show .todoText.
// Eample below.
// this.todos.length has 3 items
// i = 0
// i = 1
// i = 2
//this.todos[position] using i allows us to loop from 0 through until condition met
//but we want the value of the todoText property which we access with .notation this.todos[i].todoText

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:'); // removed this.todos to stop printing objects to console.
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
    }
  },

  // + .displayTodos should tell you if .todos is empty.

  var todoList = {
    todos: [],
    displayTodos: function() {

      // if this.todos.length === 0 (strict comparison)
      if (this.todos.length === 0) {
        // console.log('your todo list is empty!')
        console.log('Your todo list is empty!');
      // else
    } else {
        // print todos as normal
        console.log('My Todos:'); // moved above to after else to print as normal
        for (var i = 0; i < this.todos.length; i++) {
          console.log(this.todos[i].todoText);
        }
      }
    },
// 2nd requirement change without comments (committed in plunker)
// if array is empty it will say your todo list is empty, otherwise it will print my todos then go through our for loop and then print the todoText property for each item in our array.
    var todoList = {
      todos: [],
      displayTodos: function() {
        if (this.todos.length === 0) {
          console.log('Your todo list is empty!');
      } else {
          console.log('My Todos:');
          for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);
          }
        }
      },

//  + .displayTodos should show .completed.
/* Example
  ( ) Item 1 // Incomplete
  (x) Item 2 // completed
  (x) Item 3 // completed
*/
// added a check if completed it prints todo text like before but we added a (x), otherwise if false it prints todoText but with ( )
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
  } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x) ', this.todos[i].todoText);
        } else {
          console.log('( ) ', this.todos[i].todoText);
        }
      }
    }
  },



/*
======================================================
----------------- Final Version 5 --------------------
======================================================
*/
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
  } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x) ', this.todos[i].todoText);
        } else {
          console.log('( ) ', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
