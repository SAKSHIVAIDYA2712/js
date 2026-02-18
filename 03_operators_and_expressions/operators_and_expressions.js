//types of operators in js
// +, -, *. /, **, %, ++. --
//a+b //a,b are operands , '+' is operator

//below are arithmetic operators
let a = 10;
let b = 5;

console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a / b);
console.log("a/b=", a * b);
console.log("a**b=", a ** b);
console.log("a++", a++); //this will first print a and then increment the value
console.log("a--", a--); //this will first print a and then decrement the value
console.log("a%b", a % b);
console.log("++a", a); //this will increment the value of a

//Assignment operators
let c = 10;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c /= 2;
console.log(c);
c *= 3;
console.log(c);
c **= 2;
console.log(c);

//comparison operators
// == equal to
// != not equal to
// === checks if values and types are equal
// !== not equal to value and type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// ? ternary operator

let val1 = 10;
let val2 = 20;
console.log("val1==val2", val1 == val2);
console.log("val1!=val2", val1 != val2);
console.log("val1===val2", val1 === val2);
console.log("val1!==val2", val1 !== val2);
console.log("val1>val2", val1 > val2);
console.log("val1<val2", val1 < val2);
console.log("val1>=val2", val1 >= val2);
console.log("val1<=val2", val1 <= val2);

console.log("10" == 10); //true
console.log("10" != 10); //false
console.log("10" !== 10); //true

console.log(10 === "10"); //false
console.log("10" !== 10); //true

//logical operators //compare two conditions
// &&  AND
// ||  OR
// !   NOT
let x = 5;
let y = 6;

console.log(x < y && y == 6);
console.log(x > y || y == 6);
console.log(x == 5 || x++); // here as the first part x==5 is true so x++ won't get execute
console.log(x); // so x remains 5
console.log(x != 5 || x++);
console.log(x);
console.log(!x);
