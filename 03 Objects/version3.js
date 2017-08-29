/*

==========================================
 - Todo V3 Requirements
==========================================

    + it should store the todos array on an object
    + it should have a displayTodos method
    + it should have a addTodo method
    + it should have a changeTodo method
    + it should have a deleteTodo method

*/

// + it should store the todos array on an object

var todoList = {
  todos: ['item 1', 'item 2', 'item 3']
};

// + it should have a displayTodos method

/*
Old way - created a variable, then function that called array in variable and put in a string "My Todos: array here"

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My todos: ', todos);
}
*/

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  }
};

//  + it should have a addTodo method
/*

Old function

function addTodo(todo) {
  todo.push(todo);
  displayTodos;
}
Dont forget to add comma between properties

*/
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  }
};

// + it should have a changeTodo method
/* old method

function changeTodo(position, newValue) {
  todo[position] = newValue;
  displayTodos();
}
*/
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  }
};

// + it should have a deleteTodo method

/*
Old method

function deleteTodo(position) {
  todo.splice(postion, 1);
  displayTodos();
}

*/

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};

// 18 lines of code, everything is grouped together on an object.
// this is great for code organization
// 4 methods on an object.
// if you want to refer to the object itself while inside of a method you have to use the this keyword
// this refers to the entire object and then we can use dot notation to reference different properties on the object. 
