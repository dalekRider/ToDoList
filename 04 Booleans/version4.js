/*

Create js code based on version4.js file

==========================================
 - Todo V4 Requirements
==========================================

    + todoList.addTodo should add objects
    + todoList.changeTodo should change the todoText property
    + todoList.toggleCompleted should change the completed property


*/

/*
Objects are surrounded by curly braces
Example

{
  todoText: 'item 1',
  completed: false // Boolean true or false
}

Our boolean will be defaulted to false as task is not completed.

*/

//  + todoList.addTodo should add objects

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },

// We deleted text items from array because we are going to pass objects into the arry. This will be done in the addTodo function below

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

// Changed push parameter to an object with two properties: todoText and completed. The value of todoText is the parameter from addTodo function. They just happen to use the same name but are not an issue.

// example function('clean house') would equal todoText: clean house.

// + todoList.changeTodo should change the todoText property

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

/*
this.todos[position] still access the object in that position of the array. Once we get to that position we want to change the object. this.todos[position] is an object of that array. We want to access and make a change of this.todos[position]'s property's value (the todoText property) we access this by dot notation and add .todoText. We then assign a value for the property with = todoText. This value is a parameter from the changeTodo function.

newValue to todoText is more descriptive more clear chaning the todoText property. WE are grabbing the todoText property on our object. but then use .notation to grab just the todoText property and set it to the new value that is passed in when you run the function
*/

// + todoList.toggleCompleted should change the completed property



  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

// line 74 grabbing and saving a reference to the specific todo we are interested in.
// line 75 we take todo.completed which is boolean value, we get what it is and we flip it with bang operator (!).


};

/*
====================================================
-------------- Verson 4 final code -----------------
====================================================
*/
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
