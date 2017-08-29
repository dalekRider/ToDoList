//jscs:ignore validateLineBreaks
/*

Create js code based on version5.js file

==========================================
 - Todo V8 Requirements
==========================================

    + It should have working controls for .addTodo
    + It should have working controls for .changeTodo
    + It should have working controls for .deleteTodo
    + It should have working controls for .toggleCompleted

=====================================================
----------- Previous version code (v7) --------------
=====================================================

var todoList = {
  todos: [],
  displayTodos: function () {
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

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }

    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },

};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function () {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function () {
  todoList.toggleAll();
});
*/

//end of old code

/*

=====================================================================
------------------------ Final Version V9 ---------------------------
=====================================================================

*/

var todoList = {
  todos: [],
  displayTodos: function () {
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

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function () {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: If everything's true, make everything false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }

    // Case 2: Otherwise, make everything true.
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  },

};

// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById('toggleAllButton');
//
// displayTodosButton.addEventListener('click', function () {
//   todoList.displayTodos();
// });
//
// toggleAllButton.addEventListener('click', function () {
//   todoList.toggleAll();
// });

var handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },

  addTodo: function () {

    //grabbing addTodoTextInput with getElementById
    //Then run todoList.addTodo and using addTodoTextInput value as parameter

    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);

    // clears input field empty after adding

    addTodoTextInput.value = '';
  },

  changeTodo: function () {

    //again grabbed input information with getElementById used value and valueAsNumber
    //for parameter inputs. because first argument has to be number we used valueAsNumber
    //cleared inputs again

    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },

  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },

  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },

  toggleAll: function () {
    todoList.toggleAll();
  },

};
