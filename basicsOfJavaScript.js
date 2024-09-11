// Operators
// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

var x = 100 + 50;

x = a + b;

x = (100 + 50) * a;

let x = (100 + 50) * a;

var a = 5;
var y = 2;
var z = x % y;

x = 5;
x++; //Increament op
z = x;


x--;//Decreament op
z = x;


// Assignment Operators
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y


// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

let a = 4; 
let b = 1; 

console.log("A & B = " + (a & b)); 
console.log("A | B = " + (a | b)); 
console.log("~A = " + (~a));

//Logical operators

//OR  ( || )
let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

//AND ( && )
hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

//NOT ( ! )
alert( !true ); // false
alert( !0 ); // true