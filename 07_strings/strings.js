// strings are the collection of sequence of characters
// strings are immutable
// strings can be used with double quotes, single quotes or template literals

let str1 = "sakshi";

console.log(str1[0]);

//template literals
//use backticks
//can interpolate variables //using variables inside the template literals is call string interpolation
//can be used for multiline
//with template literals it is possible to use double quotes or single quotes

let sen = `I love "mangoes"`;

let greet = `hello ${str1}`;

let multiline = `hello sakshi here
                   I am revisting the concepts of
                    js`;

console.log(str1);
console.log(greet);
console.log(multiline);
console.log(sen);

//Escape sequence
//allows u to add speacial characters, quotes inside string, new line, tab etc

let str2 = "this is an example of new line \n esacape sequence";
console.log(str2);

//string methods

//length
let name = "sakshi";
console.log("length", name.length);

let name1 = "Harry Potter\'";
console.log("length", name1.length); //13 \' is count as 1

//uppercase, lowercase
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//indexOf // returns index of first character
console.log(name.indexOf("s"));

//includes() //checks if value exists
console.log(name.includes("sa"));

//slice(start, end)
console.log(name.slice(1, 3)); //excludes end index
console.log(name.slice(0));

console.log(name.slice(6, 2)); // when start > end it returns empty

//replace
console.log(name.replace("s", "S")); //replace first match

//replaceAll
console.log(name.replaceAll("s", "S"));

//concat
let surname = "vaidya";
console.log(name.concat(surname));

//trim
console.log(name.trim());

//diff between slice and substring

//both slice and substring contains same syntax
//str.slice(start, end)
//str.substring(start, end)

//diff
//slice supports -ve indexing
//substring do not support -ve indexing it turns -ve no. to 0
console.log("s", name.substring(-100, 2)); //0,2

//when start > end
//slice returns empty string
//substring swaps the value
console.log(name.substring(6, 2));
