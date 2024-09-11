// Check if the two arrays are equal;

function CheckArrays(arr1, arr2) {
  // first check the lenght of two arrays;
  if(arr1.length !== arr2.length){
    return false;
  }

  // Now let's see the element in the array
  for(let i = 0; i < arr2.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

console.log(CheckArrays([1,2,3,4],[1,2,3,4]));
