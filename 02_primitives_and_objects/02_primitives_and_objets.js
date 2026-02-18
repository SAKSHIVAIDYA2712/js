// js has 7 primitives data types // built in data types (stored by value)
//are immutable(cannot be changed) // seprate memories are created for each value
//null
//number
//string
//symbol
//undefined
//bigint
//boolean

let a = null;
let b = 10;
let c = "hello";
let d = BigInt(10000);
let e = Symbol("$");
let f;
let h = true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(h, typeof h);

//objects: collection of key value pairs //non-primitive : stored by reference

info = {
  name: "sakshi",
  age: 23,
  branch: "CSE",
};

console.log(info.name);
console.log(info["name"]);
console.log(info["hobbies"]); //undefined
info.age = 22;
console.log(info.age); //22

let i = {
  name: "sakshi",
};

i = 10;
console.log(i);
