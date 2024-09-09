/* Data Types undefined , null, boolean, string, number, symbol, object*/

var myname ="Schneider Electric" // can be used anywhere in code

myname=10; // values can be changed

let Urname ="Sairam" //Useed inside a scope 


var a; // declaring variable
 var b= 10; //intailizing variable 
  a=2;

  b=b+a;
  console.log(b)

b++; //increament operator
console.log(b)

/**
Code Output
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage line
\t  tab
\b  backspace
\f form feed
**/
var myStr = "Firstline\n\tSecondline\nThirdline"
console.log(myStr)

// String Concatenation
var STR= "this is the start. "
var STR1= "this is the end "
STR += STR1;
console.log(STR)

// find length of the string
var findLength = STR.length;
console.log("Length is "+ findLength);

// bracket notation to find element at a location  
 var firstLetterOfName= Urname[0];
var lastletter= Urname[Urname.length-1];
console.log(firstLetterOfName)
console.log(lastletter)

//Stings are immutable in nature

// Urname[0]="R"; this statement will throw an error

Urname = "Niranjan"
console.log(Urname)

//JavaScript Can Change HTML Content
