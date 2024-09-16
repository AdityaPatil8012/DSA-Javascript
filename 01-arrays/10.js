// let's learn about reduce() and filter();

// let's start with reduce();

// summing the array;

let numbers = [1,2,3,4,5,6,73,34,5,56];
let numbers2 = [1,23,34,46,57,68,79];

// function  sumOf(arr) {
//  let sum =  arr.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
//   }, 0);

//   return sum
// }


// let sum = numbers.reduce((accumulator, currentValue)=> {
//   return accumulator + currentValue;
// }, 0)

// console.log(sum);


// console.log(sumOf(numbers))
// console.log(sumOf(numbers2))


// Find the Maximun Value; 

// function findMaxValue(arr) {
//   let maxValue = arr.reduce((accumulator, currentValue)=>{
//     return Math.max(accumulator, currentValue)
//   })
// }

// let maxValue = numbers.reduce((accumulator, currentValue)=>{
//   return Math.max(currentValue, accumulator)
// })

// console.log(maxValue);


// flattening an array of arrays;

// let arrays = [[1, 2, 3], [4, 5], [6]];

// let unifiedArray = arrays.reduce((accumulator, currentArray)=>{
//   return accumulator.concat(currentArray);
// }, [])

// console.log(arrays);

// console.log(unifiedArray);
