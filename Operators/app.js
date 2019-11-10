var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// all equals 4...why? Associativity

// with '='...associativity is right to left

var d = 3 + 4 * 5;

console.log(d);
// 23 because multiplication takes precedence over addition