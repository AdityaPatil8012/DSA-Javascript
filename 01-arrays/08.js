// let's now learn about Map, filter and reduce;

// forEach() method modifies origin array,
// map() method does not modifies the origin array;
// It creates a new array;

// let's see how we can use map() method;

const numbers = [2, 4, 5, 6, 7, 8, 9];

// find the square of the numbers in that array;

const squareOfNums = numbers.map((num) => {
  return num ** 2;
});

console.log(squareOfNums);

// convert the names into uppercase;

const names = ["Aditya", "Kunal", "Harsh", "Madan"];

const inUpperCase = names.map((name)=> name.toUpperCase());

console.log(inUpperCase);
