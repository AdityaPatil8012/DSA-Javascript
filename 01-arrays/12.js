// Remove the Duplicate from the sorted array and give the number of element present in an array;

let array = [1, 2, 3, 4, 4, 5, 3, 2, 21, 1];

function removeDuplicate(arr) {
  // let's firt sort the array;
  let sortedArray = arr.sort((a, b) => a - b);

  // now let's remove the duplicate elements;
  // for this we have to use set method;
  let uniqueArray = [...new Set(sortedArray)];
  let k = uniqueArray.length;
  k
  return `${k} , ${uniqueArray}`;
}

console.log(removeDuplicate(array));
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
