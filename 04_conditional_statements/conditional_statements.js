// if else
// executes a block of code if the condition is met otherwise executes else code block

let age = 20;

if (age > 0) {
  console.log("valid age");
} else {
  console.log("Invalid age");
}

//switch case

let fruit = "mango";

switch (fruit) {
  case "mango":
    console.log("60 rs");
    break;
  case "banana":
    console.log("40 rs");
    break;
  case "kiwi":
    console.log("40 rs");
    break;
  case "apple":
    console.log("50 rs");
}
//60 rs

switch (fruit) {
  case "mango":
    console.log("60 rs");
  case "banana":
    console.log("40 rs");
    break;
  case "kiwi":
    console.log("40 rs");
    break;
  case "apple":
    console.log("50 rs");
}
//60rs 40rs // in above case the execution continues to next case as break is missing

//ternary operator
//shorthand for if else
let marks = 80;

marks > 50 ? console.log("pass") : console.log("fail");
