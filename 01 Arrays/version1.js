/*

==========================================
 - Todo V1 Requirements
==========================================

 + It should have a place to store todos
 + It should have a way to display todos
 + It should have a way to add new todos
 + It should have a way to change a todo
 + It should have a way to to delete a todo

*/

// + It should have a place to store todos

var todos = ['item 1', 'item 2', 'item 3'];

// + It should have a way to display todos

console.log(todos);
console.log('My todos: ' todos);

//  + It should have a way to add new todos

todos.push('item 4');
todos.push('item 5');

// + It should have a way to change a todo

// access items in an array
todos[0] for item 1

// change specific item in array
todos[0] = 'item 1 updated'

// + It should have a way to to delete a todo

todos.splice(0, 1);
// NOTE splice(item to be deleted, amount of items to delete)

// Version 1 Completed

var todos = ['item 1', 'item 2', 'item 4'];
console.log(todos);
console.log(My todos: ' todos)'

todos[0] = 'item 1 updated';
console.log(todos);
