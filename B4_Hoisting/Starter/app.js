b(); //runs
console.log(a); //undefined - placeholder
// error if a not defined below

var a = 'Hello World!';

function b() {
    console.log('called b');
}

console.log(a); //now prints out a's value

// Hoisting: set-up memory space for variables and functions created
// all variables initially set to undefined