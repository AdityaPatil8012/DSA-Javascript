// let's start with some basics

const { json } = require("express");

let firstName = "Aditya";

// we can check the length just like in arrays; 
console.log(firstName.length);

// We can also itterate using loop;
for(let i = 0; i<firstName.length; i++){
  console.log(`for the index ${i}: ${firstName[i]}`);
}


// Now let's see how we can check the presence of the character;

console.log(firstName.includes("t"));
console.log(firstName.includes("b"));
console.log(firstName.includes("A"));
console.log(firstName.includes("a"));

// let's see the indexOF the element;

console.log(firstName.indexOf("A"));
console.log(firstName.indexOf("a"));

// Compare two strings; 

let name1 = "Aditya"
let name2 = "Kunal"
let name3 = "Aditya"
let name4 = "aditya"


console.log(name1.localeCompare(name2));
console.log(name1.localeCompare(name3));
console.log(name1.localeCompare(name4));


// let's replace the substring;

let love = "I love doing business and I like to code.";

love

console.log(love.replace("business", "my work"));
console.log(love.replace("code", "read books"));


// let's make the Substring of a string;
// understood what to do but don't get the reason why we need this method;

// Split and join;

// used split method to sperate the words from the sentence;
let subString = love.split("");

// now I am using join to group and arrange the elements;
console.log(subString.join(""));



// String Start and End;

// this will give you start;
console.log(love.startsWith("I"));

// this will give you end;
console.log(love.endsWith("code."));



// Trim and case conversion;

const trimLove = love.trim()
console.log(trimLove);

const trimLoveStart = love.trimStart();




// Now this is something intresting and important;

// this will convert the number to string;
const num = 123;
console.log(num, num.toString());
console.log(num, JSON.stringify(num));



// this will convert object to string;

const obj = {
  name: "Aditya",
  studying: "DSA using Javascript",
}

console.log(obj, JSON.stringify(obj));


 
