nums = [0, 1, 0, 3, 12];


function MoveZeros(arr) {
  let storeZero = [];
  
  for(let i = 0 ; i<arr.length; i++){
    if(arr[i]===0){
      storeZero.push(arr[i]);
      arr.splice(i,1);
    }
  }

  let newArray = arr.concat(storeZero);
  return newArray;
}

console.log(MoveZeros(nums))
