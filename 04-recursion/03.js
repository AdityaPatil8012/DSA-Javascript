// // check whether a string is palindrome or not using recursion;

// let str1 = "radar";
// let str2 = "madam";
// let str3 = "pop";
// let str4 = "lol";

// // we need to see the string and the reverse string are same;

// // let's first convert the string into array of words;

// let reverseStr1 = str1.split("").reverse().join("");

// reverseStr1;

// if (str1 === reverseStr1) {
//   console.log(true);
// }

// // I don't know how to do this using recursion and I don't find a need to do so.

// // Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)


let sumOfDigits = function(n) {
  // let's first write the base case;
  if(n===0){
    return 0
  }

  return (n%10) + sumOfDigits(Math.floor(n/10));
}


let number = 234;

console.log(sumOfDigits(number))

// I forgot How to solve numbers problems that I got to revise but I still don't understand how recursion works;