
function b(){
    var myVar;
    console.log(`myVar in func b is: ${myVar}`);
    // undefined in func b
}

function a(){ // called 2nd
    var myVar = 2;
    // 2 in func a
    console.log(`myVar in func a is: ${myVar}`);
    b() // called 3rd;
}

var myVar = 1;
console.log(`The global var is: ${myVar}`);
// 1 in global context
a(); // called first

// What do you think will happen?
// G: global myVar = 1, func a myVar = 2, func b myVar = undefined