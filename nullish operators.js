//The nullish coalescing operator is written as two question marks ??.
// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

result = (a !== null && a !== undefined) ? a : b;
// we can rewrite the above statement as follows
result= a??b


let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

user="john"
alert(user ?? "Anonymous")// here user is not undefined/null

let firstName = null;
let lastName = null;
let nickName = "Coder";

// shows the first defined value
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

