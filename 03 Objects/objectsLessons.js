/*
============================
Object notes
============================

data related to a specific object (my computer)

operatingSystem windows
screenSize 19 inches
purchaseYear 2011

Object vv

{
  propertyName: valueOfProperty,
  propertyName: valueOfProperty,
}

*/

var myComputer = {
  operatingSystem: 'windows',
  screenSize: '19 inches',
  purchaseYear: 2011
}

myComputer.operatingSystem
// will look up value for property named operatingSystem in the myComputer Object

myComputer.screenSize
// will look up value for property named screenSize in the myComputer Object

myComputer.purchaseYear
// will look up value for property named purchaseYear in the myComputer Object

========================================================
 -------------- Objects and Functions ----------------
========================================================
// when you use this on a function inside of a function that is on an
// object, this will refer to the entire object
//Use of the This example
/*
var johnathan = {
  name: 'Johnathan',
  sayName: function() {
    console.log(this);
  }
}
*/
// first property is name set to text 'gordon'
// second property is set to function
// function is printing out name on object
// using this.name access value of name property
// Pattern of putting a function on an object is common practice
// so common its called a method
// method is property that is equal to a function
// when function on an object, function does not need to be named can be anonymous function
var johnathan = {
  name: 'Johnathan',
  sayName: function() {
    console.log(this.name);
  }
}
