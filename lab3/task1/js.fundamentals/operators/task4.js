// because a and b are strings, so the result is 12
// to fix this, we need to convert a and b to numbers

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// now the result is 3