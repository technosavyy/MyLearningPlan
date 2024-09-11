// ECMAScript 2015 was the second major revision to JavaScript.
// ECMAScript 2015 is also known as ES6 and ECMAScript 6.
// This chapter describes the most important features of ES6.


// The let keyword allows you to declare a variable with block scope.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10



//The const keyword allows you to declare a constant (a JavaScript variable with a constant value). Constants are similar to let variables, except that the value cannot be changed.
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


//Arrow Functions
// ES5
var x = function(x, y) {
    return x * y;
 }
 
 // ES6
 const x = (x, y) => x * y;


// Object Destructuring
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
// Destructuring Assignment
let { firstName, age } = person;

//Looping over an Array
const cars = ["BMW", "Volvo", "Mini"];
let txt = "";

for (let x of cars) {
  text += x + " ";
}


//Looping over a String
let language = "JavaScript";
let tet = "";

for (let x of language) {
    text += x + " ";
}

//Classes Js
class ClassName {
    constructor() {  }
  }

  //constructors
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

//Promise syntax
const myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


//String properties
 text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true

 text = "Hello world, welcome to the universe.";
text.startsWith("Hello")   // Returns true

var text = "John Doe";
text.endsWith("Doe")    // Returns true

//Array entries
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}  //This will iterate through the array.

Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]
