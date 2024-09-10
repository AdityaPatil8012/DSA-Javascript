// Now let's see how can we use Arrays;

// how do you create an empty array in javascript?

const arr1 = ["Aditya", "Kunal", "Harsh"];
const arr2 = [1, 2, 3, 4, 55];

console.log(arr1);
console.log(arr2);

// How can you access the first and last element of the array;

const firstElement = arr1[0];
console.log(firstElement);

// let's first see how .lenght property works;

// this will return the no. of elements in the respected array;
console.log(`the lenght of the arr1 is ${arr1.length}`);

// we can access last element by using .lenght-1 property;
// we have to add "-1" because array start from index 0;
const lastElement = arr1[arr1.length - 1];
console.log(lastElement);

// now let's see how to remove the last element from a given array;

arr1.pop();
console.log(arr1);

// now let's see how we can add an element at last;

arr1.push("Madan");
console.log(arr1);

// let's remove/delete the first element;
arr1.shift();
console.log(arr1);

// let's add the first element;
arr1.unshift("Yash");
console.log(arr1);

// now let's loop through the array;

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// let's use .forEach() loop;
/**
 * This does not modifies the original array,
 */
arr1.forEach((name, i) => {
  console.log(`My name is ${name} of index ${i}`);
});

// let's say we have a objects in the array;

let users = [{name: "Aditya"}, {name: "Kunal"}, {name: "Harsh"}];

users.forEach((userInfo) => {
  userInfo.above18 = true;
});

console.log(users);

arr2.forEach((num) => {
  num = num/10;
});

console.log(arr2);
