//loops  // use for executing code multiple time
//for
//while
//do while
//for in

//for // use when u know exact no. of iterations

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//while // use when a condition changes dynamically
//When You Don’t Know How Long It Will Run
//ex
let balance = 100;
while (balance > 0) {
  balance -= 20;
}

//do while loop
//use when u want to run a loop at least one time
let x = 5;
do {
  console.log("loop will run at least one time, even if condition is false");
} while (x > 6);

//for in
//used for looping over object properties
const obj = {
  name: "sakshi",
  age: "23",
  hobbies: "badminton",
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// for of //can be  used for arrays, strings
const a = [1, 2, 3, 4];
for (const num of a) {
  console.log(num);
}

const v = "sakshi";
for (const letters in v) {
  console.log(v[letters]);
}
