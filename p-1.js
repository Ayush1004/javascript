let a = 'hello'; // globally scoped
var b = 'world'; // globally scoped
console.log(a); // undefined
console.log(b); // 'world'
var c = 'hello';
console.log(c);
var c = 'world'; // No problem, 'hello' is replaced.
console.log(c);
let d = 'hello';
//let d = 'world'; // SyntaxError: Identifier 'd' has already been declared