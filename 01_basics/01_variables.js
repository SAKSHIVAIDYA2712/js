// let, var, const

//var
//var is a global scoped
//it can be re-initailized and re-declared
var e = 10;
var e = "hello";
{
  var c = 10;
}
console.log("c", c);

let a = 10;
// let a = "hello"; // variables declared with let cannot be re-declared
{
  let a = 20;
  console.log("a", a);
}
console.log("a", a);

// {
//   let d = 10;
// }
// console.log(d);  // as variables declared with let are blocked scope so we cannot access it outside the scope
// hence d will give reference error: d is not defined

let f;
console.log(f);

//const
//local scoped
//cannot be re-initalized or re-declared
const g = 10;
// const g = 10; //syntax error: g already declared
// g = 20; // typeerror: assignment to constant variable

// const must be initialized during declartion unlike let and var
// const h;
// h = 30;  //SyntaxError: Missing initializer in const declaration
