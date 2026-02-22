// functions: reusable block of code that perform a particular task

function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("sakshi");

//arrow function
const greet1 = (name) => {
  console.log(`Hello, ${name}`);
};

greet1("arya");

function fun(a) {
  a = 6;
  console.log(a);
  return a;
}

let x = 10;
let y = fun(x);
console.log(y);
