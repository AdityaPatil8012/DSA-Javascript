// Squares of sorted array;
// the solution here is right but it is solve so instead of using map use basic for loop

function sortedSquares(arr) {
  // let's first sort the array;
  let sortedArray = arr.sort((a, b) => a - b);

  // now let's get the square of this numbers in this array;
  let squareIs = sortedArray.map((num) => num ** 2);

  return squareIs;
}

nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
