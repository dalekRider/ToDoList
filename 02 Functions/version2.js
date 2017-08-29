/*

==========================================
 - Todo V2 Requirements
==========================================

    + it should have a function to display todos
    + it should have a function to add todos
    + it should have a function to change todos
    + it should have a function to delete todos

*/

//  + it should have a function to display todos

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos(); // displays todo list array

//  + it should have a function to add todos

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('new item') //<-- added item to array called 'new item'

//   +it should have a function to change todos
/*
 function changeTodo() {
     todos[0] = 'some new value';
 }
 */

 function changeTodo(position, newValue) {
     todos[position] = newValue;
     displayTodos();
 }

 changeTodo(0, 'changed'); // <-- changes first item in array


//  + it should have a function to delete todos

// function deleteTodo() {
//     todos.splice(0, 1);
// }

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(0); // <-- deletes first item in the array, arrays are zero index

================================================================
 ----------------  final v2 Code  ------------------------------
================================================================

var todos = ['Item 1', 'Item 2', 'Item 3'];

//  It should have a function to display todos
function displayTodos() {
    todos.push(todo);
    displayTodos();
}

//  It should have a function to add todos
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

//  It should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//  It should have a function to delete todos
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
